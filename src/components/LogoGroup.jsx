import wit from '../assets/logos/wit.jpg'
import wiePng from '../assets/logos/wie.png'
import wieJpg from '../assets/logos/wie.jpg'
import ieeePng from '../assets/logos/ieee.png'
import ieeeJpg from '../assets/logos/ieee.jpg'
import vmsbutuLogo from '../assets/logos/vmsbutu-logo.png'

const logos = [
  {
    id: 'wit',
    src: wit,
    alt: 'Women\'s Institute of Technology (WIT) logo',
  },
  {
    id: 'wie',
    src: wiePng || wieJpg,
    alt: 'IEEE Women in Engineering (WIE) logo',
  },
  {
    id: 'ieee',
    src: ieeePng || ieeeJpg,
    alt: 'IEEE logo',
  },
  {
    id: 'vmsbutu',
    src: vmsbutuLogo,
    alt: 'Veer Madho Singh Bhandari Uttarakhand Technical University (VMSBUTU) logo',
  },
]

function LogoItem({ logo, compact }) {
  const isWit = logo.id === 'wit'

  if (compact) {
    return (
      <div
        className={`flex items-center justify-center bg-white rounded-full shadow-sm overflow-hidden shrink-0 h-8 w-8 sm:h-9 sm:w-9 ${
          isWit ? 'p-0' : 'p-0.5'
        }`}
      >
        <img
          src={logo.src}
          alt={logo.alt}
          className="h-full max-h-full w-auto max-w-full object-contain shrink-0"
          style={isWit ? { transform: 'scale(1.22)', transformOrigin: 'center' } : undefined}
        />
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center py-1">
      <div
        className={`flex items-center justify-center bg-white rounded-full shadow-md border border-white/50 h-14 w-14 sm:h-18 sm:w-18 lg:h-22 lg:w-22 xl:h-24 xl:w-24 overflow-hidden shrink-0 transition-transform duration-200 hover:scale-105 ${
          isWit ? 'p-0.5' : 'p-1 sm:p-1.5 lg:p-2'
        }`}
      >
        <img
          src={logo.src}
          alt={logo.alt}
          className="h-full max-h-full w-auto max-w-full object-contain shrink-0"
          style={isWit ? { transform: 'scale(1.22)', transformOrigin: 'center' } : undefined}
        />
      </div>
    </div>
  )
}

export default function LogoGroup({ compact = false }) {
  if (compact) {
    return (
      <div className="flex items-center justify-center gap-2 sm:gap-3">
        {logos.map((logo) => (
          <LogoItem key={logo.id} logo={logo} compact />
        ))}
      </div>
    )
  }

  const leftLogos = logos.slice(0, 2)
  const rightLogos = logos.slice(2)

  return (
    <div className="grid grid-cols-[1fr_auto_1fr] w-full items-center px-3 sm:px-6 lg:px-10">
      {/* Left Logos: [ WIT ] [ WIE ] */}
      <div className="flex items-center justify-start gap-3 sm:gap-5 lg:gap-6">
        {leftLogos.map((logo) => (
          <LogoItem key={logo.id} logo={logo} />
        ))}
      </div>

      {/* Center Title: UPWIECON 2027 */}
      <div className="flex flex-col items-center justify-center text-center px-3 sm:px-6">
        <h1 className="font-display text-xl font-extrabold tracking-wider text-white drop-shadow-md sm:text-2xl lg:text-3xl xl:text-4xl">
          UPWIECON 2027
        </h1>
        <p className="hidden text-[10px] font-semibold tracking-widest text-gold-400 uppercase sm:block lg:text-xs">
          IEEE Women in Engineering Conference
        </p>
      </div>

      {/* Right Logos: [ IEEE ] [ VMSBUTU ] */}
      <div className="flex items-center justify-end gap-3 sm:gap-5 lg:gap-6">
        {rightLogos.map((logo) => (
          <LogoItem key={logo.id} logo={logo} />
        ))}
      </div>
    </div>
  )
}