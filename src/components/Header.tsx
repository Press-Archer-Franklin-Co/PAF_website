import { Link } from '@tanstack/react-router'
import { useState } from 'react'

type HeaderLink = {
  label: string
  to: string
  hash?: string
}

type HeaderProps = {
  authLink: HeaderLink
  applyLink: HeaderLink
  homeLink: Omit<HeaderLink, 'label'>
  links: HeaderLink[]
}

export function Header({ authLink, applyLink, homeLink, links }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigate = () => setIsOpen(false)

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="site-brand" to={homeLink.to} hash={homeLink.hash} onClick={handleNavigate}>
          <img
            className="brand-mark brand-mark--spin"
            src="/reference/logo.png"
            alt="Press Archer Franklin logo"
          />
          <strong>Press Archer Franklin Co.</strong>
        </Link>

        <button
          type="button"
          className="site-nav__toggle"
          aria-expanded={isOpen}
          aria-controls="site-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
          <span className="sr-only">Toggle navigation</span>
        </button>

        <div
          className={`site-nav ${isOpen ? 'site-nav--open' : ''}`}
          id="site-navigation"
        >
          <nav aria-label="Primary navigation">
            <ul className="site-nav__list">
              {links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} hash={link.hash} onClick={handleNavigate}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            className="site-nav__auth"
            to={authLink.to}
            hash={authLink.hash}
            onClick={handleNavigate}
          >
            <span className="site-nav__auth-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path d="M12 12c2.76 0 5-2.46 5-5.5S14.76 1 12 1 7 3.46 7 6.5s2.24 5.5 5 5.5Zm0 2c-4.42 0-8 2.69-8 6v1h16v-1c0-3.31-3.58-6-8-6Z" />
              </svg>
            </span>
            <span className="site-nav__auth-copy">
              <span className="site-nav__auth-label">{authLink.label}</span>
              <span className="site-nav__auth-subtitle">Client portal</span>
            </span>
            <span className="site-nav__auth-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path d="M13.5 5.5 20 12l-6.5 6.5-1.4-1.4 4.1-4.1H4v-2h12.2l-4.1-4.1 1.4-1.4Z" />
              </svg>
            </span>
          </Link>
          <Link
            className="button button--primary site-nav__cta"
            to={applyLink.to}
            hash={applyLink.hash}
            onClick={handleNavigate}
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  )
}
