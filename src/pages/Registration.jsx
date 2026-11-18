import { Fragment, useState } from 'react'
import {
  AlertCircle,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  FileText,
  CreditCard,
  X,
  ArrowRight,
  Info,
} from 'lucide-react'
import PageLayout from '../components/PageLayout'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import {
  registrationNotes,
  feeCategories,
  earlyBirdDeadline,
  participantTypes,
  registrationSteps,
  paymentInstructionsNotice,
} from '../data/registration'

export default function Registration() {
  const [formOpen, setFormOpen] = useState(false)
  const [participantType, setParticipantType] = useState('presenter')
  const [isIeeeMember, setIsIeeeMember] = useState(false)
  const [categoryChoice, setCategoryChoice] = useState('academia')
  const [hasTwoPapers, setHasTwoPapers] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Calculate preview fee
  const calculateFee = () => {
    if (participantType === 'listener') {
      if (categoryChoice === 'student') {
        return isIeeeMember ? '₹1,500 (USD 100)' : '₹3,000 (USD 150)'
      }
      return isIeeeMember ? '₹2,500 (USD 150)' : '₹4,000 (USD 200)'
    }
    // Presenter
    if (hasTwoPapers) {
      return isIeeeMember ? '₹6,000 (USD 250)' : '₹8,000 (USD 350)'
    }
    if (categoryChoice === 'student') {
      return isIeeeMember ? '₹5,500 (USD 200)' : '₹7,000 (USD 300)'
    }
    return isIeeeMember ? '₹8,000 (USD 300)' : '₹10,000 (USD 400)'
  }

  return (
    <PageLayout title="Registration">
      <PageHero
        eyebrow="Join UPWIECON 2027"
        title="Registration Fees & Guidelines"
        subtitle="11–12 September 2027 • Host Institution: Government Women Institute of Technology (GWIT), Dehradun"
      />

      <div className="mx-auto max-w-8xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 space-y-16">
        {/* ================= 1. PARTICIPANT CATEGORIES DISTINCTION ================= */}
        <section>
          <SectionHeading
            eyebrow="Participant Classification"
            title="Choose Your Registration Pathway"
            subtitle="Please review the distinctions between Paper Presenters and Listener/Attendee participants before proceeding."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {participantTypes.map((pt) => {
              const isPresenter = pt.type === 'Paper Presenter'
              return (
                <div
                  key={pt.type}
                  className={`rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all ${
                    isPresenter
                      ? 'border-accent-500/80 bg-accent-50/20 dark:bg-navy-900 shadow-sm ring-1 ring-accent-500/20'
                      : 'border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 shadow-2xs'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                          isPresenter
                            ? 'bg-accent-600 text-white'
                            : 'bg-slate-200 dark:bg-navy-800 text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        {pt.badge}
                      </span>
                      {pt.cmtRequired ? (
                        <span className="text-[11px] font-semibold text-accent-700 dark:text-gold-400 bg-accent-50 dark:bg-navy-800 px-2.5 py-0.5 rounded border border-accent-200 dark:border-navy-700">
                          CMT Paper ID Required
                        </span>
                      ) : (
                        <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                          No Paper Submission Required
                        </span>
                      )}
                    </div>

                    <h3 className="font-display text-2xl font-bold text-navy-950 dark:text-white">
                      {pt.type}
                    </h3>
                    <p className="mt-2 text-sm text-navy-700 dark:text-slate-300 leading-relaxed">
                      {pt.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-slate-200 dark:border-navy-800 space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                        Registration Entitlements:
                      </span>
                      <ul className="space-y-2 text-xs text-navy-700 dark:text-slate-300">
                        {pt.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-navy-800 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {isPresenter ? 'Starts from ₹5,500 (Students)' : 'Starts from ₹1,500 (Students)'}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        setParticipantType(isPresenter ? 'presenter' : 'listener')
                        setFormOpen(true)
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-700 dark:text-gold-400 hover:underline"
                    >
                      <span>Register for this Category</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ================= 2. IMPORTANT REGISTRATION GUIDELINES ================= */}
        <div className="space-y-3 rounded-2xl border border-gold-500/40 bg-gold-500/10 dark:bg-gold-500/5 p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 text-navy-900 dark:text-gold-300 font-bold text-base mb-1">
            <ShieldCheck size={20} className="text-gold-600 dark:text-gold-400 shrink-0" />
            <span>Important Registration Guidelines & Mandatory Disclosures</span>
          </div>
          {registrationNotes.map((n, i) => (
            <p key={i} className="flex items-start gap-2 text-sm text-navy-800 dark:text-slate-200 leading-relaxed">
              <AlertCircle size={16} className="mt-0.5 shrink-0 text-gold-600 dark:text-gold-400" />
              <span>{n}</span>
            </p>
          ))}
        </div>

        {/* ================= 3. REGISTRATION FEES TABLE ================= */}
        <section>
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent-50 dark:bg-navy-800 px-3.5 py-1 text-xs font-bold text-accent-700 dark:text-gold-400 border border-accent-200 dark:border-navy-700">
                <Calendar size={14} />
                <span>Early-Bird Registration Deadline: {earlyBirdDeadline}</span>
              </div>
            </div>
            <p className="text-xs font-medium italic text-slate-500 dark:text-slate-400">
              ⟵ Scroll horizontally on small screens to view Indian and Foreign/NRI fees ⟶
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-navy-700 shadow-sm bg-white dark:bg-navy-900">
            <table className="min-w-[960px] w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-navy-900 dark:bg-navy-950 text-white">
                  <th rowSpan={2} className="px-5 py-4 font-semibold align-bottom">
                    Registration Category
                  </th>
                  <th rowSpan={2} className="px-4 py-4 font-semibold align-bottom">
                    Membership
                  </th>
                  <th colSpan={2} className="px-4 py-2.5 text-center font-semibold border-l border-white/15 bg-navy-800/90 dark:bg-navy-900">
                    Early Bird (Before 15 August 2027)
                  </th>
                  <th colSpan={2} className="px-4 py-2.5 text-center font-semibold border-l border-white/15">
                    Regular Registration (After 15 August 2027)
                  </th>
                </tr>
                <tr className="bg-navy-800 dark:bg-navy-900 text-white text-xs">
                  <th className="px-4 py-2.5 text-center font-medium border-l border-white/15">
                    Indian (INR)
                  </th>
                  <th className="px-4 py-2.5 text-center font-medium">
                    Foreign / NRI
                  </th>
                  <th className="px-4 py-2.5 text-center font-medium border-l border-white/15">
                    Indian (INR)
                  </th>
                  <th className="px-4 py-2.5 text-center font-medium">
                    Foreign / NRI
                  </th>
                </tr>
              </thead>
              <tbody>
                {feeCategories.map((cat, ci) => (
                  <Fragment key={cat.category}>
                    {cat.rows.map((row, ri) => (
                      <tr
                        key={`${cat.category}-${row.membership}`}
                        className={`${
                          ci % 2 === 0
                            ? 'bg-white dark:bg-navy-900'
                            : 'bg-slate-50/70 dark:bg-navy-850/50'
                        } border-b border-slate-200/80 dark:border-navy-800 transition-colors hover:bg-gold-50/30 dark:hover:bg-navy-800/60`}
                      >
                        {ri === 0 && (
                          <td
                            rowSpan={cat.rows.length}
                            className="px-5 py-3.5 align-middle font-bold text-navy-950 dark:text-slate-100 max-w-xs border-r border-slate-200/50 dark:border-navy-800"
                          >
                            {cat.category}
                          </td>
                        )}
                        <td className="px-4 py-3 text-navy-800 dark:text-slate-200 font-medium">
                          {row.membership}
                        </td>
                        <td className="px-4 py-3 text-center font-bold text-accent-700 dark:text-gold-400 border-l border-slate-200/50 dark:border-navy-800 bg-accent-50/20 dark:bg-gold-500/5">
                          {row.earlyIndian}
                        </td>
                        <td className="px-4 py-3 text-center font-semibold text-navy-900 dark:text-slate-200">
                          {row.earlyForeign}
                        </td>
                        <td className="px-4 py-3 text-center font-medium text-slate-700 dark:text-slate-300 border-l border-slate-200/50 dark:border-navy-800">
                          {row.lateIndian}
                        </td>
                        <td className="px-4 py-3 text-center font-medium text-slate-700 dark:text-slate-300">
                          {row.lateForeign}
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= 4. STEP-BY-STEP REGISTRATION INSTRUCTIONS ================= */}
        <section>
          <SectionHeading
            eyebrow="Workflow"
            title="Step-by-Step Registration Instructions"
            subtitle="Follow this sequence to ensure your registration is processed smoothly."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
            {registrationSteps.map((st) => (
              <div
                key={st.step}
                className="rounded-2xl border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-900 p-5 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-black text-accent-600 dark:text-gold-400 block mb-2">
                    {st.step}
                  </span>
                  <h4 className="font-display text-sm font-bold text-navy-900 dark:text-white mb-2">
                    {st.title}
                  </h4>
                  <p className="text-xs text-navy-600 dark:text-slate-300 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 5. PAYMENT INSTRUCTIONS NOTICE ================= */}
        <div className="rounded-2xl border border-slate-300 dark:border-navy-700 bg-slate-50 dark:bg-navy-900 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1.5 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-950/70 px-3 py-1 text-xs font-bold text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                <CreditCard size={14} />
                <span>{paymentInstructionsNotice.status}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-navy-900 dark:text-white">
                {paymentInstructionsNotice.title}
              </h3>
              <p className="text-sm text-navy-700 dark:text-slate-300 leading-relaxed">
                {paymentInstructionsNotice.notice}
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={() => setFormOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl bg-accent-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:bg-accent-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
              >
                <span>Register Now</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* ================= 6. PARTICIPANT REGISTRATION FORM WORKFLOW (INTERACTIVE PORTAL) ================= */}
        {formOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
            <div className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-navy-900 p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-navy-700 my-8 max-h-[90vh] overflow-y-auto">
              <button
                type="button"
                onClick={() => {
                  setFormOpen(false)
                  setFormSubmitted(false)
                }}
                className="absolute top-5 right-5 p-1.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-navy-800 rounded-full"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-accent-600 dark:text-gold-400">
                  UPWIECON 2027 • Participant Registration
                </span>
                <h3 className="font-display text-2xl font-bold text-navy-950 dark:text-white mt-1">
                  Participant Registration Form
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Please enter your details below. Fields marked with an asterisk (*) are mandatory for your chosen participant category.
                </p>
              </div>

              {formSubmitted ? (
                <div className="rounded-2xl border border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 p-6 text-center space-y-3">
                  <CheckCircle2 size={40} className="mx-auto text-emerald-600 dark:text-emerald-400" />
                  <h4 className="font-display text-lg font-bold text-emerald-900 dark:text-emerald-200">
                    Registration Information Recorded
                  </h4>
                  <p className="text-sm text-emerald-800 dark:text-emerald-300">
                    Thank you for your submission. The official payment gateway and transaction confirmation workflow will be enabled once approved by the organizing committee. An email confirmation will be sent to your registered address upon final activation.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false)
                      setFormOpen(false)
                    }}
                    className="mt-4 px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setFormSubmitted(true)
                  }}
                  className="space-y-5"
                >
                  {/* Category Type Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Participant Type *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setParticipantType('presenter')}
                        className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                          participantType === 'presenter'
                            ? 'border-accent-600 bg-accent-50 dark:bg-navy-800 text-accent-700 dark:text-gold-400 shadow-2xs'
                            : 'border-slate-200 dark:border-navy-700 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        Paper Presenter (Author)
                      </button>
                      <button
                        type="button"
                        onClick={() => setParticipantType('listener')}
                        className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                          participantType === 'listener'
                            ? 'border-accent-600 bg-accent-50 dark:bg-navy-800 text-accent-700 dark:text-gold-400 shadow-2xs'
                            : 'border-slate-200 dark:border-navy-700 text-slate-600 dark:text-slate-400'
                        }`}
                      >
                        Listener / Attendee
                      </button>
                    </div>
                  </div>

                  {/* Personal details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Jane Doe"
                        className="w-full rounded-xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-800 px-3.5 py-2 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane.doe@university.edu"
                        className="w-full rounded-xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-800 px-3.5 py-2 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-800 px-3.5 py-2 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Institution / Organisation *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. IIT Kanpur / UTU"
                        className="w-full rounded-xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-800 px-3.5 py-2 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Designation or Academic Programme *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Professor / Ph.D. Scholar / B.Tech Student"
                        className="w-full rounded-xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-800 px-3.5 py-2 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Participant Academic Level *
                      </label>
                      <select
                        value={categoryChoice}
                        onChange={(e) => setCategoryChoice(e.target.value)}
                        className="w-full rounded-xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-800 px-3.5 py-2 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                      >
                        <option value="academia">Academia / Professionals / Ph.D. Scholars</option>
                        <option value="student">UG / PG Student</option>
                      </select>
                    </div>
                  </div>

                  {/* IEEE Membership Section */}
                  <div className="rounded-xl border border-slate-200 dark:border-navy-700 p-3.5 bg-slate-50/50 dark:bg-navy-800/40 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-navy-900 dark:text-white">
                        Are you an active IEEE Member?
                      </span>
                      <div className="flex items-center gap-3">
                        <label className="inline-flex items-center gap-1.5 text-xs text-navy-800 dark:text-slate-200 cursor-pointer">
                          <input
                            type="radio"
                            name="ieeeMember"
                            checked={isIeeeMember}
                            onChange={() => setIsIeeeMember(true)}
                            className="text-accent-600 focus:ring-accent-500"
                          />
                          <span>Yes</span>
                        </label>
                        <label className="inline-flex items-center gap-1.5 text-xs text-navy-800 dark:text-slate-200 cursor-pointer">
                          <input
                            type="radio"
                            name="ieeeMember"
                            checked={!isIeeeMember}
                            onChange={() => setIsIeeeMember(false)}
                            className="text-accent-600 focus:ring-accent-500"
                          />
                          <span>No</span>
                        </label>
                      </div>
                    </div>

                    {isIeeeMember && (
                      <div>
                        <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                          IEEE Membership Number *
                        </label>
                        <input
                          type="text"
                          required={isIeeeMember}
                          placeholder="e.g. 98765432"
                          className="w-full rounded-xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-800 px-3.5 py-1.5 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                        />
                      </div>
                    )}
                  </div>

                  {/* Conditional Paper Presenter Fields */}
                  {participantType === 'presenter' && (
                    <div className="rounded-xl border border-accent-200 dark:border-navy-700 p-4 bg-accent-50/30 dark:bg-navy-800/60 space-y-3">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-accent-700 dark:text-gold-400">
                        <FileText size={16} />
                        <span>Accepted Paper Details (via Microsoft CMT)</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                            CMT Paper ID *
                          </label>
                          <input
                            type="text"
                            required={participantType === 'presenter'}
                            placeholder="e.g. 142"
                            className="w-full rounded-xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-800 px-3 py-1.5 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Accepted Paper Title *
                          </label>
                          <input
                            type="text"
                            required={participantType === 'presenter'}
                            placeholder="Full paper title matching CMT submission"
                            className="w-full rounded-xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-800 px-3 py-1.5 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                          />
                        </div>
                      </div>

                      <div className="pt-2">
                        <label className="inline-flex items-center gap-2 text-xs text-navy-800 dark:text-slate-300 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={hasTwoPapers}
                            onChange={(e) => setHasTwoPapers(e.target.checked)}
                            className="rounded text-accent-600 focus:ring-accent-500"
                          />
                          <span>
                            Special Category: Woman Author with Two Accepted Papers for Conference Proceedings
                          </span>
                        </label>
                      </div>

                      {hasTwoPapers && (
                        <div>
                          <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Second Accepted CMT Paper ID *
                          </label>
                          <input
                            type="text"
                            required={hasTwoPapers}
                            placeholder="e.g. 189"
                            className="w-full rounded-xl border border-slate-300 dark:border-navy-700 bg-white dark:bg-navy-800 px-3 py-1.5 text-sm text-navy-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {/* Fee Calculation Display */}
                  <div className="rounded-xl border border-slate-200 dark:border-navy-700 p-3.5 bg-slate-100 dark:bg-navy-800 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 block">
                        Calculated Early-Bird Registration Fee
                      </span>
                      <span className="text-base font-extrabold text-navy-900 dark:text-gold-300">
                        {calculateFee()}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                      Before {earlyBirdDeadline}
                    </span>
                  </div>

                  {/* Declaration & Consent */}
                  <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        className="rounded text-accent-600 focus:ring-accent-500 mt-0.5"
                      />
                      <span>
                        I declare that the information provided is correct and matches my institutional and Microsoft CMT credentials.
                      </span>
                    </label>
                  </div>

                  {/* Notice banner */}
                  <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900 text-xs text-blue-900 dark:text-blue-300 flex items-start gap-2">
                    <Info size={16} className="shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" />
                    <span>
                      Notice: Official payment gateway integration and transaction submission will be enabled upon formal approval by the UPWIECON 2027 Organizing Committee.
                    </span>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setFormOpen(false)}
                      className="px-4 py-2 rounded-xl border border-slate-300 dark:border-navy-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-navy-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-accent-600 text-white text-xs font-bold hover:bg-accent-700 shadow-md transition-all"
                    >
                      Submit Registration Details
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  )
}
