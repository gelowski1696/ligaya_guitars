import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { brandFilms } from '../data/siteContent'

export default function Films() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-90px' })
  const [leadFilm, supportFilm] = brandFilms

  return (
    <section id="films" className="relative overflow-hidden bg-[linear-gradient(180deg,#170b06_0%,#110704_100%)]">
      <div className="pointer-events-none absolute left-[-8rem] top-16 h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle,rgba(216,156,78,0.14),transparent_72%)] blur-3xl" />

      <div className="layout-shell section-padding relative">
        <div
          ref={ref}
          className="mb-10 grid gap-7 border-b border-[rgba(240,200,137,0.12)] pb-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,0.78fr)] lg:items-end"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="eyebrow">Films</div>
            <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.35rem,5vw,4.35rem)] leading-[1.02] text-[var(--text)]">
              Moving images that bring the build story and design voice closer.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.16, duration: 0.78 }}
            className="max-w-md justify-self-end text-base leading-7 text-[var(--muted)]"
          >
            These videos give the page a stronger human layer, showing the people, process,
            and thinking around the instruments instead of relying on still imagery alone.
          </motion.p>
        </div>

        <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden border border-[rgba(240,200,137,0.1)] bg-[rgba(255,255,255,0.02)]"
          >
            <div className="absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-4 p-6 pt-7 sm:p-7 sm:pt-8">
              <div>
                <div className="text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-[rgba(240,200,137,0.76)]">
                  {leadFilm.label}
                </div>
                <h3 className="mt-3 max-w-[17rem] font-display text-[clamp(1.45rem,3vw,2.6rem)] leading-[1.03] text-[var(--text)] sm:max-w-[21rem]">
                  {leadFilm.title}
                </h3>
              </div>
              <div className="hidden max-w-[9rem] pt-1 text-right text-[0.66rem] uppercase tracking-[0.22em] text-[rgba(247,239,228,0.5)] lg:block">
                Watch with sound for the full atmosphere.
              </div>
            </div>

            <div className="relative aspect-video overflow-hidden">
              <video
                src={leadFilm.src}
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
                muted
                loop
                autoPlay
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,4,2,0.42)_0%,transparent_28%,rgba(8,4,2,0.72)_100%)]" />
            </div>

            <div className="grid gap-5 px-6 pb-6 pt-5 sm:px-7 sm:pb-7 sm:pt-6 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-start">
              <p className="max-w-xl text-sm leading-7 text-[rgba(247,239,228,0.76)]">
                {leadFilm.body}
              </p>
              <p className="text-sm leading-7 text-[var(--muted)]">{leadFilm.accent}</p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.82, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="self-start overflow-hidden border border-[rgba(240,200,137,0.1)] bg-[rgba(255,255,255,0.02)]"
          >
            <div className="border-b border-[rgba(240,200,137,0.1)] p-6 pt-7 sm:p-7 sm:pt-8">
              <div className="text-[0.6rem] font-semibold uppercase tracking-[0.34em] text-[rgba(240,200,137,0.76)]">
                {supportFilm.label}
              </div>
              <h3 className="mt-3 max-w-[17rem] font-display text-[1.85rem] leading-[1.05] text-[var(--text)] sm:max-w-[20rem]">
                {supportFilm.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{supportFilm.body}</p>
            </div>

            <div className="aspect-video overflow-hidden">
              <video
                src={supportFilm.src}
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
              />
            </div>

            <div className="px-6 pb-7 pt-6 sm:px-7">
              <p className="text-sm leading-7 text-[rgba(247,239,228,0.72)]">{supportFilm.accent}</p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
