import { motion } from 'framer-motion'
import { CalendarDays, ArrowRight, MapPin } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { hero, venue } from '../data/conference'

// Bubble-up effect: line ko touch karne par halka bada + upar uthta hai
const bubble = {
  scale: 1.04,
  y: -4,
  transition: { type: 'spring', stiffness: 300, damping: 18 },
}

// Highlight glass background (hover par dikhega)
const bubbleStyle =
  'origin-left -mx-3 cursor-default rounded-xl px-3 py-1.5 transition-colors duration-300 hover:bg-white/10 hover:shadow-lg hover:backdrop-blur-md'

export default function Hero() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen overflow-hidden bg-black text-white">

        {/* Background Video */}
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

        {/* Dark overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-black/40"
        />

        {/* Left-side gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/55 to-transparent"
        />

        {/* Bottom gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-t from-black/70 to-transparent"
        />

        {/* Hero Content */}
        <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-32 pt-[130px] sm:px-10 sm:pt-[130px] lg:px-12 lg:pt-[130px]">
          <div className="flex max-w-4xl flex-col gap-6">

            {/* Conference label (top date badge) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={bubble}
              transition={{ duration: 0.6 }}
              className="inline-flex cursor-default items-center gap-3 self-start rounded-full border border-white/30 bg-white/10 px-6 py-3 text-lg font-black backdrop-blur-md transition-colors duration-300 hover:bg-white/20 sm:text-xl"
            >
              <span className="h-3 w-3 rounded-full bg-green-400" />
              {hero.dateLine}
            </motion.div>

            {/* Subtitle (3rd IEEE Uttar Pradesh Section...) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={bubble}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`max-w-3xl text-base font-semibold leading-relaxed text-white/90 sm:text-lg lg:text-xl ${bubbleStyle}`}
            >
              {hero.subtitle}
            </motion.p>

            {/* Tagline (International Conference on...) */}
            {hero.tagline && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={bubble}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`max-w-3xl text-base font-medium leading-relaxed text-white/90 sm:text-lg ${bubbleStyle}`}
              >
                {hero.tagline}
              </motion.p>
            )}

            {/* Date + Venue */}
            <div className="flex flex-col gap-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={bubble}
                transition={{ duration: 0.6, delay: 0.35 }}
               className={`flex items-center gap-3 text-lg font-black text-white sm:text-xl ${bubbleStyle} self-start`}
>
  <CalendarDays className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
  <span>{hero.dateLine}</span>
</motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={bubble}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`flex items-center gap-2 text-sm text-white/90 sm:text-base ${bubbleStyle} self-start`}
              >
                <MapPin className="h-5 w-5 shrink-0" />
                <span>{venue.address}</span>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col gap-3 pt-15 sm:flex-row"
            >
              {hero.ctas?.map((cta, index) => (
                <NavLink
                  key={cta.label}
                  to={cta.href}
                  className={
                    index === 0
                      ? 'group inline-flex items-center justify-center gap-2 rounded-lg bg-[#A1281A] px-7 py-3.5 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#871F17] hover:shadow-2xl'
                      : 'group inline-flex items-center justify-center gap-2 rounded-lg border border-white/50 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20'
                  }
                >
                  {cta.label}

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </NavLink>
              ))}
            </motion.div>

          </div>
        </div>

        {/* Small conference indicator */}
        <div className="absolute bottom-6 right-6 z-20 hidden text-right text-xs text-white/60 md:block">
          <p className="font-semibold tracking-widest">
            UPWIECON 2027
          </p>
          <p className="mt-1">
            Women in Engineering
          </p>
        </div>
      </section>

      {/* ==================== THREE HIGHLIGHT CARDS ==================== */}
      <section className="relative bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

          <div className="grid gap-6 md:grid-cols-3">
            {hero.highlights?.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_12px_40px_rgba(37,99,235,0.18)]"
              >

                {/* Soft blue hover glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-10 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* Card content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.body}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}