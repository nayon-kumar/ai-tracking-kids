import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import HoverLift from "@/components/motion/HoverLift";
import cardImage1 from "@/public/assets/card-image1.png";
import cardImage2 from "@/public/assets/card-image2.png";
import cardImage3 from "@/public/assets/card-image3.png";
import cardImage4 from "@/public/assets/card-image4.png";

type Step = {
  number: string;
  title: string;
  subtitle?: string;
  description: string;
  cta: string;
  image: StaticImageData;
  imageAlt: string;
  reverse: boolean;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Set Up Your Child’s Profile",
    subtitle: "Quick & Easy Onboarding",
    description:
      "Create a personalized profile for your child in just a few minutes. Tailor your journey by entering basic details like age, milestones, and any specific concerns.",
    cta: "Get Started Now",
    image: cardImage1,
    imageAlt:
      "GrowthGenius onboarding screens for naming a child, choosing their profile, and picking a birth date",
    reverse: false,
  },
  {
    number: "02",
    title: "Track Milestones & Insights",
    subtitle: "Evidence-Based Tracking",
    description:
      "Monitor your child’s development with over 1,300 expert-approved milestones. Receive personalized, actionable insights to ensure they’re on the right track.",
    cta: "Track Progress",
    image: cardImage2,
    imageAlt:
      "GrowthGenius milestone tracking screen showing overall progress and development summaries",
    reverse: true,
  },
  {
    number: "03",
    title: "Get Guidance from Lucy AI",
    subtitle: "Smart, Evolving Tips",
    description:
      "Let Lucy, your personal parenting assistant, guide you with daily tips tailored to your child’s age and developmental stage. Get real-time answers to your concerns, so you can enjoy every moment.",
    cta: "Start Chat",
    image: cardImage3,
    imageAlt: "Lucy AI chat screen answering a parent's question about sleep schedules",
    reverse: false,
  },
  {
    number: "04",
    title: "Share Your Child’s Special Moments With All",
    description:
      "Effortlessly capture and share precious moments of your child’s growth with family and friends. Keep those memories alive with just a tap!",
    cta: "Share a Moment",
    image: cardImage4,
    imageAlt: "GrowthGenius Moments screen with photos and comments shared with family",
    reverse: true,
  },
];

function Sparkle({ className }: { className: string }) {
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

function StepImage({ step }: { step: Step }) {
  return (
    <Reveal
      direction={step.reverse ? "left" : "right"}
      className={`mx-auto w-full max-w-md ${step.reverse ? "" : "lg:order-2"}`}
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(150deg,#4b3cc4_0%,#8f80ea_50%,#4b3cc4_100%)] p-6 shadow-xl sm:p-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent_38%,rgba(255,255,255,0.1)_50%,transparent_62%)]"
        />
        <Sparkle className="pointer-events-none absolute top-6 left-6 h-6 w-6 text-white/30" />
        <Sparkle className="pointer-events-none absolute right-8 bottom-8 hidden h-5 w-5 text-white/30 sm:block" />
        <span
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-6 hidden h-6 w-6 rounded-full bg-gradient-to-br from-white/40 to-white/5 sm:block"
        />
        <Image
          src={step.image}
          alt={step.imageAlt}
          className="relative z-10 mx-auto h-auto w-full max-w-[380px] select-none"
          preload
        />
      </div>
    </Reveal>
  );
}

function StepText({ step }: { step: Step }) {
  return (
    <Reveal
      direction={step.reverse ? "right" : "left"}
      delay={0.1}
      className={`relative ${step.reverse ? "" : "lg:order-1"}`}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -top-8 left-1/2 -z-10 -translate-x-1/2 text-[5.5rem] leading-none font-black text-indigo-100 select-none sm:-top-10 sm:text-[7.5rem] lg:left-0 lg:translate-x-0"
      >
        {step.number}
      </span>
      <div className="relative text-center lg:text-left">
        <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          {step.title}
          {step.subtitle ? (
            <>
              <br />
              {step.subtitle}
            </>
          ) : null}
        </h3>
        <p className="mx-auto mt-4 max-w-md text-base text-slate-600 lg:mx-0">
          {step.description}
        </p>
        <div className="mt-8 flex justify-center lg:justify-start">
          <HoverLift lift={3} scale={1.04}>
            <Link
              href="#"
              className="inline-block rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-colors duration-200 hover:bg-indigo-700 hover:shadow-xl"
            >
              {step.cta}
            </Link>
          </HoverLift>
        </div>
      </div>
    </Reveal>
  );
}

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Track Your Child&rsquo;s Growth In Simple Easy Steps With{" "}
          <span className="text-indigo-600">GrowthGenius</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-balance text-slate-600 sm:text-lg">
          Effortlessly monitor milestones, get personalized insights, and
          receive expert guidance every step of the way.
        </p>
      </Reveal>

      <div className="mt-20 flex flex-col gap-24 sm:gap-28 lg:gap-32">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <StepImage step={step} />
            <StepText step={step} />
          </div>
        ))}
      </div>
    </section>
  );
}
