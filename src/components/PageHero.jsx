import { motion } from 'framer-motion'

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-navy-900 dark:bg-navy-950 py-12 sm:py-16 text-white border-b border-navy-800">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #4f76ae 0, transparent 45%), radial-gradient(circle at 80% 0%, #c8402f 0, transparent 40%)',
        }}
      />
      <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            {title}
          </h1>
          {subtitle && <p className="mt-3 max-w-3xl text-base text-navy-100 dark:text-slate-200 sm:text-lg">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  )
}
