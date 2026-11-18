import { motion } from 'framer-motion'
import {
  Calendar,
  MapPin,
  Building2,
  Award,
  BookOpen,
  ExternalLink,
  Globe,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Clock,
  Layers,
  ChevronRight,
  Shield,
  FileText,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'
import PageLayout from '../components/PageLayout'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import {
  historyIntro,
  ieeeHistory,
  ieeeUpSectionHistory,
  upwieconHistory,
  historyReferences,
} from '../data/historyData'

export default function History() {
  return (
    <PageLayout title="History of IEEE & UPWIECON">
      <PageHero
        eyebrow="Chronicle of Excellence"
        title="History of IEEE & UPWIECON"
        subtitle={historyIntro.subtitle}
      />

      <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 space-y-20">
        {/* ================= INTRODUCTORY OVERVIEW ================= */}
        <section className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-navy-700 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-navy-900 dark:via-navy-900/90 dark:to-navy-800 p-6 sm:p-10 shadow-sm">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#002855]/10 dark:bg-gold-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#002855] dark:text-gold-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span>A Legacy of Innovation and Inclusion</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-navy-950 dark:text-white sm:text-3xl">
              From the Dawn of Electrical Engineering to the Frontiers of Women in Technology
            </h2>
            <p className="text-base leading-relaxed text-navy-700 dark:text-slate-300 sm:text-lg">
              {historyIntro.lead}
            </p>
          </div>

          {/* Quick jump anchor navigation */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-navy-700 flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold">
            <span className="text-slate-500 dark:text-slate-400 uppercase tracking-wider mr-1">
              Quick Navigation:
            </span>
            <a
              href="#part-a-ieee"
              className="rounded-lg bg-white dark:bg-navy-800 px-3 py-1.5 text-navy-800 dark:text-slate-200 border border-slate-200 dark:border-navy-600 hover:border-[#002855] dark:hover:border-gold-400 hover:text-[#002855] dark:hover:text-gold-300 transition-colors shadow-2xs"
            >
              Part A: History of IEEE
            </a>
            <a
              href="#part-b-upsection"
              className="rounded-lg bg-white dark:bg-navy-800 px-3 py-1.5 text-navy-800 dark:text-slate-200 border border-slate-200 dark:border-navy-600 hover:border-[#002855] dark:hover:border-gold-400 hover:text-[#002855] dark:hover:text-gold-300 transition-colors shadow-2xs"
            >
              Part B: IEEE UP Section
            </a>
            <a
              href="#part-c-upwiecon"
              className="rounded-lg bg-white dark:bg-navy-800 px-3 py-1.5 text-navy-800 dark:text-slate-200 border border-slate-200 dark:border-navy-600 hover:border-[#002855] dark:hover:border-gold-400 hover:text-[#002855] dark:hover:text-gold-300 transition-colors shadow-2xs"
            >
              Part C: UPWIECON Conferences
            </a>
            <a
              href="#upcoming-edition"
              className="rounded-lg bg-accent-600/10 dark:bg-gold-500/10 px-3 py-1.5 text-accent-700 dark:text-gold-300 border border-accent-600/20 dark:border-gold-500/30 hover:bg-accent-600 hover:text-white transition-colors"
            >
              3rd Edition at GWIT
            </a>
            <a
              href="#references"
              className="rounded-lg bg-white dark:bg-navy-800 px-3 py-1.5 text-navy-800 dark:text-slate-200 border border-slate-200 dark:border-navy-600 hover:border-[#002855] dark:hover:border-gold-400 hover:text-[#002855] dark:hover:text-gold-300 transition-colors shadow-2xs"
            >
              Sources & References
            </a>
          </div>
        </section>

        {/* ================= PART A: HISTORY OF IEEE ================= */}
        <section id="part-a-ieee" className="space-y-8 scroll-mt-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-950/70 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-3">
              <Globe className="h-3.5 w-3.5" />
              <span>Part A • Global Foundation</span>
            </div>
            <SectionHeading
              eyebrow={ieeeHistory.badge}
              title={ieeeHistory.title}
              subtitle={ieeeHistory.overview}
            />
          </div>

          {/* IEEE Contributions Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {ieeeHistory.contributions.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-5 shadow-2xs transition-shadow duration-200 hover:shadow-md"
              >
                <div>
                  <div className="mb-3 inline-flex rounded-xl bg-blue-50 dark:bg-blue-900/30 p-2.5 text-blue-700 dark:text-blue-300">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-navy-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-navy-700 dark:text-slate-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chronological Timeline */}
          <div className="mt-8 rounded-3xl border border-slate-200 dark:border-navy-700 bg-slate-50/50 dark:bg-navy-900/50 p-6 sm:p-10">
            <h3 className="font-display text-xl font-bold text-navy-900 dark:text-white mb-8 flex items-center gap-2.5">
              <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span>Milestones in IEEE’s Historical Evolution</span>
            </h3>

            <div className="relative border-l-2 border-blue-200 dark:border-blue-900/70 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-8">
              {ieeeHistory.milestones.map((milestone, idx) => (
                <motion.div
                  key={milestone.year + milestone.title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="relative group"
                >
                  {/* Timeline indicator node */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 dark:bg-blue-500 text-white shadow-sm ring-4 ring-white dark:ring-navy-900">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>

                  {/* Milestone Card */}
                  <div className="rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-5 sm:p-6 shadow-2xs transition-all duration-200 hover:shadow-md">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-navy-800 pb-3 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm sm:text-base font-extrabold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-0.5 rounded-full border border-blue-200/60 dark:border-blue-800">
                          {milestone.year}
                        </span>
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {milestone.date}
                        </span>
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Global Milestone
                      </span>
                    </div>

                    <h4 className="font-display text-lg font-bold text-navy-900 dark:text-white">
                      {milestone.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-navy-700 dark:text-slate-300">
                      {milestone.description}
                    </p>

                    <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-lg bg-blue-50/70 dark:bg-blue-950/40 px-3 py-1.5 text-xs text-blue-900 dark:text-blue-200 border border-blue-100 dark:border-blue-900/40">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>
                        <strong>Historical Impact:</strong> {milestone.significance}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PART B: HISTORY OF IEEE UTTAR PRADESH SECTION ================= */}
        <section id="part-b-upsection" className="space-y-8 scroll-mt-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 dark:bg-emerald-950/70 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 mb-3">
              <Shield className="h-3.5 w-3.5" />
              <span>Part B • Regional Formation & Development</span>
            </div>
            <SectionHeading
              eyebrow={ieeeUpSectionHistory.badge}
              title={ieeeUpSectionHistory.title}
              subtitle={ieeeUpSectionHistory.overview}
            />
          </div>

          {/* Governance & Jurisdiction Box */}
          <div className="rounded-2xl border border-emerald-200/80 dark:border-emerald-900/60 bg-gradient-to-r from-emerald-50/70 via-white to-emerald-50/30 dark:from-navy-900 dark:via-navy-900/80 dark:to-emerald-950/30 p-6 sm:p-8 shadow-2xs">
            <h3 className="font-display text-lg font-bold text-navy-900 dark:text-white mb-4 flex items-center gap-2">
              <Building2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <span>Section Governance, Jurisdiction & Origins</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-white dark:bg-navy-800/80 border border-slate-200 dark:border-navy-700">
                <span className="text-slate-500 dark:text-slate-400 block uppercase font-bold tracking-wider">
                  IEEE Global Region
                </span>
                <span className="font-bold text-sm text-navy-900 dark:text-slate-100 mt-1 block">
                  {ieeeUpSectionHistory.governance.region}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-navy-800/80 border border-slate-200 dark:border-navy-700">
                <span className="text-slate-500 dark:text-slate-400 block uppercase font-bold tracking-wider">
                  National Body
                </span>
                <span className="font-bold text-sm text-navy-900 dark:text-slate-100 mt-1 block">
                  {ieeeUpSectionHistory.governance.council}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-navy-800/80 border border-slate-200 dark:border-navy-700">
                <span className="text-slate-500 dark:text-slate-400 block uppercase font-bold tracking-wider">
                  Geographic Territory
                </span>
                <span className="font-bold text-sm text-navy-900 dark:text-slate-100 mt-1 block">
                  {ieeeUpSectionHistory.governance.territory}
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-navy-800/80 border border-slate-200 dark:border-navy-700">
                <span className="text-slate-500 dark:text-slate-400 block uppercase font-bold tracking-wider">
                  Founding Chair (1992)
                </span>
                <span className="font-bold text-sm text-navy-900 dark:text-slate-100 mt-1 block">
                  {ieeeUpSectionHistory.governance.foundingChair}
                </span>
              </div>
            </div>
          </div>

          {/* Regional Contributions Grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {ieeeUpSectionHistory.contributions.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-5 shadow-2xs hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="mb-3 inline-flex rounded-xl bg-emerald-50 dark:bg-emerald-950/60 p-2.5 text-emerald-700 dark:text-emerald-300">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-navy-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-navy-700 dark:text-slate-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chronological Section Timeline */}
          <div className="rounded-3xl border border-slate-200 dark:border-navy-700 bg-slate-50/50 dark:bg-navy-900/50 p-6 sm:p-10">
            <h3 className="font-display text-xl font-bold text-navy-900 dark:text-white mb-8 flex items-center gap-2.5">
              <Clock className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <span>Historical Milestones of the IEEE Uttar Pradesh Section</span>
            </h3>

            <div className="relative border-l-2 border-emerald-200 dark:border-emerald-900/70 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-8">
              {ieeeUpSectionHistory.milestones.map((milestone, idx) => (
                <motion.div
                  key={milestone.year + milestone.title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="relative group"
                >
                  {/* Timeline indicator node */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 dark:bg-emerald-500 text-white shadow-sm ring-4 ring-white dark:ring-navy-900">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>

                  {/* Milestone Card */}
                  <div className="rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-navy-800 pb-3 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm sm:text-base font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-0.5 rounded-full border border-emerald-200/60 dark:border-emerald-800">
                          {milestone.year}
                        </span>
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                          {milestone.date}
                        </span>
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                        Section Development
                      </span>
                    </div>

                    <h4 className="font-display text-lg font-bold text-navy-900 dark:text-white">
                      {milestone.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-navy-700 dark:text-slate-300">
                      {milestone.description}
                    </p>

                    <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/40 px-3 py-1.5 text-xs text-emerald-900 dark:text-emerald-200 border border-emerald-100 dark:border-emerald-900/40">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>
                        <strong>Significance:</strong> {milestone.significance}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PART C: HISTORY OF UPWIECON CONFERENCES ================= */}
        <section id="part-c-upwiecon" className="space-y-10 scroll-mt-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-100 dark:bg-accent-950/70 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-800 dark:text-accent-300 border border-accent-200 dark:border-accent-800 mb-3">
              <Award className="h-3.5 w-3.5" />
              <span>Part C • Flagship Conference Series</span>
            </div>
            <SectionHeading
              eyebrow={upwieconHistory.badge}
              title={upwieconHistory.title}
              subtitle={upwieconHistory.overview}
            />
          </div>

          {/* Visual Journey Tracker */}
          <div className="rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-6 sm:p-8 shadow-2xs">
            <h3 className="font-display text-base sm:text-lg font-bold text-navy-900 dark:text-white mb-6 flex items-center gap-2">
              <Layers className="h-5 w-5 text-accent-600 dark:text-gold-400" />
              <span>The Chronological Journey of UPWIECON</span>
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 relative">
              {upwieconHistory.journey.map((step, idx) => (
                <div
                  key={step.step}
                  className={`relative rounded-xl p-5 border transition-all ${
                    step.isUpcoming
                      ? 'border-accent-500 dark:border-gold-400/80 bg-accent-50/40 dark:bg-navy-800/90 shadow-sm ring-1 ring-accent-400/30 dark:ring-gold-400/30'
                      : 'border-slate-200 dark:border-navy-700 bg-slate-50/60 dark:bg-navy-800/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        step.isUpcoming
                          ? 'text-accent-700 dark:text-gold-400'
                          : 'text-navy-700 dark:text-slate-300'
                      }`}
                    >
                      {step.step}
                    </span>
                    <span className="font-mono text-sm font-extrabold px-2.5 py-0.5 rounded-full bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 text-navy-900 dark:text-slate-100">
                      {step.year}
                    </span>
                  </div>
                  <h4 className="font-display text-base font-bold text-navy-950 dark:text-white">
                    {step.location}
                  </h4>
                  <p className="mt-1 text-xs text-navy-600 dark:text-slate-400">
                    {step.organizer}
                  </p>
                  {step.isUpcoming && (
                    <span className="mt-3 inline-block rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                      Upcoming Edition
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Individual Conference Edition Cards */}
          <div className="space-y-8">
            {upwieconHistory.editions.map((edition, index) => {
              const isUpcoming = edition.statusType === 'upcoming'
              const isInaugural = edition.statusType === 'completed'

              return (
                <motion.div
                  key={edition.edition}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`rounded-3xl border overflow-hidden transition-all duration-300 ${
                    isUpcoming
                      ? 'border-accent-500 dark:border-gold-400/80 bg-white dark:bg-navy-900 shadow-md ring-1 ring-accent-500/20 dark:ring-gold-400/20'
                      : 'border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 shadow-2xs hover:shadow-md'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Visual Media Column */}
                    <div className="lg:col-span-4 bg-slate-100 dark:bg-navy-950/80 p-6 sm:p-8 flex flex-col justify-between items-center text-center border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-navy-800">
                      <div className="w-full flex flex-col items-center">
                        <div className="relative w-full max-w-[280px] h-44 sm:h-52 rounded-2xl overflow-hidden shadow-inner border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 flex items-center justify-center p-3">
                          <img
                            src={edition.image}
                            alt={edition.imageAlt}
                            className="h-full w-full object-contain"
                          />
                        </div>

                        {edition.secondaryImage && (
                          <div className="mt-4 flex items-center justify-center gap-3">
                            <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                              Partnered with:
                            </span>
                            <img
                              src={edition.secondaryImage}
                              alt={edition.secondaryImageAlt}
                              className="h-8 max-w-[120px] object-contain"
                            />
                          </div>
                        )}
                      </div>

                      <div className="mt-6 w-full pt-4 border-t border-slate-200/80 dark:border-navy-800">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold ${
                            isUpcoming
                              ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30'
                              : isInaugural
                              ? 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/30'
                              : 'bg-slate-200/60 dark:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-navy-700'
                          }`}
                        >
                          <span
                            className={`h-2 w-2 rounded-full ${
                              isUpcoming
                                ? 'bg-emerald-500 animate-pulse'
                                : isInaugural
                                ? 'bg-blue-500'
                                : 'bg-slate-500'
                            }`}
                          />
                          {edition.status}
                        </span>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between">
                      <div className="space-y-4">
                        {/* Header Row */}
                        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-navy-800 pb-4">
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-accent-700 dark:text-gold-400">
                              {edition.editionLabel}
                            </span>
                            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-950 dark:text-white mt-0.5">
                              {edition.edition}
                            </h3>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-base sm:text-lg font-black text-[#002855] dark:text-gold-300 bg-slate-100 dark:bg-navy-800 px-4 py-1 rounded-xl border border-slate-200 dark:border-navy-700">
                              {edition.year}
                            </span>
                          </div>
                        </div>

                        {/* Metadata: Dates, Venue, Organizer */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                          <div className="flex items-start gap-3 rounded-xl bg-slate-50 dark:bg-navy-800/60 p-3.5 border border-slate-100 dark:border-navy-800">
                            <Calendar className="h-5 w-5 text-accent-600 dark:text-gold-400 shrink-0 mt-0.5" />
                            <div>
                              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Conference Dates
                              </p>
                              <p className="font-bold text-sm text-navy-950 dark:text-white mt-0.5">
                                {edition.dates}
                              </p>
                              {edition.datesNote && (
                                <p className="text-[11px] text-slate-500 dark:text-slate-400 italic mt-0.5">
                                  {edition.datesNote}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="flex items-start gap-3 rounded-xl bg-slate-50 dark:bg-navy-800/60 p-3.5 border border-slate-100 dark:border-navy-800">
                            <MapPin className="h-5 w-5 text-accent-600 dark:text-gold-400 shrink-0 mt-0.5" />
                            <div>
                              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Venue & City
                              </p>
                              <p className="font-bold text-sm text-navy-950 dark:text-white mt-0.5">
                                {edition.city}, {edition.state}
                              </p>
                              <p className="text-xs text-navy-700 dark:text-slate-300 mt-0.5 line-clamp-1">
                                {edition.venue}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 rounded-xl bg-slate-50 dark:bg-navy-800/60 p-3.5 border border-slate-100 dark:border-navy-800">
                          <Building2 className="h-5 w-5 text-accent-600 dark:text-gold-400 shrink-0 mt-0.5" />
                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                              Organising Institution
                            </p>
                            <p className="text-xs sm:text-sm font-semibold text-navy-900 dark:text-slate-200 mt-0.5">
                              {edition.organizer}
                            </p>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="pt-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                            Historical Significance & Overview
                          </h4>
                          <p className="text-sm leading-relaxed text-navy-700 dark:text-slate-300">
                            {edition.summary}
                          </p>
                        </div>

                        {/* Key Highlights */}
                        <div className="pt-2">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                            Key Conference Features
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-navy-700 dark:text-slate-300">
                            {edition.highlights.map((highlight, hIdx) => (
                              <li key={hIdx} className="flex items-start gap-2">
                                <ChevronRight className="h-3.5 w-3.5 text-accent-600 dark:text-gold-400 shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Citation Footer */}
                      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-navy-800 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1.5">
                          <FileText className="h-3.5 w-3.5" />
                          <span>{edition.citation}</span>
                        </span>
                        {isUpcoming && (
                          <NavLink
                            to="/call-for-paper"
                            className="inline-flex items-center gap-1.5 font-bold text-accent-700 dark:text-gold-300 hover:underline"
                          >
                            <span>Explore 2027 Tracks</span>
                            <ArrowRight className="h-3 w-3" />
                          </NavLink>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* ================= UPCOMING 3RD EDITION SPOTLIGHT ================= */}
        <section
          id="upcoming-edition"
          className="relative overflow-hidden rounded-3xl border-2 border-accent-600/30 dark:border-gold-500/40 bg-gradient-to-br from-[#002855] via-navy-950 to-navy-900 text-white p-6 sm:p-12 shadow-xl scroll-mt-24"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-gold-500/10 blur-3xl"
          />

          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-gold-300 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-gold-400" />
              <span>Upcoming Edition Spotlight</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              3rd IEEE UPWIECON 2027 at Government Women Institute of Technology (GWIT), Dehradun
            </h2>

            <p className="text-base text-slate-200 leading-relaxed sm:text-lg">
              The journey of UPWIECON arrives at an inspiring milestone: holding the 3rd edition at an institution dedicated exclusively to empowering women in technical disciplines. Under Veer Madho Singh Bhandari Uttarakhand Technical University (VMSB UTU), GWIT Dehradun warmly welcomes researchers, academicians, and students worldwide to Uttarakhand for an unforgettable scientific conference.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <span className="text-xs uppercase text-gold-300 font-bold tracking-wider">Host Institution</span>
                <p className="text-sm font-semibold text-white mt-1">GWIT, Dehradun</p>
                <p className="text-xs text-slate-300 mt-0.5">Govt. Women Institute of Technology (VMSB UTU)</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <span className="text-xs uppercase text-gold-300 font-bold tracking-wider">Conference Dates</span>
                <p className="text-sm font-bold text-white mt-1">11–12 September 2027</p>
                <p className="text-xs text-slate-300 mt-0.5">Upcoming Third Edition</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <span className="text-xs uppercase text-gold-300 font-bold tracking-wider">Conference Venue</span>
                <p className="text-sm font-semibold text-white mt-1">GWIT Campus, Dehradun</p>
                <p className="text-xs text-slate-300 mt-0.5">Prem Nagar, Sudhowala, Uttarakhand</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 pt-4">
              <NavLink
                to="/call-for-paper"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:bg-accent-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              >
                <span>Submit Paper</span>
                <ArrowRight className="h-4 w-4" />
              </NavLink>
              <NavLink
                to="/registration"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              >
                <span>Registration Details</span>
              </NavLink>
              <NavLink
                to="/venue"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              >
                <span>Venue & Travel</span>
              </NavLink>
            </div>
          </div>
        </section>

        {/* ================= REFERENCES & SOURCE LINKS ================= */}
        <section
          id="references"
          className="rounded-3xl border border-slate-200 dark:border-navy-700 bg-slate-50/70 dark:bg-navy-900/60 p-6 sm:p-10 scroll-mt-24"
        >
          <div className="max-w-3xl mb-6">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-950 dark:text-white flex items-center gap-2.5">
              <BookOpen className="h-5 w-5 text-accent-600 dark:text-gold-400" />
              <span>Official References & Historical Citations</span>
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-navy-700 dark:text-slate-300">
              The historical milestones and conference records published on this page are verified through official IEEE historical repositories, IEEE Uttar Pradesh Section documentation, NIELIT conference archives, and university publications. Visitors are encouraged to explore the original source materials below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {historyReferences.map((ref) => (
              <a
                key={ref.url}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-5 shadow-2xs transition-all duration-200 hover:border-[#002855] dark:hover:border-gold-400 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-display text-sm sm:text-base font-bold text-navy-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-gold-400 transition-colors">
                      {ref.title}
                    </h4>
                    <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-accent-600 dark:group-hover:text-gold-400 shrink-0 transition-colors" />
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-navy-600 dark:text-slate-300">
                    {ref.description}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-slate-100 dark:border-navy-800 text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate">
                  {ref.url}
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  )
}
