import Link from "next/link";
import {
  ChevronRight,
  Headphones,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import MyTitle from "@/app/_Components/MyTitle";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-100/90 bg-linear-to-br from-slate-50 via-white to-blue-50/60 px-5 py-8 shadow-sm shadow-slate-200/40 sm:px-8 sm:py-10 md:px-10 md:py-12">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-indigo-400/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184/0.35)_1px,transparent_0)] bg-size-[24px_24px] opacity-[0.4]"
        aria-hidden
      />

      <div className="relative">
        <nav
          className="flex flex-wrap items-center gap-1 text-sm font-medium text-slate-500"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition hover:text-blue-600">
            Home
          </Link>
          <ChevronRight size={14} className="text-slate-300" aria-hidden />
          <span className="font-bold text-slate-800">Contact</span>
        </nav>

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-700 shadow-sm">
              <Sparkles size={14} className="shrink-0" aria-hidden />
              24/7 support
            </div>
            <div className="mt-4">
              <MyTitle tag="Get in" name="Touch" />
            </div>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-slate-600">
              Questions about an order, a product, or a return? Send us a message —
              we usually reply within one business day.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            {
              icon: Headphones,
              title: "Fast response",
              desc: "We read every message",
              wrap: "bg-blue-50 text-blue-600 ring-blue-100",
            },
            {
              icon: ShieldCheck,
              title: "Your data is safe",
              desc: "Encrypted & never sold",
              wrap: "bg-sky-50 text-sky-600 ring-sky-100",
            },
            {
              icon: MessageCircle,
              title: "Real humans",
              desc: "No bots — real support",
              wrap: "bg-indigo-50 text-indigo-600 ring-indigo-100",
            },
          ].map(({ icon: Icon, title, desc, wrap }) => (
            <div
              key={title}
              className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/70 px-4 py-3 shadow-sm shadow-slate-200/30 backdrop-blur-sm"
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 ${wrap}`}
              >
                <Icon size={20} strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">{title}</p>
                <p className="text-xs font-medium text-slate-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
