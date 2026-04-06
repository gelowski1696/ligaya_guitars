import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { conversionRoutes, trustPoints } from '../data/siteContent'

export default function TrustSection() {
  return (
    <section id="confidence" className="relative overflow-hidden bg-[linear-gradient(180deg,#120804_0%,#100603_100%)]">
      <div className="pointer-events-none absolute left-[-8rem] top-10 h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(216,156,78,0.14),transparent_72%)] blur-3xl" />

      <div className="layout-shell section-padding relative">
        <div className="grid gap-12 border-y border-[rgba(240,200,137,0.12)] py-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1fr)] lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="eyebrow">Why Players Feel Safe Buying</div>
            <h2 className="mt-5 max-w-xl font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.02] text-[var(--text)]">
              The buying path stays simple, credible, and easy to trust.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--muted)]">
              This section turns the practical reassurances into something easier to scan:
              setup care, familiar checkout, and real contact routes when someone needs a
              little help before choosing.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {trustPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.72, delay: index * 0.08 }}
                className="border-t border-[var(--line)] pt-5"
              >
                <div className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[rgba(240,200,137,0.72)]">
                  0{index + 1}
                </div>
                <h3 className="mt-3 font-display text-[1.5rem] text-[var(--text)]">{point.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--muted)]">{point.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {conversionRoutes.map((route, index) => (
            <motion.a
              key={route.title}
              href={route.href}
              target={route.external ? '_blank' : undefined}
              rel={route.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.75, delay: 0.12 + index * 0.08 }}
              className="group border-t border-[var(--line)] px-0 pt-5"
            >
              <div className="text-[0.62rem] font-semibold uppercase tracking-[0.32em] text-[rgba(240,200,137,0.72)]">
                {route.label}
              </div>
              <div className="mt-4 flex items-start justify-between gap-5">
                <div>
                  <h3 className="max-w-sm font-display text-[1.85rem] leading-[1.04] text-[var(--text)]">
                    {route.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-[var(--muted)]">
                    {route.body}
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="mt-1 shrink-0 text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
              <div className="mt-5 inline-flex items-center gap-2 text-[0.74rem] font-semibold uppercase tracking-[0.2em] text-[var(--accent-soft)]">
                {route.cta}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
