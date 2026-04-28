import { useEffect } from 'react'
import { privacyPolicy, termsOfUse, type LegalDocument } from '../content/legalContent'

type LegalModalView = 'terms' | 'privacy'

type LegalModalProps = {
  view: LegalModalView
  onClose: () => void
  onChangeView: (view: LegalModalView) => void
}

const documents: Record<LegalModalView, LegalDocument> = {
  terms: termsOfUse,
  privacy: privacyPolicy,
}

export function LegalModal({ view, onClose, onChangeView }: LegalModalProps) {
  const legalDocument = documents[view]

  useEffect(() => {
    const previousOverflow = window.document.body.style.overflow
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div
      className="legal-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={onClose}
    >
      <div className="legal-modal__panel" onClick={(event) => event.stopPropagation()}>
        <div className="legal-modal__header">
          <div>
            <p className="legal-modal__eyebrow">{legalDocument.eyebrow}</p>
            <h2 id="legal-modal-title">{legalDocument.title}</h2>
            <p className="legal-modal__summary">{legalDocument.summary}</p>
          </div>
          <button
            type="button"
            className="legal-modal__close"
            aria-label="Close legal information"
            onClick={onClose}
          >
            x
          </button>
        </div>

        <div className="legal-modal__tabs" role="tablist" aria-label="Legal document tabs">
          <button
            type="button"
            role="tab"
            aria-selected={view === 'terms'}
            className={`legal-modal__tab ${view === 'terms' ? 'is-active' : ''}`}
            onClick={() => onChangeView('terms')}
          >
            Terms of Use
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={view === 'privacy'}
            className={`legal-modal__tab ${view === 'privacy' ? 'is-active' : ''}`}
            onClick={() => onChangeView('privacy')}
          >
            Privacy Policy
          </button>
        </div>

        <div className="legal-modal__body">
          <aside className="legal-modal__overview">
            <p className="legal-modal__overview-label">Quick overview</p>
            <ul>
              {legalDocument.overview.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>

          <div className="legal-modal__content">
            <article className="legal-modal__card">
              <p className="legal-modal__card-eyebrow">Press Archer Franklin Co.</p>
              <h3>{legalDocument.statementTitle}</h3>
              {legalDocument.statement.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>

            {legalDocument.sections.map((section) => (
              <article className="legal-modal__card" key={section.title}>
                <h3>{section.title}</h3>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
