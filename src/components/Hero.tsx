import { Reveal } from './Reveal'

export function Hero() {
  return (
    <section className="hero-section" id="home">
      <img
        className="hero-background"
        src="/reference/hero.jpg"
        alt="Customer portrait"
      />
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-copy-stack">
            <Reveal direction="left">
              <div className="hero-panel">
                <p className="hero-kicker">Press Archer Franklin Creditors</p>
                <h1>Your Number One financial Creditors</h1>
                <p className="hero-summary">
                  Let us be at the top of your list for financial assistance through
                  our wide array of services.
                </p>
                <div className="hero-actions">
                  <a className="button button--secondary hero-button" href="#about">
                    Learn More
                  </a>
                  <a className="button button--primary hero-button" href="#calculator">
                    Apply Now
                  </a>
                </div>
                <div className="hero-trust">
                  <span>Personal and business support</span>
                  <span>Started in 2022</span>
                  <span>Botswana-based financial assistance</span>
                </div>
              </div>
            </Reveal>

            <div className="hero-copy-support">
              <Reveal delay={120} direction="up">
                <article className="hero-summary-card">
                  <h2>Clearer presentation for a growing financial services brand</h2>
                  <ul className="hero-summary-card__list">
                    <li>Quick loans for individuals, students, and workers</li>
                    <li>Business finance including purchase order support and factoring</li>
                    <li>Mortgage, escrow, credit, and fintech services in one place</li>
                  </ul>
                  <div className="hero-summary-card__meta">
                    <span>Vision: Africa by 2028</span>
                    <span>Key CTA: Apply Now</span>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="hero-visual-space" aria-hidden="true"></div>
      </div>
    </section>
  )
}
