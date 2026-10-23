import { motion } from 'framer-motion'
import { CalendarDays, ArrowRight, MapPin } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { hero, venue } from '../data/conference'

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] overflow-hidden bg-navy-950 text-white">

        {/* Background Video */}
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/university-video2.mp4" type="video/mp4" />
        </video>

        {/* Overlays for readable text */}
        <div aria-hidden="true" className="absolute inset-0 z-10 bg-navy-950/60" />
        <div aria-hidden="true" className="absolute inset-0 z-10 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-transparent" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-navy-950/90 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-20 mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-16 sm:px-10 lg:px-12">
          <div className="flex max-w-4xl flex-col gap-6">

            {/* Date badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 self-start rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-gold-400 backdrop-blur-md sm:text-base"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
              {hero.dateLine}
            </motion.div>

            {/* Hero Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-4xl text-base font-normal leading-relaxed text-slate-200 sm:text-lg"
            >
              {hero.subtitle}
            </motion.p>

            {/* Tagline */}
            {hero.tagline && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-4xl text-base font-normal leading-relaxed text-slate-200 sm:text-lg"
              >
                {hero.tagline}
              </motion.p>
            )}

            {/* Date + Venue meta */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 text-sm text-slate-300 sm:text-base"
            >
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 shrink-0 text-gold-400" />
                <span>{hero.dateLine}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 shrink-0 text-gold-400" />
                <span>{venue.address}</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-3 pt-4 sm:flex-row"
            >
              {hero.ctas?.map((cta, index) => (
                <NavLink
                  key={cta.label}
                  to={cta.href}
                  className={
                    index === 0
                      ? 'group inline-flex items-center justify-center gap-2 rounded-lg bg-accent-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:bg-accent-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400'
                      : 'group inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400'
                  }
                >
                  {cta.label}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
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