// About — personal introduction.
// Content is intentionally factual and written like a real fresher — no
// generic marketing language. Confirmed details only (see "no fabrication").
function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__heading">
          <p className="about__eyebrow">05 — About</p>
          <h2 className="about__title">About Me</h2>
        </div>

        <div className="about__body">
          <p className="about__lead">
            I’m Madhu — an MCA graduate with a strong interest in full-stack
            development.
          </p>
          <p className="about__text">
            I enjoy building practical web applications and understanding how
            the frontend, backend and database work together. I’m learning by
            building real projects, and I like turning an idea into something
            people can actually use.
          </p>

          <ul className="about__points">
            <li className="about__point">
              <span className="about__point-title">Full Stack Development</span>
              <span className="about__point-desc">
                Working across the UI, API and database layers.
              </span>
            </li>
            <li className="about__point">
              <span className="about__point-title">Problem Solving</span>
              <span className="about__point-desc">
                Breaking problems down and building step by step.
              </span>
            </li>
            <li className="about__point">
              <span className="about__point-title">Continuous Learning</span>
              <span className="about__point-desc">
                Improving my skills by picking up new tools and technologies.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About