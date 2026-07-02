import React from "react";
import { Bell, Moon, Skull } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";

const facts = [
  { icon: Moon, label: "Xuất hiện:", value: "Khi ánh sáng yếu dần" },
  { icon: Bell, label: "Dấu hiệu:", value: "Đèn đỏ, chuông, bóng người" },
  { icon: Skull, label: "Trạng thái:", value: "Đang thử nghiệm" }
];

export default function EntitySection({ image }) {
  return (
    <section id="entity" className="section-shell relative">
      <div className="absolute inset-x-0 top-10 -z-10 h-[420px] bg-[radial-gradient(ellipse_at_center,rgba(122,25,17,.24),transparent_65%)]" />
      <div className="grid items-center gap-10 md:grid-cols-[.92fr_1.08fr]">
        <Reveal>
          <div>
            <h2 className="font-display text-3xl text-bone md:text-4xl">
              Thực thể trong bóng tối
            </h2>
            <div className="my-5 h-px w-48 bg-gradient-to-r from-blood via-rust to-transparent" />
            <p className="max-w-lg text-lg leading-8 text-bone/80">
              Một hình bóng xuất hiện khi ánh sáng yếu dần. Thiết kế hiện tại là bản
              thử nghiệm để kiểm tra không khí kinh dị trong bản demo Roblox.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {facts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="fact-pill">
                  <Icon size={24} className="text-ember" />
                  <span>
                    <strong>{label}</strong> {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <motion.div
          className="entity-frame"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          animate={{ y: [0, -9, 0] }}
          transition={{
            opacity: { duration: 0.75 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <div className="smoke-layer" />
          <img
            src={image}
            alt="Thực thể tóc dài trong bóng tối"
            className="relative z-10 h-full w-full object-contain object-bottom mix-blend-lighten"
          />
        </motion.div>
      </div>
    </section>
  );
}
