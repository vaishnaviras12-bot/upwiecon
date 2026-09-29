import PageLayout from '../components/PageLayout'
import PageHero from '../components/PageHero'
import CommitteeSection from '../components/CommitteeSection'
import {
  chiefPatrons,
  patrons,
  steeringCommittee,
  generalChairs,
  generalCoChairs,
  orgChairs,
  orgCoChairs,
  phdColloquiumChairs,
  tpcChairs,
  tpcCoChairs,
  tpcMembers,
  registrationCommittee,
  publicationCommittee,
  publicityCommittee,
  financeCommittee,
  sponsorshipCommittee,
  itInfrastructureCommittee,
  hospitalityCommittee,
  internationalAdvisoryCommittee,
} from '../data/committees'

const sections = [
  { id: 'patrons', label: 'Chief Patrons & Patrons' },
  { id: 'steering', label: 'Steering Committee' },
  { id: 'chairs', label: 'General Chairs & Co-Chairs' },
  { id: 'organizing', label: 'Organizing Chairs & Co-Chairs' },
  { id: 'phd', label: 'Ph.D. Colloquium Chairs' },
  { id: 'tpc', label: 'Technical Program Committee' },
  { id: 'reg-pub', label: 'Registration, Publication & Publicity' },
  { id: 'finance', label: 'Finance & Sponsorship' },
  { id: 'it-hospitality', label: 'IT Infrastructure & Hospitality' },
  { id: 'international', label: 'International Advisory Committee' },
]

export default function Committees() {
  return (
    <PageLayout title="Committees">
      <PageHero eyebrow="UPWIECON 2027 — Committee Members" title="Organizing Committee" />

      <section className="mx-auto max-w-8xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mb-12 flex flex-wrap gap-2 rounded-xl border border-navy-100 bg-navy-50/60 p-4">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-navy-700 shadow-card hover:text-accent-600"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div id="patrons">
          <CommitteeSection
            title="Chief Patrons"
            subgroups={[{ label: null, members: chiefPatrons }]}
          />
          <CommitteeSection title="Patrons" subgroups={[{ label: null, members: patrons }]} />
        </div>

        <div id="steering">
          <CommitteeSection
            title="Steering Committee"
            subgroups={[{ label: null, members: steeringCommittee }]}
          />
        </div>

        <div id="chairs">
          <CommitteeSection
            title="General Chairs & Co-Chairs"
            subgroups={[
              { label: 'General Chairs', members: generalChairs },
              { label: 'General Co-Chairs', members: generalCoChairs },
            ]}
          />
        </div>

        <div id="organizing">
          <CommitteeSection
            title="Conference Organizing Chairs & Co-Chairs"
            subgroups={[
              { label: 'Conference Organizing Chairs', members: orgChairs },
              { label: 'Conference Organizing Co-Chairs', members: orgCoChairs },
            ]}
          />
        </div>

        <div id="phd">
          <CommitteeSection
            title="Ph.D. Colloquium Chairs"
            subgroups={[{ label: null, members: phdColloquiumChairs }]}
          />
        </div>

        <div id="tpc">
          <CommitteeSection
            title="Technical Program Committee"
            subgroups={[
              { label: 'TPC Chairs', members: tpcChairs },
              { label: 'TPC Co-Chairs', members: tpcCoChairs },
            ]}
          />
          <CommitteeSection
            title="Technical Program Committee Members"
            compact
            subgroups={[{ label: null, members: tpcMembers }]}
          />
        </div>

        <div id="reg-pub">
          <CommitteeSection
            title="Registration, Publication & Publicity Committees"
            subgroups={[
              { label: 'Registration Committee — Chairs', members: registrationCommittee.chairs },
              { label: 'Registration Committee — Co-Chairs', members: registrationCommittee.coChairs },
              { label: 'Publication Committee — Chairs', members: publicationCommittee.chairs },
              { label: 'Publication Committee — Co-Chairs', members: publicationCommittee.coChairs },
              { label: 'Publicity Committee — Chairs', members: publicityCommittee.chairs },
              { label: 'Publicity Committee — Co-Chairs', members: publicityCommittee.coChairs },
            ]}
          />
        </div>

        <div id="finance">
          <CommitteeSection
            title="Finance & Sponsorship Committees"
            subgroups={[
              { label: 'Finance Committee', members: financeCommittee },
              { label: 'Sponsorship Committee', members: sponsorshipCommittee },
            ]}
          />
        </div>

        <div id="it-hospitality">
          <CommitteeSection
            title="IT Infrastructure & Hospitality Committees"
            subgroups={[
              { label: 'IT Infrastructure & Services', members: itInfrastructureCommittee },
              { label: 'Hospitality & Local Management', members: hospitalityCommittee },
            ]}
          />
        </div>

        <div id="international">
          <CommitteeSection
            title="International Advisory Committee"
            compact
            subgroups={[{ label: null, members: internationalAdvisoryCommittee }]}
          />
        </div>
      </section>
    </PageLayout>
  )
}
