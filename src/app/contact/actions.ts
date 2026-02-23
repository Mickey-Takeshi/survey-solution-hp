"use server";

import { supabaseAdmin } from "@/lib/supabase";

export type ContactFormState = {
  success: boolean;
  error: string | null;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
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

  try {
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
