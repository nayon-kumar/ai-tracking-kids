import Image from "next/image";
import Link from "next/link";
import lucyRobot from "@/public/assets/big-robot.png";

const SAMPLE_QUESTIONS = [
  { text: "Is my 10-month-old crawling on track?", offset: "lg:ml-0" },
  { text: "How much sleep should a 2-year-old get?", offset: "lg:-ml-6" },
  { text: "What activities help with early speech?", offset: "lg:ml-8" },
];

const AVATARS = [
  { initials: "JD", className: "bg-indigo-200 text-indigo-700" },
  { initials: "AS", className: "bg-purple-200 text-purple-700" },
  { initials: "ML", className: "bg-amber-200 text-amber-700" },
  { initials: "KP", className: "bg-emerald-200 text-emerald-700" },
];

export default function LucyAi() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Meet <span className="text-indigo-600">Lucy AI,</span>
          <br />
          Your Personal Parenting Assistant
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-balance text-slate-600 sm:text-lg">
          Ask anything about milestones, development, routines, nutrition, or
          concerns. Lucy gives evidence-based, pediatric-backed answers
          instantly.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
        <div className="mx-auto hidden w-full max-w-xs flex-col items-start gap-4 lg:mx-0 lg:flex">
          {SAMPLE_QUESTIONS.map((question) => (
            <span
              key={question.text}
              className={`rounded-full border border-slate-200/80 bg-white/80 px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur ${question.offset}`}
            >
              {question.text}
            </span>
          ))}

          <div className="mt-2 rounded-2xl bg-white/60 p-4">
            <p className="text-sm font-medium text-slate-700">
              <span className="text-amber-400">★</span> Rated 4.9 by parents
              globally
            </p>
            <div className="mt-2 flex items-center">
              <div className="flex -space-x-2">
                {AVATARS.map((avatar) => (
                  <span
                    key={avatar.initials}
                    className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-xs font-semibold ${avatar.className}`}
                  >
                    {avatar.initials}
                  </span>
                ))}
              </div>
              <Link
                href="#"
                className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-700"
              >
                More..
              </Link>
            </div>
          </div>

          <Link
            href="#"
            className="rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl active:translate-y-0"
          >
            Start Free Trial
          </Link>
        </div>

        <div className="relative mx-auto flex h-[320px] w-[280px] items-center justify-center">
          <div
            aria-hidden
            className="absolute h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.35),transparent_70%)] blur-2xl"
          />
          <div
            aria-hidden
            className="absolute h-[280px] w-[280px] rounded-full border border-indigo-200/70"
          />
          <div
            aria-hidden
            className="absolute h-[210px] w-[210px] rounded-full border border-indigo-200/50"
          />
          <Image
            src={lucyRobot}
            alt="Lucy AI, the friendly parenting assistant robot"
            className="relative z-10 h-auto w-[220px] select-none"
            preload
          />
        </div>

        <div className="mx-auto hidden w-full max-w-sm rounded-3xl bg-white p-4 shadow-xl shadow-indigo-950/5 ring-1 ring-slate-100 lg:block">
          <div className="rounded-2xl rounded-tl-sm bg-indigo-50 p-4 text-sm text-slate-700">
            At 4 months, many babies experience sleep regression due to
            developing sleep cycles. Try establishing a consistent bedtime
            routine and consider sleep training methods appropriate for your
            parenting style.
          </div>

          <div className="mt-3 ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-slate-100 p-3 text-sm text-slate-700">
            I want to know more details about it. give me that.
          </div>

          <div className="mt-3 rounded-2xl rounded-tl-sm bg-indigo-50 p-4 text-sm text-slate-700">
            Sure. Around 4 months, babies start lighter sleep cycles, causing
            frequent wakeups. It&rsquo;s normal. A calm, consistent bedtime
            routine helps them adjust and sleep longer.
          </div>

          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-500">
            Stop generating...
            <span className="h-3 w-3 animate-spin rounded-full border-2 border-slate-400 border-t-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
