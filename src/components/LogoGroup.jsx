import wit from '../assets/logos/wit.jpg'
import wiePng from '../assets/logos/wie.png'
import ieeePng from '../assets/logos/ieee.png'
import vmsbutuLogo from '../assets/logos/vmsbutu-logo.png'

export default function LogoGroup({ compact = false }) {
  if (compact) {
    return (
      <div className="inline-flex items-center gap-2.5 sm:gap-3.5 bg-white/95 p-1.5 rounded-lg border border-slate-200/60 shadow-sm">
        <img
          src={wit}
          alt="WIT Logo"
          className="h-8 sm:h-9 w-auto object-contain shrink-0"
        />
        <img
          src={wiePng}
          alt="IEEE WIE Logo"
          className="h-6 sm:h-7 w-auto object-contain shrink-0"
        />
        <img
          src={ieeePng}
          alt="IEEE Logo"
          className="h-5 sm:h-6 w-auto object-contain shrink-0"
        />
        <img
          src={vmsbutuLogo}
          alt="VMSBUTU Logo"
          className="h-7 sm:h-8 w-auto object-contain shrink-0"
        />
      </div>
    )
  }

  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-[auto_1fr_auto] items-center px-3 sm:px-6 lg:px-8 py-2 sm:py-3 gap-2 sm:gap-4">
      {/* Left Logos: WIT and WIE */}
      <div className="flex items-center justify-start gap-3.5 sm:gap-5 md:gap-6 lg:gap-7 shrink-0">
        <img
          src={wit}
          alt="WIT Dehradun Logo"
          className="h-14 sm:h-16 md:h-18 lg:h-[86px] w-auto object-contain shrink-0"
        />
        <img
          src={wiePng}
          alt="IEEE Women in Engineering Logo"
          className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain shrink-0"
        />
      </div>

      {/* Center Title & Institutional Information */}
      <div className="flex flex-col items-center justify-center text-center px-1 sm:px-2 md:px-3">
        <h1 className="font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#002855] leading-tight">
          IEEE UPWIECON 2027
        </h1>
        <div className="mt-0.5 sm:mt-1 space-y-0.5 text-center">
          <p className="text-[9.5px] sm:text-xs md:text-[13px] lg:text-sm font-semibold text-[#002855]/90 tracking-normal sm:tracking-wide">
            Flagship Conference of IEEE Women in Engineering, UP Section
          </p>
          <p className="text-[9.5px] sm:text-[11px] md:text-xs font-medium text-slate-600 leading-tight">
            Veer Madho Singh Bhandari Uttarakhand Technical University,
          </p>
          <p className="text-[9.5px] sm:text-[11px] md:text-xs font-medium text-slate-600 leading-tight">
            Government Women Institute of Technology, Dehradun
          </p>
        </div>
      </div>

      {/* Right Logos: IEEE and VMSBUTU */}
      <div className="flex items-center justify-end gap-2.5 sm:gap-4 md:gap-5 shrink-0">
        <img
          src={ieeePng}
          alt="IEEE Logo"
          className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain shrink-0"
        />
        <img
          src={vmsbutuLogo}
          alt="VMSBUTU University Logo"
          className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain shrink-0"
        />
      </div>
    </div>
  )
}
