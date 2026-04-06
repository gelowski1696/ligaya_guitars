import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { navigationLinks } from '../data/siteContent'

function GuitarMenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16.3 3.6h1.35c.72 0 1.3.58 1.3 1.3v8.15c0 .44.22.86.6 1.1a7.45 7.45 0 0 1 3.52 6.36 7.14 7.14 0 0 1-2.16 5.18 7.62 7.62 0 0 1-10.7 0 7.14 7.14 0 0 1-2.16-5.18 7.45 7.45 0 0 1 3.52-6.36c.38-.24.6-.66.6-1.1V4.9c0-.72.58-1.3 1.3-1.3h1.36"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M13.45 6.35h7.1" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <path d="M13.45 9.25h7.1" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <path d="M16.98 3.6v10.95" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <path d="M15.4 3.95v10.2" stroke="currentColor" strokeWidth="1.05" strokeLinecap="round" opacity="0.45" />
      <path d="M18.56 3.95v10.2" stroke="currentColor" strokeWidth="1.05" strokeLinecap="round" opacity="0.45" />
      <path d="M12.9 20.4c0-1.72 1.4-3.12 3.14-3.12 1.74 0 3.15 1.4 3.15 3.12 0 1.73-1.41 3.13-3.15 3.13-1.74 0-3.14-1.4-3.14-3.13Z" stroke="currentColor" strokeWidth="1.35" />
      <path d="M12.95 27h8.05" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.65" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'border-b border-white/10 bg-[rgba(12,6,3,0.82)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="layout-shell flex items-center justify-between py-4">
          <motion.a href="#home" className="flex items-center gap-3" whileHover={{ scale: 1.01 }}>
            <img
              src="/assets/logo_large.jpg"
              alt="Ligaya Guitars"
              decoding="async"
              className="h-10 w-10 rounded-full border border-[rgba(240,200,137,0.28)] object-cover"
            />
            <div>
              <div className="font-display text-[1.28rem] tracking-[0.08em] text-[var(--text)]">
                Ligaya
              </div>
              <div className="text-[0.58rem] uppercase tracking-[0.42em] text-[rgba(240,200,137,0.7)]">
                Guitars
              </div>
            </div>
          </motion.a>

          <ul className="hidden items-center gap-8 md:flex">
            {navigationLinks.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 + 0.24 }}
              >
                <a
                  href={link.href}
                  className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[rgba(247,239,228,0.72)] transition-colors duration-300 hover:text-[var(--accent-soft)]"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>

          <div className="hidden items-center gap-4 md:flex">
            <motion.a
              href="https://www.lazada.com.ph/shop/ligaya-guitars/"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Shop Lazada
            </motion.a>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-[var(--accent-soft)] md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <GuitarMenuIcon />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[rgba(10,5,2,0.96)] px-6 pt-28 backdrop-blur-xl md:hidden"
          >
            <div className="layout-shell flex h-full flex-col justify-between pb-10">
              <div className="space-y-5">
                {navigationLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 }}
                    className="block border-b border-white/10 pb-5 font-display text-[2.2rem] text-[var(--text)]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="https://www.lazada.com.ph/shop/ligaya-guitars/"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary w-full"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setMenuOpen(false)}
              >
                Shop the Collection
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
