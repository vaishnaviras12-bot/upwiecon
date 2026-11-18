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
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled
          ? 'shadow-md border-b border-slate-200'
          : 'border-b border-slate-200'
      }`}
    >
      {/* TOP HEADER ROW: LOGOS + TITLE + INSTITUTIONAL INFO */}
      <div className="w-full bg-white border-b border-slate-100">
        <NavLink
          to="/"
          aria-label="IEEE UPWIECON 2027 Home"
          className="block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002855]"
        >
          <LogoGroup />
        </NavLink>
      </div>

      {/* DESKTOP NAVIGATION BAR (SINGLE CONTINUOUS HORIZONTAL LINE, NO WRAPPING) */}
      <div className="hidden xl:block bg-white border-t border-slate-100/80">
        <nav
          className="mx-auto flex max-w-[1440px] items-center justify-between px-3 py-1.5"
          aria-label="Primary navigation"
        >
          <div className="flex flex-1 items-center justify-center flex-nowrap whitespace-nowrap gap-0.5 xl:gap-1 2xl:gap-1.5 overflow-x-hidden">
            {nav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative shrink-0 whitespace-nowrap rounded-md px-2 py-1.5 text-[11px] xl:px-2.5 xl:text-[11.5px] 2xl:px-3.5 2xl:py-2 2xl:text-[12.5px] font-semibold uppercase tracking-wider transition-all duration-150 ${
                    isActive
                      ? 'bg-slate-100 text-[#002855] font-bold border-b-2 border-[#002855] rounded-b-none'
                      : 'text-slate-700 hover:bg-slate-100/70 hover:text-[#002855]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="ml-2 shrink-0 flex items-center">
            <ThemeToggle />
          </div>
        </nav>
      </div>

      {/* TABLET / MOBILE HEADER ACTION BAR */}
      <div className="flex h-12 items-center justify-between px-4 xl:hidden bg-white border-t border-slate-100">
        <span className="text-xs font-bold uppercase tracking-wider text-[#002855]">
          Menu
        </span>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-1.5 text-slate-800 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002855]"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu size={22} />
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
              className="ml-auto flex h-full w-[85%] max-w-sm flex-col bg-white text-navy-950 shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Drawer Header */}
              <div className="flex items-center justify-between border-b border-slate-200 p-4 bg-white">
                <LogoGroup compact />
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-md p-1.5 text-slate-700 hover:bg-slate-100"
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
                          ? 'bg-slate-100 text-[#002855] font-bold border-l-4 border-[#002855]'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-navy-950'
                      }`
                    }
                  >
                    {item.label}
                    <ChevronRight size={16} className="text-slate-400" />
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
