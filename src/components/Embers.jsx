import React from "react";

export default function Embers() {
  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden">
      {Array.from({ length: 24 }).map((_, index) => (
        <span
          key={index}
          className="ember-particle"
          style={{
            left: `${(index * 37) % 100}%`,
            bottom: `${(index * 23) % 88}%`,
            animationDelay: `${(index % 8) * 0.55}s`,
            animationDuration: `${4.5 + (index % 6) * 0.7}s`
          }}
        />
      ))}
    </div>
  );
}
