type ServiceCardProps = {
  badge: string
  title: string
  description: string
  highlights: string[]
}

export function ServiceCard({
  badge,
  title,
  description,
  highlights,
}: ServiceCardProps) {
  return (
    <article className="service-card">
      <div className="service-card__header">
        <span className="service-card__badge">{badge}</span>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      <div className="service-card__chips">
        {highlights.map((highlight) => (
          <span key={highlight} className="chip">
            {highlight}
          </span>
        ))}
      </div>
      <a className="service-card__link" href="#footer">
        Read More
      </a>
    </article>
  )
}
