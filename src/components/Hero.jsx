import { motion } from 'framer-motion'
import { CalendarDays, ArrowRight, MapPin } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { hero, venue } from '../data/conference'

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] overflow-hidden bg-navy-950 text-white">

        {/* Background Video (natural brightness, 100% opacity, no dark filters) */}
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/university-video2.mp4" type="video/mp4" />
        </video>

        {/* Hero Content */}
        <div className="relative z-20 mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-12 sm:px-10 lg:px-12">
          <div className="flex max-w-3xl flex-col gap-4">

            {/* Date badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 self-start rounded-full border border-white/25 bg-black/30 px-3.5 py-1 text-xs font-semibold text-gold-300 shadow-sm sm:text-sm"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              {hero.dateLine}
            </motion.div>

            {/* Hero Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl text-sm font-semibold leading-relaxed text-white sm:text-base drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
            >
              {hero.subtitle}
            </motion.p>

            {/* Tagline */}
            {hero.tagline && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-2xl text-sm font-medium leading-relaxed text-slate-100 sm:text-base drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
              >
                {hero.tagline}
              </motion.p>
            )}

            {/* Date + Venue meta */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 text-xs text-slate-200 sm:text-sm drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
            >
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 shrink-0 text-gold-300 drop-shadow" />
                <span>{hero.dateLine}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-gold-300 drop-shadow" />
                <span>{venue.address}</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-3 pt-2 sm:flex-row"
            >
              {hero.ctas?.map((cta, index) => (
                <NavLink
                  key={cta.label}
                  to={cta.href}
                  className={
                    index === 0
                      ? 'group inline-flex items-center justify-center gap-2 rounded-lg bg-accent-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-accent-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400'
                      : 'group inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400'
                  }
                >
                  {cta.label}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </NavLink>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* HIGHLIGHT CARDS */}
      <section className="relative bg-navy-50/50 dark:bg-navy-900/60 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="grid gap-6 md:grid-cols-3">
            {hero.highlights?.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl border border-navy-100 dark:border-navy-800 bg-white dark:bg-navy-800/80 p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-navy-900 dark:text-slate-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700 dark:text-slate-300">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}