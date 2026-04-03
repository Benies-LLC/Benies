import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-center px-6">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-primary">
        <span className="text-4xl font-bold text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>b</span>
      </div>
      <h1 className="text-5xl font-bold text-navy">404</h1>
      <p className="mt-3 text-lg text-gray-500">This page doesn't exist — but your benefits do.</p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-dark"
      >
        ← Back to Benies
      </Link>
    </div>
  )
}
