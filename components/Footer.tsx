import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo.png";

const COMMUNITY_AVATARS = [
  { initials: "JD", className: "bg-indigo-200 text-indigo-700" },
  { initials: "AS", className: "bg-purple-200 text-purple-700" },
  { initials: "ML", className: "bg-amber-200 text-amber-700" },
  { initials: "KP", className: "bg-emerald-200 text-emerald-700" },
];

const QUICK_LINKS = ["Home", "Lucy Ai", "Features", "How It Works", "About Us"];
const MILESTONE_LINKS = [
  "Account Summary",
  "Pricing & Subscription",
  "Measurements",
  "User Management",
];
const RESOURCE_LINKS = [
  "Privacy & Security",
  "Help & Support",
  "App Information",
];
const LEGAL_LINKS = [
  "Terms & Conditions",
  "Privacy Policy",
  "Accessibility Statement",
  "Cookie Policy",
];

function LinkColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="text-sm font-bold text-slate-900">{title}</p>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link}>
            <Link
              href="#"
              className="text-sm text-slate-600 transition-colors hover:text-indigo-600"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.53-1.5H16.7V3.7C16.4 3.66 15.4 3.57 14.24 3.57c-2.42 0-4.08 1.48-4.08 4.19V9.9H7.44V13h2.72v8h3.34Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className="h-4 w-4"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.4c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.2 4.2 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.8A8.2 8.2 0 0 1 2 18.6a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.25a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20h-3.37v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.68V8.5h3.24v1.57h.05c.45-.86 1.56-1.77 3.2-1.77 3.42 0 4.06 2.25 4.06 5.17V20Z" />
    </svg>
  );
}

const SOCIAL_ICONS = [
  { label: "Facebook", Icon: FacebookIcon },
  { label: "Instagram", Icon: InstagramIcon },
  { label: "Twitter", Icon: TwitterIcon },
  { label: "LinkedIn", Icon: LinkedInIcon },
];

export default function Footer() {
  return (
    <footer className="w-full pb-8">
      <div className="relative w-full overflow-hidden bg-[linear-gradient(120deg,#a79cf0_0%,#8f80ea_50%,#a79cf0_100%)] pt-10 pb-40 sm:pt-14 sm:pb-48">
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-0 h-[420px] w-[420px] -translate-y-1/2 translate-x-1/4 rounded-full border border-white/20"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-0 h-[300px] w-[300px] -translate-y-1/2 translate-x-1/4 rounded-full border border-white/20"
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-8 lg:px-12">
          <div className="flex -space-x-2">
            {COMMUNITY_AVATARS.map((avatar) => (
              <span
                key={avatar.initials}
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/70 text-xs font-semibold ${avatar.className}`}
              >
                {avatar.initials}
              </span>
            ))}
          </div>

          <h2 className="mt-6 max-w-xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            A Community Of 1,400+ Parents Is Growing With Us
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/85">
            Together, We&rsquo;re Giving Children The Best Start Through
            Support Designed For Their Unique Journey.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#"
              className="rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-950/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl active:translate-y-0"
            >
              Start Free Trial
            </Link>
            <Link
              href="#"
              className="rounded-full border border-white/80 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              Explore The App
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-12">
        <div className="relative z-10 -mt-32 rounded-3xl border-2 border-white bg-indigo-50 p-8 shadow-xl sm:-mt-36 sm:p-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          <div>
            <Image src={logo} alt="Growth Genius" className="h-8 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-slate-600">
              Smart, science-backed tools to help parents confidently track
              and support their child&rsquo;s development
            </p>

            <p className="mt-6 text-sm font-bold text-slate-900">
              Contact Information
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <PhoneIcon />
                +00-1234 5678 90
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-600">
                <MailIcon />
                Growthgenius@Gmail.Com
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-600">
                <span className="mt-0.5">
                  <PinIcon />
                </span>
                123 Street Road
                <br />
                Las Vegas, United States
              </li>
            </ul>
          </div>

          <LinkColumn title="Quick Links" links={QUICK_LINKS} />
          <LinkColumn title="Milestone" links={MILESTONE_LINKS} />
          <LinkColumn title="Resources" links={RESOURCE_LINKS} />

          <div>
            <LinkColumn title="Legal" links={LEGAL_LINKS} />

            <p className="mt-6 text-sm font-bold text-slate-900">
              Sign up to child best tips
            </p>
            <div className="mt-4 flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1.5 pl-4">
              <input
                type="email"
                placeholder="Enter Your Gmail"
                className="w-full min-w-0 bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="button"
                className="shrink-0 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <hr className="mt-10 border-slate-300/60" />

        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-3">
            {SOCIAL_ICONS.map(({ label, Icon }) => (
              <Link
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full text-indigo-600 transition-colors hover:bg-indigo-100"
              >
                <Icon />
              </Link>
            ))}
          </div>
          <p className="flex items-center gap-1.5 text-sm text-slate-600">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[10px] text-white">
              ©
            </span>
            2025 GrowthGenius. All rights reserved.
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
}
