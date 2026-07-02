import React, { useEffect, useState } from "react";
import { ExternalLink, Menu, X } from "lucide-react";

export default function Navbar({ navLinks, activeId, logo, links, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTo = (id) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? "border-blood/30 bg-black/90 shadow-ember-soft backdrop-blur-xl"
          : "border-white/10 bg-black/40 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-[70px] max-w-[1200px] items-center justify-between px-5 lg:px-8">
        <button
          type="button"
          className="group flex items-center"
          onClick={() => goTo("home")}
          aria-label="Về đầu trang"
        >
          <img
            src={logo}
            alt="The Fading Light"
            className="h-10 w-auto opacity-95 transition duration-300 group-hover:opacity-100"
          />
        </button>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => goTo(link.id)}
              className={`nav-link ${activeId === link.id ? "text-ember" : ""}`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={links.roblox}
            target="_blank"
            rel="noreferrer"
            className="outline-red-button inline-flex items-center gap-2 px-5 py-3 text-sm"
          >
            Chơi trên Roblox
            <ExternalLink size={16} />
          </a>
        </div>

        <button
          type="button"
          className="icon-button lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-blood/20 bg-black/90 transition-all duration-300 lg:hidden ${
          open ? "max-h-[520px]" : "max-h-0 border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] flex-col px-5 py-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => goTo(link.id)}
              className={`border-b border-white/5 py-3 text-left text-sm transition hover:text-ember ${
                activeId === link.id ? "text-ember" : "text-bone"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href={links.roblox}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="outline-red-button mt-4 inline-flex items-center justify-center gap-2 px-6 py-3"
          >
            Chơi trên Roblox
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
