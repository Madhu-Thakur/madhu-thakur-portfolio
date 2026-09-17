function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="about__title">About Me</h2>

        <div className="about__grid">
          <div className="about__intro">
            <h3 className="about__heading">A little about me</h3>
            <p className="about__text">
              I'm Madhu, an MCA graduate and Full Stack Web Developer.
            </p>
            <p className="about__text">
              I build practical web applications and enjoy understanding how the
              frontend, backend, APIs, and database work together.
            </p>
            <p className="about__text">
              I'm currently improving my skills through real projects and
              hands-on development experience, with a focus on React.js, Node.js,
              Express.js, and MySQL.
            </p>
          </div>

          <div className="about__work">
            <h3 className="about__heading">How I Work</h3>
            <p className="about__text">
              I like breaking problems into smaller parts, building step by step,
              and keeping the code simple and maintainable.
            </p>
            <ul className="about__tech">
              <li className="about__tech-item">React.js</li>
              <li className="about__tech-item">Node.js</li>
              <li className="about__tech-item">Express.js</li>
              <li className="about__tech-item">JavaScript</li>
              <li className="about__tech-item">MySQL</li>
              <li className="about__tech-item">MongoDB</li>
            </ul>
          </div>
        </div>

        <div className="about__highlights">
          <div className="about__highlight">
            <p className="about__highlight-label">MCA Graduate</p>
            <p className="about__highlight-value">2023 – 2025</p>
          </div>
          <div className="about__highlight">
            <p className="about__highlight-label">Gold Medalist</p>
            <p className="about__highlight-value about__highlight-value--accent">
              HNB Garhwal Central University
            </p>
          </div>
          <div className="about__highlight">
            <p className="about__highlight-label">Full Stack Focus</p>
            <p className="about__highlight-value">React • Node • MySQL</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
