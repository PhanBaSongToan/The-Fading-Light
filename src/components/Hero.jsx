import React from "react";
import { ChevronDown, ExternalLink, Mouse } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero({ assets, links, onNavigate }) {
  return (
    <section
      id="home"
      className="relative flex min-h-[96vh] flex-col overflow-hidden border-b border-blood/25 pt-[70px]"
    >
      <div
        className="hero-environment absolute inset-0"
        style={{ backgroundImage: `url(${assets.heroBackground})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,3,2,.98)_0%,rgba(5,4,3,.88)_33%,rgba(5,4,3,.42)_66%,rgba(3,3,2,.74)_100%)]" />
      <div className="absolute inset-0 bg-vignette" />
      <div className="absolute inset-0 bg-red-haze" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ash to-transparent" />
      <div className="lantern-glow left-[30%] top-[24%]" />
      <div className="ghost-silhouette hidden xl:block" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 items-center px-5 py-8 md:py-14 lg:px-8">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="sr-only">The Fading Light - Tân Minh</h1>
          <div className="hero-title-mask mb-5 w-[min(430px,88vw)]">
            <img
              src={assets.heroTitle}
              alt="The Fading Light - Tân Minh"
              className="block h-auto w-full"
            />
          </div>

          <p className="max-w-2xl text-base leading-7 text-bone/85 md:text-xl md:leading-8">
            The Fading Light - Tân Minh là một dự án game kinh dị Việt Nam trên
            Roblox, lấy cảm hứng từ trường học, những con hẻm cũ, ký ức gia đình và
            cảm giác bất lực khi ánh sáng dần biến mất.
          </p>
          <p className="mt-4 max-w-xl border-l border-blood/70 pl-4 text-sm leading-6 text-fog md:leading-7">
            Bản demo hiện đang trong quá trình phát triển. Cốt truyện, nhân vật và
            khu vực có thể được điều chỉnh trong các bản cập nhật sau.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:flex-nowrap md:items-center">
            <a
              href={links.roblox}
              target="_blank"
              rel="noreferrer"
              className="red-button inline-flex h-12 w-full items-center justify-center gap-2.5 whitespace-nowrap px-6 text-[15px] leading-none sm:w-auto"
            >
              Chơi trên Roblox
              <ExternalLink size={17} className="shrink-0" />
            </a>
            <a
              href={links.tiktok}
              target="_blank"
              rel="noreferrer"
              className="outline-red-button inline-flex h-12 w-full items-center justify-center gap-2.5 whitespace-nowrap px-6 text-[15px] leading-none sm:w-auto"
            >
              Theo dõi TikTok
              <ExternalLink size={17} className="shrink-0" />
            </a>
            <a
              href={links.facebook}
              target="_blank"
              rel="noreferrer"
              className="outline-red-button inline-flex h-12 w-full items-center justify-center gap-2.5 whitespace-nowrap px-6 text-[15px] leading-none sm:w-auto"
            >
              Facebook dự án
              <ExternalLink size={17} className="shrink-0" />
            </a>
          </div>
        </motion.div>
      </div>

      <button
        type="button"
        onClick={() => onNavigate("story")}
        className="relative z-10 mx-auto mb-3 flex flex-col items-center gap-1.5 text-xs text-fog/80 transition hover:text-ember md:mb-5 md:gap-2"
      >
        <Mouse size={22} className="border border-blood/50 p-1" />
        <span>Kéo xuống để theo dõi dự án</span>
        <ChevronDown size={18} className="text-ember" />
      </button>
    </section>
  );
}
