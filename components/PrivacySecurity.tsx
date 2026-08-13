import Image from "next/image";
import lockGraphic from "@/public/assets/lock.png";
import Reveal from "@/components/motion/Reveal";

function Sparkle({
  className,
  delay,
}: {
  className: string;
  delay: string;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ animationDelay: delay }}
      className={`animate-twinkle ${className}`}
    >
      <path d="M12 0c.9 4.6 2.2 7.7 4.1 9.6C18 11.5 20.3 12.6 24 13c-3.7.4-6 1.5-7.9 3.4-1.9 1.9-3.2 5-4.1 9.6-.9-4.6-2.2-7.7-4.1-9.6C6 14.5 3.7 13.4 0 13c3.7-.4 6-1.5 7.9-3.4C9.8 7.7 11.1 4.6 12 0Z" />
    </svg>
  );
}

export default function PrivacySecurity() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <Reveal className="relative overflow-hidden rounded-3xl bg-[linear-gradient(160deg,#392c86_0%,#201653_55%,#0d0a24_100%)] px-6 pt-10 pb-12 sm:px-12 sm:pt-14">
        <div
          aria-hidden
          className="animate-glow-pulse pointer-events-none absolute top-8 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(129,140,248,0.55),transparent_70%)] blur-3xl"
        />

        <Sparkle
          delay="0s"
          className="pointer-events-none absolute top-10 left-10 h-4 w-4 text-indigo-300/60 sm:top-14 sm:left-16"
        />
        <Sparkle
          delay="0.6s"
          className="pointer-events-none absolute top-20 right-12 h-3 w-3 text-indigo-300/50 sm:right-20"
        />
        <Sparkle
          delay="1.2s"
          className="pointer-events-none absolute bottom-24 left-8 h-5 w-5 text-indigo-300/40 sm:left-14"
        />
        <Sparkle
          delay="1.8s"
          className="pointer-events-none absolute right-10 bottom-16 h-3 w-3 text-indigo-300/60 sm:right-16"
        />

        <div className="relative mx-auto w-full max-w-2xl">
          <Image
            src={lockGraphic}
            alt="A glowing lock icon surrounded by badges reading COPPA & GDPR Compliant, Encrypted & Secure, Zero Sharing Policy, and Your Control, Your Data"
            className="mx-auto h-auto w-full select-none"
            preload
          />
        </div>

        <div className="mx-auto -mt-6 max-w-2xl text-center sm:-mt-10">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Your Child. Your Data.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-balance text-white/75 sm:text-base">
            At GrowthGenius, Protecting Your Child&rsquo;s Privacy Is Our Top
            Priority. Your Data Is Handled With Strict Security And Complete
            Transparency, So You Always Stay In Control And Can Use The App
            With Total Peace Of Mind.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
