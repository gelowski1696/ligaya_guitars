import { lazy, Suspense, useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Films from './components/Films'
import Guitars from './components/Guitars'
import Craftsmanship from './components/Craftsmanship'
import Gallery from './components/Gallery'
import TrustSection from './components/TrustSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useMediaQuery from './hooks/useMediaQuery'
import Seo from './components/Seo'

const LoadingIntro = lazy(() => import('./components/LoadingIntro'))
const LoadingIntroLite = lazy(() => import('./components/LoadingIntroLite'))

export default function App() {
  const [showIntro, setShowIntro] = useState(true)
  const prefersReducedMotion = useReducedMotion()
  const canUse3DIntro = useMediaQuery('(min-width: 768px)')
  const useRichIntro = canUse3DIntro && !prefersReducedMotion

  useEffect(() => {
    const timer = window.setTimeout(() => setShowIntro(false), useRichIntro ? 2000 : 1200)
    return () => window.clearTimeout(timer)
  }, [useRichIntro])

  return (
    <div className="relative overflow-x-clip bg-[var(--bg)] text-[var(--text)]">
      <Seo />

      {showIntro && (
        useRichIntro ? (
          <Suspense fallback={null}>
            <LoadingIntro />
          </Suspense>
        ) : (
          <Suspense fallback={null}>
            <LoadingIntroLite />
          </Suspense>
        )
      )}

      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[42rem] bg-[radial-gradient(circle_at_top,rgba(216,156,78,0.2),transparent_55%)]" />
      <div className="pointer-events-none absolute right-[-10rem] top-[40rem] z-0 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(118,58,26,0.24),transparent_68%)] blur-3xl" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Story />
        <Films />
        <Guitars />
        <Craftsmanship />
        <Gallery />
        <TrustSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
