import { ExternalAccountClient } from "google-auth-library";
import { getVercelOidcToken } from "@vercel/functions/oidc";

// Vercel OIDC → GCP Workload Identity連携でサービスアカウントに成り代わり、
// キーレスでGoogle Sheets APIを呼び出す（SAキーは組織ポリシーで作成不可のため）
const GCP_PROJECT_NUMBER = "153994339080";
const GCP_SERVICE_ACCOUNT =
  "ss-contact-sheet@ga4-analysis-project-cajon.iam.gserviceaccount.com";
const SHEET_ID = process.env.CONTACT_SHEET_ID;

function createAuthClient() {
  const client = ExternalAccountClient.fromJSON({
    type: "external_account",
    audience: `//iam.googleapis.com/projects/${GCP_PROJECT_NUMBER}/locations/global/workloadIdentityPools/vercel/providers/vercel`,
    subject_token_type: "urn:ietf:params:oauth:token-type:jwt",
    token_url: "https://sts.googleapis.com/v1/token",
    service_account_impersonation_url: `https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/${GCP_SERVICE_ACCOUNT}:generateAccessToken`,
    subject_token_supplier: {
      getSubjectToken: getVercelOidcToken,
    },
  });
  if (!client) {
    throw new Error("Failed to create external account client");
  }
  client.scopes = ["https://www.googleapis.com/auth/spreadsheets"];
  return client;
}

export type ContactRow = {
  name: string;
  company: string | null;
  email: string;
  phone: string | null;
  message: string;
};

export async function appendContactToSheet(row: ContactRow): Promise<void> {
  if (!SHEET_ID) {
    throw new Error("CONTACT_SHEET_ID is not set");
  }
  const client = createAuthClient();
  const { token } = await client.getAccessToken();
  if (!token) {
    throw new Error("Failed to obtain access token for Sheets API");
  }

  const receivedAt = new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
  });
  const values = [
    [
      receivedAt,
      row.name,
      row.company ?? "",
      row.email,
      row.phone ?? "",
      row.message,
    ],
  ];

  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A1:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ values }),
    }
  );
  if (!res.ok) {
    throw new Error(`Sheets append failed: ${res.status} ${await res.text()}`);
  }
}
