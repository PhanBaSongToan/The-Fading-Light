import React from "react";
import Reveal from "./Reveal.jsx";

export default function StorySection({ assets }) {
  return (
    <section id="story" className="section-shell relative">
      <Reveal>
        <div className="ornate-panel grid gap-10 p-6 md:grid-cols-[.82fr_1.18fr] md:p-10">
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-3xl leading-tight text-bone md:text-4xl">
              Ánh sáng phai dần, ký ức bắt đầu thức tỉnh
            </h2>
            <div className="my-5 h-px w-44 bg-gradient-to-r from-blood via-rust to-transparent" />
            <p className="max-w-xl text-base leading-8 text-fog">
              Dự án theo chân Minh trong một thế giới quen thuộc nhưng méo mó: sân
              trường, hành lang, con hẻm, căn phòng bỏ hoang và những khu vực gợi lại
              quá khứ. Đây chưa phải phiên bản hoàn chỉnh của cốt truyện. Website này
              được tạo để người chơi theo dõi quá trình phát triển, xem hình ảnh mới và
              cập nhật tình trạng của game.
            </p>
            <p className="mt-5 border border-blood/40 bg-black/35 p-4 text-sm leading-7 text-bone/80 shadow-inner-red">
              Nội dung hiện tại là bản đang phát triển. Một số tình tiết, nhân vật, khu
              vực và gameplay có thể thay đổi trong các bản cập nhật sau.
            </p>
          </div>

          <div className="grid min-h-[285px] grid-cols-1 gap-3 sm:grid-cols-2">
            <figure className="image-frame">
              <img
                src={assets.storySchool}
                alt="Sân trường cũ trong bản demo"
                className="h-full w-full object-cover brightness-105"
              />
            </figure>
            <figure className="image-frame">
              <img
                src={assets.storyAlley}
                alt="Con hẻm cũ đang được phát triển"
                className="h-full w-full object-cover brightness-105"
              />
            </figure>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
