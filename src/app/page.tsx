import Link from "next/link";
import {
  ChildrenGatewayCard,
  CreatorStudioCard,
  InterestGatewayCard,
} from "@/modules";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10 text-right sm:px-10 lg:px-16">
      <section className="mx-auto flex max-w-7xl flex-col gap-10 rounded-[32px] border border-white/10 bg-black/45 p-8 shadow-[0_0_120px_rgba(212,175,55,0.16)] backdrop-blur-2xl sm:p-10 lg:p-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-sm uppercase tracking-[0.45em] text-embabi-gold">
              Embabi Platform
            </p>
            <div className="space-y-3 rounded-2xl border border-embabi-gold/20 bg-embabi-gold/10 p-4 text-right">
              <p className="text-lg font-semibold text-embabi-gold">آية الكرسي</p>
              <p className="text-xl leading-9 text-embabi-ivory">
                «اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...»
              </p>
              <p className="mt-2 text-lg font-semibold text-embabi-gold">سورة الإخلاص</p>
              <p className="text-xl leading-9 text-embabi-ivory">
                «قُلْ هُوَ اللَّهُ أَحَدٌ...»
              </p>
            </div>
            <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              منصة تجمع بين التعليم، الإبداع، والرحلة الشخصية.
            </h1>
            <p className="text-lg leading-8 text-zinc-300">
              نبدأ ببيئة عمل نظيفة ومعيارية، مع تركيز على الأداء، الأمان، والتجربة المتقدمة للواجهة.
            </p>
          </div>
          <div className="rounded-2xl border border-embabi-gold/30 bg-embabi-gold/10 px-5 py-4 text-sm text-embabi-ivory">
            <p className="font-semibold">الحالة الحالية</p>
            <p className="mt-2 text-zinc-300">إطار أولي جاهز للتوسعة في بوابة الأطفال، استوديو المبدعين، وبوابة الاهتمامات.</p>
            <Link
              href="/auth"
              className="mt-4 inline-flex rounded-full border border-embabi-gold/40 px-4 py-2 text-embabi-gold transition hover:bg-embabi-gold/10"
            >
              فتح واجهة الدخول
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <ChildrenGatewayCard />
          <CreatorStudioCard />
          <InterestGatewayCard />
        </div>

        <footer className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Embabi Platform — منصة فاخرة للمعرفة والإبداع.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="transition hover:text-embabi-gold">
              من نحن
            </Link>
            <Link href="/terms" className="transition hover:text-embabi-gold">
              الخصوصية والشروط
            </Link>
          </div>
        </footer>
      </section>
    </main>
  );
}
