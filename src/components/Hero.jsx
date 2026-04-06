import { lazy, Suspense, useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import { supportPillars } from '../data/siteContent'
import useMediaQuery from '../hooks/useMediaQuery'

const GuitarScene = lazy(() => import('./GuitarScene'))

export default function Hero() {
  const ref = useRef()
  const prefersReducedMotion = useReducedMotion()
  const showHeroScene = useMediaQuery('(min-width: 1200px)')
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '16%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.74])
  const productY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%'])
  const productRotate = useTransform(scrollYProgress, [0, 1], [0, -4.5])
  const beamX = useTransform(scrollYProgress, [0, 1], ['-4%', '10%'])
  const allow3DMotion = showHeroScene && !prefersReducedMotion

  return (
    <section id="home" ref={ref} className="noise-layer relative isolate min-h-svh overflow-hidden">
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <img
          src="/assets/products/supremo_2.jpg"
          alt=""
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-[72%_center] opacity-55"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,5,2,0.96)_0%,rgba(10,5,2,0.82)_36%,rgba(10,5,2,0.38)_62%,rgba(10,5,2,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(216,156,78,0.26),transparent_26%)]" />
      <motion.div
        style={{ x: beamX }}
        className="absolute inset-y-0 right-[8%] hidden w-[32rem] bg-[radial-gradient(circle_at_center,rgba(244,196,120,0.18),rgba(244,196,120,0.04)_34%,transparent_72%)] blur-3xl lg:block"
      />
      <motion.div
        animate={{ opacity: [0.12, 0.24, 0.12] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 bg-[linear-gradient(112deg,transparent_14%,rgba(248,222,178,0.08)_34%,transparent_58%)]"
      />

      <div className="layout-shell relative z-10 flex min-h-svh items-center py-10 pt-24 sm:py-12 md:py-20 md:pt-28">
        <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(340px,0.72fr)] lg:items-center">
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl pt-2 sm:pt-4"
          >
            <div className="eyebrow mb-5">Crafted in the Philippines</div>

            <div className="font-display text-[clamp(4.1rem,14vw,8.6rem)] leading-[0.92] text-[var(--text)]">
              Ligaya
            </div>
            <div className="mb-8 mt-2 text-[0.76rem] uppercase tracking-[0.5em] text-[rgba(240,200,137,0.72)] md:text-[0.84rem]">
              Guitars
            </div>

            <h1 className="max-w-[24rem] font-display text-[clamp(2rem,5vw,3.6rem)] leading-[1.02] text-[var(--text)]">
              Instruments that feel inviting from the first chord.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg">
              Electric and acoustic models with warm finishes, practical upgrades, and a
              buying path built around real players, not showroom friction.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap">
              <a
                href="https://www.lazada.com.ph/shop/ligaya-guitars/"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary w-full sm:w-auto"
              >
                <ShoppingBag size={16} />
                Shop on Lazada
              </a>
              <a href="#guitars" className="button-secondary w-full sm:w-auto">
                Explore the lineup
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-7 grid max-w-[34rem] grid-cols-1 gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[rgba(247,239,228,0.72)] sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3">
              {supportPillars.map((pillar) => (
                <span key={pillar} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  {pillar}
                </span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48, duration: 0.8 }}
              className="mt-8 flex items-start justify-between gap-5 border-t border-[rgba(240,200,137,0.14)] pt-5 lg:hidden"
            >
              <div>
                <div className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[rgba(240,200,137,0.72)]">
                  Featured finish
                </div>
                <div className="mt-2 font-display text-[1.5rem] leading-none text-[var(--text)]">
                  VintageVibe Pro
                </div>
                <p className="mt-2 max-w-[15rem] text-sm leading-6 text-[var(--muted)]">
                  A warmer, poster-like product moment kept visible on smaller screens too.
                </p>
              </div>
              <img
                src="/assets/products/vintagevibe_main.png"
                alt=""
                loading="eager"
                decoding="async"
                className="w-24 shrink-0 object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.42)] sm:w-28"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.52, duration: 0.8 }}
              className="mt-10 hidden max-w-[34rem] grid-cols-[minmax(0,1fr)_auto_minmax(0,0.92fr)] items-start gap-5 border-t border-[rgba(240,200,137,0.14)] pt-5 md:grid"
            >
              <div>
                <div className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[rgba(240,200,137,0.72)]">
                  Cinematic feel
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  A warmer first frame that feels closer to a private showroom than a product catalog.
                </p>
              </div>
              <div className="h-12 w-px bg-[rgba(240,200,137,0.18)]" />
              <div>
                <div className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[rgba(240,200,137,0.72)]">
                  Player-first setup
                </div>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  Real instruments, practical upgrades, and a buying path that stays light on friction.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: productY, rotate: productRotate }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.05, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:flex lg:justify-end"
          >
            <div className="relative w-[min(42vw,32rem)]">
              {allow3DMotion && (
                <div className="pointer-events-none absolute inset-[-12%] z-0 opacity-55">
                  <Suspense fallback={null}>
                    <GuitarScene subtle />
                  </Suspense>
                </div>
              )}
              <div className="pointer-events-none absolute inset-[-8%] z-0 rounded-full bg-[radial-gradient(circle,rgba(216,156,78,0.12),transparent_65%)] blur-3xl" />
              <div className="pointer-events-none absolute right-[6%] top-[8%] h-[72%] w-px bg-[linear-gradient(180deg,rgba(240,200,137,0.36),transparent)]" />
              <div className="pointer-events-none absolute inset-x-[12%] bottom-[10%] h-24 rounded-full bg-[radial-gradient(circle,rgba(216,156,78,0.32),transparent_72%)] blur-3xl" />
              <motion.img
                src="/assets/products/vintagevibe_main.png"
                alt="Ligaya VintageVibe Pro guitar"
                fetchPriority="high"
                decoding="async"
                className="relative z-10 w-full object-contain drop-shadow-[0_30px_70px_rgba(0,0,0,0.55)]"
                animate={prefersReducedMotion ? undefined : { y: [0, -10, 0] }}
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }
                }
              />
              <div className="absolute left-0 top-[12%] max-w-40 text-right text-[0.68rem] uppercase tracking-[0.22em] text-[rgba(247,239,228,0.54)]">
                Warm finishes. Familiar silhouettes. Ready-to-play setups.
              </div>
              <div className="absolute bottom-[8%] right-[11%] max-w-[11rem] text-left">
                <div className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[rgba(240,200,137,0.68)]">
                  Featured finish
                </div>
                <div className="mt-2 font-display text-[1.4rem] leading-none text-[var(--text)]">
                  VintageVibe Pro
                </div>
                <p className="mt-2 text-sm leading-6 text-[rgba(247,239,228,0.6)]">
                  A familiar Strat silhouette presented with quieter, poster-like drama.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.35em] text-[rgba(240,200,137,0.58)]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="h-10 w-px bg-linear-to-b from-[rgba(240,200,137,0.58)] to-transparent"
        />
      </motion.div>
    </section>
  )
}
