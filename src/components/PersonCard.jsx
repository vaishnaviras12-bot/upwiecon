export default function PersonCard({ name, role, org, image, isBlank = false, compact = false }) {
  if (isBlank || (!name && !role && !org)) {
    return (
      <div
        className={`rounded-xl border border-slate-200 dark:border-navy-700/60 bg-white/60 dark:bg-navy-900/40 ${
          compact ? 'min-h-[72px] p-3' : 'min-h-[96px] p-4.5'
        } shadow-sm transition-all duration-200`}
        aria-hidden="true"
      />
    )
  }

  const initial = name?.trim()?.charAt(0)?.toUpperCase() || '?'

  return (
    <div
      className={`flex items-start gap-3.5 rounded-xl border border-slate-200 dark:border-navy-700/70 bg-white dark:bg-navy-900 ${
        compact ? 'p-3' : 'p-4 sm:p-5'
      } shadow-sm transition-all duration-200 hover:border-gold-500/50 hover:shadow-md`}
    >
      {image ? (
        <img
          src={image}
          alt={name}
          className={`shrink-0 rounded-full object-cover border-2 border-gold-400 shadow-sm ${
            compact ? 'h-9 w-9' : 'h-12 w-12 sm:h-14 sm:w-14'
          }`}
        />
      ) : (
        <span
          className={`flex shrink-0 items-center justify-center rounded-full bg-navy-800 dark:bg-navy-700 font-display font-bold text-gold-400 ${
            compact ? 'h-9 w-9 text-xs' : 'h-11 w-11 text-sm sm:h-12 sm:w-12 sm:text-base'
          } shadow-inner`}
          aria-hidden="true"
        >
          {initial}
        </span>
      )}
      <div className="flex-1 min-w-0">
        <p className={`font-bold text-navy-900 dark:text-slate-100 ${compact ? 'text-sm' : 'text-base sm:text-lg'} leading-snug truncate`}>
          {name}
        </p>
        {role && (
          <p className="mt-0.5 text-xs sm:text-sm font-semibold text-accent-600 dark:text-accent-400">
            {role}
          </p>
        )}
        {org && (
          <p className="mt-1 text-xs sm:text-sm text-navy-600 dark:text-slate-300 leading-relaxed break-words">
            {org}
          </p>
        )}
      </div>
    </div>
  )
}
