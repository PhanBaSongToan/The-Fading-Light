import React from "react";

export default function SectionTitle({ children, className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="hidden h-px w-24 bg-gradient-to-r from-transparent via-rust to-blood sm:block" />
      <h2 className="text-center font-display text-3xl leading-tight text-bone md:text-4xl">
        {children}
      </h2>
      <span className="hidden h-px w-24 bg-gradient-to-l from-transparent via-rust to-blood sm:block" />
    </div>
  );
}
