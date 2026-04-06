import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { storyPoints } from '../data/siteContent'

export default function Story() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '8%'])
  const detailY = useTransform(scrollYProgress, [0, 1], ['8%', '-10%'])

  return (
    <section id="story" className="relative overflow-hidden bg-[linear-gradient(180deg,#120804_0%,#190d08_100%)]">
      <div className="layout-shell section-padding relative">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1fr)]">
          <motion.div
            style={{ y: imageY }}
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="surface-panel relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <img
                src="/assets/products/acoustic_main.jpg"
                alt="Player performing with a Ligaya acoustic guitar"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(9,4,3,0.72)_100%)]" />
              <div className="absolute bottom-0 left-0 max-w-sm p-6 md:p-8">
                <p className="eyebrow">Ligaya means joy</p>
                <p className="mt-3 text-sm leading-6 text-[rgba(247,239,228,0.82)]">
                  The catalog is shaped around comfort, warmth, and an easy path from first
                  riffs to regular playing.
                </p>
              </div>
            </div>

            <motion.div
              style={{ y: detailY }}
              className="surface-panel absolute -bottom-8 right-[-0.5rem] hidden w-52 overflow-hidden rounded-[1.6rem] md:block"
            >
              <img
                src="/assets/products/supremo_3.jpg"
                alt="Ligaya guitar detail view"
                loading="lazy"
                decoding="async"
                className="aspect-[3/4] w-full object-cover object-center"
              />
            </motion.div>
          </motion.div>

          <div ref={ref} className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="eyebrow"
            >
              Our Story
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.08 }}
              className="mt-5 max-w-xl font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.02] text-[var(--text)]"
            >
              Built for home practice, late-night ideas, and stage-ready growth.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.18 }}
              className="mt-6 max-w-2xl text-base leading-7 text-[var(--muted)]"
            >
              Ligaya pairs approachable pricing with the kinds of upgrades players actually
              notice: better feel, reliable setup, warm visuals, and a lineup that feels
              more personal than generic marketplace inventory.
            </motion.p>

            <div className="mt-8 space-y-5">
              {storyPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.75, delay: 0.24 + index * 0.08 }}
                  className="border-t border-[var(--line)] pt-5"
                >
                  <h3 className="font-display text-[1.55rem] text-[var(--text)]">{point.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--muted)]">
                    {point.body}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.5 }}
              className="mt-7 flex flex-wrap gap-5 text-[0.75rem] font-semibold uppercase tracking-[0.18em]"
            >
              <a
                href="https://www.instagram.com/ligayaguitars/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgba(240,200,137,0.88)] transition-colors hover:text-[var(--text)]"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/ligaya.guitars/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgba(240,200,137,0.88)] transition-colors hover:text-[var(--text)]"
              >
                Facebook
              </a>
              <a
                href="https://www.tiktok.com/@ligayaguitars"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgba(240,200,137,0.88)] transition-colors hover:text-[var(--text)]"
              >
                TikTok
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
