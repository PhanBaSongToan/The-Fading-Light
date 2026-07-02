import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";

const getCharacterLabel = (index) => `Nhân vật ${String(index + 1).padStart(2, "0")}`;

export default function CharactersSection({ characters, onSelectCharacter }) {
  return (
    <section id="characters" className="section-shell relative">
      <SectionTitle>Nhân vật</SectionTitle>
      <Reveal className="mx-auto mt-4 max-w-3xl text-center">
        <p className="text-base leading-7 text-fog md:text-lg">
          Một số hình ảnh nhân vật đang được thử nghiệm và hoàn thiện trong quá trình
          phát triển dự án.
        </p>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {characters.map((character, index) => {
          const label = getCharacterLabel(index);
          const neutralCharacter = {
            ...character,
            name: label,
            description:
              "Đây là hình ảnh tư liệu dùng để theo dõi quá trình thử nghiệm và hoàn thiện tạo hình nhân vật. Thông tin chi tiết có thể được cập nhật sau."
          };

          return (
            <motion.button
              type="button"
              key={character.id}
              className="chapter-card group flex min-h-[340px] flex-col text-left"
              onClick={() => onSelectCharacter(neutralCharacter)}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              whileHover={{ y: -7 }}
              transition={{ duration: 0.55, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative h-56 overflow-hidden border-b border-blood/40 bg-black/80">
                <img
                  src={character.image}
                  alt={label}
                  className="h-full w-full object-contain brightness-110 contrast-105 transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />
              </div>
              <div className="relative flex flex-1 flex-col p-5">
                <h3 className="font-display text-2xl leading-tight text-bone">{label}</h3>
                <p className="mt-3 text-sm leading-7 text-fog">
                  Ảnh tư liệu trong quá trình phát triển nhân vật.
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
