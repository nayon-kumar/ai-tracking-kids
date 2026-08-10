import Image from "next/image";
import lockGraphic from "@/public/assets/lock.png";

export default function PrivacySecurity() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(160deg,#392c86_0%,#201653_55%,#0d0a24_100%)] px-6 pt-10 pb-12 sm:px-12 sm:pt-14">
        <div className="mx-auto w-full max-w-2xl">
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
      </div>
    </section>
  );
}
