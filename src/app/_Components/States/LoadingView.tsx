import { Loader2 } from "lucide-react";
import React from "react";

export default function LoadingView() {
  return (
    <div className="min-h-[55vh] flex items-center justify-center">
      <div className="w-full max-w-md bg-white/80 backdrop-blur px-6 py-8 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
            <Loader2 className="text-blue-600 animate-spin" size={22} />
          </div>
        </div>

        <h2 className="text-center text-xl font-black text-slate-800">
          Loading...
        </h2>


        <div className="mt-6 space-y-3">
          <div className="h-3 bg-gray-100 rounded-full animate-pulse" />
          <div className="h-3 bg-gray-100 rounded-full animate-pulse w-11/12" />
          <div className="h-3 bg-gray-100 rounded-full animate-pulse w-10/12" />
        </div>
      </div>
    </div>
  );
}

