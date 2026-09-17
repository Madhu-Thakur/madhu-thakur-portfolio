import { education } from '../../data/education.js'
import './Education.css'

function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="education__heading">
          <h2 className="education__title">Education</h2>
        </div>

        <ol className="education__timeline">
          {education.map((entry) => (
            <li
              key={entry.id}
              className={`education__entry${
                entry.current ? ' education__entry--current' : ''
              }`}
            >
              <div className="education__rail" aria-hidden="true">
                <span className="education__node">★</span>
                <span className="education__line" />
                <span className="education__terminus" />
              </div>

              <article className="education__card">
                <div className="education__head">
                  <h3 className="education__degree">{entry.degree}</h3>
                  {entry.achievement && (
                    <span className="education__achievement">
                      {entry.achievement}
                    </span>
                  )}
                </div>

                {entry.institution && (
                  <p className="education__institution">{entry.institution}</p>
                )}

                {entry.dates && (
                  <p className="education__dates">{entry.dates}</p>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Education