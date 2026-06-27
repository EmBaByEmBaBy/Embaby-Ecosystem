"use client";

import Link from "next/link";

const pillars = [
  {
    title: "الرسالة",
    body: "نؤمن بأن التعليم والإبداع والوعي المعرفي حق إنساني يجب أن يُقدَّم بكرامة واحترافية عالية.",
  },
  {
    title: "الرؤية",
    body: "نسعى إلى بناء منصة رقمية فاخرة تجمع بين الرفاهية المعرفية، الحماية التربوية، والهوية الثقافية.",
  },
  {
    title: "الالتزام",
    body: "نحرص على أن تكون كل تجربة على المنصة آمنة، واضحة، ومصممة لتخدم المستخدمين بفعالية واحتشام.",
  },
];

export function AboutPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.16),_transparent_28%),linear-gradient(135deg,_#050505,_#111111)] px-6 py-10 sm:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-black/45 p-8 shadow-[0_0_140px_rgba(212,175,55,0.16)] backdrop-blur-2xl sm:p-10 lg:p-14">
        <div className="max-w-3xl text-right">
          <p className="text-sm uppercase tracking-[0.45em] text-embabi-gold">About Embabi</p>
          <h1 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
            عن منصة إمبابي
          </h1>
          <p className="mt-4 text-lg leading-8 text-zinc-300">
            منصة إمبابي هي بيئة رقمية فاخرة تجمع بين التعليم، الإبداع، والفضاء المعرفي، وتعمل على تقديم تجربة آمنة ومشرقة تتسق مع القيم التربوية والشرعية.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-[24px] border border-white/10 bg-embabi-surface/70 p-6 text-right backdrop-blur">
              <h2 className="text-xl font-semibold text-white">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{pillar.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-end gap-3">
          <Link href="/" className="rounded-full border border-embabi-gold/30 px-4 py-2 text-sm text-embabi-gold transition hover:bg-embabi-gold/10">
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </section>
    </main>
  );
}
