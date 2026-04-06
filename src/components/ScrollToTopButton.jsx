import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

function GuitarUpIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M9.4 6.9 12 4.3l2.6 2.6" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 4.4v5.1" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
      <path
        d="M16.3 5.2h1.35c.72 0 1.3.58 1.3 1.3v8.15c0 .44.22.86.6 1.1a7.45 7.45 0 0 1 3.52 6.36 7.14 7.14 0 0 1-2.16 5.18 7.62 7.62 0 0 1-10.7 0 7.14 7.14 0 0 1-2.16-5.18 7.45 7.45 0 0 1 3.52-6.36c.38-.24.6-.66.6-1.1V6.5c0-.72.58-1.3 1.3-1.3h1.36"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M13.45 7.95h7.1" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <path d="M13.45 10.85h7.1" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <path d="M16.98 5.2v10.95" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <path d="M15.4 5.55v10.2" stroke="currentColor" strokeWidth="1.05" strokeLinecap="round" opacity="0.45" />
      <path d="M18.56 5.55v10.2" stroke="currentColor" strokeWidth="1.05" strokeLinecap="round" opacity="0.45" />
      <path d="M12.9 22c0-1.72 1.4-3.12 3.14-3.12 1.74 0 3.15 1.4 3.15 3.12 0 1.73-1.41 3.13-3.15 3.13-1.74 0-3.14-1.4-3.14-3.13Z" stroke="currentColor" strokeWidth="1.35" />
      <path d="M12.95 28.6h8.05" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.65" />
    </svg>
  )
}

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(240,200,137,0.3)] bg-[rgba(18,8,4,0.82)] text-[var(--accent-soft)] shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-colors hover:border-[rgba(240,200,137,0.5)] hover:text-[var(--text)]"
        >
          <GuitarUpIcon />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
