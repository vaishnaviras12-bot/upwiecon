export default function PersonCard({ name, role, org, compact = false }) {
  const initial = name?.trim()?.charAt(0)?.toUpperCase() || '?'
  return (
    <div
      className={`flex items-start gap-3 rounded-lg border border-navy-100 bg-white ${
        compact ? 'p-3' : 'p-4'
      } shadow-card`}
    >
      <span
        className={`flex shrink-0 items-center justify-center rounded-full bg-navy-700 font-display font-bold text-white ${
          compact ? 'h-9 w-9 text-sm' : 'h-11 w-11 text-base'
        }`}
        aria-hidden="true"
      >
        {initial}
      </span>
      <div>
        <p className={`font-semibold text-navy-900 ${compact ? 'text-sm' : 'text-base'}`}>{name}</p>
        {role && <p className="text-xs font-medium text-accent-600">{role}</p>}
        {org && <p className="text-xs text-navy-500">{org}</p>}
      </div>
    </div>
  )
}
