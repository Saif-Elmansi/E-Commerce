import React from "react";

interface MyTitleProps {
  tag: string;
  name: string;
}
export default function MyTitle({tag,name}: MyTitleProps) {
  return (
    <div className="flex items-center gap-2">
      
      <div className="w-1.5 h-10 bg-blue-600 rounded-full"></div>

      
      <h2 className="text-4xl font-extrabold tracking-tight">
        <span className="text-slate-900">{tag} </span>
        <span className="text-blue-600">{name}</span>
      </h2>
    </div>
  );
}
