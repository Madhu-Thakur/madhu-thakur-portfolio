import { useEffect, useRef, useState } from 'react'
import { certifications } from '../../data/certifications.js'
import './Certifications.css'

const TYPEWRITER_TEXT = 'Madhu Thakher'
const TYPEWRITER_SPEED = 90
const CURSOR_BLINK = 530

function useInView(ref) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])

  return inView
}

function TypewriterText() {
  const [displayed, setDisplayed] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)
  const [finished, setFinished] = useState(false)
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef)

  useEffect(() => {
    if (!inView) return

    let index = 0
    const interval = setInterval(() => {
      index++
      setDisplayed(TYPEWRITER_TEXT.slice(0, index))
      if (index >= TYPEWRITER_TEXT.length) {
        clearInterval(interval)
        setFinished(true)
      }
    }, TYPEWRITER_SPEED)

    return () => clearInterval(interval)
  }, [inView])

  useEffect(() => {
    if (finished) return
    const blink = setInterval(() => {
      setCursorVisible((v) => !v)
    }, CURSOR_BLINK)
    return () => clearInterval(blink)
  }, [finished])

  return (
    <span ref={sectionRef} className="certifications__recipient">
      <span className="certifications__recipient-label">Certified to: </span>
      <span className="certifications__typewriter">
        {displayed}
        {!finished && (
          <span
            className={`certifications__cursor${cursorVisible ? ' certifications__cursor--visible' : ''}`}
            aria-hidden="true"
          >
            |
          </span>
        )}
      </span>
    </span>
  )
}

function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <div className="certifications__heading">
          <h2 className="certifications__title">Certifications & Achievements</h2>
          <p className="certifications__intro">
            Verified technical competencies and formal credential records.
          </p>
          <TypewriterText />
        </div>

        <div className="certifications__registry">
          {certifications.length === 0 ? (
            <p className="certifications__empty">
              Certifications will be added here.
            </p>
          ) : (
            <>
              <div className="certifications__head">
                <span>Certification</span>
                <span>Issuing Organization</span>
                <span>Issued</span>
                <span>Verify</span>
              </div>

              <ul className="certifications__list">
                {certifications.map((certification) => (
                  <li
                    key={certification.id}
                    className={`certifications__row${certification.isAchievement ? ' certifications__row--achievement' : ''}`}
                  >
                    <div className="certifications__name-wrap">
                      <h3 className="certifications__name">
                        {certification.name}
                      </h3>
                      {certification.instructor && (
                        <span className="certifications__instructor">
                          Instructor: {certification.instructor}
                        </span>
                      )}
                      {certification.description && (
                        <p className="certifications__description">
                          {certification.description}
                        </p>
                      )}
                      {certification.credentialId && (
                        <span className="certifications__credential">
                          ID: {certification.credentialId}
                        </span>
                      )}
                    </div>

                    <span className="certifications__issuer">
                      {certification.issuer}
                    </span>

                    <span className="certifications__issued">
                      {certification.issuedDate}
                    </span>

                    <span className="certifications__verify">
                      {certification.credentialUrl ? (
                        <a
                          className="certifications__verify-link"
                          href={certification.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${certification.name} (opens in a new tab)`}
                        >
                          {certification.isTrainingLink ? 'View Training' : 'View Certificate'}{' '}
                          <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        <span className="certifications__verify-disabled">
                          Coming Soon
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Certifications