import {
  ArrowRight,
  BadgeCheck,
  Gift,
  Mail,
  Smartphone,
  Star,
} from "lucide-react";
import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";

export default function BlueNewsletterSection() {
  const perks = [
    "Fresh Picks Weekly",
    "Free Delivery Codes",
    "Members-Only Deals",
  ];

  return (
    <section className="mt-20 mb-10 rounded-[2rem] border border-blue-100 bg-linear-to-br from-blue-50 via-white to-blue-50/70 p-4 md:p-6 lg:p-8 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 items-stretch">
        <div className="lg:col-span-8 rounded-3xl border border-blue-100/70 bg-white/85 backdrop-blur p-5 md:p-7">
          <div className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
            <Mail size={14} />
            NEWSLETTER
            <span className="text-slate-400 font-semibold">
              50K+ Subscribers
            </span>
          </div>

          <h2 className="mt-4 text-2xl md:text-4xl font-black tracking-tight text-slate-900 leading-tight">
            Get the Freshest Updates
            <span className="block text-blue-600">Delivered Weekly</span>
          </h2>
          <p className="mt-2 text-slate-500 font-medium text-sm md:text-base">
            Weekly recipes, seasonal offers, and exclusive member-only
            discounts.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {perks.map((perk) => (
              <span
                key={perk}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs md:text-sm font-semibold text-slate-600"
              >
                <BadgeCheck size={14} className="text-blue-600" />
                {perk}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="you@example.com"
              className="h-12 flex-1 rounded-2xl border border-slate-200 bg-white px-4 outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-200/50 transition"
            />
            <button className="h-12 px-6 rounded-2xl bg-blue-600 text-white font-bold inline-flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20">
              Subscribe
              <ArrowRight size={16} />
            </button>
          </div>

          <p className="mt-3 text-xs text-slate-400 font-medium">
            You can unsubscribe anytime. No spam, ever.
          </p>
        </div>

        <div className="lg:col-span-4 rounded-3xl border border-blue-900/20 bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-5 md:p-6 flex flex-col justify-between shadow-lg shadow-blue-900/20">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-300/20 px-3 py-1 text-[11px] font-bold text-emerald-200">
              <Smartphone size={13} />
              MOBILE APP
            </span>

            <h3 className="mt-3 text-2xl font-black leading-tight">
              Shop Faster on
              <span className="block text-blue-300">Our App</span>
            </h3>
            <p className="mt-2 text-sm text-blue-100/80 font-medium">
              Get app-exclusive deals and up to 15% off your first order.
            </p>
          </div>

          <div id="sectionicon" className="mt-5 space-y-2.5">
            <button className="group w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-left hover:bg-white/15 hover:border-blue-200/30 transition-all duration-300">
              <p className="text-[10px] uppercase tracking-[0.14em] text-blue-100/65">
                Download on
              </p>
              <div className="flex items-center gap-3 mt-1.5">
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <IoLogoApple size={20} />
                </div>
                <p className="font-bold text-[15px] leading-none tracking-tight">
                  App Store
                </p>
              </div>
            </button>
            <button className="group w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-left hover:bg-white/15 hover:border-blue-200/30 transition-all duration-300">
              <p className="text-[10px] uppercase tracking-[0.14em] text-blue-100/65">
                Get it on
              </p>
              <div className="flex items-center gap-3 mt-1.5">
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <FaGooglePlay size={17} />
                </div>
                <p className="font-bold text-[15px] leading-none tracking-tight">
                  Google Play
                </p>
              </div>
            </button>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-blue-100/90">
            <div className="flex items-center gap-0.5 text-yellow-300">
              <Star size={14} className="fill-yellow-300" />
              <Star size={14} className="fill-yellow-300" />
              <Star size={14} className="fill-yellow-300" />
              <Star size={14} className="fill-yellow-300" />
              <Star size={14} className="fill-yellow-300" />
            </div>
            <span className="font-semibold">4.9</span>
            <span className="text-blue-100/70">100K+ downloads</span>
            <Gift size={14} className="text-emerald-300 ml-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
