const badges = [
  { label: 'Private & secure',          icon: 'M12 2l8 4v5c0 5-4 9-8 11C8 20 4 16 4 11V6l8-4z' },
  { label: 'Built for clarity',         icon: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 9v6 M12 15h.01' },
  { label: 'Designed to save you money',icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' },
  { label: 'Benefits optimization',     icon: 'M22 12h-4l-3 9L9 3l-3 9H2' },
  { label: 'AI-powered advocacy',       icon: 'M12 2a10 10 0 110 20 10 10 0 010-20zm0 6v4l3 3' },
]

export default function CredibilityStrip() {
  return (
    <section className="border-y border-gray-100 py-5" style={{ background: '#F7F9FB' }}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {badges.map(b => (
            <div key={b.label} className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <svg
                width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="#0076BC" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round"
              >
                <path d={b.icon} />
              </svg>
              {b.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
