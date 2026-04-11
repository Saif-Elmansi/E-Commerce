import { Clock, Mail, MapPin, Phone } from "lucide-react";

const items = [
  {
    icon: Phone,
    label: "Phone",
    value: "+20 111 024 0042",
    hint: "Sat–Thu, 9am–9pm",
    wrap: "bg-blue-50 text-blue-600 ring-blue-100",
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@megastore.com",
    hint: "We reply within 24h",
    wrap: "bg-sky-50 text-sky-600 ring-sky-100",
  },
  {
    icon: MapPin,
    label: "Visit",
    value: "Cairo, Egypt",
    hint: "Head office & showroom",
    wrap: "bg-indigo-50 text-indigo-600 ring-indigo-100",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "9:00 – 21:00",
    hint: "Local time (GMT+2)",
    wrap: "bg-violet-50 text-violet-600 ring-violet-100",
  },
] as const;

export default function ContactInfoCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map(({ icon: Icon, label, value, hint, wrap }) => (
        <div
          key={label}
          className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm shadow-slate-200/35 transition hover:border-blue-100 hover:shadow-md hover:shadow-blue-500/10"
        >
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 ${wrap}`}
          >
            <Icon size={22} strokeWidth={2} />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              {label}
            </p>
            <p className="mt-1 text-base font-black text-slate-900">{value}</p>
            <p className="mt-0.5 text-xs font-medium text-slate-500">{hint}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
