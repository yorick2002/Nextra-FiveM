import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Yorick Docs — FXServer & txAdmin Community Documentation'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0B1120',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(59,130,246,0.08) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Top accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            display: 'flex',
            background: 'linear-gradient(90deg, #3B82F6, #F97316, #3B82F6)',
          }}
        />

        {/* Glowing orbs */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: 120,
            width: 350,
            height: 350,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -60,
            left: 80,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '60px 80px',
            flex: 1,
            position: 'relative',
          }}
        >
          {/* Logo + brand row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <svg width="64" height="64" viewBox="0 0 120 120" fill="none">
              <rect width="120" height="120" rx="24" fill="#0F172A" />
              <path d="M26 20 L60 52" stroke="#3B82F6" strokeWidth="10" strokeLinecap="round" />
              <path d="M94 20 L60 52" stroke="#F97316" strokeWidth="10" strokeLinecap="round" />
              <path d="M60 52 L60 100" stroke="#A855F7" strokeWidth="10" strokeLinecap="round" />
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#F1F5F9', letterSpacing: '-0.01em', display: 'flex' }}>
                Yorick Docs
              </div>
              <div style={{ fontSize: 14, color: '#64748B', fontWeight: 500, display: 'flex', letterSpacing: '0.05em', textTransform: 'uppercase' as const }}>
                docs.yorick.gg
              </div>
            </div>
          </div>

          {/* Title area */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              justifyContent: 'center',
              marginTop: -10,
            }}
          >
            <div
              style={{
                fontSize: 58,
                fontWeight: 800,
                color: 'white',
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                display: 'flex',
              }}
            >
              Community Documentation for
            </div>
            <div
              style={{
                fontSize: 58,
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                marginTop: 8,
                display: 'flex',
                background: 'linear-gradient(90deg, #3B82F6, #F97316)',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              FXServer & txAdmin
            </div>
          </div>

          {/* Bottom tags row */}
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            {['Server Setup', 'txAdmin', 'Database', 'Security', 'Resources'].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 999,
                    fontSize: 15,
                    fontWeight: 600,
                    color: '#94A3B8',
                    border: '1px solid rgba(148,163,184,0.2)',
                    background: 'rgba(30,41,59,0.6)',
                    display: 'flex',
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
