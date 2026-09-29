import PersonCard from './PersonCard'

export default function CommitteeSection({ title, subgroups, compact = false }) {
  return (
    <div className="mb-14 last:mb-0">
      <h2 className="mb-6 font-display text-xl font-bold text-navy-900 sm:text-2xl">{title}</h2>
      <div className="space-y-8">
        {subgroups.map((group) => (
          <div key={group.label}>
            {group.label && (
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
                {group.label}
              </p>
            )}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.members.map((m) => (
                <PersonCard key={m.name} name={m.name} org={m.org} compact={compact} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
