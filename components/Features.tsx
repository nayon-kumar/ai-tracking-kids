import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import lucyRobot from "@/public/assets/small-robot.png";
import milestonesCube from "@/public/assets/8021f0a1-6d7e-4177-9db4-9e154814f6c4.png";
import growthTape from "@/public/assets/fita.png";
import dailyTipsList from "@/public/assets/list.png";
import familySync from "@/public/assets/family.png";
import securityShield from "@/public/assets/security.png";

type Feature = {
  title: string;
  description: string;
  image: StaticImageData;
  imageClassName: string;
  cropped?: boolean;
};

const FEATURES: Feature[] = [
  {
    title: "Lucy AI - Smarter Parenting Support",
    description:
      "Personalized, evidence-based answers for every concern.",
    image: lucyRobot,
    imageClassName: "-bottom-4 -right-2 h-28 w-28 sm:h-32 sm:w-32",
  },
  {
    title: "1,300+ Milestones & Activities",
    description:
      "Expert-reviewed milestones with memories and guided exercises.",
    image: milestonesCube,
    imageClassName: "-bottom-6 -right-6 h-28 w-28 sm:h-32 sm:w-32",
  },
  {
    title: "Growth Tracking With Clinical Accuracy",
    description:
      "Auto-calculated percentiles, charts, and developmental insights.",
    image: growthTape,
    imageClassName: "-bottom-6 -right-6 h-28 w-28 rotate-12 sm:h-32 sm:w-32",
  },
  {
    title: "Daily Tips & Priority Insights",
    description:
      "Actionable suggestions tailored to your child's age and growth pattern.",
    image: dailyTipsList,
    imageClassName: "-bottom-4 -right-4 h-28 w-28 sm:h-32 sm:w-32",
  },
  {
    title: "Family Syncing With Shared Timeline",
    description: "Invite unlimited family members with shared timelines.",
    image: familySync,
    imageClassName: "-bottom-4 -right-2 h-32 w-32 sm:h-36 sm:w-36",
    cropped: true,
  },
  {
    title: "Secure & Privacy Assurance",
    description: "COPPA-compliant, encrypted, parent-owned data.",
    image: securityShield,
    imageClassName: "-bottom-4 -right-4 h-28 w-28 sm:h-32 sm:w-32",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Unlock Your Child&rsquo;s Full Potential With{" "}
          <span className="text-indigo-600">GrowthGenius</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-balance text-slate-600 sm:text-lg">
          Explore our science-backed features designed to empower your
          parenting journey with personalized insights, expert guidance, and
          the support you need at every milestone.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="relative overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#eef0fc_0%,#c7c9f4_55%,#9498e6_100%)] p-6"
          >
            <div className="relative z-10 max-w-[62%]">
              <h3 className="text-base leading-snug font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {feature.description}
              </p>
            </div>
            {feature.cropped ? (
              <div
                aria-hidden
                className={`pointer-events-none absolute overflow-hidden rounded-2xl ${feature.imageClassName}`}
              >
                <Image
                  src={feature.image}
                  alt=""
                  fill
                  className="scale-125 object-cover object-[50%_38%] select-none"
                />
              </div>
            ) : (
              <Image
                src={feature.image}
                alt=""
                aria-hidden
                className={`pointer-events-none absolute object-contain select-none ${feature.imageClassName}`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="#"
          className="rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl active:translate-y-0"
        >
          Start Free Trial
        </Link>
      </div>
    </section>
  );
}
