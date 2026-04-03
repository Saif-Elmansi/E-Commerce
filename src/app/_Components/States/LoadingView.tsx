import { Loader2 } from "lucide-react";
import React from "react";

export default function LoadingView() {
  return (
    <div className="flex min-h-[220px] items-center justify-center py-6">
      <div className="w-full max-w-sm rounded-3xl border border-blue-100/80 bg-white/90 px-6 py-8 shadow-md shadow-blue-900/5 backdrop-blur-sm">
        <div className="mb-4 flex justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50">
            <Loader2 className="animate-spin text-blue-600" size={22} />
          </div>
        </div>

        <h2 className="text-center text-lg font-black text-slate-800">
          Loading categories…
        </h2>

        <div className="mt-5 space-y-2.5">
          <div className="h-2.5 animate-pulse rounded-full bg-slate-100" />
          <div className="h-2.5 w-11/12 animate-pulse rounded-full bg-slate-100" />
          <div className="h-2.5 w-4/5 animate-pulse rounded-full bg-slate-100" />
        </div>
      </div>
    </div>
  );
}
