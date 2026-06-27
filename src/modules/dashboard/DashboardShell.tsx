"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { KidsHubCard } from "@/modules/kids-hub";
import { MediaStudioCard } from "@/modules/media-studio";
import { DebateArenaCard, KnowledgeEngineCard } from "@/modules/knowledge-engine";
import { getDashboardSummary } from "@/services/mockDashboardService";
import { SmartSearch } from "./SmartSearch";
import { SystemStatusIndicator } from "./SystemStatusIndicator";

export function DashboardShell() {
  const [summary, setSummary] = useState<{ title: string; description: string; status: string; metrics: string[] }[]>([]);

  useEffect(() => {
    void getDashboardSummary().then(setSummary);
  }, []);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_28%),linear-gradient(135deg,_#050505,_#111111)] px-6 py-10 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-black/45 p-8 shadow-[0_0_140px_rgba(212,175,55,0.16)] backdrop-blur-2xl sm:p-10 lg:p-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl text-right">
            <p className="text-sm uppercase tracking-[0.45em] text-embabi-gold">Central Dashboard</p>
            <h1 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
              لوحة تحكم مركزية لعمليات المنصة
            </h1>
            <p className="mt-4 text-lg leading-8 text-zinc-300">
              نافذة موحدة لعرض الحالة الحالية للبوابات الرئيسية وتسهيل الانتقال إلى تطوير كل مساحة لاحقاً.
            </p>
          </div>

          <div className="rounded-2xl border border-embabi-gold/30 bg-embabi-gold/10 px-5 py-4 text-sm text-embabi-ivory">
            <p className="font-semibold">حالة النظام</p>
            <p className="mt-2 text-zinc-300">البيانات الحالية مستخرجة من خدمة وهمية جاهزة للربط مع Backend مستقبلياً.</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex w-full flex-col gap-3 lg:max-w-xl">
            <SystemStatusIndicator />
            <SmartSearch />
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {summary.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-embabi-surface/70 p-4 text-right">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-embabi-gold/30 px-3 py-1 text-xs uppercase tracking-[0.25em] text-embabi-gold">
                    {item.status}
                  </span>
                  <p className="text-sm text-zinc-400">Status</p>
                </div>
                <h2 className="mt-4 text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-2 text-sm leading-7 text-zinc-300">{item.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                  {item.metrics.map((metric) => (
                    <li key={metric} className="rounded-full border border-white/10 px-3 py-1">
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Link href="/kids-hub" className="block">
            <KidsHubCard />
          </Link>
          <Link href="/media-studio" className="block">
            <MediaStudioCard />
          </Link>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Link href="/knowledge-engine" className="block">
            <KnowledgeEngineCard />
          </Link>
          <Link href="/debate-arena" className="block">
            <DebateArenaCard />
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap justify-end gap-3">
          <Link href="/auth" className="rounded-full border border-embabi-gold/30 px-4 py-2 text-sm text-embabi-gold transition hover:bg-embabi-gold/10">
            العودة إلى تسجيل الدخول
          </Link>
          <Link href="/dashboard/overview" className="rounded-full bg-gradient-to-r from-embabi-gold to-amber-400 px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90">
            عرض نظرة عامة
          </Link>
        </div>
      </section>
    </main>
  );
}
