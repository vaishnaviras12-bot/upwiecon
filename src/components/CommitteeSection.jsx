import PersonCard from './PersonCard'

export default function CommitteeSection({ title, subgroups, compact = false }) {
  return (
    <div className="mb-14 last:mb-0 scroll-mt-28">
      <h2 className="mb-6 font-display text-xl font-bold text-navy-900 dark:text-slate-100 sm:text-2xl">
        {title}
      </h2>
      <div className="space-y-8">
        {subgroups.map((group, gIdx) => (
          <div key={group.label || gIdx}>
            {group.label && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-600 dark:text-gold-400">
                {group.label}
              </p>
            )}
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
              {group.members.map((m, mIdx) => (
                <PersonCard
                  key={m.id || m.name || mIdx}
                  name={m.name}
                  role={m.role}
                  org={m.org}
                  image={m.image}
                  isBlank={m.isBlank}
                  compact={compact}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
