import React from "react";
import { BadgeCheck, Gamepad2, Hammer, Radio, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";

const iconMap = {
  gamepad: Gamepad2,
  hammer: Hammer,
  refresh: RefreshCw,
  broadcast: Radio
};

export default function DevelopmentStatusSection({ items }) {
  return (
    <section id="progress" className="section-shell relative">
      <div className="absolute inset-x-0 top-12 -z-10 h-72 bg-[radial-gradient(ellipse_at_center,rgba(179,35,24,.18),transparent_68%)]" />
      <SectionTitle>Trạng thái phát triển</SectionTitle>
      <Reveal className="mx-auto mt-4 max-w-3xl text-center">
        <p className="text-base leading-7 text-fog md:text-lg">
          Bản demo đang phát triển. Nội dung có thể thay đổi trong các bản cập nhật sau
          khi map, nhiệm vụ, nhân vật và nhịp kinh dị được hoàn thiện thêm.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => {
          const Icon = iconMap[item.icon] ?? BadgeCheck;

          return (
            <motion.article
              key={item.id}
              className="ornate-panel flex min-h-[210px] flex-col justify-between p-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
            >
              <span className="flex h-12 w-12 items-center justify-center border border-blood/60 bg-black/50 text-ember shadow-ember-soft">
                <Icon size={23} />
              </span>
              <div className="mt-5">
                <h3 className="font-display text-xl leading-tight text-bone">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-fog">{item.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
