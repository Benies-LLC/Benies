const problems = [
  {
    stat: '1 in 3',
    statSub: 'insured Americans delay or avoid care due to cost',
    title: 'Coverage confusion',
    desc: 'Plans are complex, benefits guides are overwhelming, and it\'s hard to know what\'s covered until you get the bill.',
    iconPath: 'M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01',
    iconFull: 'M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z',
    color: '#0076BC',
    bg: '#EBF4FB',
  },
  {
    stat: '$556B+',
    statSub: 'in out-of-pocket spending by insured Americans each year',
    title: 'Missed benefits and money',
    desc: 'FSA dollars expire, wellness perks go unused, HSA contributions are underoptimized — savings slip through the cracks.',
    iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
    iconFull: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 3h6v4H9z',
    color: '#00BCD8',
    bg: '#D0F0F8',
  },
  {
    stat: '80%',
    statSub: 'of medical bills contain errors that could cost you money',
    title: 'Surprise bills and errors',
    desc: 'Out-of-network charges, duplicate billing, and claim denials create unexpected financial stress — and most go unchallenged.',
    iconPath: 'M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z',
    iconFull: 'M12 9v4M12 17h.01',
    color: '#1F2D54',
    bg: '#E8EBF4',
  },
]

export default function ProblemSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-navy md:text-5xl">
            Most benefits go underused —{' '}
            <span style={{ color: '#0076BC' }}>and confusion is expensive.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            The problem isn't access to insurance. It's the lack of guidance to use it well.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {problems.map(p => (
            <div
              key={p.title}
              className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              {/* Stat */}
              <div
                className="mb-6 inline-flex items-center justify-center rounded-2xl px-5 py-3"
                style={{ background: p.bg }}
              >
                <span className="text-3xl font-bold" style={{ color: p.color }}>{p.stat}</span>
              </div>
              <p className="mb-5 text-xs font-medium text-gray-400">{p.statSub}</p>

              {/* Icon */}
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: p.bg }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d={p.iconFull} />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
