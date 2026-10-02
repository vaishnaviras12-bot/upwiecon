import wit from '../assets/logos/wit.jpg'
import ieeeUpLogo from '../assets/logos/wie.jpg'
import ieeeLogo from '../assets/logos/ieee.jpg'
import vmsbutuLogo from '../assets/logos/vmsbutu-logo.png'

const logos = [
  {
    src: wit,
    alt: 'WIT logo',
    fill: true, // only WIT fills the circle
  },
  {
    src: ieeeUpLogo,
    alt: 'IEEE Uttar Pradesh Section Women in Engineering logo',
  },
  {
    src: ieeeLogo,
    alt: 'IEEE logo',
  },
  {
    src: vmsbutuLogo,
    alt: 'Veer Madho Singh Bhandari Uttarakhand Technical University logo',
  },
]

function LogoCircle({ logo, compact }) {
  return (
    <div
      className={
        compact
          ? 'h-9 w-9 shrink-0 overflow-hidden rounded-full bg-white ring-1 ring-white/30'
          : 'h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white shadow-md ring-1 ring-white/40 sm:h-[68px] sm:w-[68px] lg:h-[74px] lg:w-[74px]'
      }
    >
      <img
        src={logo.src}
        alt={logo.alt}
        className={
          logo.fill
            ? 'h-full w-full scale-125 object-cover'
            : `h-full w-full object-contain ${compact ? 'p-0.5' : 'p-1'}`
        }
      />
    </div>
  )
}

export default function LogoGroup({ compact = false }) {
  // Small version (mobile bar / mobile menu): just the 4 logos in a row
  if (compact) {
    return (
      <div className="flex items-center justify-center gap-2">
        {logos.map((logo) => (
          <LogoCircle key={logo.alt} logo={logo} compact />
        ))}
      </div>
    )
  }

  const left = logos.slice(0, 2)
  const right = logos.slice(2)
  const side = 'flex items-center gap-2 sm:gap-4 lg:gap-5'

  return (
    <div className="relative flex w-full items-center justify-between px-3 sm:px-8 lg:px-12">
      {/* Left corner of page: 2 logos */}
      <div className={side}>
        {left.map((logo) => (
          <LogoCircle key={logo.alt} logo={logo} />
        ))}
      </div>

      {/* Center title: exactly in the middle of the page */}
      <h1 className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center text-sm font-extrabold uppercase tracking-[0.12em] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] sm:text-2xl lg:text-4xl xl:text-5xl">
        UPWIECON 2027
      </h1>

      {/* Right corner of page: 2 logos */}
      <div className={side}>
        {right.map((logo) => (
          <LogoCircle key={logo.alt} logo={logo} />
        ))}
      </div>
    </div>
  )
}