import { useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { galleryItems } from '../data/siteContent'

function EditorialTile({ tile, className = '', contentClassName = '', imageClassName = '', onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-90px' }}
      transition={{ duration: 0.78, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative cursor-pointer overflow-hidden rounded-[1.9rem] ${className}`}
      onClick={() => onOpen(tile)}
    >
      <img
        src={tile.src}
        alt={tile.title}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035] ${imageClassName}`}
        style={{ objectPosition: tile.position || 'center' }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,4,2,0.06)_16%,rgba(8,4,2,0.88)_100%)]" />
      <div className="absolute right-4 top-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(240,200,137,0.3)] bg-[rgba(9,4,3,0.65)] text-[rgba(240,200,137,0.84)] backdrop-blur-md">
          <ZoomIn size={14} />
        </div>
      </div>
      <div className={`absolute inset-x-0 bottom-0 p-5 sm:p-6 ${contentClassName}`}>
        <div className="text-[0.58rem] font-semibold uppercase tracking-[0.34em] text-[rgba(240,200,137,0.76)]">
          {tile.note}
        </div>
        <h3 className="mt-3 max-w-[16rem] font-display text-[clamp(1.45rem,3vw,2.2rem)] leading-[1.03] text-[var(--text)]">
          {tile.title}
        </h3>
        <p className="mt-3 max-w-[25rem] text-sm leading-6 text-[rgba(247,239,228,0.72)]">
          {tile.detail}
        </p>
      </div>
    </motion.article>
  )
}

function Lightbox({ tile, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-6"
      onClick={onClose}
    >
      <button
        className="absolute right-6 top-6 text-[rgba(240,200,137,0.7)] transition-colors hover:text-[var(--accent-soft)]"
        onClick={onClose}
      >
        <X size={24} />
      </button>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-4xl"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={tile.src}
          alt={tile.title}
          loading="lazy"
          decoding="async"
          className="max-h-[80vh] w-full object-contain"
        />
        <div className="mt-4 text-center">
          <div className="font-display text-xl text-[var(--text)]">{tile.title}</div>
          <div className="mt-1 text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-[rgba(240,200,137,0.7)]">
            {tile.note}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Gallery() {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [lightbox, setLightbox] = useState(null)
  const [leadImage, portraitImage, wideImage, detailImage, studyImage, acousticDetailImage] = galleryItems

  return (
    <section id="gallery" className="relative overflow-hidden bg-[#0c0503]">
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(240,200,137,0.06),transparent)]" />

      <div className="layout-shell section-padding relative">
        <div
          ref={ref}
          className="mb-12 grid gap-8 border-b border-[rgba(240,200,137,0.12)] pb-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(0,0.76fr)] lg:items-end"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
          >
            <div className="eyebrow">Gallery</div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="mt-5 max-w-2xl font-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.02] text-[var(--text)]"
            >
              An editorial pass through the lineup, from room-scale presence to detail-level finish.
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.24 }}
            className="grid gap-5 text-sm leading-6 text-[var(--muted)] sm:grid-cols-2"
          >
            <p>
              Instead of a tight image wall, the gallery now opens up with larger crops, calmer captions,
              and more room for the finishes and spaces to do narrative work.
            </p>
            <p>
              Tap any frame for a closer view. The captions stay editorial and light so the imagery carries
              most of the mood.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)]">
          <EditorialTile
            tile={leadImage}
            onOpen={setLightbox}
            className="min-h-[28rem] lg:min-h-[38rem]"
            contentClassName="sm:p-8"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <EditorialTile
              tile={portraitImage}
              onOpen={setLightbox}
              className="min-h-[16rem] sm:min-h-[20rem] lg:min-h-[18.5rem]"
            />
            <EditorialTile
              tile={wideImage}
              onOpen={setLightbox}
              className="min-h-[16rem] sm:min-h-[20rem] lg:min-h-[18.5rem]"
              imageClassName="object-[center_center]"
            />
          </div>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
          <EditorialTile
            tile={detailImage}
            onOpen={setLightbox}
            className="min-h-[18rem] lg:min-h-[24rem]"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <EditorialTile
              tile={studyImage}
              onOpen={setLightbox}
              className="min-h-[18rem] lg:min-h-[24rem]"
            />
            <EditorialTile
              tile={acousticDetailImage}
              onOpen={setLightbox}
              className="min-h-[18rem] lg:min-h-[24rem]"
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightbox && <Lightbox tile={lightbox} onClose={() => setLightbox(null)} />}
      </AnimatePresence>
    </section>
  )
}
