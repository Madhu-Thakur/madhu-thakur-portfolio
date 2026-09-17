import { useEffect, useState } from "react";
import VideoIntro from "../VideoIntro/VideoIntro.jsx";
import "./Hero.css";
 
const FULL_NAME = "Madhu Thakur";
const TYPE_INTERVAL_MS = 120;
const CURSOR_HOLD_MS = 450;

function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function Hero() {
  const [reduceMotion] = useState(prefersReducedMotion);
  const [typedLength, setTypedLength] = useState(() =>
    prefersReducedMotion() ? FULL_NAME.length : 0
  );
  const [showCursor, setShowCursor] = useState(() => !prefersReducedMotion());

  useEffect(() => {
    if (reduceMotion) return undefined;

    let typed = 0;
    const typingTimer = window.setInterval(() => {
      typed += 1;
      setTypedLength(typed);
 
      if (typed >= FULL_NAME.length) window.clearInterval(typingTimer);
    }, TYPE_INTERVAL_MS);

    const cursorTimer = window.setTimeout(
      () => setShowCursor(false),
      FULL_NAME.length * TYPE_INTERVAL_MS + CURSOR_HOLD_MS
    );

    return () => {
      window.clearInterval(typingTimer);
      window.clearTimeout(cursorTimer);
    };
  }, [reduceMotion]);

  const typedName = FULL_NAME.slice(0, typedLength);

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__grid container">
        <div className="hero__content">
          <h1 className="hero__name" id="hero-heading">
            <span className="hero__name-typed" aria-hidden="true">
              {typedName}
              {!reduceMotion && (
                <span
                  className={`hero__name-cursor${
                    showCursor ? "" : " hero__name-cursor--done"
                  }`}
                />
              )}
            </span>
            <span className="hero__name-sr">{FULL_NAME}</span>
          </h1>
          <p className="hero__role">Full Stack Developer</p>
          <p className="hero__description">
            I build web applications from interface to database, connecting
            frontend, backend, APIs, and data into solutions that actually work.
          </p>

          <div className="hero__actions row">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn--secondary">
              Let’s Connect
            </a>
          </div>
        </div>

        <div className="hero__media">
          <VideoIntro />
        </div>
      </div>
    </section>
  );
}

export default Hero;
