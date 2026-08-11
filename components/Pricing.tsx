"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import HoverLift from "@/components/motion/HoverLift";

type Billing = "monthly" | "annually";

const GROWTH_PRICE: Record<Billing, { amount: string; period: string }> = {
  monthly: { amount: "$9.99", period: "Monthly" },
  annually: { amount: "$7.99", period: "Monthly, billed annually" },
};

const FREE_FEATURES = [
  "Access personalized milestones",
  "AI-powered insights",
  "Unlimited family invitations",
  "No hidden fees or obligations",
];

const GROWTH_FEATURES = [
  "Smarter AI Assistant for parenting questions",
  "Personalized milestones & timely notifications",
  "Unlimited family invitations for easy tracking",
  "Support for multiple children",
  "Cancel anytime: Your data stays safe and secure",
];

const ANNUAL_FEATURES = [
  "Access personalized milestones",
  "Customizable event reminders",
  "Comprehensive activity tracking",
  "Intuitive user-friendly interface",
];

function CheckIcon({ tone }: { tone: "dark" | "light" }) {
  return (
    <span
      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
        tone === "dark" ? "bg-slate-900 text-white" : "bg-white text-indigo-600"
      }`}
    >
      <svg
        aria-hidden
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
  );
}

function FeatureList({
  features,
  tone,
}: {
  features: string[];
  tone: "dark" | "light";
}) {
  return (
    <ul className="flex flex-col gap-3">
      {features.map((feature) => (
        <li key={feature} className="flex items-start gap-3">
          <CheckIcon tone={tone} />
          <span
            className={`text-sm ${tone === "dark" ? "text-slate-600" : "text-white/90"}`}
          >
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const growthPrice = GROWTH_PRICE[billing];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Simple, Transparent, And Flexible Pricing
          <br />
          Plans To Fit Your{" "}
          <span className="text-indigo-600">Parenting Needs</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-balance text-slate-600 sm:text-lg">
          Unlock the full potential of GrowthGenius with flexible monthly or
          affordable annual plans. Choose the plan that fits your parenting
          journey.
        </p>
      </Reveal>

      <div className="mt-8 flex justify-center">
        <div className="inline-flex items-center gap-1 rounded-full bg-indigo-50 p-1">
          <button
            type="button"
            onClick={() => setBilling("monthly")}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
              billing === "monthly"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBilling("annually")}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${
              billing === "annually"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Annually
          </button>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
        <Reveal delay={0} className="h-full">
          <HoverLift lift={6} scale={1.015} className="h-full">
            <div className="flex h-full flex-col rounded-3xl bg-[linear-gradient(135deg,#fbfaff_0%,#e4e0fb_55%,#d1c9f2_100%)] p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold text-slate-900">Free Package</h3>
              <p className="mt-2 text-sm text-slate-600">
                Experience the full app features with no commitment.
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-slate-900">$0</span>
                <span className="text-sm text-slate-500">7 Days Free Trial</span>
              </div>

              <hr className="mt-6 border-slate-200" />

              <p className="mt-6 text-sm font-semibold text-slate-900">
                Core Features:
              </p>
              <div className="mt-3">
                <FeatureList features={FREE_FEATURES} tone="dark" />
              </div>

              <Link
                href="#"
                className="mt-8 flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-colors duration-200 hover:bg-indigo-700 hover:shadow-xl lg:mt-auto"
              >
                Start Free Trial
              </Link>
            </div>
          </HoverLift>
        </Reveal>

        <Reveal delay={0.1} className="h-full">
          <HoverLift lift={6} scale={1.015} className="h-full">
            <div className="relative flex h-full flex-col rounded-3xl bg-[linear-gradient(135deg,#8c7ee9_0%,#6c5ce6_50%,#5548d4_100%)] p-8 shadow-xl transition-shadow duration-300 hover:shadow-2xl lg:-my-4 lg:py-12">
              <span className="absolute top-6 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-semibold text-slate-900">
                Most Popular
              </span>

              <h3 className="mt-4 text-xl font-bold text-white">
                GrowthGenius Package
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Everything you need to support your child&rsquo;s growth with
                advanced features.
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">
                  {growthPrice.amount}
                </span>
                <span className="text-sm text-white/80">{growthPrice.period}</span>
              </div>

              <hr className="mt-6 border-white/20" />

              <p className="mt-6 text-sm font-semibold text-white">
                Core Features:
              </p>
              <div className="mt-3">
                <FeatureList features={GROWTH_FEATURES} tone="light" />
              </div>

              <Link
                href="#"
                className="mt-8 flex items-center justify-center rounded-full bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-slate-800 lg:mt-auto"
              >
                Get Started
              </Link>
            </div>
          </HoverLift>
        </Reveal>

        <Reveal delay={0.2} className="h-full">
          <HoverLift lift={6} scale={1.015} className="h-full">
            <div className="flex h-full flex-col rounded-3xl bg-[linear-gradient(135deg,#fbfaff_0%,#e4e0fb_55%,#d1c9f2_100%)] p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold text-slate-900">
                Annual Package
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                The most affordable plan with premium access for tracking.
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-slate-900">
                  $59.99
                </span>
                <span className="text-sm text-slate-500">Yearly</span>
              </div>

              <hr className="mt-6 border-slate-200" />

              <p className="mt-6 text-sm font-semibold text-slate-900">
                Core Features:
              </p>
              <div className="mt-3">
                <FeatureList features={ANNUAL_FEATURES} tone="dark" />
              </div>

              <Link
                href="#"
                className="mt-8 flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-colors duration-200 hover:bg-indigo-700 hover:shadow-xl lg:mt-auto"
              >
                Start Annual
              </Link>
            </div>
          </HoverLift>
        </Reveal>
      </div>
    </section>
  );
}
