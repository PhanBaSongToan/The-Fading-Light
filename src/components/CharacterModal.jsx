import React from "react";
import Modal from "./Modal.jsx";

export default function CharacterModal({ character, onClose }) {
  return (
    <Modal
      open={Boolean(character)}
      onClose={onClose}
      title={character ? character.name : ""}
    >
      {character ? (
        <div>
          <div className="relative h-[420px] max-h-[58vh] overflow-hidden border-b border-blood/25 bg-black">
            <img
              src={character.image}
              alt={character.name}
              className="h-full w-full object-contain brightness-110 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
          </div>
          <div className="p-6">
            <p className="text-base leading-8 text-bone/85">
              Đây là hình ảnh tư liệu dùng để theo dõi quá trình thử nghiệm và hoàn
              thiện tạo hình nhân vật. Thông tin chi tiết có thể được cập nhật sau.
            </p>
          </div>
        </div>
      ) : null}
    </Modal>
  );
}
