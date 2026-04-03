'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

interface Props {
  compact?: boolean
  className?: string
}

export default function LeadCaptureForm({ compact = false, className = '' }: Props) {
  const [email,       setEmail]       = useState('')
  const [name,        setName]        = useState('')
  const [benefitType, setBenefitType] = useState('')
  const [status,      setStatus]      = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg,    setErrorMsg]    = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    setErrorMsg('')

    const { error } = await supabase.from('waitlist').insert([
      { email: email.toLowerCase().trim(), name: name.trim() || null, benefit_type: benefitType || null }
    ])

    if (error) {
      if (error.code === '23505') {
        // duplicate email — treat as success so user isn't frustrated
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMsg('Something went wrong. Please try again.')
        console.error(error)
      }
    } else {
      setStatus('success')
    }
  }

  if (status === 'success') {
    return (
      <div className={`rounded-2xl border-2 border-teal-primary bg-teal-light px-6 py-8 text-center ${className}`}>
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-teal-primary">
          <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="text-lg font-bold text-navy">You're on the list!</p>
        <p className="mt-1 text-sm text-gray-600">We'll be in touch before launch. Benefits are about to get a lot clearer.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className={`flex ${compact ? 'flex-col sm:flex-row' : 'flex-col'} gap-3`}>
        {!compact && (
          <input
            type="text"
            placeholder="Your first name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="h-12 w-full rounded-xl border border-gray-200 px-4 text-sm font-medium text-gray-800 placeholder-gray-400 outline-none transition focus:border-blue-primary focus:ring-2 focus:ring-blue-light"
          />
        )}
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="h-12 flex-1 rounded-xl border border-gray-200 px-4 text-sm font-medium text-gray-800 placeholder-gray-400 outline-none transition focus:border-blue-primary focus:ring-2 focus:ring-blue-light"
        />
        {!compact && (
          <select
            value={benefitType}
            onChange={e => setBenefitType(e.target.value)}
            className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm font-medium text-gray-600 outline-none transition focus:border-blue-primary focus:ring-2 focus:ring-blue-light"
          >
            <option value="">Coverage type (optional)</option>
            <option value="employer">Employer-sponsored</option>
            <option value="individual">Individual / marketplace</option>
            <option value="medicare">Medicare / Medicaid</option>
            <option value="not-sure">Not sure</option>
          </select>
        )}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="h-12 rounded-xl bg-blue-primary px-8 text-sm font-bold text-white transition hover:bg-blue-dark disabled:opacity-60"
          style={{ backgroundColor: '#0076BC' }}
        >
          {status === 'loading' ? 'Joining...' : 'Get Early Access'}
        </button>
      </div>
      {errorMsg && (
        <p className="mt-2 text-sm text-red-500">{errorMsg}</p>
      )}
      <p className="mt-3 text-xs text-gray-400">No spam. No selling your data. Unsubscribe anytime.</p>
    </form>
  )
}
