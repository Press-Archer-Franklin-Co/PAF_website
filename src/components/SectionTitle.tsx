type SectionTitleProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}: SectionTitleProps) {
  return (
    <div
      className={[
        'section-title',
        `section-title--${align}`,
        light ? 'section-title--light' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <p className="section-title__eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-title__description">{description}</p> : null}
    </div>
  )
}
