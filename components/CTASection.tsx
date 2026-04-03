import LeadCaptureForm from './LeadCaptureForm'

export default function CTASection() {
  return (
    <section id="cta" className="py-24" style={{ background: '#1F2D54' }}>
      <div className="mx-auto max-w-xl px-6 text-center">
        {/* Icon */}
        <div
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl"
          style={{ background: '#0076BC', position: 'relative' }}
        >
          <span
            className="text-3xl font-bold text-white"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            b
          </span>
          <span
            className="absolute rounded-full"
            style={{
              background: '#00BCD8',
              width: 10,
              height: 4,
              top: 10,
              right: 8,
              borderRadius: 3,
            }}
          />
        </div>

        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Put your{' '}
          <span style={{ color: '#0076BC' }}>Ben</span>
          <span style={{ color: '#00BCD8' }}>ies</span>{' '}
          to work.
        </h2>

        <p className="mt-4 text-lg" style={{ color: 'rgba(255,255,255,0.65)' }}>
          Join the waitlist and be among the first to take control of your benefits.
          Launching Q3 2026 — open enrollment season.
        </p>

        {/* Stats row */}
        <div className="my-8 flex items-center justify-center gap-8">
          {[
            { val: '180M+', label: 'Americans we can help' },
            { val: '$556B', label: 'In preventable OOP costs' },
            { val: 'Q3 2026', label: 'Launch date' },
          ].map(s => (
            <div key={s.val} className="text-center">
              <div className="text-xl font-bold text-white">{s.val}</div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl p-6"
          style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <LeadCaptureForm />
        </div>
      </div>
    </section>
  )
}
