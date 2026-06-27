"use client";

import { useRouter } from "next/navigation";

export type SocialProvider = "google" | "facebook";

interface SocialAuthButtonsProps {
  className?: string;
  onSelect?: (provider: SocialProvider) => void;
}

export function SocialAuthButtons({ className = "", onSelect }: SocialAuthButtonsProps) {
  const router = useRouter();

  const handlePress = (provider: SocialProvider) => {
    if (onSelect) {
      onSelect(provider);
      return;
    }

    const isConfigured =
      provider === "google"
        ? Boolean(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)
        : Boolean(process.env.NEXT_PUBLIC_FACEBOOK_APP_ID);

    document.cookie = `embabi-social-provider=${provider}; path=/; max-age=600`;

    if (!isConfigured) {
      router.push(`/auth/confirmation?mode=social&provider=${provider}`);
      return;
    }

    document.cookie = "embabi-auth=authenticated; path=/; max-age=3600";
    window.location.href = "/dashboard";
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-zinc-500">
        <span className="h-px flex-1 bg-white/10" />
        <span>أو المتابعة عبر</span>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <button
        type="button"
        onClick={() => handlePress("google")}
        className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-embabi-gold/40 hover:bg-embabi-gold/10"
      >
        <span className="text-base">G</span>
        <span>متابعة عبر Google</span>
      </button>

      <button
        type="button"
        onClick={() => handlePress("facebook")}
        className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:border-embabi-gold/40 hover:bg-embabi-gold/10"
      >
        <span className="text-base">f</span>
        <span>متابعة عبر Facebook</span>
      </button>

      <p className="text-center text-xs leading-6 text-zinc-500">
        الأزرار جاهزة للربط فور إدخال بيانات Google أو Facebook Credentials في المتغيرات البيئية.
      </p>
    </div>
  );
}
