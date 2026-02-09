import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '70vh',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontSize: '6rem',
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: '-0.04em',
          background: 'linear-gradient(135deg, #3B82F6 0%, #A855F7 50%, #F97316 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        404
      </div>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '0.75rem' }}>
        Page not found
      </h1>
      <p style={{ opacity: 0.6, marginTop: '0.5rem', maxWidth: 420, lineHeight: 1.6 }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
        <Link
          href="/"
          style={{
            padding: '0.6rem 1.25rem',
            fontSize: '0.875rem',
            fontWeight: 600,
            color: 'white',
            backgroundColor: '#A855F7',
            border: 'none',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'opacity 0.15s',
          }}
        >
          Back to docs
        </Link>
        <a
          href="https://github.com/yorick2002/Nextra-FiveM/issues"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: '0.6rem 1.25rem',
            fontSize: '0.875rem',
            fontWeight: 600,
            borderRadius: '8px',
            textDecoration: 'none',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            color: '#A855F7',
            transition: 'border-color 0.15s',
          }}
        >
          Report broken link
        </a>
      </div>
    </div>
  )
}
