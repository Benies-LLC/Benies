const outcomes = [
  'More confidence in every coverage decision',
  'Better utilization of your employer benefits',
  'Fewer billing surprises and claim errors',
  'Smarter planning for major health events',
  'Maximum HSA and FSA contributions — not a dollar wasted',
  'Less time on hold, less paperwork, less stress',
  'A platform that gets smarter the more you use it',
]

export default function OutcomesSection() {
  return (
    <section className="py-24" style={{ background: '#F7F9FB' }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-navy md:text-5xl">
              What you get with{' '}
              <span style={{ color: '#0076BC' }}>Ben</span>
              <span style={{ color: '#00BCD8' }}>ies</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-500">
              Stop guessing about your coverage. Stop leaving benefits on the table. Stop paying bills you shouldn't owe. Benies gives you the clarity and confidence to make the most of what you already have.
            </p>
            <div
              className="mt-8 rounded-2xl p-6"
              style={{ background: '#EBF4FB', borderLeft: '4px solid #0076BC' }}
            >
              <p className="text-sm font-medium text-navy">
                "Most Americans with employer insurance can't answer basic questions about what they're covered for or what care will cost. Benies changes that."
              </p>
              <p className="mt-2 text-xs font-semibold" style={{ color: '#0076BC' }}>
                Beck Roemen — Founder, Benies
              </p>
            </div>
          </div>

          <ul className="space-y-4">
            {outcomes.map(o => (
              <li key={o} className="flex items-start gap-3">
                <div
                  className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ background: '#D0F0F8' }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00BCD8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-gray-700">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
