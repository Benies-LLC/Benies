'use client';

import { FormEvent, useState } from 'react';

/**
 * yourbenies.com — stealth landing page.
 *
 * Single full-screen centered layout. No nav, no footer links, no social icons.
 * All the restraint is intentional — this is the entire public surface until launch.
 */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function StealthLandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitted || loading) return;

    const value = email.trim();
    if (!value || !EMAIL_REGEX.test(value)) {
      setInvalid(true);
      return;
    }

    setInvalid(false);
    setLoading(true);

    // Fire and forget — per spec, we always show success even if the API
    // fails, to keep the page feeling bold and frictionless.
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value, source: 'homepage' }),
      });
    } catch {
      // intentionally swallowed
    }

    setLoading(false);
    setSubmitted(true);
  }

  return (
    <main
      style={{
        backgroundColor: '#1F2D54',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 24px',
        textAlign: 'center',
        fontFamily: 'Georgia, serif',
      }}
    >
      {/* Logo mark + wordmark */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          marginBottom: 48,
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            backgroundColor: '#0076BC',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
          aria-hidden="true"
        >
          <span
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#FFFFFF',
              fontFamily: 'Calibri, system-ui, sans-serif',
              lineHeight: 1,
            }}
          >
            b
          </span>
          <div
            style={{
              position: 'absolute',
              top: 4,
              right: 4,
              width: 9,
              height: 6,
              backgroundColor: '#00BCD8',
              borderRadius: 3,
            }}
          />
        </div>
        <div
          style={{
            fontFamily: 'Calibri, system-ui, sans-serif',
            fontSize: 22,
            fontWeight: 700,
            color: '#FFFFFF',
            letterSpacing: '-0.3px',
          }}
        >
          Ben<span style={{ color: '#00BCD8' }}>ies</span>
        </div>
      </div>

      {/* Launching badge */}
      <div
        style={{
          display: 'inline-block',
          backgroundColor: '#0A1628',
          border: '1px solid #00BCD8',
          color: '#00BCD8',
          fontFamily: 'Calibri, system-ui, sans-serif',
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          padding: '6px 16px',
          borderRadius: 40,
          marginBottom: 28,
        }}
      >
        Launching Fall 2026
      </div>

      {/* Eyebrow */}
      <p
        style={{
          fontFamily: 'Calibri, system-ui, sans-serif',
          fontSize: 13,
          color: '#8EAFD4',
          letterSpacing: '0.04em',
          marginBottom: 10,
          fontStyle: 'italic',
        }}
      >
        You work hard for your benefits.
      </p>

      {/* Headline */}
      <h1
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 700,
          color: '#FFFFFF',
          lineHeight: 1.15,
          marginBottom: 28,
          maxWidth: 620,
        }}
      >
        Your benefits should
        <br />
        work <span style={{ color: '#00BCD8' }}>hard for you.</span>
      </h1>

      {/* Subtext */}
      <p
        style={{
          fontFamily: 'Calibri, system-ui, sans-serif',
          fontSize: 16,
          color: '#8EAFD4',
          lineHeight: 1.6,
          marginBottom: 44,
          maxWidth: 420,
        }}
      >
        <strong style={{ color: '#FFFFFF', fontWeight: 700 }}>
          Your healthcare shouldn&apos;t be smoke &amp; mirrors.
        </strong>
        <br />
        Be the first to know when we launch.
      </p>

      {/* Email capture form */}
      <form
        onSubmit={handleSubmit}
        noValidate
        style={{
          display: 'flex',
          gap: 10,
          width: '100%',
          maxWidth: 460,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (invalid) setInvalid(false);
          }}
          placeholder="Enter your email address"
          autoComplete="email"
          disabled={submitted}
          aria-label="Email address"
          style={{
            flex: 1,
            minWidth: 220,
            height: 48,
            backgroundColor: '#0D1C38',
            border: `1px solid ${invalid ? '#E24B4A' : '#2A3F6F'}`,
            borderRadius: 8,
            padding: '0 16px',
            fontFamily: 'Calibri, system-ui, sans-serif',
            fontSize: 15,
            color: '#FFFFFF',
            outline: 'none',
          }}
          onFocus={(e) => {
            if (!invalid) e.currentTarget.style.borderColor = '#00BCD8';
          }}
          onBlur={(e) => {
            if (!invalid) e.currentTarget.style.borderColor = '#2A3F6F';
          }}
        />
        <button
          type="submit"
          disabled={submitted || loading}
          style={{
            height: 48,
            padding: '0 28px',
            backgroundColor: submitted ? '#0F6E56' : '#00BCD8',
            border: 'none',
            borderRadius: 8,
            fontFamily: 'Calibri, system-ui, sans-serif',
            fontSize: 15,
            fontWeight: 700,
            color: submitted ? '#FFFFFF' : '#042C53',
            cursor: submitted || loading ? 'default' : 'pointer',
            whiteSpace: 'nowrap',
            transition: 'background 0.15s',
          }}
        >
          {submitted ? "You're in" : 'Get early access'}
        </button>
      </form>

      {/* Success confirmation */}
      {submitted && (
        <p
          style={{
            fontFamily: 'Calibri, system-ui, sans-serif',
            fontSize: 13,
            color: '#00BCD8',
            marginTop: 16,
          }}
        >
          You&apos;re on the list. We&apos;ll be in touch.
        </p>
      )}

      {/* Privacy note */}
      <p
        style={{
          fontFamily: 'Calibri, system-ui, sans-serif',
          fontSize: 12,
          color: '#4A6080',
          marginTop: 14,
        }}
      >
        No spam, ever. Unsubscribe anytime.
      </p>

      {/* Footer */}
      <p
        style={{
          fontFamily: 'Calibri, system-ui, sans-serif',
          fontSize: 12,
          color: '#2A3F6F',
          marginTop: 60,
        }}
      >
        yourbenies.com &nbsp;·&nbsp; © 2026 Benies LLC
      </p>
    </main>
  );
}
