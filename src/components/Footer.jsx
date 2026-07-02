import React from "react";
import { Gamepad2, Globe2, Music2 } from "lucide-react";

export default function Footer({ logo, links }) {
  const socialLinks = [
    { label: "TikTok", href: links.tiktok, icon: Music2 },
    { label: "Facebook", href: links.facebook, icon: Globe2 },
    { label: "Roblox", href: links.roblox, icon: Gamepad2 }
  ];

  return (
    <footer className="border-t border-blood/25 bg-black/80">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-5 py-6 text-center md:flex-row md:text-left lg:px-8">
        <img
          src={logo}
          alt="The Fading Light"
          className="h-11 w-auto opacity-80"
        />
        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              key={label}
              className="icon-button"
              aria-label={label}
              title={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <p className="text-sm text-fog">
          © The Fading Light - Tân Minh. Roblox demo project in development.
        </p>
      </div>
    </footer>
  );
}
