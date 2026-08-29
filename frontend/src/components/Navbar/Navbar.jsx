import { useEffect, useState } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the mobile menu whenever the viewport grows past the breakpoint.
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')
    const handleChange = (event) => {
      if (event.matches) setMenuOpen(false)
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
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
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className="navbar__link" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
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
          <span className="navbar__coming-soon" aria-hidden="true">
            Coming soon
          </span>
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

        {/*
          Mobile menu is rendered at the end of the header so the toggle
          (aria-controls) can reference it in the same tree.
        */}
        <div
          id="navbar-menu"
          className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
        >
          <nav aria-label="Primary (mobile)">
            <ul className="navbar__mobile-list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    className="navbar__mobile-link"
                    href={link.href}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar