import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'

type TestimonialProps = {
  quote: string
  name: string
  company: string
}

export function Testimonial({ quote, name, company }: TestimonialProps) {
  return (
    <section className="section testimonial-section">
      <div className="container">
        <Reveal direction="up">
          <SectionTitle
            eyebrow="Client story"
            title="A business owner perspective"
            description="The current website testimonial, preserved and cleaned up slightly for readability."
            align="center"
          />
        </Reveal>

        <Reveal delay={120} direction="scale">
          <article className="testimonial-card">
            <img
              className="testimonial-image"
              src="/reference/testimonial.jpg"
              alt="Customer testimonial portrait"
            />
            <div className="testimonial-copy">
              <p className="testimonial-quote">"{quote}"</p>
              <div className="testimonial-person">
                <strong>{name}</strong>
                <span>{company}</span>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
