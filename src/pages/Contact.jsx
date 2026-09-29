import { Mail, Phone, MapPin } from 'lucide-react'
import PageLayout from '../components/PageLayout'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { chairContact, generalContacts, registrationContacts } from '../data/contact'
import { venue, footerContact } from '../data/conference'

function ContactCard({ name, phone, email }) {
  return (
    <div className="rounded-xl border border-navy-100 bg-white p-5 shadow-card">
      <p className="font-semibold text-navy-900">{name}</p>
      {phone && (
        <p className="mt-2 flex items-center gap-2 text-sm text-navy-600">
          <Phone size={14} className="text-accent-600" /> {phone}
        </p>
      )}
      {email && (
        <p className="mt-1 flex items-center gap-2 text-sm text-navy-600">
          <Mail size={14} className="text-accent-600" />
          <a href={`mailto:${email}`} className="hover:text-accent-600">
            {email}
          </a>
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  return (
    <PageLayout title="Contact Us">
      <PageHero eyebrow="Get in Touch" title="Contact Us" />

      <section className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <SectionHeading eyebrow={chairContact.title} title="Conference Chair & Convenor" />
        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {chairContact.people.map((p) => (
            <ContactCard key={p.name} name={p.name} email={p.email} />
          ))}
        </div>

        <SectionHeading eyebrow="General Enquiries" title="General Contacts" />
        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {generalContacts.map((p) => (
            <ContactCard key={p.name} name={p.name} phone={p.phone} email={p.email} />
          ))}
        </div>

        <SectionHeading eyebrow="Registration Support" title="Registration Contacts" />
        <div className="mb-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {registrationContacts.map((p) => (
            <ContactCard key={p.name} name={p.name} phone={p.phone} email={p.email} />
          ))}
        </div>

        <SectionHeading eyebrow="Reach Us" title="Office & General Correspondence" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-start gap-3 rounded-xl border border-navy-100 bg-white p-5 shadow-card sm:col-span-2">
            <MapPin size={20} className="mt-0.5 shrink-0 text-accent-600" />
            <p className="text-sm text-navy-600">{venue.address}</p>
          </div>
          <div className="rounded-xl border border-navy-100 bg-white p-5 shadow-card">
            <p className="flex items-center gap-2 text-sm text-navy-600">
              <Mail size={16} className="text-accent-600" />
              <a href={`mailto:${footerContact.email}`} className="hover:text-accent-600">
                {footerContact.email}
              </a>
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-navy-600">
              <Phone size={16} className="text-accent-600" /> {footerContact.phones.join(' / ')}
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
