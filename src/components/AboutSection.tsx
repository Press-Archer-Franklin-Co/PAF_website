import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'

type Commitment = {
  title: string
  description: string
}

type AboutSectionProps = {
  commitments: Commitment[]
}

export function AboutSection({ commitments }: AboutSectionProps) {
  return (
    <section className="section section--about" id="about">
      <div className="container">
        <Reveal direction="up">
          <SectionTitle
            eyebrow="About us"
            title="We Offer Financial Solutions"
            description="Press Archer Franklin Co. started in 2022 and has been on a mission to empower individuals and businesses with innovative financial technology solutions."
          />
        </Reveal>

        <div className="about-grid">
          <Reveal direction="up">
            <article className="about-panel">
              <p className="about-panel__label">Mission</p>
              <h3>Empower individuals and businesses through practical innovation</h3>
              <p>
                The business focuses on financial solutions that simplify access,
                strengthen confidence, and create better pathways to opportunity.
              </p>
            </article>
          </Reveal>

          <Reveal delay={100} direction="up">
            <article className="about-panel">
              <p className="about-panel__label">Vision</p>
              <h3>To be the leading financial technology solutions provider in Africa by 2028</h3>
              <p>
                Growth is anchored in trust, accessibility, and long-term inclusion
                for individuals and underserved businesses.
              </p>
            </article>
          </Reveal>

          <Reveal delay={200} direction="up">
            <article className="about-panel about-panel--highlight">
              <p className="about-panel__label">Since 2022</p>
              <h3>Built to support both immediate financial needs and future ambition</h3>
              <p>
                From micro-loans to fintech services and secure transaction support,
                this review build keeps the original business meaning while improving
                readability and structure.
              </p>
            </article>
          </Reveal>
        </div>

        <div className="commitments-block">
          <Reveal direction="up">
            <SectionTitle
              eyebrow="Our commitments"
              title="The standards behind the service"
              description="Reliability, empathy, and inclusive growth remain central to the customer experience."
            />
          </Reveal>
          <div className="commitments-grid">
            {commitments.map((commitment, index) => (
              <Reveal key={commitment.title} delay={index * 90} direction="up">
                <article className="commitment-card">
                  <h3>{commitment.title}</h3>
                  <p>{commitment.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
