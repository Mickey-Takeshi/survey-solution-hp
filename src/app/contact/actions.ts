"use server";

import { supabaseAdmin } from "@/lib/supabase";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export type ContactFormState = {
  success: boolean;
  error: string | null;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // --- スパム対策 ---
  // 1. ハニーポット: 隠しフィールドに値があればボット
  const honeypot = formData.get("website") as string;
  if (honeypot) {
    // ボットにはエラーを見せず成功扱いにする（再試行を防ぐ）
    return { success: true, error: null };
  }

  // 2. 時間チェック: フォーム表示から3秒未満の送信はボット
  const loadedAt = Number(formData.get("_loaded"));
  if (loadedAt && Date.now() - loadedAt < 3000) {
    return { success: true, error: null };
  }

  const name = formData.get("name") as string;
  const company = formData.get("company") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  // バリデーション
  if (!name || !email || !message) {
    return {
      success: false,
      error: "必須項目を入力してください。",
    };
  }

  // メールアドレスの簡易バリデーション
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      error: "正しいメールアドレスを入力してください。",
    };
  }

  // 3. URL検出: メッセージ内にURLが含まれていればスパム
  const urlPattern = /https?:\/\/|www\./i;
  if (urlPattern.test(message)) {
    return {
      success: false,
      error: "メッセージにURLを含めることはできません。",
    };
  }

  try {
    // Supabaseにデータ保存
    const { error } = await supabaseAdmin.from("contacts").insert({
      name,
      company: company || null,
      email,
      phone: phone || null,
      message,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return {
        success: false,
        error: "送信に失敗しました。時間をおいて再度お試しください。",
      };
    }

    // メール通知を送信（失敗してもフォーム送信は成功扱い）
    try {
      await transporter.sendMail({
        from: `"SurveySolution お問い合わせ" <${process.env.SMTP_USER}>`,
        replyTo: "info@emplay.jp",
        to: process.env.NOTIFICATION_EMAIL,
        subject: `【お問い合わせ】${name}様（${company || "個人"}）`,
        html: `
          <h2>ホームページからお問い合わせがありました</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr style="border-bottom:1px solid #ddd;">
              <th style="text-align:left;padding:8px 12px;background:#f5f5f5;width:120px;">お名前</th>
              <td style="padding:8px 12px;">${name}</td>
            </tr>
            <tr style="border-bottom:1px solid #ddd;">
              <th style="text-align:left;padding:8px 12px;background:#f5f5f5;">会社名</th>
              <td style="padding:8px 12px;">${company || "未入力"}</td>
            </tr>
            <tr style="border-bottom:1px solid #ddd;">
              <th style="text-align:left;padding:8px 12px;background:#f5f5f5;">メールアドレス</th>
              <td style="padding:8px 12px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr style="border-bottom:1px solid #ddd;">
              <th style="text-align:left;padding:8px 12px;background:#f5f5f5;">電話番号</th>
              <td style="padding:8px 12px;">${phone || "未入力"}</td>
            </tr>
            <tr>
              <th style="text-align:left;padding:8px 12px;background:#f5f5f5;vertical-align:top;">お問い合わせ内容</th>
              <td style="padding:8px 12px;white-space:pre-wrap;">${message}</td>
            </tr>
          </table>
        `,
      });
      console.log("Email notification sent successfully");
    } catch (emailErr) {
      console.error("Email notification failed:", emailErr);
      // メール送信失敗でもフォーム送信は成功とする
    }

    return {
      success: true,
      error: null,
    };
  } catch (err) {
    console.error("Contact form submission error:", err);
    return {
      success: false,
      error: "送信に失敗しました。時間をおいて再度お試しください。",
    };
  }
}
