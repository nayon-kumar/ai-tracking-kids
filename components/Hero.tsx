import Image from "next/image";
import Link from "next/link";
import heroPhones from "@/public/assets/hero-mobile.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 pt-16 text-center sm:pt-24">
        <Link
          href="#"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 py-2 pr-4 pl-2.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition-colors hover:border-slate-300"
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-950 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </span>
          Verified by professional, Created for Parents
          <span aria-hidden>&rsaquo;</span>
        </Link>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
          Track Your Child&rsquo;s Growth With
          <br />
          <span className="text-indigo-600">Personalized Confidence</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-balance text-slate-600 sm:text-lg">
          Eliminate the guesswork from parenting with personalized, evidence-based
          insights that help you confidently track and support your child&rsquo;s
          growth at every milestone.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#"
            className="rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl active:translate-y-0"
          >
            Start Free Trial
          </Link>
          <Link
            href="#"
            className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:border-slate-400 hover:bg-slate-50"
          >
            Explore Features
          </Link>
        </div>
      </div>

      <div className="relative mx-auto mt-10 max-w-4xl px-4 pb-16 sm:mt-14 sm:pb-24">
        <Image
          src={heroPhones}
          alt="Growth Genius app screens showing a baby's growth chart, daily milestones, and the Lucy AI parenting assistant"
          className="mx-auto h-auto w-full max-w-3xl select-none"
          preload
        />
      </div>
    </section>
  );
}
