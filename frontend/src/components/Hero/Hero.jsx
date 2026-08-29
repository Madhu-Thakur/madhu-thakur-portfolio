import VideoIntro from '../VideoIntro/VideoIntro.jsx'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__grid container">
        <div className="hero__content">
          <p className="hero__eyebrow">Hello, I’m</p>
          <h1 className="hero__name" id="hero-heading">
            Madhu Thakur
          </h1>
          <p className="hero__role">Full Stack Developer</p>
          <p className="hero__description">
            I build practical, user-friendly web applications with modern
            technologies. I enjoy turning ideas into real products that solve
            problems.
          </p>

          <div className="hero__actions row">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn--secondary">
              Let’s Connect
            </a>
            <button
              type="button"
              className="btn btn--link"
              disabled
              title="Resume coming soon"
            >
              Resume
            </button>
          </div>
        </div>

        <div className="hero__media">
          <VideoIntro />
        </div>
      </div>
    </section>
  )
}

export default Hero