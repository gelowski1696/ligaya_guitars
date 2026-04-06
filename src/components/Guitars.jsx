import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check, ShoppingBag } from 'lucide-react'
import { featuredProducts } from '../data/siteContent'

export default function Guitars() {
  const [activeId, setActiveId] = useState(featuredProducts[0].id)
  const [activeShot, setActiveShot] = useState(0)
  const activeProduct = useMemo(
    () => featuredProducts.find((product) => product.id === activeId) ?? featuredProducts[0],
    [activeId],
  )

  useEffect(() => {
    setActiveShot(0)
  }, [activeId])

  return (
    <section id="guitars" className="relative overflow-hidden bg-[#150904]">
      <div className="layout-shell section-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="eyebrow">The Collection</div>
          <h2 className="mt-5 font-display text-[clamp(2.5rem,5vw,4.7rem)] leading-[1.02] text-[var(--text)]">
            Choose the voice, feel, and format that fits your playing.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)]">
            Instead of a crowded product grid, the collection is easier to compare here:
            one model at a time, with the details that matter most up front.
          </p>
        </motion.div>

        <div className="mt-9 grid gap-8 lg:mt-10 lg:gap-10 lg:grid-cols-[minmax(17rem,0.78fr)_minmax(0,1.22fr)]">
          <div className="space-y-2">
            {featuredProducts.map((product, index) => {
              const active = product.id === activeId

              return (
                <motion.button
                  key={product.id}
                  type="button"
                  onClick={() => setActiveId(product.id)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  className={`w-full border-t px-1 pt-5 text-left transition-all duration-300 ${
                    active
                      ? 'border-[rgba(240,200,137,0.42)]'
                      : 'border-[var(--line)]'
                  }`}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[rgba(240,200,137,0.72)]">
                        {product.series}
                      </p>
                      <h3 className="mt-2 font-display text-[1.75rem] text-[var(--text)]">
                        {product.name}
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-6 text-[var(--muted)]">
                        {product.summary}
                      </p>
                    </div>

                    <div className="shrink-0 sm:text-right">
                      <p className="font-display text-[1.2rem] text-[var(--accent-soft)]">
                        {product.price}
                      </p>
                      <span
                        className={`mt-3 inline-block h-2.5 w-2.5 rounded-full transition-colors ${
                          active ? 'bg-[var(--accent)]' : 'bg-white/15'
                        }`}
                      />
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>

          <div className="surface-panel overflow-hidden rounded-[2rem] p-3 sm:rounded-[2.2rem] sm:p-5 md:p-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35 }}
                className="grid gap-6 lg:gap-8 lg:grid-cols-[minmax(0,0.96fr)_minmax(18rem,0.88fr)]"
              >
                <div>
                  <div className="relative overflow-hidden rounded-[1.8rem] bg-[rgba(255,255,255,0.03)]">
                    <img
                      src={activeProduct.gallery[activeShot]}
                      alt={activeProduct.name}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/5] w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(9,4,3,0.66)_100%)]" />
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center px-5 pb-5">
                      <div className="w-full max-w-[17rem] text-center">
                        <div className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[rgba(240,200,137,0.82)]">
                          {activeProduct.series}
                        </div>
                        <div className="mt-2 font-display text-[1.7rem] leading-[1.05] text-[var(--text)]">
                          {activeProduct.name}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
                    {activeProduct.gallery.map((image, index) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() => setActiveShot(index)}
                        className={`overflow-hidden rounded-[1rem] border transition-all duration-200 ${
                          activeShot === index
                            ? 'border-[rgba(240,200,137,0.48)]'
                            : 'border-white/10'
                        }`}
                        aria-label={`Show ${activeProduct.name} image ${index + 1}`}
                      >
                        <img
                          src={image}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          className="aspect-[4/5] w-full object-cover object-center"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-8">
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[rgba(240,200,137,0.72)]">
                      Featured model
                    </p>
                    <h3 className="mt-3 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.02] text-[var(--text)]">
                      {activeProduct.name}
                    </h3>
                    <p className="mt-5 text-base leading-7 text-[var(--muted)]">
                      {activeProduct.description}
                    </p>

                    <div className="mt-7 space-y-3">
                      {activeProduct.specs.map((spec) => (
                        <div key={spec} className="flex items-start gap-3 text-sm leading-6 text-[var(--text)]">
                          <Check size={16} className="mt-1 shrink-0 text-[var(--accent)]" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-[var(--line)] pt-6">
                    <p className="text-sm leading-6 text-[var(--muted)]">{activeProduct.finishes}</p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <a
                        href={activeProduct.shopUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-primary w-full sm:w-auto"
                      >
                        <ShoppingBag size={16} />
                        Buy this model
                      </a>
                      <a
                        href="https://www.lazada.com.ph/shop/ligaya-guitars/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-secondary w-full sm:w-auto"
                      >
                        Full store
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
