import { useEffect, useState } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const handleChange = (event) => {
      if (event.matches) setMenuOpen(false)
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => ({
      id: link.href.slice(1),
      el: document.getElementById(link.href.slice(1)),
    })).filter((s) => s.el)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    sections.forEach((s) => observer.observe(s.el))
    return () => observer.disconnect()
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <a href="#top" className="navbar__brand" aria-label="Madhu Thakur — home">
          Madhu Thakur
        </a>

        <nav className="navbar__nav" aria-label="Primary">
          <ul className="navbar__list">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.slice(1)
              const isActive = activeSection === sectionId
              return (
                <li key={link.href}>
                  <a
                    className={`navbar__link${isActive ? ' navbar__link--active' : ''}`}
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="navbar__resume">
          <button
            type="button"
            className="btn btn--secondary"
            disabled
            title="Resume coming soon"
          >
            Resume
          </button>
        </div>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>

        <div
          id="navbar-menu"
          className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
        >
          <nav aria-label="Primary (mobile)">
            <ul className="navbar__mobile-list">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.slice(1)
                const isActive = activeSection === sectionId
                return (
                  <li key={link.href}>
                    <a
                      className={`navbar__mobile-link${isActive ? ' navbar__mobile-link--active' : ''}`}
                      href={link.href}
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
