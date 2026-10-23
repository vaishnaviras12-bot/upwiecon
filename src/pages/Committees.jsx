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

import triptaPhoto from '../assets/committee/tripta_thakur.jpeg'
import singhPhoto from '../assets/committee/prof_shree_niwas_singh.jpeg'

// Helper function to process committee arrays
function processCommitteeMembers(list, populatedMap = {}) {
  return list.map((item, index) => {
    const key = item?.name?.trim() || `item-${index}`
    if (populatedMap[key]) {
      return { ...populatedMap[key], id: key }
    }
    return { isBlank: true, id: `blank-${index}` }
  })
}

// Explicit mapping for populated cards
const populatedMap = {
  'Dr. Tripta Thakur': {
    name: 'Dr. Tripta Thakur',
    role: 'Vice Chancellor',
    org: 'Veer Madho Singh Bhandari Uttarakhand Technical University, Dehradun',
    image: triptaPhoto,
  },
  'Prof. (Dr.) Shree Niwas Singh': {
    name: 'Prof. (Dr.) Shree Niwas Singh',
    role: 'Director',
    org: 'ABV-IIITM, Gwalior, India',
    image: singhPhoto,
  },
}

// In chiefPatrons: Dr. Tripta Thakur first, Prof. (Dr.) Shree Niwas Singh second, remaining blank
const processedChiefPatrons = chiefPatrons.map((m, idx) => {
  if (idx === 0) {
    return {
      name: 'Dr. Tripta Thakur',
      role: 'Vice Chancellor',
      org: 'Veer Madho Singh Bhandari Uttarakhand Technical University, Dehradun',
      image: triptaPhoto,
      id: 'chief-patron-thakur',
    }
  }
  if (idx === 1) {
    return {
      name: 'Prof. (Dr.) Shree Niwas Singh',
      role: 'Director',
      org: 'ABV-IIITM, Gwalior, India',
      image: singhPhoto,
      id: 'chief-patron-singh',
    }
  }
  return { isBlank: true, id: `chief-patron-blank-${idx}` }
})

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

      <section className="mx-auto max-w-8xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {/* Navigation jump pills */}
        <div className="mb-12 flex flex-wrap gap-2 rounded-xl border border-navy-100 dark:border-navy-800 bg-navy-50/60 dark:bg-navy-900/60 p-4 backdrop-blur-sm">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full bg-white dark:bg-navy-800 px-3.5 py-1.5 text-xs font-semibold text-navy-700 dark:text-slate-200 shadow-sm border border-slate-200 dark:border-navy-700 hover:text-accent-600 dark:hover:text-gold-400 transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div id="patrons" className="scroll-mt-36">
          <CommitteeSection
            title="Chief Patrons"
            subgroups={[{ label: null, members: processedChiefPatrons }]}
          />
          <CommitteeSection
            title="Patrons"
            subgroups={[{ label: null, members: processCommitteeMembers(patrons, populatedMap) }]}
          />
        </div>

        <div id="steering" className="scroll-mt-36">
          <CommitteeSection
            title="Steering Committee"
            subgroups={[{ label: null, members: processCommitteeMembers(steeringCommittee, populatedMap) }]}
          />
        </div>

        <div id="chairs" className="scroll-mt-36">
          <CommitteeSection
            title="General Chairs & Co-Chairs"
            subgroups={[
              { label: 'General Chairs', members: processCommitteeMembers(generalChairs, populatedMap) },
              { label: 'General Co-Chairs', members: processCommitteeMembers(generalCoChairs, populatedMap) },
            ]}
          />
        </div>

        <div id="organizing" className="scroll-mt-36">
          <CommitteeSection
            title="Conference Organizing Chairs & Co-Chairs"
            subgroups={[
              { label: 'Conference Organizing Chairs', members: processCommitteeMembers(orgChairs, populatedMap) },
              { label: 'Conference Organizing Co-Chairs', members: processCommitteeMembers(orgCoChairs, populatedMap) },
            ]}
          />
        </div>

        <div id="phd" className="scroll-mt-36">
          <CommitteeSection
            title="Ph.D. Colloquium Chairs"
            subgroups={[{ label: null, members: processCommitteeMembers(phdColloquiumChairs, populatedMap) }]}
          />
        </div>

        <div id="tpc" className="scroll-mt-36">
          <CommitteeSection
            title="Technical Program Committee"
            subgroups={[
              { label: 'TPC Chairs', members: processCommitteeMembers(tpcChairs, populatedMap) },
              { label: 'TPC Co-Chairs', members: processCommitteeMembers(tpcCoChairs, populatedMap) },
            ]}
          />
          <CommitteeSection
            title="Technical Program Committee Members"
            compact
            subgroups={[{ label: null, members: processCommitteeMembers(tpcMembers, populatedMap) }]}
          />
        </div>

        <div id="reg-pub" className="scroll-mt-36">
          <CommitteeSection
            title="Registration, Publication & Publicity Committees"
            subgroups={[
              { label: 'Registration Committee — Chairs', members: processCommitteeMembers(registrationCommittee.chairs, populatedMap) },
              { label: 'Registration Committee — Co-Chairs', members: processCommitteeMembers(registrationCommittee.coChairs, populatedMap) },
              { label: 'Publication Committee — Chairs', members: processCommitteeMembers(publicationCommittee.chairs, populatedMap) },
              { label: 'Publication Committee — Co-Chairs', members: processCommitteeMembers(publicationCommittee.coChairs, populatedMap) },
              { label: 'Publicity Committee — Chairs', members: processCommitteeMembers(publicityCommittee.chairs, populatedMap) },
              { label: 'Publicity Committee — Co-Chairs', members: processCommitteeMembers(publicityCommittee.coChairs, populatedMap) },
            ]}
          />
        </div>

        <div id="finance" className="scroll-mt-36">
          <CommitteeSection
            title="Finance & Sponsorship Committees"
            subgroups={[
              { label: 'Finance Committee', members: processCommitteeMembers(financeCommittee, populatedMap) },
              { label: 'Sponsorship Committee', members: processCommitteeMembers(sponsorshipCommittee, populatedMap) },
            ]}
          />
        </div>

        <div id="it-hospitality" className="scroll-mt-36">
          <CommitteeSection
            title="IT Infrastructure & Hospitality Committees"
            subgroups={[
              { label: 'IT Infrastructure & Services', members: processCommitteeMembers(itInfrastructureCommittee, populatedMap) },
              { label: 'Hospitality & Local Management', members: processCommitteeMembers(hospitalityCommittee, populatedMap) },
            ]}
          />
        </div>

        <div id="international" className="scroll-mt-36">
          <CommitteeSection
            title="International Advisory Committee"
            compact
            subgroups={[{ label: null, members: processCommitteeMembers(internationalAdvisoryCommittee, populatedMap) }]}
          />
        </div>
      </section>
    </PageLayout>
  )
}
