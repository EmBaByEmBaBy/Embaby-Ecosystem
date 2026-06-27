"use client";

import Link from "next/link";

const lessons = [
  {
    title: "حروف النور",
    subtitle: "تعلّم الحروف مع صور بصرية بسيطة وواضحة",
    accent: "text-embabi-gold",
  },
  {
    title: "اللغة العربية",
    subtitle: "تمارين لغوية مع تركيز على التشكيل والبناء",
    accent: "text-embabi-silver",
  },
  {
    title: "التفكير الإبداعي",
    subtitle: "أنشطة ممتعة لتطوير الخيال والتعبير",
    accent: "text-amber-300",
  },
];

export function KidsHubPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_28%),linear-gradient(135deg,_#050505,_#111111)] px-6 py-10 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-black/45 p-8 shadow-[0_0_140px_rgba(212,175,55,0.16)] backdrop-blur-2xl sm:p-10 lg:p-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl text-right">
            <p className="text-sm uppercase tracking-[0.45em] text-embabi-gold">Kids Hub</p>
            <h1 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
              بوابة تأسيس الأطفال
            </h1>
            <p className="mt-4 text-lg leading-8 text-zinc-300">
              بيئة تعليمية هادئة ومشرقة تجمع بين المحتوى اللغوي والمعرفي بأسلوب فخم وآمن يليق بأطفالنا.
            </p>
          </div>

          <div className="rounded-2xl border border-embabi-gold/30 bg-embabi-gold/10 px-5 py-4 text-sm text-embabi-ivory">
            <p className="font-semibold">التركيز الحالي</p>
            <p className="mt-2 text-zinc-300">حروف النور، اللغة العربية، والتفكير الإبداعي.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {lessons.map((lesson) => (
            <article key={lesson.title} className="rounded-[24px] border border-white/10 bg-embabi-surface/70 p-6 text-right shadow-[0_0_40px_rgba(212,175,55,0.08)]">
              <div className="flex items-center justify-between">
                <span className={`text-sm font-semibold ${lesson.accent}`}>Interactive</span>
                <div className="h-10 w-10 rounded-full border border-embabi-gold/30 bg-embabi-gold/10" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-white">{lesson.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{lesson.subtitle}</p>
              <button className="mt-5 rounded-full border border-embabi-gold/30 px-4 py-2 text-sm text-embabi-gold transition hover:bg-embabi-gold/10">
                ابدأ التعلم
              </button>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-end gap-3">
          <Link href="/dashboard" className="rounded-full border border-embabi-gold/30 px-4 py-2 text-sm text-embabi-gold transition hover:bg-embabi-gold/10">
            العودة إلى لوحة التحكم
          </Link>
          <Link href="/auth" className="rounded-full bg-gradient-to-r from-embabi-gold to-amber-400 px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90">
            الخروج الآمن
          </Link>
        </div>
      </section>
    </main>
  );
}
