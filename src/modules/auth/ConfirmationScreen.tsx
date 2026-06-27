"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AuthFormLayout } from "./AuthFormLayout";

export function ConfirmationScreen() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") ?? "signup";

  const isRecovery = mode === "recovery";

  return (
    <AuthFormLayout
      eyebrow="Success"
      title={isRecovery ? "تم إرسال التعليمات بنجاح" : "تم إكمال العملية بنجاح"}
      subtitle={
        isRecovery
          ? "تحقق من بريدك الإلكتروني لتغيير كلمة المرور والوصول إلى حسابك بشكل آمن."
          : "انتهت عملية إنشاء الحساب بنجاح، وأصبح بإمكانك الآن الدخول إلى المنصة."
      }
      info="هذه الشاشة جاهزة للربط مع Backend لاحقاً لإرسال رمز تأكيد أو إشعار حقيقي."
    >
      <section className="w-full rounded-[30px] border border-embabi-gold/20 bg-black/70 p-8 shadow-[0_0_80px_rgba(212,175,55,0.16)] backdrop-blur-2xl sm:p-10">
        <div className="rounded-3xl border border-embabi-gold/20 bg-embabi-surface/70 p-6 text-right">
          <div className="flex items-center justify-end gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-embabi-gold/20 text-2xl text-embabi-gold">
              ✓
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-embabi-gold">Ready</p>
              <p className="mt-1 text-lg font-semibold text-white">
                {isRecovery ? "تم استلام الطلب بنجاح" : "تم إنشاء الحساب بنجاح"}
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-zinc-300">
            {isRecovery
              ? "في المستقبل، يمكن استبدال هذه الشاشة بإرسال بريد مخصص أو رمز تحقق مع API حقيقي."
              : "ستتمكن من بدء استخدام المنصة فورًا عند ربطها مع نظام المستخدمين الحقيقي."}
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 text-sm">
          <Link
            href="/auth"
            className="rounded-2xl border border-embabi-gold/30 bg-embabi-gold/10 px-4 py-3 text-center text-embabi-gold transition hover:bg-embabi-gold/20"
          >
            العودة إلى تسجيل الدخول
          </Link>
          <Link
            href="/auth/register"
            className="rounded-2xl border border-white/10 px-4 py-3 text-center text-zinc-300 transition hover:text-white"
          >
            إنشاء حساب جديد
          </Link>
        </div>
      </section>
    </AuthFormLayout>
  );
}
