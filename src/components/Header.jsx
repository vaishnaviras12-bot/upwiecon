import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import LogoGroup from './LogoGroup'
import { nav } from '../data/conference'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`absolute inset-x-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? 'border-white/20 bg-black/45 shadow-lg backdrop-blur-xl'
          : 'border-white/15 bg-black/25 backdrop-blur-md'
      }`}
    >
      {/* LOGO ROW */}
      <div className="flex h-[82px] items-center border-b border-white/10 sm:h-[88px]">
        <NavLink
          to="/"
          aria-label="UPWIECON home"
          className="flex w-full items-center"
        >
          <LogoGroup />
        </NavLink>
      </div>

      {/* DESKTOP NAVIGATION */}
      <div className="hidden xl:block">
        <nav
          className="mx-auto flex max-w-[1750px] flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 pb-3 pt-6"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-md px-3 py-2 text-[13px] font-semibold uppercase tracking-wide transition-all duration-200 2xl:px-4 2xl:text-[15px] ${
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* TABLET / MOBILE NAVIGATION */}
      <div className="flex h-[50px] items-center justify-between px-4 xl:hidden">
        <NavLink
          to="/"
          aria-label="UPWIECON home"
          className="flex items-center"
        >
          <LogoGroup compact />
        </NavLink>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white transition-colors hover:bg-white/10"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          <Menu size={26} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="ml-auto flex h-full w-[85%] max-w-sm flex-col bg-white shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between border-b border-navy-100 p-4">
                <LogoGroup compact />

                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-md p-2 text-navy-700 hover:bg-navy-50"
                  aria-label="Close navigation menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav
                className="flex-1 overflow-y-auto p-2"
                aria-label="Mobile Primary"
              >
                {nav.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold ${
                        isActive
                          ? 'bg-navy-50 text-accent-600'
                          : 'text-navy-800 hover:bg-navy-50'
                      }`
                    }
                  >
                    {item.label}

                    <ChevronRight size={16} className="text-navy-400" />
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