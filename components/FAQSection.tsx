'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'What is Benies?',
    a: 'Benies is an AI-powered benefits optimization and healthcare navigation platform. We help you understand your coverage, predict what care will cost before you go, catch billing errors, and maximize every dollar of the benefits you already pay for.',
  },
  {
    q: 'Who is Benies for?',
    a: 'Benies is built for working adults with employer-sponsored health insurance — anyone who wants to get more value from their medical, dental, vision, HSA, FSA, and supplemental benefit plans. If you\'ve ever been surprised by a medical bill or confused about your coverage, Benies is for you.',
  },
  {
    q: 'Does Benies replace my insurance?',
    a: 'No. Benies doesn\'t replace your insurance — we help you get the most out of the coverage you already have. Think of us as the knowledgeable friend who actually understands the system.',
  },
  {
    q: 'What benefits does Benies support?',
    a: 'Benies supports medical (including HDHPs), dental, vision, HSA, FSA, supplemental coverage (critical illness, accident, hospital indemnity), wellness programs, EAPs, and more. We\'re always expanding the benefit types we cover.',
  },
  {
    q: 'Is my data secure?',
    a: 'Absolutely. We use industry-standard encryption and are building HIPAA-compliant architecture from day one. We never sell your personal data — privacy is baked into everything we build, not added as an afterthought.',
  },
  {
    q: 'When will Benies launch?',
    a: 'We\'re targeting a Q3 2026 launch, strategically timed to align with open enrollment and benefits election season — when understanding your benefits matters most. Join the waitlist to be among the first to get access.',
  },
  {
    q: 'How does Benies make money?',
    a: 'Benies offers optional premium subscription tiers and earns referral fees from trusted healthcare partners when we connect you with relevant services. We never make money by selling your data or showing you irrelevant ads.',
  },
  {
    q: 'Can I use Benies for my family?',
    a: 'Yes — we\'re building Benies to support family coverage and dependents so you can optimize benefits for your whole household, not just yourself.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24" style={{ background: '#F7F9FB' }}>
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-navy md:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Everything you need to know about Benies.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="pr-4 text-sm font-semibold text-navy">{f.q}</span>
                <span
                  className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full transition-transform"
                  style={{
                    background: open === i ? '#0076BC' : '#EBF4FB',
                    transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke={open === i ? 'white' : '#0076BC'}
                    strokeWidth="2.5" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="border-t border-gray-100 px-6 pb-5 pt-3">
                  <p className="text-sm leading-relaxed text-gray-500">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
