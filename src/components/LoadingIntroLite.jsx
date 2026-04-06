import { motion } from 'framer-motion'

export default function LoadingIntroLite() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#0d0700]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(216,156,78,0.18),transparent_24%),linear-gradient(180deg,rgba(10,5,2,0.74)_0%,rgba(10,5,2,0.97)_100%)]" />
      <div className="pointer-events-none absolute inset-x-[12%] bottom-[18%] h-24 rounded-full bg-[radial-gradient(circle,rgba(216,156,78,0.24),transparent_72%)] blur-3xl" />

      <div className="relative flex w-full max-w-sm flex-col items-center px-6">
        <motion.img
          src="/assets/products/vintagevibe_main.png"
          alt=""
          initial={{ opacity: 0, y: 14, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-[12.5rem] drop-shadow-[0_28px_70px_rgba(0,0,0,0.58)] sm:w-[14rem]"
        />

        <div className="mt-3 text-center">
          <div className="text-[0.66rem] font-semibold uppercase tracking-[0.42em] text-[rgba(240,200,137,0.74)]">
            Ligaya Guitars
          </div>
          <div className="mt-3 flex items-end justify-center gap-3 text-[var(--accent-soft)]">
            {[
              { y: [0, -6, 0], delay: 0 },
              { y: [0, -10, 0], delay: 0.14 },
              { y: [0, -7, 0], delay: 0.28 },
            ].map((note, index) => (
              <motion.svg
                key={index}
                width="18"
                height="26"
                viewBox="0 0 18 26"
                fill="none"
                animate={{ y: note.y, opacity: [0.62, 1, 0.62] }}
                transition={{
                  duration: 1.35,
                  delay: note.delay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <path
                  d="M11 3v13.2a3.2 3.2 0 1 1-1.4-2.64V6.4l6-1.7v10.9a3.2 3.2 0 1 1-1.4-2.64V2L11 3Z"
                  fill="currentColor"
                />
              </motion.svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
