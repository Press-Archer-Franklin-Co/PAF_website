/* eslint-disable react-refresh/only-export-components */
import {
  createRootRoute,
  createRoute,
  createRouter,
  Link,
  Outlet,
} from '@tanstack/react-router'
import HomePage from './App'
import { AuthPage } from './components/AuthPage'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { LegalModal } from './components/LegalModal'
import { PolicyPage } from './components/PolicyPage'
import { useUiStore } from './stores/uiStore'

const siteNavigationLinks = [
  { label: 'Home', to: '/', hash: 'home' },
  { label: 'About', to: '/', hash: 'about' },
  { label: 'Our Services', to: '/', hash: 'services' },
  { label: 'Contact Us', to: '/', hash: 'contact' },
]

const siteFooterLinks = [
  { label: 'Home', to: '/', hash: 'home' },
  { label: 'About', to: '/', hash: 'about' },
  { label: 'Our Services', to: '/', hash: 'services' },
  { label: 'Login/Signup', to: '/auth', hash: 'auth-portal' },
]

const siteAuthLink = {
  label: 'Sign In / Sign Up',
  to: '/auth',
  hash: 'auth-portal',
}

const siteApplyLink = {
  label: 'Apply Now',
  to: '/',
  hash: 'calculator',
}

function RootRouteComponent() {
  const legalView = useUiStore((state) => state.legalView)
  const closeLegalModal = useUiStore((state) => state.closeLegalModal)
  const openLegalModal = useUiStore((state) => state.openLegalModal)

  return (
    <div className="min-h-screen">
      <Outlet />
      {legalView ? (
        <LegalModal
          view={legalView}
          onChangeView={openLegalModal}
          onClose={closeLegalModal}
        />
      ) : null}
    </div>
  )
}

function HomeRouteComponent() {
  return (
    <>
      <Header
        authLink={siteAuthLink}
        applyLink={siteApplyLink}
        homeLink={{ to: '/', hash: 'home' }}
        links={siteNavigationLinks}
      />
      <HomePage />
      <Footer links={siteFooterLinks} />
    </>
  )
}

function AuthRouteComponent() {
  return (
    <>
      <Header
        authLink={siteAuthLink}
        applyLink={siteApplyLink}
        homeLink={{ to: '/', hash: 'home' }}
        links={siteNavigationLinks}
      />
      <AuthPage />
    </>
  )
}

function PolicyRouteComponent() {
  return (
    <>
      <Header
        authLink={siteAuthLink}
        applyLink={siteApplyLink}
        homeLink={{ to: '/', hash: 'home' }}
        links={siteNavigationLinks}
      />
      <PolicyPage />
      <Footer links={siteFooterLinks} />
    </>
  )
}

function NotFoundComponent() {
  return (
    <main className="page-shell">
      <section className="section">
        <div className="container text-center">
          <h1>Page not found</h1>
          <p className="mt-4">The page you requested is not available in this review build.</p>
          <Link className="button button--primary mt-6 inline-flex" to="/" hash="home">
            Return Home
          </Link>
        </div>
      </section>
    </main>
  )
}

const rootRoute = createRootRoute({
  component: RootRouteComponent,
  notFoundComponent: NotFoundComponent,
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomeRouteComponent,
})

const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/auth',
  component: AuthRouteComponent,
})

const privacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacypolicy',
  component: PolicyRouteComponent,
})

const routeTree = rootRoute.addChildren([homeRoute, authRoute, privacyPolicyRoute])

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
