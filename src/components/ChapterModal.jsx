import React from "react";
import { ExternalLink } from "lucide-react";
import Modal from "./Modal.jsx";

export default function ChapterModal({ chapter, links, onClose }) {
  return (
    <Modal
      open={Boolean(chapter)}
      onClose={onClose}
      title={chapter ? `${chapter.kicker} ${chapter.title}` : ""}
    >
      {chapter ? (
        <div>
          <div className="relative h-64 overflow-hidden border-b border-blood/25">
            <img
              src={chapter.image}
              alt={chapter.title}
              className="h-full w-full object-cover brightness-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <span className="absolute bottom-4 left-5 border border-blood/60 bg-black/70 px-3 py-1 text-xs uppercase text-ember">
              {chapter.tag}
            </span>
          </div>
          <div className="p-6">
            <p className="text-lg leading-8 text-bone/85">{chapter.description}</p>
            <p className="mt-4 text-sm leading-7 text-fog">{chapter.details}</p>
            <p className="mt-4 border-l border-blood/70 pl-4 text-sm leading-7 text-fog">
              Đây là khu vực đang phát triển, không phải chương cuối cùng đã khóa nội
              dung.
            </p>
            <a
              href={links.roblox}
              target="_blank"
              rel="noreferrer"
              className="red-button mt-6 inline-flex items-center gap-3 px-7 py-3"
            >
              Mở Roblox
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      ) : null}
    </Modal>
  );
}
