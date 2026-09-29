import Msbte from '../assets/logos/sponsors/Msbte.jpg'
import Anrf from '../assets/logos/sponsors/anrf.jpg'
import Powergrid from '../assets/logos/sponsors/powergrid.jpg'
import Infineon from '../assets/logos/sponsors/infineon.jpg'

const sponsors = [
  {
    name: 'MSBTE',
    logo: Msbte,
  },
  {
    name: 'ANRF',
    logo: Anrf,
  },
  {
    name: 'POWERGRID',
    logo: Powergrid,
  },
  {
    name: 'Infineon',
    logo: Infineon,
  },
]

export default function SponsorStrip() {
  return (
    <section className="border-y border-slate-100 bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">

        {/* Section heading */}
        <p className="mb-10 text-center text-xl font-bold uppercase tracking-[0.16em] text-slate-700 sm:text-2xl">
          Our Sponsors
        </p>

        {/* Sponsors - one row */}
        <div className="grid grid-cols-4 items-center gap-5 sm:gap-8 lg:gap-10">

          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="group flex min-h-[155px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_12px_35px_rgba(37,99,235,0.14)]"
            >

              {/* Logo */}
              <div className="flex h-24 w-full items-center justify-center">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-24 max-w-[90%] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Name */}
              <p className="mt-3 text-center text-sm font-bold tracking-wide text-slate-700">
                {sponsor.name}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}