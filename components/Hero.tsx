import Image from "next/image";
import Link from "next/link";
import heroPhones from "@/public/assets/hero-mobile.png";
import Reveal from "@/components/motion/Reveal";
import HoverLift from "@/components/motion/HoverLift";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 pt-16 text-center sm:pt-24">
        <Reveal amount={0}>
          <Link
            href="#"
            className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/80 py-1.5 pr-3 pl-2.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur transition-colors hover:border-slate-300 sm:py-1.5 sm:pr-3.5 sm:text-[13px]"
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
            <span className="truncate">
              <span className="sm:hidden">Verified &amp; Parent-Approved</span>
              <span className="hidden sm:inline">
                Verified by professional, Created for Parents
              </span>
            </span>
            <span aria-hidden className="shrink-0">
              &rsaquo;
            </span>
          </Link>
        </Reveal>

        <Reveal amount={0} delay={0.1}>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
            Track Your Child&rsquo;s Growth With
            <br />
            <span className="text-indigo-600">Personalized Confidence</span>
          </h1>
        </Reveal>

        <Reveal amount={0} delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base text-balance text-slate-600 sm:text-lg">
            Eliminate the guesswork from parenting with personalized, evidence-based
            insights that help you confidently track and support your child&rsquo;s
            growth at every milestone.
          </p>
        </Reveal>

        <Reveal amount={0} delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <HoverLift lift={3} scale={1.04}>
              <Link
                href="#"
                className="inline-block rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-colors duration-200 hover:bg-indigo-700 hover:shadow-xl"
              >
                Start Free Trial
              </Link>
            </HoverLift>
            <HoverLift lift={3} scale={1.04}>
              <Link
                href="#"
                className="inline-block rounded-full border border-slate-300 bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:border-slate-400 hover:bg-slate-50"
              >
                Explore Features
              </Link>
            </HoverLift>
          </div>
        </Reveal>
      </div>

      <Reveal amount={0} delay={0.4}>
        <div className="relative mx-auto mt-10 max-w-4xl px-4 pb-16 sm:mt-14 sm:pb-24">
          <Image
            src={heroPhones}
            alt="Growth Genius app screens showing a baby's growth chart, daily milestones, and the Lucy AI parenting assistant"
            className="mx-auto h-auto w-full max-w-3xl select-none"
            preload
          />
        </div>
      </Reveal>
    </section>
  );
}
