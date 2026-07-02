import React from "react";
import { BookOpen, Building2, Moon, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  moon: Moon,
  book: BookOpen,
  building: Building2,
  wrench: Wrench
};

export default function ChapterCard({ chapter, onSelect, delay = 0 }) {
  const Icon = iconMap[chapter.icon] ?? BookOpen;

  return (
    <motion.button
      type="button"
      className="chapter-card group flex min-h-[350px] flex-col text-left"
      onClick={() => onSelect(chapter)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -7 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative h-40 overflow-hidden border-b border-blood/40">
        <img
          src={chapter.image}
          alt={chapter.title}
          className="h-full w-full object-cover brightness-105 transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <span className="absolute right-3 top-3 border border-blood/60 bg-black/70 px-3 py-1 text-xs uppercase text-ember">
          {chapter.tag}
        </span>
      </div>
      <div className="relative flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-end gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-blood bg-black/60 text-ember shadow-ember-soft">
            <Icon size={21} />
          </span>
          <h3 className="font-display text-xl leading-tight text-bone">
            <span className="block text-sm text-bone/80">{chapter.kicker}</span>
            {chapter.title}
          </h3>
        </div>
        <p className="text-sm leading-7 text-fog">{chapter.description}</p>
      </div>
    </motion.button>
  );
}
