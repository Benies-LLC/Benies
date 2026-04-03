const steps = [
  {
    num: '01',
    title: 'Connect & organize',
    desc: 'Bring your benefits into one place — medical, dental, vision, HSA, FSA, and supplemental coverage. No more digging through PDFs.',
    iconPath: 'M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z',
    color: '#0076BC',
    bg: '#EBF4FB',
  },
  {
    num: '02',
    title: 'Get a clear plan',
    desc: 'Benies decodes your coverage, predicts what care will cost, and tells you exactly how to use every benefit — before you need it.',
    iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 3h6v4H9z M9 12h6 M9 16h4',
    color: '#00BCD8',
    bg: '#D0F0F8',
  },
  {
    num: '03',
    title: 'Put your Benies to work',
    desc: 'Act on personalized recommendations, catch billing errors, dispute wrong charges, and build real financial confidence around healthcare.',
    iconPath: 'M22 12h-4l-3 9L9 3l-3 9H2',
    color: '#1F2D54',
    bg: '#E8EBF4',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24" style={{ background: '#F7F9FB' }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-navy md:text-5xl">How it works</h2>
          <p className="mt-4 text-lg text-gray-500">
            Three steps to take control of your benefits — and keep control.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.num} className="relative rounded-2xl bg-white p-8 shadow-sm">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="absolute right-0 top-12 hidden h-px w-6 translate-x-full md:block"
                  style={{ background: '#E0E7EF' }}
                />
              )}
              <div
                className="mb-2 text-xs font-bold tracking-widest"
                style={{ color: s.color }}
              >
                {s.num}
              </div>
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: s.bg }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={s.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={s.iconPath} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
