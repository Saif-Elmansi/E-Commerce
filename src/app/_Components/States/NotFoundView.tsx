import { Info, SearchX } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NotFoundView() {
  return (
    <div className="min-h-[55vh] flex items-center justify-center">
      <div className="w-full max-w-lg bg-white/80 backdrop-blur px-6 py-8 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
            <SearchX className="text-blue-600" size={22} />
          </div>
        </div>

        <h2 className="text-center text-2xl font-black text-slate-800">
          Page Not Found
        </h2>


        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-center">
          {/* <div className="flex items-start gap-2 bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3">
            <Info className="text-blue-600 mt-0.5" size={16} />
            <span className="text-xs font-bold text-slate-600">
              جرّب ترجع للصفحة الرئيسية
            </span>
          </div> */}

          <Link
            href="/"
            className="inline-flex w-full sm:w-auto items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-black px-5 py-3 rounded-2xl transition-colors active:scale-[0.99]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

