import type { ReactNode } from "react";

interface AuthFormLayoutProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  info?: string;
  children: ReactNode;
}

export function AuthFormLayout({
  eyebrow,
  title,
  subtitle,
  info,
  children,
}: AuthFormLayoutProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18),_transparent_28%),linear-gradient(135deg,_#050505,_#111111)] px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[32px] border border-white/10 bg-black/40 p-6 shadow-[0_0_120px_rgba(212,175,55,0.12)] backdrop-blur-2xl sm:p-10 lg:flex-row lg:items-stretch lg:justify-between lg:p-12">
        <div className="max-w-xl text-right">
          <p className="text-sm uppercase tracking-[0.45em] text-embabi-gold">{eyebrow}</p>
          <h1 className="mt-4 font-serif text-4xl text-white sm:text-5xl">{title}</h1>
          <p className="mt-4 text-lg leading-8 text-zinc-300">{subtitle}</p>
          {info ? (
            <div className="mt-8 rounded-2xl border border-embabi-silver/20 bg-embabi-surface/70 p-4 text-sm text-zinc-300">
              <p className="font-semibold text-embabi-silver">أمان مدمج</p>
              <p className="mt-2 leading-7">{info}</p>
            </div>
          ) : null}
        </div>

        <div className="w-full max-w-xl">{children}</div>
      </div>
    </div>
  );
}
