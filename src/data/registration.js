// Sourced from https://nielit.ac.in/upwiecon2026/registration.php

export const registrationNotes = [
  'Paper Registration Category must be selected as per the affiliation of First Author only.',
  'Authors must provide copy of IEEE MEMBERSHIP CARD if selecting IEEE Member category.',
]

export const registrationFormUrl = 'https://nielit.ac.in/upwiecon2026/registrationform.php'

export const feeCategories = [
  {
    category: 'Academia/Professionals/ Ph.D. Scholars (Presenter)',
    rows: [
      {
        membership: 'IEEE Member',
        earlyIndian: 'INR 9,000',
        earlyForeign: 'USD 300',
        lateIndian: 'INR 10,000',
        lateForeign: 'USD 350',
      },
      {
        membership: 'Non-Member',
        earlyIndian: 'INR 10,000',
        earlyForeign: 'USD 400',
        lateIndian: 'INR 11,000',
        lateForeign: 'USD 450',
      },
    ],
  },
  {
    category: 'Students (UG/PG Presenter)',
    rows: [
      {
        membership: 'IEEE Member',
        earlyIndian: 'INR 7,000',
        earlyForeign: 'USD 200',
        lateIndian: 'INR 8,000',
        lateForeign: 'USD 250',
      },
      {
        membership: 'Non-Member',
        earlyIndian: 'INR 8,000',
        earlyForeign: 'USD 300',
        lateIndian: 'INR 9,000',
        lateForeign: 'USD 350',
      },
    ],
  },
  {
    category: 'Listener/Attendee Registration from Academia/Professionals/Ph.D. Scholars',
    rows: [
      {
        membership: 'IEEE Member',
        earlyIndian: 'INR 4,000',
        earlyForeign: 'USD 150',
        lateIndian: 'INR 5,000',
        lateForeign: 'USD 200',
      },
      {
        membership: 'Non-Member',
        earlyIndian: 'INR 5,000',
        earlyForeign: 'USD 200',
        lateIndian: 'INR 6,000',
        lateForeign: 'USD 250',
      },
    ],
  },
  {
    category: 'Listener/Attendee Registration from UG/PG Students',
    rows: [
      {
        membership: 'IEEE Member',
        earlyIndian: 'INR 3,000',
        earlyForeign: 'USD 100',
        lateIndian: 'INR 3,000',
        lateForeign: 'USD 100',
      },
      {
        membership: 'Non-Member',
        earlyIndian: 'INR 4,000',
        earlyForeign: 'USD 150',
        lateIndian: 'INR 4,000',
        lateForeign: 'USD 150',
      },
    ],
  },
]
