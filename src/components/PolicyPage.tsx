import { Link } from '@tanstack/react-router'
import { Reveal } from './Reveal'
import { privacyPolicy, termsOfUse } from '../content/legalContent'

export function PolicyPage() {
  return (
    <main className="policy-page">
      <section className="policy-hero">
        <div className="container policy-hero__inner">
          <Reveal direction="up">
            <p className="policy-hero__eyebrow">Legal information</p>
            <h1>Privacy Policy and Terms of Use</h1>
            <p className="policy-hero__summary">
              This React view is based on the legal content currently published at
              Press Archer Franklin&apos;s live policy page.
            </p>
            <Link className="button button--secondary" to="/" hash="home">
              Back to website
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section policy-section">
        <div className="container policy-layout">
          <Reveal direction="left">
            <aside className="policy-sidebar">
              <p className="policy-sidebar__label">Quick overview</p>
              <ul className="policy-sidebar__list">
                {[...privacyPolicy.overview, ...termsOfUse.overview]
                  .filter((item, index, items) => items.indexOf(item) === index)
                  .slice(0, 5)
                  .map((item) => (
                    <li key={item}>{item}</li>
                  ))}
              </ul>
            </aside>
          </Reveal>

          <div className="policy-content">
            <Reveal direction="up">
              <article className="policy-card">
                <p className="policy-card__eyebrow">Press Archer Franklin Co.</p>
                <h2>Privacy Policy</h2>
                {privacyPolicy.statement.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            </Reveal>

            {privacyPolicy.sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 90} direction="up">
                <article className="policy-card">
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </article>
              </Reveal>
            ))}

            <Reveal delay={privacyPolicy.sections.length * 90} direction="up">
              <article className="policy-card">
                <p className="policy-card__eyebrow">Press Archer Franklin Co.</p>
                <h2>Terms of Use</h2>
                {termsOfUse.statement.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            </Reveal>

            {termsOfUse.sections.map((section, index) => (
              <Reveal
                key={section.title}
                delay={(privacyPolicy.sections.length + index + 1) * 90}
                direction="up"
              >
                <article className="policy-card">
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
