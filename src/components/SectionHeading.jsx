import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`mb-10 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <p
          className={`mb-2 text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? 'text-gold-400' : 'text-accent-600'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-2xl font-bold leading-tight sm:text-3xl md:text-4xl ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base ${light ? 'text-navy-100' : 'text-navy-600'}`}>{subtitle}</p>
      )}
    </motion.div>
  )
}
