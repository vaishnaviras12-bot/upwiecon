import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import LogoGroup from './LogoGroup'
import ThemeToggle from './ThemeToggle'
import { nav } from '../data/conference'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 dark:bg-navy-950/95 backdrop-blur-md shadow-lg border-b border-navy-700/60'
          : 'bg-navy-900 dark:bg-navy-950 border-b border-navy-800'
      }`}
    >
      {/* LOGO ROW */}
      <div className="py-2.5 sm:py-3.5 border-b border-white/10">
        <NavLink
          to="/"
          aria-label="UPWIECON 2027 Home"
          className="flex w-full items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded"
        >
          <LogoGroup />
        </NavLink>
      </div>

      {/* DESKTOP NAVIGATION BAR */}
      <div className="hidden xl:block">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2"
          aria-label="Primary navigation"
        >
          <div className="flex flex-wrap items-center justify-center gap-1 2xl:gap-2">
            {nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative rounded-md px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 2xl:px-4 2xl:text-sm ${
                    isActive
                      ? 'bg-gold-500/20 text-gold-400 font-bold border-b-2 border-gold-400'
                      : 'text-white/85 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="ml-4 flex items-center gap-2">
            <ThemeToggle />
          </div>
        </nav>
      </div>

      {/* TABLET / MOBILE HEADER BAR */}
      <div className="flex h-14 items-center justify-between px-4 xl:hidden">
        <NavLink
          to="/"
          aria-label="UPWIECON Home"
          className="flex items-center gap-2 text-white font-display font-bold text-base tracking-wide"
        >
          <LogoGroup compact />
        </NavLink>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm xl:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="ml-auto flex h-full w-[85%] max-w-sm flex-col bg-white dark:bg-navy-900 text-navy-900 dark:text-slate-100 shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Drawer Header */}
              <div className="flex items-center justify-between border-b border-navy-100 dark:border-navy-800 p-4">
                <LogoGroup compact />
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-md p-2 text-navy-700 dark:text-navy-200 hover:bg-navy-50 dark:hover:bg-navy-800"
                    aria-label="Close menu"
                  >
                    <X size={22} />
                  </button>
                </div>
              </div>

              {/* Mobile Navigation List */}
              <nav className="flex-1 overflow-y-auto p-3" aria-label="Mobile navigation">
                {nav.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-navy-50 dark:bg-navy-800 text-accent-600 dark:text-gold-400 font-bold'
                          : 'text-navy-800 dark:text-slate-200 hover:bg-navy-50 dark:hover:bg-navy-800'
                      }`
                    }
                  >
                    {item.label}
                    <ChevronRight size={16} className="text-navy-400 dark:text-navy-500" />
                  </NavLink>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}