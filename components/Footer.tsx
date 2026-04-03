import Link from 'next/link'
import BeniesLogo from './BeniesLogo'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <BeniesLogo size="sm" />

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
          <Link href="/privacy" className="transition hover:text-blue-primary">Privacy</Link>
          <Link href="/terms"   className="transition hover:text-blue-primary">Terms</Link>
          <a href="mailto:hello@yourbenies.com" className="transition hover:text-blue-primary">Contact</a>
          <a href="https://instagram.com/yourbenies" target="_blank" rel="noopener noreferrer" className="transition hover:text-blue-primary">@yourbenies</a>
        </div>

        <p className="text-xs text-gray-400">© Benies 2026. All rights reserved.</p>
      </div>
    </footer>
  )
}
