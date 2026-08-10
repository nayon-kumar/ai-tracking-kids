import Image from "next/image";
import Link from "next/link";
import growthPhones from "@/public/assets/mobile.png";

const QUESTIONS = [
  "Is my child on track?",
  "What should they be doing at this age?",
  "Is this normal?",
  "Am I missing any key milestones?",
];

function Star({ className }: { className: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0c.9 4.6 2.2 7.7 4.1 9.6C18 11.5 20.3 12.6 24 13c-3.7.4-6 1.5-7.9 3.4-1.9 1.9-3.2 5-4.1 9.6-.9-4.6-2.2-7.7-4.1-9.6C6 14.5 3.7 13.4 0 13c3.7-.4 6-1.5 7.9-3.4C9.8 7.7 11.1 4.6 12 0Z" />
    </svg>
  );
}

export default function GrowthQuestion() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:py-16">
      <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#4b3cc4_0%,#6a59e6_45%,#5947d6_100%)] px-6 py-12 shadow-xl sm:px-10 lg:px-16 lg:py-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_38%,rgba(255,255,255,0.08)_50%,transparent_62%)]"
        />

        <Star className="pointer-events-none absolute top-10 left-10 h-8 w-8 text-white/30" />
        <Star className="pointer-events-none absolute top-24 left-40 hidden h-4 w-4 text-white/40 sm:block" />
        <Star className="pointer-events-none absolute top-16 right-56 hidden h-4 w-4 text-white/30 lg:block" />
        <Star className="pointer-events-none absolute right-16 bottom-24 hidden h-5 w-5 text-white/30 sm:block" />
        <Star className="pointer-events-none absolute right-6 bottom-8 h-6 w-6 text-white/30" />
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-20 left-8 hidden h-8 w-8 rounded-full bg-gradient-to-br from-white/40 to-white/5 sm:block"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-8 hidden h-6 w-6 rounded-full bg-gradient-to-br from-white/40 to-white/5 lg:block"
        />

        <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-sm self-end sm:max-w-md lg:-mb-14">
            <Image
              src={growthPhones}
              alt="GrowthGenius app screens showing daily moments and the child's growth chart"
              className="mx-auto h-auto w-full select-none"
              preload
            />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-[2.15rem] lg:leading-tight">
              Every Parent&rsquo;s Biggest Question:
              <br />
              Is My Child&rsquo;s Growth On Track?
            </h2>

            <ul className="mt-6 flex flex-col gap-3">
              {QUESTIONS.map((question) => (
                <li key={question} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs font-semibold text-white">
                    ?
                  </span>
                  <span className="text-base font-medium text-white/95">
                    {question}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-lg text-sm text-white/80 sm:text-base">
              GrowthGenius gives you clear answers backed by pediatric
              research, so you can relax and enjoy every moment.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <Link
                href="#"
                className="inline-flex items-center rounded-full bg-white/15 px-7 py-3.5 text-sm font-semibold text-white shadow-lg backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/25 active:translate-y-0"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
