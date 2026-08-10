"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import motherBaby from "@/public/assets/mother.png";

const TESTIMONIALS = [
  {
    quote:
      "GrowthGenius Has Been A Game-Changer For Us! As A First-Time Parent, I Had So Many Questions, But Lucy AI Gave Me Clear, Research-Backed Answers. I Feel So Much More Confident In My Parenting Decisions Now!",
    name: "Emma L., New York",
  },
  {
    quote:
      "Tracking My Son's Growth Used To Feel Overwhelming, But GrowthGenius Makes It Simple. The Milestone Reminders And Charts Give Me Real Peace Of Mind Every Single Day!",
    name: "Sarah K., Austin",
  },
];

function QuoteIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 32 24"
      fill="currentColor"
      className="h-8 w-8 text-indigo-300"
    >
      <path d="M4 24v-7.8C4 9.3 8.1 3.9 14.6 0l2 3.4C12.3 6.4 9.9 9.7 9.4 13.4c.5-.2 1.1-.3 1.8-.3 3 0 5.4 2.3 5.4 5.4S13.8 24 10.8 24 4 24 4 24Zm16 0v-7.8C20 9.3 24.1 3.9 30.6 0l2 3.4c-4.3 3-6.7 6.3-7.2 10 .5-.2 1.1-.3 1.8-.3 3 0 5.4 2.3 5.4 5.4S29.8 24 26.8 24 20 24 20 24Z" />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d={direction === "left" ? "M15 6 9 12l6 6" : "M9 6l6 6-6 6"} />
    </svg>
  );
}

const FADE_DURATION = 400;

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const fadeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (updater: (current: number) => number) => {
    setIsVisible(false);
    if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
    fadeTimeout.current = setTimeout(() => {
      setIndex(updater);
      setIsVisible(true);
    }, FADE_DURATION);
  };

  useEffect(() => {
    const id = setInterval(() => {
      goTo((current) => (current + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => {
      clearInterval(id);
      if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
    };
  }, []);

  const showPrevious = () =>
    goTo(
      (current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  const showNext = () =>
    goTo((current) => (current + 1) % TESTIMONIALS.length);

  const testimonial = TESTIMONIALS[index];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Discover Why Thousands Of Parents Trust Us
          <br />
          To Guide Their{" "}
          <span className="text-indigo-600">Child&rsquo;s Development</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-balance text-slate-600 sm:text-lg">
          Join thousands of parents who&rsquo;ve found peace of mind with
          GrowthGenius - the trusted tool for tracking your child&rsquo;s
          growth and milestones.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="mx-auto w-full max-w-md">
          <Image
            src={motherBaby}
            alt="A smiling mother embracing her baby, next to a card showing GrowthGenius stats: 10,000+ moments created, 1,300+ validated milestones, backed by pediatric research, and a 4.9 rating from more than 10,000 parents"
            className="h-auto w-full select-none"
            preload
          />
        </div>

        <div>
          <QuoteIcon />
          <div
            className={`transition-all duration-[400ms] ease-in-out ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "-translate-y-1 opacity-0"
            }`}
          >
            <p className="mt-4 min-h-[9rem] text-xl font-medium text-slate-800 sm:text-2xl lg:leading-snug">
              {testimonial.quote}
            </p>
            <p className="mt-6 text-base font-semibold text-slate-900">
              {testimonial.name}
            </p>
          </div>

          <div className="mt-8 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-400 transition-colors hover:bg-indigo-200"
            >
              <ChevronIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white transition-colors hover:bg-indigo-700"
            >
              <ChevronIcon direction="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
