import { motion } from 'framer-motion'

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 text-white sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #4f76ae 0, transparent 45%), radial-gradient(circle at 80% 0%, #c8402f 0, transparent 40%)',
        }}
      />
      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {subtitle && <p className="mt-4 max-w-2xl text-base text-navy-100 sm:text-lg">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  )
}
