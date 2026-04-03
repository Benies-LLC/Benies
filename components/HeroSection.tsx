'use client'

import LeadCaptureForm from './LeadCaptureForm'

export default function HeroSection() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Subtle background accent */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 60% -10%, rgba(0,118,188,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left — copy + form */}
          <div className="max-w-xl">
            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold"
              style={{ background: '#EBF4FB', color: '#0076BC' }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: '#00BCD8' }}
              />
              Launching Q3 2026 — Open Enrollment Season
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight text-navy md:text-6xl">
              Benefits should{' '}
              <span style={{ color: '#0076BC' }}>work harder</span>{' '}
              for you.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-500">
              Benies is your AI-powered benefits advocate — helping you understand your
              coverage, predict healthcare costs, catch billing errors, and maximize every
              dollar of the benefits you already pay for.
            </p>

            <div className="mt-8">
              <LeadCaptureForm compact />
            </div>

            <button
              onClick={() => scrollTo('#how-it-works')}
              className="mt-5 text-sm font-medium transition hover:underline"
              style={{ color: '#0076BC' }}
            >
              See how it works ↓
            </button>

            {/* Social proof */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {['#0076BC', '#00BCD8', '#1F2D54', '#555A5B', '#0076BC'].map((c, i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: c }}
                  >
                    {['S', 'M', 'J', 'A', 'K'][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                <strong className="font-semibold text-navy">25+ professionals</strong> already validated Benies
              </p>
            </div>
          </div>

          {/* Right — dashboard illustration */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div
              className="rounded-3xl p-6 shadow-2xl"
              style={{ background: '#1F2D54' }}
            >
              {/* App bar */}
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="flex h-7 w-7 items-center justify-center rounded-lg text-white"
                    style={{ background: '#0076BC', position: 'relative' }}
                  >
                    <span className="text-sm font-bold">b</span>
                    <span
                      className="absolute rounded-full"
                      style={{
                        background: '#00BCD8',
                        width: 7,
                        height: 3,
                        top: 4,
                        right: 2,
                        borderRadius: 2,
                      }}
                    />
                  </div>
                  <span className="text-sm font-bold text-white">
                    <span style={{ color: '#fff' }}>Ben</span>
                    <span style={{ color: '#00BCD8' }}>ies</span>
                  </span>
                </div>
                <div
                  className="rounded-full px-3 py-1 text-xs font-bold"
                  style={{ background: 'rgba(0,188,216,0.2)', color: '#00BCD8' }}
                >
                  ✓ 2026 active
                </div>
              </div>

              {/* Hero stat card */}
              <div
                className="mb-4 rounded-2xl p-4"
                style={{ background: '#0076BC' }}
              >
                <p className="text-xs text-white/70">Good morning, Beck</p>
                <p className="mt-1 text-3xl font-bold text-white">$1,842</p>
                <p className="text-xs text-white/70">Potential savings identified</p>
                <div
                  className="mt-3 h-1.5 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.2)' }}
                >
                  <div
                    className="h-1.5 rounded-full"
                    style={{ width: '38%', background: '#00BCD8' }}
                  />
                </div>
                <p className="mt-1 text-xs text-white/60">38% of $4,800 potential</p>
              </div>

              {/* Benefit rows */}
              {[
                { label: 'Aetna HDHP',    sub: '$350 of $2,000 used',    val: '17%',    pct: 17,  valColor: '#0076BC', bg: 'rgba(0,118,188,0.15)' },
                { label: 'Inspira HSA',   sub: '$2,140 balance',         val: '$2,140', pct: 55,  valColor: '#22c55e', bg: 'rgba(34,197,94,0.15)'  },
                { label: 'MetLife Dental',sub: '1 of 2 cleanings used',  val: null,     pct: null,valColor: null,       bg: 'rgba(251,191,36,0.15)' },
              ].map((r, i) => (
                <div
                  key={i}
                  className="mb-2 flex items-center gap-3 rounded-xl p-3"
                  style={{ background: 'rgba(255,255,255,0.06)' }}
                >
                  <div
                    className="h-8 w-8 flex-shrink-0 rounded-lg"
                    style={{ background: r.bg }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-white">{r.label}</p>
                    <p className="text-xs text-white/50">{r.sub}</p>
                    {r.pct && (
                      <div
                        className="mt-1 h-1 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.1)' }}
                      >
                        <div
                          className="h-1 rounded-full"
                          style={{ width: `${r.pct}%`, background: r.valColor || '#0076BC' }}
                        />
                      </div>
                    )}
                  </div>
                  {r.val ? (
                    <span className="text-xs font-bold" style={{ color: r.valColor || 'white' }}>
                      {r.val}
                    </span>
                  ) : (
                    <span
                      className="rounded-full px-2 py-0.5 text-xs font-bold"
                      style={{ background: 'rgba(251,191,36,0.2)', color: '#fbbf24' }}
                    >
                      Book now
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Floating alert card */}
            <div
              className="absolute -bottom-4 -left-4 rounded-xl px-4 py-3 shadow-lg"
              style={{ background: 'white', borderLeft: '3px solid #00BCD8', maxWidth: 220 }}
            >
              <p className="text-xs font-bold text-navy">Savings found</p>
              <p className="text-xs text-gray-500">Billing error detected — save $41</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
