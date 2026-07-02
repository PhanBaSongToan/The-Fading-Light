import React from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";

export default function DevlogSection({ items, summary }) {
  return (
    <section id="updates" className="section-shell relative">
      <SectionTitle>Nhật ký phát triển</SectionTitle>
      <Reveal className="mx-auto mt-4 max-w-3xl text-center">
        <p className="text-base leading-7 text-fog md:text-lg">
          Một số thay đổi và cập nhật đáng chú ý trong quá trình phát triển The Fading
          Light.
        </p>
      </Reveal>

      <div className="mx-auto mt-10 max-w-5xl">
        {items.map((item, index) => (
          <motion.article
            key={`${item.phase}-${item.title}`}
            className="relative border-l border-blood/40 pb-7 pl-6 last:pb-0"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.5, delay: Math.min(index * 0.035, 0.24) }}
          >
            <span className="absolute -left-[7px] top-2 h-3 w-3 border border-ember bg-ash shadow-ember" />
            <div className="ornate-panel p-5 md:p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-sm text-ember">{item.phase}</p>
                  <h3 className="mt-1 font-display text-2xl leading-tight text-bone md:text-3xl">
                    {item.title}
                  </h3>
                </div>
                <span className="w-fit border border-blood/50 bg-black/45 px-3 py-1 text-xs text-fog">
                  Cập nhật {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-bone/85 md:text-base">
                {item.summary}
              </p>

              <details className="devlog-details group mt-5 border border-blood/35 bg-black/30 p-4" open={index < 2}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm text-ember">
                  <span>{item.pointsTitle}</span>
                  <ChevronDown className="shrink-0 transition group-open:rotate-180" size={18} />
                </summary>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-fog">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-ember shadow-ember-soft" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </details>

              {item.goals?.length ? (
                <div className="mt-4 border border-blood/25 bg-black/20 p-4">
                  <h4 className="text-sm text-ember">{item.goalsTitle}</h4>
                  <ul className="mt-3 grid gap-2 text-sm leading-7 text-fog md:grid-cols-2">
                    {item.goals.map((goal) => (
                      <li key={goal} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-ember shadow-ember-soft" />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {item.closing ? (
                <p className="mt-5 border-l border-blood/70 pl-4 text-sm leading-7 text-fog">
                  {item.closing}
                </p>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>

      {summary ? (
        <Reveal className="mx-auto mt-10 max-w-5xl">
          <div className="ornate-panel overflow-hidden p-6 md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_20%,rgba(236,59,35,.14),transparent_42%)]" />
            <div className="relative z-10">
              <h3 className="font-display text-3xl leading-tight text-bone">
                {summary.title}
              </h3>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {summary.points.map((point) => (
                  <div key={point} className="fact-pill min-h-[58px]">
                    <span className="h-2 w-2 shrink-0 bg-ember shadow-ember-soft" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 max-w-4xl text-sm leading-7 text-fog md:text-base">
                {summary.closing}
              </p>
            </div>
          </div>
        </Reveal>
      ) : null}
    </section>
  );
}
