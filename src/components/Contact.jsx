import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Mail, Phone } from 'lucide-react'
import { contactLinks, promises } from '../data/siteContent'

export default function Contact() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="relative overflow-hidden bg-[linear-gradient(180deg,#0c0503_0%,#160904_100%)]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none">
        <div className="whitespace-nowrap font-display text-[22vw] leading-none tracking-tight text-[rgba(216,156,78,0.04)]">
          LIGAYA
        </div>
      </div>

      <div className="layout-shell section-padding relative">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:gap-18">
          <div ref={ref} className="max-w-[34rem]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="eyebrow"
            >
              Contact and Purchase
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="mt-5 max-w-[28rem] font-display text-[clamp(2.4rem,5vw,4.1rem)] leading-[0.98] tracking-[-0.02em] text-[var(--text)]"
            >
              Ready to pick a model, ask a question, or head straight to checkout?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-7 max-w-[29rem] text-[1.02rem] leading-8 text-[var(--muted)]"
            >
              The closing section now focuses on one clear job: help people move from
              curiosity to contact. Social channels stay visible, but the primary action is
              easier to spot and easier to trust.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-3.5"
            >
              <a
                href="https://www.lazada.com.ph/shop/ligaya-guitars/"
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary w-full sm:w-auto"
              >
                Shop the store
                <ArrowRight size={16} />
              </a>
              <a href="mailto:ligayaguitars@gmail.com" className="button-secondary w-full sm:w-auto">
                Email Ligaya
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.48 }}
              className="mt-9 max-w-[28rem] space-y-7 border-t border-[var(--line)] pt-4"
            >
              <div className="divide-y divide-[var(--line)]">
                <a
                  href="tel:+639292160920"
                  className="flex items-center gap-3 py-3.5 text-[0.98rem] leading-7 text-[var(--muted)] transition-colors hover:text-[var(--accent-soft)]"
                >
                  <Phone size={15} className="text-[var(--accent)]" />
                  <span>+63 929 216 0920</span>
                </a>
                <a
                  href="mailto:ligayaguitars@gmail.com"
                  className="flex items-center gap-3 py-3.5 text-[0.98rem] leading-7 text-[var(--muted)] transition-colors hover:text-[var(--accent-soft)]"
                >
                  <Mail size={15} className="text-[var(--accent)]" />
                  <span>ligayaguitars@gmail.com</span>
                </a>
              </div>

              <div className="space-y-3.5">
                {promises.map((text) => (
                  <div
                    key={text}
                    className="flex items-start gap-3 text-[0.98rem] leading-7 text-[var(--muted)]"
                  >
                    <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="w-full max-w-[40rem] justify-self-end lg:mt-4">
            <div className="divide-y divide-[var(--line)]">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 22 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, delay: 0.22 + index * 0.08 }}
                  className={`group block px-1 py-5 sm:px-4 md:px-6 lg:px-8 ${
                    index === 0 ? 'pt-4 sm:pt-5' : ''
                  } ${index === contactLinks.length - 1 ? 'pb-6' : ''}`}
                >
                  <div className="pt-0.5 text-[0.7rem] font-semibold uppercase leading-[1.5] tracking-[0.24em] text-[rgba(240,200,137,0.7)]">
                    {link.label}
                  </div>
                  <div className="mt-3 flex flex-col items-start gap-3 font-display text-[1.24rem] leading-[1.08] text-[var(--text)] sm:flex-row sm:items-center sm:justify-between sm:gap-5 md:text-[1.5rem]">
                    <span className="max-w-[23rem]">{link.value}</span>
                    <ArrowRight
                      size={18}
                      className="mt-0.5 shrink-0 text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.56 }}
              className="px-1 pb-2 pt-6 sm:px-4 md:px-6 lg:px-8"
            >
              <div className="text-[0.7rem] font-semibold uppercase leading-[1.4] tracking-[0.24em] text-[rgba(240,200,137,0.7)]">
                Best next step
              </div>
              <p className="mt-3 max-w-[28rem] text-sm leading-7 text-[var(--muted)]">
                If someone is ready to buy, send them to the Lazada store. If they still
                need help choosing, the phone and email routes are visible without adding a
                separate form.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
