import { Link } from '@tanstack/react-router'
import { type ChangeEvent, type FormEvent, useState } from 'react'
import { submitPortalAccessRequest } from '../lib/api'
import { useUiStore } from '../stores/uiStore'
import { Reveal } from './Reveal'

export function AuthPage() {
  const mode = useUiStore((state) => state.authMode)
  const setMode = useUiStore((state) => state.setAuthMode)
  const openLegalModal = useUiStore((state) => state.openLegalModal)
  const [notice, setNotice] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [form, setForm] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptedPrivacyPolicy: false,
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target
    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (mode === 'signup' && !form.acceptedPrivacyPolicy) {
      setNotice('Please confirm that you agree to the Privacy Policy before creating an account.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await submitPortalAccessRequest({
        mode,
        fullName: form.fullName || undefined,
        phoneNumber: form.phoneNumber || undefined,
        email: form.email,
      })

      setNotice(response.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-hero">
        <div className="container auth-layout" id="auth-portal">
          <Reveal direction="left">
            <aside className="auth-intro">
              <div className="auth-intro__brand">
                <img
                  className="auth-intro__logo"
                  src="/reference/logo.png"
                  alt="Press Archer Franklin logo"
                />
                <div>
                  <p className="auth-intro__eyebrow">Client portal</p>
                  <strong>Press Archer Franklin Co.</strong>
                </div>
              </div>

              <h1>{mode === 'signin' ? 'Client portal access' : 'Create your account'}</h1>
              <p className="auth-intro__summary">
                {mode === 'signin'
                  ? 'Access your enquiries, application updates, and client communication in one place.'
                  : 'Set up your profile to begin applications and manage requests in one place.'}
              </p>

              <div className="auth-intro__metrics">
                <article className="auth-metric">
                  <span>Use case</span>
                  <strong>Tracking</strong>
                </article>
                <article className="auth-metric">
                  <span>Access</span>
                  <strong>{mode === 'signin' ? 'Client sign in' : 'New sign up'}</strong>
                </article>
              </div>

              <ul className="auth-checklist">
                <li>Track application progress and next steps</li>
                <li>Manage loan, finance, and service requests</li>
                <li>Keep communication with Press Archer Franklin organized</li>
              </ul>
            </aside>
          </Reveal>

          <Reveal delay={120} direction="right">
            <section className="auth-card" aria-labelledby="auth-card-title">
              <div className="auth-card__top">
                <div className="auth-card__topline">
                  <p className="auth-card__eyebrow">Portal access</p>
                  <span className="auth-card__tag">
                    {mode === 'signin' ? 'Existing client' : 'New account'}
                  </span>
                </div>
                <h2 id="auth-card-title">
                  {mode === 'signin' ? 'Sign in to continue' : 'Create your client account'}
                </h2>
                <p className="auth-card__summary">
                  {mode === 'signin'
                    ? 'Use your registered email and password to continue to the portal.'
                    : 'Set up your profile to begin with Press Archer Franklin.'}
                </p>
              </div>

              <div className="auth-card__scroll">
                <form className="auth-form" onSubmit={handleSubmit} noValidate>
                  {mode === 'signup' ? (
                    <div className="auth-form__row">
                      <label className="field auth-field auth-field--half">
                        <span>Full Name</span>
                        <input
                          type="text"
                          name="fullName"
                          value={form.fullName}
                          onChange={handleChange}
                          placeholder="Your full name"
                        />
                      </label>
                      <label className="field auth-field auth-field--half">
                        <span>Phone Number</span>
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={form.phoneNumber}
                          onChange={handleChange}
                          placeholder="+267 76 218 763"
                        />
                      </label>
                    </div>
                  ) : null}

                  <label className="field auth-field">
                    <span>Email Address</span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                    />
                  </label>

                  <label className="field auth-field">
                    <span>Password</span>
                    <input
                      type="password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                    />
                  </label>

                  {mode === 'signup' ? (
                    <label className="field auth-field">
                      <span>Confirm Password</span>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                      />
                    </label>
                  ) : null}

                  {mode === 'signin' ? (
                    <div className="auth-helper">
                      <label className="auth-checkbox">
                        <input type="checkbox" />
                        <span>Remember me</span>
                      </label>
                      <Link to="/">Forgot password?</Link>
                    </div>
                  ) : (
                    <div className="auth-consent">
                      <label className="auth-consent__check">
                        <input
                          type="checkbox"
                          name="acceptedPrivacyPolicy"
                          checked={form.acceptedPrivacyPolicy}
                          onChange={handleChange}
                        />
                        <span className="auth-consent__tick" aria-hidden="true"></span>
                        <span>I agree to the Privacy Policy.</span>
                      </label>
                      <button
                        type="button"
                        className="auth-consent__link"
                        onClick={() => openLegalModal('privacy')}
                      >
                        View Privacy Policy
                      </button>
                    </div>
                  )}

                  {notice ? <p className="auth-notice">{notice}</p> : null}

                  <button className="button button--primary button--full" type="submit">
                    {isSubmitting
                      ? 'Please wait...'
                      : mode === 'signin'
                        ? 'Sign In'
                        : 'Create Account'}
                  </button>
                </form>

                <div className="auth-card__footer">
                  <span>
                    {mode === 'signin' ? 'Need an account?' : 'Already have an account?'}
                  </span>
                  <button
                    type="button"
                    className="auth-card__switch"
                    onClick={() => {
                      setMode(mode === 'signin' ? 'signup' : 'signin')
                      setNotice('')
                    }}
                  >
                    {mode === 'signin' ? 'Create one' : 'Sign in instead'}
                  </button>
                </div>
              </div>
            </section>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
