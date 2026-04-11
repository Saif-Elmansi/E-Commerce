import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";
import ContactHero from "./_Components/ContactHero";
import ContactInfoCards from "./_Components/ContactInfoCards";
import ContactForm from "./_Components/ContactForm";
import ContactMapDecor from "./_Components/ContactMapDecor";

export const metadata: Metadata = {
  title: "Contact | MEGA STORE",
  description: "Reach MEGA STORE support — orders, products, and returns.",
};

export default function ContactPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-5 md:px-6 pb-12 md:pb-16">
      <div className="pt-2 md:pt-4">
        <ContactHero />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 lg:items-start">
        <div className="flex flex-col gap-8">
          <ContactInfoCards />
          <ContactMapDecor />
        </div>
        <ContactForm />
      </div>

      <section className="mt-14 md:mt-20">
        <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-linear-to-r from-blue-600 via-blue-600 to-indigo-600 px-6 py-8 text-white shadow-lg shadow-blue-500/20 sm:px-10 sm:py-10 md:flex md:items-center md:justify-between md:gap-8">
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-0 left-1/3 h-32 w-64 rounded-full bg-cyan-400/20 blur-3xl"
            aria-hidden
          />

          <div className="relative max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider ring-1 ring-white/25">
              <Sparkles size={14} className="shrink-0" aria-hidden />
              MEGA STORE
            </div>
            <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
              Prefer shopping first?
            </h2>
            <p className="mt-2 text-sm font-medium text-blue-100 sm:text-[15px]">
              Browse the catalog — same cart and checkout you already use.
            </p>
          </div>

          <div className="relative mt-6 flex shrink-0 flex-col gap-3 sm:flex-row md:mt-0">
            <Link
              href="/Shop"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-blue-700 shadow-md transition hover:bg-blue-50"
            >
              <ShoppingBag size={18} aria-hidden />
              Go to shop
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Home
              <ArrowRight size={18} aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
