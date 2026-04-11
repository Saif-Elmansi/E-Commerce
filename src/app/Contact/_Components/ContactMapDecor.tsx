import { MapPin } from "lucide-react";

/** Decorative map-style panel — visual only (no embed). */
export default function ContactMapDecor() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-linear-to-br from-slate-100 via-blue-50/80 to-indigo-100/90 shadow-inner">
      <div
        className="pointer-events-none absolute inset-0 opacity-40 background-image: linear-gradient(to right,rgb(148 163 184/0.2) 1px,transparent 1px),linear-gradient(to bottom,rgb(148 163 184/0.2) 1px,transparent 1px);
}"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-blue-400/20 blur-3xl"
        aria-hidden
      />
      <div className="relative flex min-h-55 flex-col items-center justify-center gap-3 px-6 py-12 text-center sm:min-h-65">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-slate-100">
          <MapPin className="h-7 w-7 text-blue-600" aria-hidden />
        </div>
        <div>
          <p className="text-sm font-black text-slate-800">Cairo, Egypt</p>
          <p className="mt-1 max-w-xs text-xs font-medium text-slate-600">
            Map preview — replace with Google Maps or your embed when you wire
            the page.
          </p>
        </div>
      </div>
    </div>
  );
}
