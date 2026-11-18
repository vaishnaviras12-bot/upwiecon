// Registration fee guidelines and structure for UPWIECON 2027.
// All INR amounts verified as per official conference requirements.
// Foreign/NRI amounts preserved.

export const registrationNotes = [
  'Paper Registration Category must be selected as per the affiliation of the First Author only.',
  'Authors must provide a copy of their valid IEEE MEMBERSHIP CARD / Membership Number if selecting the IEEE Member category.',
  'For the special category "Women Authors with Two Accepted Papers for Conference Proceedings", both accepted paper IDs must be specified during registration.',
  'Organising Committee Confirmation Pending: Clarification regarding whether the special fee for women with two accepted papers is per author or covers both papers is flagged for formal confirmation by the organizing committee.',
  'Paper submission and review are handled via Microsoft CMT; participant registration and fee payment are processed as an independent workflow.',
]

export const participantTypes = [
  {
    type: 'Paper Presenter',
    badge: 'Authors with Accepted Papers',
    description:
      'Required for authors whose papers have been officially accepted for presentation and publication in UPWIECON 2027 through Microsoft CMT.',
    inclusions: [
      'Presentation slot in designated technical session',
      'Inclusion of accepted paper in Conference Proceedings and submission to IEEE Xplore (subject to IEEE quality review)',
      'Access to all keynote addresses, technical tracks, and workshops',
      'Conference kit, presentation certificate, and networking sessions',
    ],
    cmtRequired: true,
  },
  {
    type: 'Listener / Attendee',
    badge: 'Non-Presenting Participants',
    description:
      'Designed for academicians, researchers, industry professionals, and students who wish to attend technical sessions and keynote talks without presenting a paper.',
    inclusions: [
      'Attendance access to all keynote speeches, panel discussions, and technical tracks',
      'Access to exhibitions, student innovation showcases, and cultural sessions',
      'Participation certificate and conference delegate kit',
      'No paper submission or CMT Paper ID required',
    ],
    cmtRequired: false,
  },
]

export const registrationSteps = [
  {
    step: '01',
    title: 'Identify Registration Category & Membership',
    desc: 'Determine whether you are registering as a Paper Presenter or Listener/Attendee, and confirm your eligibility (Academician/Professional, Student, or Women Author with 2 accepted papers) and IEEE Membership status.',
  },
  {
    step: '02',
    title: 'Verify Microsoft CMT Acceptance (Presenters Only)',
    desc: 'Paper presenters must ensure their paper has received formal acceptance in Microsoft CMT and note their unique CMT Paper ID and registered paper title.',
  },
  {
    step: '03',
    title: 'Prepare Supporting Documents',
    desc: 'Keep your valid IEEE Membership Number / Card ready if claiming IEEE discount rates, and valid Student Identity Card if registering under student categories.',
  },
  {
    step: '04',
    title: 'Fill Participant Registration Form',
    desc: 'Enter accurate participant details, institutional affiliation, and paper details into the conference registration portal.',
  },
  {
    step: '05',
    title: 'Complete Approved Payment & Verification',
    desc: 'Complete fee payment through the designated official payment mode once enabled by the organizing committee, and retain your payment transaction reference.',
  },
]

export const paymentInstructionsNotice = {
  title: 'Payment Gateway & Banking Instructions',
  status: 'Pending Organising Committee Approval',
  notice:
    'Official payment collection channels (including direct online payment gateway and institutional bank transfer details) will be published here as soon as they are formally approved by the UPWIECON 2027 Finance and Organising Committee. To prevent fraud, participants must never make payments to unverified third-party accounts or unauthorized links.',
}

export const earlyBirdDeadline = '15 August 2027'

export const feeCategories = [
  {
    category: 'Academia/Professionals/Ph.D. Scholars (Presenter)',
    rows: [
      {
        membership: 'IEEE Member',
        earlyIndian: '₹8,000',
        earlyForeign: 'USD 300',
        lateIndian: '₹9,000',
        lateForeign: 'USD 350',
      },
      {
        membership: 'Non-IEEE Member',
        earlyIndian: '₹10,000',
        earlyForeign: 'USD 400',
        lateIndian: '₹11,000',
        lateForeign: 'USD 450',
      },
    ],
  },
  {
    category: 'Students (UG/PG Presenter)',
    rows: [
      {
        membership: 'IEEE Member',
        earlyIndian: '₹5,500',
        earlyForeign: 'USD 200',
        lateIndian: '₹6,500',
        lateForeign: 'USD 250',
      },
      {
        membership: 'Non-IEEE Member',
        earlyIndian: '₹7,000',
        earlyForeign: 'USD 300',
        lateIndian: '₹8,000',
        lateForeign: 'USD 350',
      },
    ],
  },
  {
    category: 'Listener/Attendee Registration from Academia/Professionals/Ph.D. Scholars',
    rows: [
      {
        membership: 'IEEE Member',
        earlyIndian: '₹2,500',
        earlyForeign: 'USD 150',
        lateIndian: '₹3,500',
        lateForeign: 'USD 200',
      },
      {
        membership: 'Non-IEEE Member',
        earlyIndian: '₹4,000',
        earlyForeign: 'USD 200',
        lateIndian: '₹5,000',
        lateForeign: 'USD 250',
      },
    ],
  },
  {
    category: 'Listener/Attendee Registration from UG/PG Students',
    rows: [
      {
        membership: 'IEEE Member',
        earlyIndian: '₹1,500',
        earlyForeign: 'USD 100',
        lateIndian: '₹2,000',
        lateForeign: 'USD 100',
      },
      {
        membership: 'Non-IEEE Member',
        earlyIndian: '₹3,000',
        earlyForeign: 'USD 150',
        lateIndian: '₹3,500',
        lateForeign: 'USD 150',
      },
    ],
  },
  {
    category: 'Women Authors with Two Accepted Papers for Conference Proceedings',
    rows: [
      {
        membership: 'IEEE Member',
        earlyIndian: '₹6,000',
        earlyForeign: 'USD 250',
        lateIndian: '₹7,000',
        lateForeign: 'USD 300',
      },
      {
        membership: 'Non-IEEE Member',
        earlyIndian: '₹8,000',
        earlyForeign: 'USD 350',
        lateIndian: '₹9,000',
        lateForeign: 'USD 400',
      },
    ],
  },
]
