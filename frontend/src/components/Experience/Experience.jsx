import { experience } from '../../data/experience.js'
import './Experience.css'

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="experience__heading">
          <h2 className="experience__title">Experience</h2>
        </div>

        <ol className="experience__timeline">
          {experience.map((entry) => (
            <li
              key={entry.id}
              className={`experience__entry${
                entry.current ? ' experience__entry--current' : ''
              }`}
            >
              <div className="experience__rail" aria-hidden="true">
                <span className="experience__node" />
                <span className="experience__line" />
                <span className="experience__terminus" />
              </div>

              <article className="experience__card">
                <div className="experience__head">
                  <h3 className="experience__role">{entry.role}</h3>
                  {entry.status && (
                    <span className="experience__status">{entry.status}</span>
                  )}
                </div>

                <p className="experience__company">{entry.company}</p>

                <p className="experience__dates">
                  <span className="experience__date">{entry.dates}</span>
                  <span className="experience__duration">
                    Duration: {entry.duration}
                  </span>
                </p>

                <p className="experience__description">{entry.description}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience