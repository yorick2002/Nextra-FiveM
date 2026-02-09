'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          backgroundColor: '#0F172A',
          color: '#E2E8F0',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="120" height="120" rx="24" fill="#1E293B" />
            <path d="M26 20 L60 52" stroke="#3B82F6" strokeWidth="10" strokeLinecap="round" />
            <path d="M94 20 L60 52" stroke="#F97316" strokeWidth="10" strokeLinecap="round" />
            <path d="M60 52 L60 100" stroke="#A855F7" strokeWidth="10" strokeLinecap="round" />
          </svg>

          <div
            style={{
              fontSize: '4rem',
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: '-0.04em',
              marginTop: '1.25rem',
              background: 'linear-gradient(135deg, #3B82F6 0%, #A855F7 50%, #F97316 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Error
          </div>
          <h1
            style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              marginTop: '0.5rem',
              color: '#E2E8F0',
            }}
          >
            Something went wrong
          </h1>
          <p
            style={{
              color: '#94A3B8',
              marginTop: '0.5rem',
              maxWidth: 420,
              lineHeight: 1.6,
              fontSize: '0.9rem',
            }}
          >
            An unexpected error occurred. You can try again or{' '}
            <a
              href="https://github.com/yorick2002/Nextra-FiveM/issues"
              target="_blank"
              rel="noreferrer"
              style={{ color: '#A855F7', textDecoration: 'underline' }}
            >
              report this issue
            </a>
            .
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
            <button
              onClick={reset}
              style={{
                padding: '0.6rem 1.25rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'white',
                backgroundColor: '#A855F7',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'opacity 0.15s',
              }}
            >
              Try again
            </button>
            <a
              href="/"
              style={{
                padding: '0.6rem 1.25rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                borderRadius: '8px',
                textDecoration: 'none',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                color: '#A855F7',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              Back to docs
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
