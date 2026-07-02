import React from "react";
import SectionTitle from "./SectionTitle.jsx";
import Reveal from "./Reveal.jsx";

export default function GallerySection({ gallery, onOpen }) {
  return (
    <section id="gallery" className="section-shell relative">
      <SectionTitle>Khung cảnh &amp; ký ức</SectionTitle>
      <Reveal className="mx-auto mt-4 max-w-3xl text-center">
        <p className="text-base leading-7 text-fog md:text-lg">
          Một album hình ảnh ghi lại các khu vực, khoảnh khắc và tư liệu trong quá
          trình phát triển The Fading Light.
        </p>
      </Reveal>
      <Reveal className="mt-8">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4 lg:grid-cols-8">
          {gallery.map((item, index) => (
            <button
              type="button"
              key={`${item.title}-${index}`}
              onClick={() => onOpen(index)}
              className={`image-frame gallery-tile group ${item.span} ${item.height}`}
            >
              <img
                src={item.image}
                alt="Ảnh tư liệu phát triển"
                className="h-full w-full object-cover brightness-125 contrast-105 transition duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/0" />
              <span className="absolute bottom-3 left-3 right-3 translate-y-2 text-left text-sm text-bone opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                Ảnh tư liệu phát triển
              </span>
            </button>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
