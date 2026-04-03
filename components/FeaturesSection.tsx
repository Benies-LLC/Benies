const features = [
  {
    title: 'Benefits dashboard',
    desc: 'All your medical, dental, vision, HSA, FSA, and supplemental coverage in one clear view — not buried in a PDF.',
    iconPath: 'M3 3h7v7H3z M14 3h7v7h-7z M3 14h7v7H3z M14 14h7v7h-7z',
    color: '#0076BC', bg: '#EBF4FB',
  },
  {
    title: 'Cost prediction engine',
    desc: 'Know what care will cost before you go. Compare sites of care, confirm in-network status, and avoid surprise bills.',
    iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-4h2v4zm0-6h-2V7h2v4z',
    color: '#00BCD8', bg: '#D0F0F8',
  },
  {
    title: 'Bill review & dispute',
    desc: 'Scan bills for errors — duplicates, wrong codes, inflated charges. Benies flags them and helps you fight back.',
    iconPath: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M8 13h8 M8 17h5',
    color: '#1F2D54', bg: '#E8EBF4',
  },
  {
    title: 'HSA & FSA optimization',
    desc: 'Max your contributions, track your balance, and know exactly what\'s HSA/FSA eligible — triple tax advantage, fully used.',
    iconPath: 'M2 6h20v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6z M2 10h20',
    color: '#059669', bg: '#D1FAE5',
  },
  {
    title: 'Smart reminders',
    desc: 'Never miss FSA deadlines, open enrollment windows, preventive care due dates, or unused benefit expirations.',
    iconPath: 'M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 01-3.46 0',
    color: '#7C3AED', bg: '#F3E8FF',
  },
  {
    title: 'Personalized savings',
    desc: 'AI-powered recommendations tailored to your plan, your health situation, and your financial goals. Not generic advice.',
    iconPath: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    color: '#D97706', bg: '#FEF3C7',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-navy md:text-5xl">
            Everything you need to{' '}
            <span style={{ color: '#0076BC' }}>optimize your benefits</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Powerful features designed to save you time, money, and the stress of not knowing.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(f => (
            <div
              key={f.title}
              className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: f.bg }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={f.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={f.iconPath} />
                </svg>
              </div>
              <h3 className="text-base font-bold text-navy">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
