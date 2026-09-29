import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export default function Timeline({ items }) {
  return (
    <ol className="relative border-l-2 border-navy-100 pl-6 sm:mx-auto sm:max-w-2xl">
      {items.map((item, idx) => (
        <motion.li
          key={item.label}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: idx * 0.04 }}
          className="mb-8 last:mb-0"
        >
          <span
            className={`absolute -left-[11px] flex h-5 w-5 items-center justify-center rounded-full ring-4 ring-white ${
              item.isFinal ? 'bg-gold-500' : 'bg-navy-600'
            }`}
          >
            {item.isFinal && <CheckCircle2 size={14} className="text-white" />}
          </span>
          <p className={`text-sm font-semibold uppercase tracking-wide ${item.isFinal ? 'text-gold-600' : 'text-navy-500'}`}>
            {item.label}
          </p>
          <p className="font-display text-lg font-bold text-navy-900">{item.date}</p>
        </motion.li>
      ))}
    </ol>
  )
}
