import React, { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import StorySection from "./components/StorySection.jsx";
import DevelopmentStatusSection from "./components/DevelopmentStatusSection.jsx";
import ChaptersSection from "./components/ChaptersSection.jsx";
import CharactersSection from "./components/CharactersSection.jsx";
import GallerySection from "./components/GallerySection.jsx";
import DevlogSection from "./components/DevlogSection.jsx";
import CTASection from "./components/CTASection.jsx";
import Footer from "./components/Footer.jsx";
import ChapterModal from "./components/ChapterModal.jsx";
import CharacterModal from "./components/CharacterModal.jsx";
import Lightbox from "./components/Lightbox.jsx";
import Embers from "./components/Embers.jsx";
import {
  assets,
  chapters,
  characters,
  developmentStatus,
  devlog,
  devlogSummary,
  gallery,
  links,
  navLinks
} from "./data/siteData.js";

const sectionIds = navLinks.map((link) => link.id);

export default function App() {
  const [activeId, setActiveId] = useState("home");
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const navigateTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, []);

  const nextImage = useCallback(() => {
    setLightboxIndex((index) => (index === null ? 0 : (index + 1) % gallery.length));
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIndex((index) =>
      index === null ? gallery.length - 1 : (index - 1 + gallery.length) % gallery.length
    );
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.02, 0.15, 0.32]
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-ash text-bone">
      <Embers />
      <Navbar
        navLinks={navLinks}
        activeId={activeId}
        logo={assets.logoMark}
        links={links}
        onNavigate={navigateTo}
      />
      <main>
        <Hero assets={assets} links={links} onNavigate={navigateTo} />
        <StorySection assets={assets} />
        <DevelopmentStatusSection items={developmentStatus} />
        <ChaptersSection chapters={chapters} onSelectChapter={setSelectedChapter} />
        <CharactersSection characters={characters} onSelectCharacter={setSelectedCharacter} />
        <GallerySection gallery={gallery} onOpen={setLightboxIndex} />
        <DevlogSection items={devlog} summary={devlogSummary} />
        <CTASection links={links} />
      </main>
      <Footer logo={assets.logoMark} links={links} />

      <ChapterModal
        chapter={selectedChapter}
        links={links}
        onClose={() => setSelectedChapter(null)}
      />
      <CharacterModal
        character={selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
      />
      <Lightbox
        items={gallery}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </div>
  );
}
