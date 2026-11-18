import { Mail, Phone, MapPin } from 'lucide-react'
import PageLayout from '../components/PageLayout'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { chairContacts, generalContacts, registrationContacts, kcMishraContact } from '../data/contact'
import { venue } from '../data/conference'

function ContactCard({ contact }) {
  if (!contact || contact.isBlank) {
    return (
      <div
        className="min-h-[140px] rounded-2xl border border-dashed border-slate-200 dark:border-navy-800 bg-white/40 dark:bg-navy-900/30 p-5 shadow-sm transition-all"
        aria-hidden="true"
      />
    )
  }

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-6 shadow-sm space-y-3 transition-all hover:border-gold-500/40 hover:shadow-md">
      <div>
        <p className="font-display text-lg font-bold text-navy-950 dark:text-slate-100">
          {contact.name}
        </p>
        {contact.ieeeRole && (
          <p className="mt-1 text-xs font-semibold text-accent-700 dark:text-gold-400 leading-snug">
            {contact.ieeeRole}
          </p>
        )}
        {contact.designation && (
          <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300 leading-snug">
            {contact.designation}
          </p>
        )}
      </div>

      <div className="pt-2 border-t border-slate-100 dark:border-navy-800 space-y-2 text-xs text-navy-800 dark:text-slate-300">
        {contact.phone && (
          <p className="flex items-center gap-2">
            <Phone size={14} className="text-accent-600 dark:text-gold-400 shrink-0" />
            <a
              href={`tel:${contact.phoneTel || contact.phone.replace(/\s+/g, '')}`}
              className="hover:text-accent-600 dark:hover:text-gold-400 font-semibold"
            >
              {contact.phone}
            </a>
          </p>
        )}
        {contact.email && (
          <p className="flex items-center gap-2">
            <Mail size={14} className="text-accent-600 dark:text-gold-400 shrink-0" />
            <a
              href={`mailto:${contact.email}`}
              className="hover:text-accent-600 dark:hover:text-gold-400 font-semibold truncate"
            >
              {contact.email}
            </a>
          </p>
        )}
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <PageLayout title="Contact Us">
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Connect with conference organizers, convenors, and administration"
      />

      <section className="mx-auto max-w-8xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 space-y-14">
        {/* CONFERENCE CHAIR & CONVENOR */}
        <div>
          <SectionHeading eyebrow="Leadership" title="Conference Chair & Convenor" />
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {chairContacts.map((c, i) => (
              <ContactCard key={c.id || i} contact={c} />
            ))}
          </div>
        </div>

        {/* GENERAL CONTACTS */}
        <div>
          <SectionHeading eyebrow="General Enquiries" title="General Contacts" />
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {generalContacts.map((c, i) => (
              <ContactCard key={c.id || i} contact={c} />
            ))}
          </div>
        </div>

        {/* REGISTRATION CONTACTS */}
        <div>
          <SectionHeading eyebrow="Support" title="Registration Contacts" />
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {registrationContacts.map((c, i) => (
              <ContactCard key={c.id || i} contact={c} />
            ))}
          </div>
        </div>

        {/* OFFICE & GENERAL CORRESPONDENCE */}
        <div>
          <SectionHeading eyebrow="Reach Us" title="Office & General Correspondence" />
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="flex items-start gap-3.5 rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-6 shadow-sm sm:col-span-2">
              <MapPin size={22} className="mt-0.5 shrink-0 text-accent-600 dark:text-gold-400" />
              <div>
                <h4 className="font-display font-bold text-navy-950 dark:text-slate-100 text-sm">
                  Conference Secretariat
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-navy-800 dark:text-slate-300 leading-relaxed">
                  {venue.address}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-6 shadow-sm space-y-3">
              <p className="flex items-center gap-2 text-xs sm:text-sm text-navy-800 dark:text-slate-300">
                <Mail size={16} className="text-accent-600 dark:text-gold-400 shrink-0" />
                <a
                  href={`mailto:${kcMishraContact.email}`}
                  className="hover:text-accent-600 dark:hover:text-gold-400 font-semibold truncate"
                >
                  {kcMishraContact.email}
                </a>
              </p>
              <p className="flex items-center gap-2 text-xs sm:text-sm text-navy-800 dark:text-slate-300">
                <Phone size={16} className="text-accent-600 dark:text-gold-400 shrink-0" />
                <a
                  href={`tel:${kcMishraContact.phoneTel}`}
                  className="hover:text-accent-600 dark:hover:text-gold-400 font-semibold"
                >
                  +91 {kcMishraContact.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
