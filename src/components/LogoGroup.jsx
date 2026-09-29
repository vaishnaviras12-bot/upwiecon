import wit from '../assets/logos/wit.jpg'
import ieeeUpLogo from '../assets/logos/wie.jpg'
import ieeeLogo from '../assets/logos/ieee.jpg'
import vmsbutuLogo from '../assets/logos/vmsbutu-logo.png'

const logos = [
  {
    src: wit,
    alt: 'WIT logo',
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

export default function LogoGroup({ compact = false }) {
  return (
    <div
      className={`flex items-center justify-center ${
        compact
          ? 'gap-2'
          : 'gap-5 sm:gap-7 lg:gap-9'
      }`}
    >
      {logos.map((logo) => (
        <img
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          className={
            compact
              ? 'h-9 w-9 shrink-0 rounded-full bg-white object-contain p-0.5 ring-1 ring-white/30'
              : 'h-[58px] w-[58px] shrink-0 rounded-full bg-white object-contain p-1 shadow-md ring-1 ring-white/40 sm:h-[68px] sm:w-[68px] lg:h-[74px] lg:w-[74px]'
          }
        />
      ))}
    </div>
  )
}