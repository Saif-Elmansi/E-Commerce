import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/Shop" },
  { label: "Brands", href: "/Brands" },
  { label: "Contact", href: "/Contact" },
  { label: "Login", href: "/Login" },
];

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-blue-100 bg-linear-to-b from-white to-blue-50/60">
      <div className="w-11/12 m-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-black text-slate-800 tracking-tight">
              MEGA<span className="text-blue-600">STORE</span>
            </h3>
            <p className="mt-3 text-sm text-slate-500 font-medium leading-relaxed">
              Your trusted shopping destination for smart deals and quality products.
            </p>
            <div className="mt-4 flex items-center gap-2">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <button
                  key={i}
                  title="social"
                  className="w-9 h-9 rounded-xl border border-slate-200 bg-white text-slate-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition"
                >
                  <Icon size={16} className="m-auto" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black text-slate-800 uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="mt-4 flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black text-slate-800 uppercase tracking-wider">
              Contact
            </h4>
            <div className="mt-4 space-y-2.5">
              <p className="text-sm text-slate-500 font-medium flex items-center gap-2">
                <Phone size={15} className="text-blue-600" />
                +20 111 024 0042
              </p>
              <p className="text-sm text-slate-500 font-medium flex items-center gap-2">
                <Mail size={15} className="text-blue-600" />
                support@megastore.com
              </p>
              <p className="text-sm text-slate-500 font-medium flex items-center gap-2">
                <MapPin size={15} className="text-blue-600" />
                Cairo, Egypt
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-white/80 p-4">
            <h4 className="text-sm font-black text-slate-800 uppercase tracking-wider">
              Stay Updated
            </h4>
            <p className="mt-2 text-xs text-slate-500 font-medium">
              Get our latest offers and product updates.
            </p>
            <div className="mt-3 flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="h-10 flex-1 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-blue-200/60 focus:border-blue-300"
              />
              <button className="h-10 px-4 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-500 font-semibold">
            © {new Date().getFullYear()} MEGASTORE. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 font-medium">
            Built with care for better shopping experience.
          </p>
        </div>
      </div>
    </footer>
  );
}

