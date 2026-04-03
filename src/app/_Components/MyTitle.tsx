import React from "react";

interface MyTitleProps {
  tag: string;
  name: string;
}

export default function MyTitle({ tag, name }: MyTitleProps) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:gap-4">
      <div className="flex items-center gap-3">
        <div
          className="h-10 w-1.5 shrink-0 rounded-full bg-linear-to-b from-blue-600 to-blue-400 shadow-sm shadow-blue-500/30"
          aria-hidden
        />
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
          <span className="text-slate-900">{tag} </span>
          <span className="text-blue-600">{name}</span>
        </h2>
      </div>
      <div className="hidden h-px flex-1 min-w-12 bg-linear-to-r from-blue-100 to-transparent sm:block sm:mb-3" />
    </div>
  );
}
