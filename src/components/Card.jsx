import { motion } from 'framer-motion'

export default function Card({ title, children, icon: Icon, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      className={`rounded-xl border border-navy-100 bg-white p-6 shadow-card transition-shadow hover:shadow-soft ${className}`}
    >
      {Icon && (
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
          <Icon size={22} />
        </div>
      )}
      {title && <h3 className="mb-2 font-display text-lg font-bold text-navy-900">{title}</h3>}
      <div className="text-sm leading-relaxed text-navy-600">{children}</div>
    </motion.div>
  )
}
