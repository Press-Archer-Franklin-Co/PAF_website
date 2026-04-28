import { Link } from '@tanstack/react-router'
import { useUiStore } from '../stores/uiStore'
import { Reveal } from './Reveal'

type FooterLink = {
  label: string
  to: string
  hash?: string
}

type FooterProps = {
  links: FooterLink[]
}

export function Footer({ links }: FooterProps) {
  const openLegalModal = useUiStore((state) => state.openLegalModal)

  return (
    <footer className="site-footer" id="footer">
      <div className="container footer-grid" id="contact">
        <Reveal direction="up">
          <div className="footer-card">
            <img
              className="footer-logo brand-mark brand-mark--spin"
              src="/reference/logo.png"
              alt="Press Archer Franklin logo"
            />
          </div>
        </Reveal>

        <Reveal delay={80} direction="up">
          <div className="footer-card">
            <p className="footer-card__label">Office</p>
            <h3>Press Archer Franklin Co.</h3>
            <p>Extension 10 Notwane Road</p>
            <p>Gaborone, Botswana</p>
            <a href="mailto:PressArcherFranklin@gmail.com">PressArcherFranklin@gmail.com</a>
            <a href="tel:+26776218763">+26776218763</a>
          </div>
        </Reveal>

        <Reveal delay={160} direction="up">
          <div className="footer-card">
            <p className="footer-card__label">Links</p>
            <ul className="footer-links">
              {links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} hash={link.hash}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={240} direction="up">
          <div className="footer-card">
            <p className="footer-card__label">Newsletter</p>
            <h3>Newsletter placeholder</h3>
            <p>Enter your email to preview the future newsletter area.</p>
            <form
              className="footer-newsletter"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
              />
              <button className="button button--primary" type="submit">
                Stay Updated
              </button>
            </form>
          </div>
        </Reveal>
      </div>

      <Reveal className="container footer-meta" delay={160} direction="up">
        <p>Press Archer Franklin (c) 2025 - All rights reserved.</p>
        <div className="footer-meta__links">
          <button type="button" onClick={() => openLegalModal('terms')}>
            Terms of Use
          </button>
          <button type="button" onClick={() => openLegalModal('privacy')}>
            Privacy Policy
          </button>
        </div>
      </Reveal>
    </footer>
  )
}
