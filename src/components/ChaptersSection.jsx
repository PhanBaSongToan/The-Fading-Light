import React from "react";
import SectionTitle from "./SectionTitle.jsx";
import ChapterCard from "./ChapterCard.jsx";
import Reveal from "./Reveal.jsx";

export default function ChaptersSection({ chapters, onSelectChapter }) {
  return (
    <section id="areas" className="section-shell relative">
      <SectionTitle>Khu vực đang phát triển</SectionTitle>
      <Reveal className="mx-auto mt-4 max-w-3xl text-center">
        <p className="text-base leading-7 text-fog md:text-lg">
          Những khu vực này đang được xây dựng cho bản demo Roblox. Tên gọi, thứ tự và
          vai trò trong cốt truyện có thể thay đổi khi dự án tiến triển.
        </p>
      </Reveal>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {chapters.map((chapter, index) => (
          <ChapterCard
            key={chapter.id}
            chapter={chapter}
            delay={index * 0.06}
            onSelect={onSelectChapter}
          />
        ))}
      </div>
    </section>
  );
}
