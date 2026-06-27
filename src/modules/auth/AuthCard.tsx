"use client";

import Link from "next/link";
import { useState } from "react";
import { SocialAuthButtons } from "./SocialAuthButtons";

export function AuthCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      document.cookie = "embabi-auth=authenticated; path=/; max-age=3600";
      window.location.href = "/dashboard";
    }, 900);
  };

  return (
    <section className="w-full max-w-2xl rounded-[30px] border border-embabi-gold/20 bg-black/70 p-8 shadow-[0_0_80px_rgba(212,175,55,0.16)] backdrop-blur-2xl sm:p-10 lg:p-12">
      <div className="mb-8 flex flex-col gap-3 text-right">
        <p className="text-sm uppercase tracking-[0.45em] text-embabi-gold">Authentication</p>
        <h2 className="font-serif text-3xl text-white sm:text-4xl">مرحباً بعودتك إلى إمبابي</h2>
        <p className="text-sm leading-7 text-zinc-300 sm:text-base">
          سجّل الدخول إلى منصتك الآمنة مع تجربة سريعة، أنيقة، ومصممة لتقليل الاحتكاك.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <label className="block text-right">
          <span className="mb-2 block text-sm text-embabi-silver">البريد الإلكتروني</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="name@example.com"
            className="w-full rounded-2xl border border-white/10 bg-embabi-surface/70 px-4 py-3 text-right text-white outline-none transition focus:border-embabi-gold focus:ring-2 focus:ring-embabi-gold/30"
            required
          />
        </label>

        <label className="block text-right">
          <span className="mb-2 block text-sm text-embabi-silver">كلمة المرور</span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="••••••••"
            className="w-full rounded-2xl border border-white/10 bg-embabi-surface/70 px-4 py-3 text-right text-white outline-none transition focus:border-embabi-gold focus:ring-2 focus:ring-embabi-gold/30"
            required
          />
        </label>

        <div className="flex items-center justify-between gap-3 text-sm text-zinc-400">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded border-white/10 bg-transparent" />
            <span>تذكرني</span>
          </label>
          <Link href="/auth/recover" className="text-embabi-gold transition hover:text-amber-300">
            نسيت كلمة المرور؟
          </Link>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-2xl bg-gradient-to-r from-embabi-gold to-amber-400 px-4 py-3 font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "جارٍ التحقق..." : "تسجيل الدخول"}
        </button>
      </form>

      <div className="mt-6">
        <SocialAuthButtons />
      </div>

      <div className="mt-6 border-t border-white/10 pt-5 text-center text-sm text-zinc-400">
        ليس لديك حساب؟{" "}
        <Link href="/auth/register" className="font-semibold text-embabi-silver transition hover:text-white">
          إنشاء حساب جديد
        </Link>
      </div>
    </section>
  );
}
