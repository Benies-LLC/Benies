const commitments = [
  {
    title: "We're privacy-first.",
    desc: 'Your data belongs to you. We treat it with the care it deserves and will never share it without your explicit consent.',
    iconPath: 'M12 2l8 4v5c0 5-4 9-8 11C8 20 4 16 4 11V6l8-4z',
    color: '#0076BC', bg: '#EBF4FB',
  },
  {
    title: 'Modern encryption, always.',
    desc: 'Industry-standard security protects every piece of your information — in transit and at rest. HIPAA-compliant architecture from day one.',
    iconPath: 'M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4',
    color: '#00BCD8', bg: '#D0F0F8',
  },
  {
    title: 'We never sell your data.',
    desc: 'Period. Your trust is more valuable than any ad deal. Benies makes money through subscriptions and partners — never by selling your information.',
    iconPath: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 11a4 4 0 100-8 4 4 0 000 8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75',
    color: '#1F2D54', bg: '#E8EBF4',
  },
]

export default function PrivacySection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-navy md:text-5xl">
            Your information stays{' '}
            <span style={{ color: '#0076BC' }}>yours.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We take privacy and security as seriously as you take your health. Here's our commitment to you.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {commitments.map(c => (
            <div key={c.title} className="rounded-2xl border border-gray-100 p-8 text-center shadow-sm">
              <div
                className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: c.bg }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={c.iconPath} />
                </svg>
              </div>
              <h3 className="text-base font-bold text-navy">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
