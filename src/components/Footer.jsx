import { NavLink } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import LogoGroup from './LogoGroup'
import { nav, venue, footerContact, copyright, footerCredit } from '../data/conference'

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="mx-auto grid max-w-8xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <LogoGroup compact />
          <p className="mt-4 font-display text-lg font-bold text-white">UPWIECON 2027</p>
          <p className="mt-1 text-sm text-navy-400">
            3rd IEEE Uttar Pradesh Section Women in Engineering International Conference on
            Electrical Electronics and Computer Engineering.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            Quick Navigation
          </h4>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {nav.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} className="text-sm text-navy-300 hover:text-white">
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-navy-300">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
              {venue.address}
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-gold-400" />
              {footerContact.phones.join(' / ')}
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-gold-400" />
              <a href={`mailto:${footerContact.email}`} className="hover:text-white">
                {footerContact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-8xl flex-col items-center gap-1 px-4 text-center text-xs text-navy-400 sm:px-6 lg:px-8">
          <p>{copyright}</p>
          <p>{footerCredit}</p>
        </div>
      </div>
    </footer>
  )
}
