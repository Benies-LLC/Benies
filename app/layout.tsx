import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Benies — Benefits should work harder for you.',
  description: 'AI-powered benefits optimization and healthcare navigation. Understand your coverage, predict costs, catch billing errors, and maximize every dollar of your employer benefits.',
  metadataBase: new URL('https://yourbenies.com'),
  openGraph: {
    title: 'Benies — Benefits should work harder for you.',
    description: 'Stop guessing about healthcare costs. Benies helps you maximize your benefits, predict expenses, and eliminate surprise bills.',
    url: 'https://yourbenies.com',
    siteName: 'Benies',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Benies' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benies — Benefits should work harder for you.',
    description: 'AI-powered benefits optimization. Know your coverage. Predict your costs. Fight your bills.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
