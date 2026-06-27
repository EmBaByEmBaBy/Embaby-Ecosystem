"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthFormLayout } from "./AuthFormLayout";

export function PasswordRecoveryCard() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("يرجى إدخال بريد إلكتروني صالح.");
      return;
    }

    setError("");
    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      router.push("/auth/confirmation?mode=recovery");
    }, 700);
  };

  return (
    <AuthFormLayout
      eyebrow="Password recovery"
      title="استعادة كلمة المرور"
      subtitle="سنرسل لك تعليمات آمنة لاستعادة الوصول إلى حسابك بسرعة وبدون تعقيد."
      info="يتم احتساب الطلب محلياً في الواجهة الحالية، مع جاهزية كاملة للربط لاحقاً مع خدمة البريد أو API."
    >
      <section className="w-full rounded-[30px] border border-embabi-silver/20 bg-black/70 p-8 shadow-[0_0_80px_rgba(199,199,207,0.12)] backdrop-blur-2xl sm:p-10">
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <label className="block text-right">
            <span className="mb-2 block text-sm text-embabi-silver">البريد الإلكتروني</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-embabi-surface/70 px-4 py-3 text-right text-white outline-none transition focus:border-embabi-gold focus:ring-2 focus:ring-embabi-gold/30"
              placeholder="name@example.com"
              autoComplete="email"
            />
            {error ? <p className="mt-2 text-sm text-amber-300">{error}</p> : null}
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-gradient-to-r from-embabi-gold to-amber-400 px-4 py-3 font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "جارٍ إرسال التعليمات..." : "إرسال التعليمات"}
          </button>
        </form>

        <div className="mt-6 border-t border-white/10 pt-5 text-center text-sm text-zinc-400">
          تذكرت كلمة المرور؟{" "}
          <Link href="/auth" className="font-semibold text-embabi-silver transition hover:text-white">
            العودة لتسجيل الدخول
          </Link>
        </div>
      </section>
    </AuthFormLayout>
  );
}
