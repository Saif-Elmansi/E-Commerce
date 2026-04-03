"use client";

import Link from "next/link";
import React from "react";
import { ShieldCheck, Star, Truck, Zap } from "lucide-react";

type AuthSplitMode = "login" | "signup";

const copy: Record<
  AuthSplitMode,
  { title: string; titleAccent: string; subtitle: string }
> = {
  login: {
    title: "Welcome back to",
    titleAccent: "MEGASTORE",
    subtitle:
      "Sign in to track orders, save your cart, and unlock member-only tech deals.",
  },
  signup: {
    title: "Welcome to",
    titleAccent: "MEGASTORE",
    subtitle:
      "Your smart stop for electronics and gadgets — premium quality, fast delivery, secure checkout.",
  },
};

export default function AuthSplitLayout({
  mode,
  children,
}: {
  mode: AuthSplitMode;
  children: React.ReactNode;
}) {
  const t = copy[mode];

  return (
    <div className="relative min-h-[calc(100vh-7rem)] w-full overflow-hidden bg-linear-to-br from-slate-50 via-blue-50/40 to-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgb(37_99_235/0.12)_0%,transparent_45%),radial-gradient(circle_at_80%_70%,rgb(59_130_246/0.1)_0%,transparent_40%)] opacity-[0.35]"
        aria-hidden
      />
      <div className="pointer-events-none absolute -left-20 top-20 h-64 w-64 rounded-full bg-blue-400/15 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-11/12 max-w-6xl flex-col gap-8 py-8 md:py-12 lg:flex-row lg:items-stretch lg:gap-10">
        <aside className="relative order-2 flex flex-1 flex-col justify-center rounded-3xl border border-blue-100/80 bg-white/70 p-8 shadow-lg shadow-blue-900/5 backdrop-blur-md lg:order-1 lg:max-w-xl lg:p-10">
          <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/30">
            <Zap size={20} className="fill-amber-300 text-amber-300" />
          </div>

          <Link
            href="/"
            className="text-sm font-bold uppercase tracking-wider text-blue-600/90 hover:text-blue-700"
          >
            ← Back to store
          </Link>

          <h1 className="mt-6 text-3xl font-black leading-tight tracking-tight text-slate-900 md:text-4xl">
            {t.title}{" "}
            <span className="text-blue-600 drop-shadow-sm">{t.titleAccent}</span>
          </h1>
          <p className="mt-3 max-w-md text-sm font-medium leading-relaxed text-slate-600 md:text-base">
            {t.subtitle}
          </p>

          <ul className="mt-8 space-y-4">
            {[
              {
                Icon: Star,
                title: "Premium picks",
                desc: "Curated electronics and accessories you can trust.",
              },
              {
                Icon: Truck,
                title: "Fast delivery",
                desc: "Reliable shipping so your order arrives on time.",
              },
              {
                Icon: ShieldCheck,
                title: "Secure shopping",
                desc: "Encrypted checkout and protected payments.",
              },
            ].map(({ Icon, title, desc }) => (
              <li
                key={title}
                className="flex gap-4 rounded-2xl border border-slate-100 bg-white/80 p-4 transition-all duration-300 hover:border-blue-200/80 hover:shadow-md hover:shadow-blue-500/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">{title}</p>
                  <p className="mt-0.5 text-sm font-medium text-slate-500">{desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl border border-slate-100 bg-linear-to-br from-white to-blue-50/50 p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white ring-2 ring-blue-200">
                SJ
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-bold text-slate-900">Sarah J.</span>
                  <span className="text-xs font-bold text-amber-600">
                    ★★★★★
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium italic leading-relaxed text-slate-600">
                  “MEGASTORE made upgrading my setup easy — fast shipping and
                  crystal-clear product info.”
                </p>
              </div>
            </div>
          </div>
        </aside>

        <div className="order-1 flex flex-1 items-center justify-center lg:order-2 lg:justify-end">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </div>
    </div>
  );
}
