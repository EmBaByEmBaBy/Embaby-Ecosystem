"use client";

import Link from "next/link";

const topics = [
  {
    title: "المناظرة الأولى",
    subtitle: "نقاش هادئ حول طرق تعليم اللغة العربية للأطفال",
    status: "مفتوح",
  },
  {
    title: "المناظرة الثانية",
    subtitle: "استكشاف أثر الإبداع في بناء الشخصية",
    status: "قريبًا",
  },
  {
    title: "المناظرة الثالثة",
    subtitle: "تحليل كيفية بناء بيئة معرفية آمنة ومشرقة",
    status: "مجدول",
  },
];

export function DebateArenaPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_28%),linear-gradient(135deg,_#050505,_#111111)] px-6 py-10 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-black/45 p-8 shadow-[0_0_140px_rgba(212,175,55,0.16)] backdrop-blur-2xl sm:p-10 lg:p-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl text-right">
            <p className="text-sm uppercase tracking-[0.45em] text-embabi-gold">Debate Arena</p>
            <h1 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
              ميدان المناظرة
            </h1>
            <p className="mt-4 text-lg leading-8 text-zinc-300">
              منصة نقاشية منظمة، هادئة، ومصممة لتغذية التفكير النقدي والاحترام المتبادل داخل المنصة.
            </p>
          </div>

          <div className="rounded-2xl border border-embabi-silver/20 bg-embabi-surface/70 px-5 py-4 text-sm text-embabi-ivory">
            <p className="font-semibold">الترتيب الحالي</p>
            <p className="mt-2 text-zinc-300">أقسام مناقشات مرتبة وموجهة بصرياً.</p>
          </div>
        </div>

        <div className="mt-10 space-y-4">
          {topics.map((topic) => (
            <article key={topic.title} className="flex flex-col gap-3 rounded-[24px] border border-white/10 bg-embabi-surface/70 p-6 text-right sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">{topic.title}</h2>
                <p className="mt-2 text-sm leading-7 text-zinc-300">{topic.subtitle}</p>
              </div>
              <span className="rounded-full border border-embabi-gold/30 px-4 py-2 text-sm text-embabi-gold">
                {topic.status}
              </span>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-end gap-3">
          <Link href="/dashboard" className="rounded-full border border-embabi-gold/30 px-4 py-2 text-sm text-embabi-gold transition hover:bg-embabi-gold/10">
            العودة إلى لوحة التحكم
          </Link>
        </div>
      </section>
    </main>
  );
}
