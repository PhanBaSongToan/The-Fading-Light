import React from "react";
import { ExternalLink } from "lucide-react";
import Reveal from "./Reveal.jsx";

export default function CTASection({ links }) {
  return (
    <section id="play" className="section-shell pb-16">
      <Reveal>
        <div className="ornate-panel relative overflow-hidden px-6 py-9 md:px-12 md:py-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_42%,rgba(236,59,35,.2),transparent_45%),linear-gradient(135deg,rgba(179,35,24,.2),rgba(0,0,0,.88)_48%,rgba(0,0,0,.94))]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember/70 to-transparent" />
          <div className="relative z-10 flex flex-col items-start justify-between gap-6 xl:flex-row xl:items-center">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl leading-tight text-bone md:text-4xl">
                Muốn theo dõi dự án?
              </h2>
              <p className="mt-4 text-base leading-8 text-fog md:text-lg">
                The Fading Light vẫn đang trong quá trình hoàn thiện. Bạn có thể chơi
                thử trên Roblox và theo dõi các cập nhật mới qua TikTok và Facebook.
              </p>
            </div>
            <div className="grid w-full gap-3 sm:grid-cols-3 xl:w-auto">
              <a
                href={links.roblox}
                target="_blank"
                rel="noreferrer"
                className="red-button inline-flex items-center justify-center gap-3 px-6 py-4 text-base"
              >
                Chơi trên Roblox
                <ExternalLink size={18} />
              </a>
              <a
                href={links.tiktok}
                target="_blank"
                rel="noreferrer"
                className="outline-red-button inline-flex items-center justify-center gap-3 px-6 py-4 text-base"
              >
                Theo dõi TikTok
                <ExternalLink size={18} />
              </a>
              <a
                href={links.facebook}
                target="_blank"
                rel="noreferrer"
                className="outline-red-button inline-flex items-center justify-center gap-3 px-6 py-4 text-base"
              >
                Facebook dự án
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
