import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { craftCloseups, craftSteps } from '../data/siteContent'

export default function Craftsmanship() {
  const headingRef = useRef()
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' })
  const [featureCloseup, ...detailCloseups] = craftCloseups

  return (
    <section
      id="craftsmanship"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#170b06_0%,#0f0604_100%)]"
    >
      <div className="absolute left-[-10rem] top-16 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(216,156,78,0.14),transparent_72%)] blur-3xl" />
      <div className="absolute right-[-10rem] top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(216,156,78,0.16),transparent_72%)] blur-3xl" />

      <div className="layout-shell section-padding relative">
        <div className="grid gap-14 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] xl:items-start">
          <div ref={headingRef}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              className="eyebrow"
            >
              Craft and Setup
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.18 }}
              className="mt-5 max-w-xl font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.02] text-[var(--text)]"
            >
              Built to reward a closer look before a single note is played.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.28 }}
              className="mt-6 max-w-lg text-base leading-7 text-[var(--muted)]"
            >
              Ligaya feels strongest when the page slows down enough to show material,
              contour, hardware, and setup choices in a more intimate way. This section
              turns those practical details into part of the brand atmosphere.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.36 }}
              className="mt-10 grid gap-5 border-t border-[rgba(240,200,137,0.14)] pt-6 text-sm leading-6 text-[var(--muted)] sm:grid-cols-3"
            >
              <div>
                <div className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[rgba(240,200,137,0.72)]">
                  Neck feel
                </div>
                <p className="mt-2">Comfort-led shaping that makes the first few chords feel natural instead of stiff.</p>
              </div>
              <div>
                <div className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[rgba(240,200,137,0.72)]">
                  Finish balance
                </div>
                <p className="mt-2">Warm, premium surfaces that stay inviting rather than over-polished.</p>
              </div>
              <div>
                <div className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[rgba(240,200,137,0.72)]">
                  Final setup
                </div>
                <p className="mt-2">Adjustments made for real playing, so the instrument arrives ready for use.</p>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-4 md:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            <motion.article
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-[2rem] md:row-span-2 md:min-h-[40rem]"
            >
              <img
                src={featureCloseup.src}
                alt={featureCloseup.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                style={{ objectPosition: featureCloseup.position }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,4,2,0.08)_18%,rgba(8,4,2,0.82)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <div className="text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-[rgba(240,200,137,0.72)]">
                  {featureCloseup.label}
                </div>
                <div className="mt-3 max-w-sm font-display text-[clamp(1.8rem,3vw,2.7rem)] leading-[1.02] text-[var(--text)]">
                  {featureCloseup.title}
                </div>
                <p className="mt-3 max-w-md text-sm leading-6 text-[rgba(247,239,228,0.72)]">
                  {featureCloseup.body}
                </p>
              </div>
            </motion.article>

            {detailCloseups.map((detail, index) => (
              <motion.article
                key={detail.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.75, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-[1.7rem] min-h-[18rem]"
              >
                <img
                  src={detail.src}
                  alt={detail.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ objectPosition: detail.position }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,4,2,0.1)_24%,rgba(8,4,2,0.88)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="text-[0.58rem] font-semibold uppercase tracking-[0.32em] text-[rgba(240,200,137,0.72)]">
                    {detail.label}
                  </div>
                  <h3 className="mt-2 font-display text-[1.4rem] leading-[1.05] text-[var(--text)]">
                    {detail.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[rgba(247,239,228,0.68)]">
                    {detail.body}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {craftSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.72, delay: index * 0.08 }}
              className="border-t border-[var(--line)] pt-5"
            >
              <div className="font-display text-[3.2rem] leading-none text-[rgba(240,200,137,0.2)]">
                {step.number}
              </div>
              <h3 className="mt-3 font-display text-[1.45rem] text-[var(--text)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
