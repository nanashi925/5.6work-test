"use client";

import { useEffect, useState } from "react";

const works = [
  {
    number: "01",
    title: "紫環の観測者",
    subtitle: "THE VIOLET ORACLE",
    image: "/works/01-purple-oracle.jpeg",
    ratio: "portrait",
  },
  {
    number: "02",
    title: "赤い回廊",
    subtitle: "VERMILION CORRIDOR",
    image: "/works/02-red-corridor.jpeg",
    ratio: "wide",
  },
  {
    number: "03",
    title: "月を封じた標本",
    subtitle: "SPECIMENS OF THE MOON",
    image: "/works/03-moon-specimens.jpeg",
    ratio: "square",
  },
  {
    number: "04",
    title: "緋冠",
    subtitle: "THE CRIMSON CROWN",
    image: "/works/04-crimson-crown.jpeg",
    ratio: "portrait",
  },
  {
    number: "05",
    title: "骸花の天使",
    subtitle: "SERAPH IN BLOOM",
    image: "/works/05-blooming-seraph.jpeg",
    ratio: "portrait",
  },
  {
    number: "06",
    title: "虚ろを抱く者",
    subtitle: "THE VOID BEARER",
    image: "/works/06-void-bearer.jpeg",
    ratio: "portrait",
  },
  {
    number: "07",
    title: "蒼薔薇",
    subtitle: "BLUE ROSE",
    image: "/works/07-blue-rose.jpeg",
    ratio: "square",
  },
  {
    number: "08",
    title: "夏の休息",
    subtitle: "A SMALL SUMMER REST",
    image: "/works/08-summer-rest.jpeg",
    ratio: "landscape",
  },
  {
    number: "09",
    title: "名もなき肖像",
    subtitle: "NAMELESS PORTRAIT",
    image: "/works/09-nameless-portrait.jpeg",
    ratio: "square",
  },
];

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = () => setSelectedIndex(null);
  const showPrevious = () =>
    setSelectedIndex((current) =>
      current === null ? null : (current - 1 + works.length) % works.length,
    );
  const showNext = () =>
    setSelectedIndex((current) =>
      current === null ? null : (current + 1) % works.length,
    );

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  const selectedWork = selectedIndex === null ? null : works[selectedIndex];

  return (
    <main>
      <header className="site-header" aria-label="メインナビゲーション">
        <a className="wordmark" href="#top" aria-label="ページ上部へ">
          N<span>∅</span>A
        </a>
        <div className="header-meta" aria-hidden="true">
          <span>VISUAL ARCHIVE</span>
          <span>TOKYO / 2026</span>
        </div>
        <a className="index-link" href="#works">
          INDEX <span>09</span>
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/works/02-red-corridor.jpeg"
          alt="赤と青の視線が交差する作品『赤い回廊』"
        />
        <div className="hero-shade" />
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-copy">
          <p className="eyebrow">SELECTED WORKS / 01—09</p>
          <h1 id="hero-title">
            NANASHI
            <span>ARCHIVE</span>
          </h1>
          <p className="hero-jp">暗闇に咲く、色彩の記録。</p>
        </div>
        <div className="hero-caption">
          <span>FEATURED 02</span>
          <p>VERMILION CORRIDOR</p>
        </div>
        <a className="scroll-cue" href="#works">
          <span>SCROLL TO EXPLORE</span>
          <i aria-hidden="true" />
        </a>
      </section>

      <div className="signal" aria-hidden="true">
        <div>
          <span>MYTH</span><b>✦</b><span>SHADOW</span><b>✦</b><span>FLOWER</span><b>✦</b><span>SILENCE</span><b>✦</b><span>MYTH</span><b>✦</b><span>SHADOW</span>
        </div>
      </div>

      <section className="works-section" id="works" aria-labelledby="works-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow violet">ARCHIVE / 2026</p>
            <h2 id="works-title">SELECTED<br />WORKS</h2>
          </div>
          <p className="section-note">黒を余白として、神話・花・静寂を描く。<br />九つの断片からなる視覚記録。</p>
        </div>

        <div className="gallery-instruction">
          <span>EXPLORE THE ARCHIVE</span>
          <p>作品をタップすると全体を表示します</p>
        </div>

        <div className="gallery-grid">
          {works.map((work, index) => (
            <article className={`work-card ${work.ratio}`} key={work.number}>
              <button
                className="work-media"
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`${work.title}を拡大表示`}
              >
                <img src={work.image} alt={`作品『${work.title}』`} loading={work.number === "01" ? "eager" : "lazy"} />
                <span className="work-number">N° {work.number}</span>
                <span className="work-view" aria-hidden="true">VIEW <b>＋</b></span>
                <div className="work-glow" />
              </button>
              <div className="work-caption">
                <h3>{work.title}</h3>
                <p>{work.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="statement" aria-label="作家ステートメント">
        <div className="statement-mark" aria-hidden="true">∅</div>
        <p className="eyebrow violet">ARTIST STATEMENT</p>
        <p className="statement-copy">美しいものは、<br />光の中だけにあるわけじゃない。</p>
        <div className="statement-line" />
        <p className="statement-en">BEAUTY DOES NOT<br />ONLY EXIST IN LIGHT.</p>
      </section>

      <footer>
        <a className="wordmark footer-mark" href="#top">N<span>∅</span>A</a>
        <p>VISUAL WORKS BY NANASHI</p>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>

      {selectedWork && selectedIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${selectedWork.title}の拡大表示`}>
          <button className="lightbox-backdrop" type="button" onClick={closeLightbox} aria-label="拡大表示を閉じる" />
          <div className="lightbox-topbar">
            <div>
              <span>N° {selectedWork.number}</span>
              <p>{selectedWork.subtitle}</p>
            </div>
            <button className="lightbox-close" type="button" onClick={closeLightbox} autoFocus aria-label="閉じる">
              <span>CLOSE</span><b>×</b>
            </button>
          </div>
          <div className="lightbox-stage">
            <img src={selectedWork.image} alt={`作品『${selectedWork.title}』の全体`} />
          </div>
          <div className="lightbox-footer">
            <button type="button" onClick={showPrevious} aria-label="前の作品">← <span>PREV</span></button>
            <div>
              <h2>{selectedWork.title}</h2>
              <p>{String(selectedIndex + 1).padStart(2, "0")} / {String(works.length).padStart(2, "0")}</p>
            </div>
            <button type="button" onClick={showNext} aria-label="次の作品"><span>NEXT</span> →</button>
          </div>
        </div>
      )}
    </main>
  );
}
