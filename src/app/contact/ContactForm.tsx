"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "./actions";

const initialState: ContactFormState = {
  success: false,
  error: null,
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  if (state.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-sm p-8 text-center">
        <div className="text-green-600 text-4xl mb-4">&#10003;</div>
        <h3 className="text-lg font-bold text-green-800 mb-2">
          送信が完了しました
        </h3>
        <p className="text-sm text-green-700 leading-relaxed">
          お問い合わせいただきありがとうございます。
          <br />
          内容を確認の上、担当者より2営業日以内にご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {state.error && (
        <div className="bg-red-50 border border-red-200 rounded-sm p-4 text-sm text-red-700">
          {state.error}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-bold mb-2">
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-bold mb-2">
          会社名
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-bold mb-2">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-bold mb-2">
          電話番号
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-bold mb-2">
          お問い合わせ内容 <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full border border-gray-300 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-primary resize-vertical"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          disabled={isPending}
          className="bg-primary text-white px-16 py-4 text-sm font-bold hover:bg-primary-dark transition-colors rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "送信中..." : "送信する"}
        </button>
      </div>
    </form>
  );
}
