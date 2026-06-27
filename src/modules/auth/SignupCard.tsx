"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AuthFormLayout } from "./AuthFormLayout";

interface SignupFormState {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function SignupCard() {
  const router = useRouter();
  const [form, setForm] = useState<SignupFormState>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof SignupFormState | "terms", string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof SignupFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof SignupFormState | "terms", string>> = {};

    if (!form.fullName.trim()) {
      nextErrors.fullName = "يرجى إدخال الاسم الكامل.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "يرجى إدخال بريد إلكتروني صالح.";
    }

    if (form.password.length < 8) {
      nextErrors.password = "يجب أن تكون كلمة المرور 8 أحرف على الأقل.";
    }

    if (form.confirmPassword !== form.password) {
      nextErrors.confirmPassword = "كلمتا المرور غير متطابقتين.";
    }

    if (!acceptedTerms) {
      nextErrors.terms = "يجب الموافقة على الشروط قبل المتابعة.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      router.push("/auth/confirmation?mode=signup");
    }, 800);
  };

  return (
    <AuthFormLayout
      eyebrow="Create an account"
      title="إنشاء حساب إمبابي"
      subtitle="ابدأ رحلتك مع منصة آمنة، مرنة، ومصممة لاحتياجاتك المستقبلية."
      info="يتم تطبيق التحقق من صحة البيانات محلياً قبل أي ربط مستقبلي بخادم Backend أو API."
    >
      <section className="w-full rounded-[30px] border border-embabi-gold/20 bg-black/70 p-8 shadow-[0_0_80px_rgba(212,175,55,0.16)] backdrop-blur-2xl sm:p-10">
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <label className="block text-right">
            <span className="mb-2 block text-sm text-embabi-silver">الاسم الكامل</span>
            <input
              value={form.fullName}
              onChange={(event) => handleChange("fullName", event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-embabi-surface/70 px-4 py-3 text-right text-white outline-none transition focus:border-embabi-gold focus:ring-2 focus:ring-embabi-gold/30"
              placeholder="مثال: سارة أحمد"
              autoComplete="name"
            />
            {errors.fullName ? <p className="mt-2 text-sm text-amber-300">{errors.fullName}</p> : null}
          </label>

          <label className="block text-right">
            <span className="mb-2 block text-sm text-embabi-silver">البريد الإلكتروني</span>
            <input
              type="email"
              value={form.email}
              onChange={(event) => handleChange("email", event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-embabi-surface/70 px-4 py-3 text-right text-white outline-none transition focus:border-embabi-gold focus:ring-2 focus:ring-embabi-gold/30"
              placeholder="name@example.com"
              autoComplete="email"
            />
            {errors.email ? <p className="mt-2 text-sm text-amber-300">{errors.email}</p> : null}
          </label>

          <label className="block text-right">
            <span className="mb-2 block text-sm text-embabi-silver">كلمة المرور</span>
            <input
              type="password"
              value={form.password}
              onChange={(event) => handleChange("password", event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-embabi-surface/70 px-4 py-3 text-right text-white outline-none transition focus:border-embabi-gold focus:ring-2 focus:ring-embabi-gold/30"
              placeholder="••••••••"
              autoComplete="new-password"
            />
            {errors.password ? <p className="mt-2 text-sm text-amber-300">{errors.password}</p> : null}
          </label>

          <label className="block text-right">
            <span className="mb-2 block text-sm text-embabi-silver">تأكيد كلمة المرور</span>
            <input
              type="password"
              value={form.confirmPassword}
              onChange={(event) => handleChange("confirmPassword", event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-embabi-surface/70 px-4 py-3 text-right text-white outline-none transition focus:border-embabi-gold focus:ring-2 focus:ring-embabi-gold/30"
              placeholder="••••••••"
              autoComplete="new-password"
            />
            {errors.confirmPassword ? <p className="mt-2 text-sm text-amber-300">{errors.confirmPassword}</p> : null}
          </label>

          <label className="flex items-start gap-2 text-right text-sm text-zinc-400">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={(event) => {
                setAcceptedTerms(event.target.checked);
                setErrors((current) => ({ ...current, terms: undefined }));
              }}
              className="mt-1 rounded border-white/10 bg-transparent"
            />
            <span>أوافق على الشروط والسياسات الخاصة بالمنصة.</span>
          </label>
          {errors.terms ? <p className="text-sm text-amber-300">{errors.terms}</p> : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-gradient-to-r from-embabi-gold to-amber-400 px-4 py-3 font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "جارٍ إنشاء الحساب..." : "إنشاء الحساب"}
          </button>
        </form>

        <div className="mt-6 border-t border-white/10 pt-5 text-center text-sm text-zinc-400">
          لديك حساب بالفعل؟{" "}
          <Link href="/auth" className="font-semibold text-embabi-silver transition hover:text-white">
            تسجيل الدخول
          </Link>
        </div>
      </section>
    </AuthFormLayout>
  );
}
