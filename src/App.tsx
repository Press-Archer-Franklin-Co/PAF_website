import './App.css'
import { AboutSection } from './components/AboutSection'
import { Hero } from './components/Hero'
import { LoanCalculator } from './components/LoanCalculator'
import { Reveal } from './components/Reveal'
import { SectionTitle } from './components/SectionTitle'
import { ServiceCard } from './components/ServiceCard'
import { Testimonial } from './components/Testimonial'

const services = [
  {
    badge: '01',
    title: 'Personal and Business Loans',
    description:
      'Accessible capital for salary earners, side hustles, and growing businesses that need practical funding support.',
    highlights: ['Working capital', 'Short-term support', 'Tailored terms'],
  },
  {
    badge: '02',
    title: 'Mortgage Brokerage Services',
    description:
      'Clear guidance for home financing, refinancing, and lender comparisons so clients can move with confidence.',
    highlights: ['First-time buyers', 'Refinancing', 'Lender matching'],
  },
  {
    badge: '03',
    title: 'Fintech Solutions',
    description:
      'Digital tools that simplify payments, lending workflows, and financial access for underserved customers.',
    highlights: ['Payments', 'Lending platforms', 'Financial visibility'],
  },
  {
    badge: '04',
    title: 'Debt Factoring Services',
    description:
      'Cash-flow support that helps businesses unlock funds tied up in invoices and purchase orders.',
    highlights: ['Invoice funding', 'PO financing', 'Cash-flow relief'],
  },
  {
    badge: '05',
    title: 'Credit Repair and Rating Services',
    description:
      'Support for improving credit health, strengthening financial readiness, and opening the door to larger opportunities.',
    highlights: ['Credit guidance', 'Profile rebuilding', 'Borrowing readiness'],
  },
  {
    badge: '06',
    title: 'Escrow Services',
    description:
      'Neutral transaction oversight for rentals, property deals, farming purchases, and other high-value agreements.',
    highlights: ['Secure transfers', 'Third-party protection', 'Trusted process'],
  },
]

const commitments = [
  {
    title: 'Reliability',
    description:
      'Consistent service, dependable communication, and financial support clients can plan around.',
  },
  {
    title: 'Empathy',
    description:
      'Solutions shaped by real financial pressures, with a human approach to each client situation.',
  },
  {
    title: 'Growth and Inclusion',
    description:
      'Wider access to financial tools for underserved communities, entrepreneurs, and emerging businesses.',
  },
]

function HomePage() {
  return (
    <main className="page-shell">
      <Hero />

      <section className="section section--plain" id="loans">
        <div className="container feature feature--stacked">
          <Reveal className="feature__content" direction="left">
            <article className="feature-panel">
              <SectionTitle
                eyebrow="Press Archer Franklin Creditors"
                title="Need a Quick Loan"
                description="At Press Archer Franklin, we provide tailored financial solutions for students, working professionals, and individuals who need timely support."
              />
              <p className="feature__text">
                We offer small loans designed to help people manage temporary
                financial challenges, respond to urgent needs, and move on new
                opportunities with less friction.
              </p>
              <p className="feature__text">
                With flexible and accessible loan options, we aim to provide a
                seamless borrowing experience that gives individuals the financial
                resources they need to pursue their aspirations.
              </p>
              <a className="button button--primary" href="#calculator">
                APPLY NOW
              </a>
            </article>
          </Reveal>
          <Reveal className="feature__support" delay={140} direction="right">
            <article className="feature-note">
              <p className="feature-note__eyebrow">Who it serves</p>
              <h3>Support shaped around real borrowing needs</h3>
              <ul className="feature-list">
                <li>Students navigating urgent tuition and study costs</li>
                <li>Working professionals handling short-term financial pressure</li>
                <li>Individuals seeking simple, accessible borrowing options</li>
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section section--plain" id="business">
        <div className="container feature feature--stacked">
          <Reveal className="feature__content" direction="left">
            <article className="feature-panel feature-panel--accent">
              <SectionTitle
                eyebrow="Business finance"
                title="Fuel Your Business Ambitions with Press Archer Franklin"
                description="Press Archer Franklin supports small businesses and entrepreneurs with funding options that help them stay agile and grow sustainably."
              />
              <p className="feature__text">
                We support small and upcoming businesses with affordable business
                loans, purchase order financing, and debt factoring that address
                practical cash-flow needs.
              </p>
              <p className="feature__text">
                The goal is to keep funds accessible at competitive rates while
                making Press Archer Franklin a reliable financial partner for
                entrepreneurs and growing enterprises.
              </p>
              <a className="button button--primary" href="#services">
                APPLY NOW
              </a>
            </article>
          </Reveal>
          <Reveal className="feature__support" delay={140} direction="right">
            <article className="feature-note feature-note--dark">
              <p className="feature-note__eyebrow">Business focus</p>
              <h3>Funding tools that help businesses keep moving</h3>
              <ul className="feature-list feature-list--light">
                <li>Business loans for emerging and growing companies</li>
                <li>Purchase order financing to support delivery commitments</li>
                <li>Debt factoring for healthier working-capital flow</li>
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section section--services" id="services">
        <div className="container">
          <Reveal direction="up">
            <SectionTitle
              eyebrow="Our Services"
              title="Let Us Help You"
              description="The same service offering as the current website, reorganized into cleaner and easier-to-scan cards."
              align="center"
            />
          </Reveal>
          <div className="services-grid">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 80}
                direction="up"
              >
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--accent" id="calculator">
        <div className="container calculator-layout">
          <Reveal className="calculator-aside" direction="left">
            <SectionTitle
              eyebrow="Loan calculator"
              title="Estimate repayments before you apply"
              description="A cleaner version of the current annualised loan calculator with validation and clearer output states."
              light
            />
          </Reveal>
          <Reveal delay={120} direction="right">
            <LoanCalculator />
          </Reveal>
        </div>
      </section>

      <AboutSection commitments={commitments} />

      <Testimonial
        quote="Press Archer Franklin played an important role in helping me turn my catering business into something real. Their financial assistance gave me the capital I needed, and their team showed a genuine commitment to small businesses every step of the way."
        name="Shaidah Phillemon"
        company="Shai Cooks"
      />
    </main>
  )
}

export default HomePage
