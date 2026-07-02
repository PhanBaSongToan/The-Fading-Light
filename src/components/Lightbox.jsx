import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Lightbox({ items, index, onClose, onNext, onPrev }) {
  const item = index === null ? null : items[index];

  useEffect(() => {
    if (!item) return undefined;
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [item, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          className="fixed inset-0 z-[75] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
        >
          <button
            type="button"
            className="icon-button absolute right-5 top-5"
            onClick={onClose}
            aria-label="Đóng ảnh"
          >
            <X size={21} />
          </button>
          <button
            type="button"
            className="lightbox-arrow left-4"
            onClick={(event) => {
              event.stopPropagation();
              onPrev();
            }}
            aria-label="Ảnh trước"
          >
            <ChevronLeft size={27} />
          </button>
          <motion.figure
            key={item.image}
            className="relative max-h-[82vh] w-full max-w-5xl overflow-hidden border border-blood/40 bg-black shadow-ember-soft"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <img
              src={item.image}
              alt="Ảnh tư liệu phát triển"
              className="max-h-[82vh] w-full object-contain"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-5 font-body text-sm text-bone/85">
              Ảnh tư liệu phát triển
            </figcaption>
          </motion.figure>
          <button
            type="button"
            className="lightbox-arrow right-4"
            onClick={(event) => {
              event.stopPropagation();
              onNext();
            }}
            aria-label="Ảnh tiếp theo"
          >
            <ChevronRight size={27} />
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
