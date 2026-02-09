import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const title = searchParams.get('title') || 'Yorick Docs'
  const description =
    searchParams.get('description') ||
    'FXServer & txAdmin community documentation'
  const section = searchParams.get('section') || ''

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
        {/* Grid pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(59,130,246,0.06) 1px, transparent 0)',
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

        {/* Glow orbs */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            right: 80,
            width: 350,
            height: 350,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -80,
            left: 60,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '60px 80px',
            flex: 1,
            position: 'relative',
          }}
        >
          {/* Top bar — logo + section badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              {/* Y logo */}
              <svg width="52" height="52" viewBox="0 0 120 120" fill="none">
                <rect width="120" height="120" rx="24" fill="#0F172A" />
                <path
                  d="M26 20 L60 52"
                  stroke="#3B82F6"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <path
                  d="M94 20 L60 52"
                  stroke="#F97316"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <path
                  d="M60 52 L60 100"
                  stroke="#A855F7"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </svg>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: '#F1F5F9',
                    display: 'flex',
                  }}
                >
                  Yorick Docs
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: '#64748B',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    display: 'flex',
                  }}
                >
                  docs.yorick.gg
                </div>
              </div>
            </div>

            {/* Section badge */}
            {section ? (
              <div
                style={{
                  padding: '8px 20px',
                  borderRadius: 999,
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#F97316',
                  border: '1px solid rgba(249,115,22,0.3)',
                  background: 'rgba(249,115,22,0.08)',
                  display: 'flex',
                }}
              >
                {section}
              </div>
            ) : null}
          </div>

          {/* Title */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              justifyContent: 'center',
              gap: 16,
            }}
          >
            <div
              style={{
                fontSize: title.length > 30 ? 48 : 56,
                fontWeight: 800,
                color: 'white',
                letterSpacing: '-0.03em',
                lineHeight: 1.15,
                display: 'flex',
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 24,
                color: '#94A3B8',
                lineHeight: 1.4,
                maxWidth: 900,
                display: 'flex',
              }}
            >
              {description}
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                fontSize: 15,
                color: '#475569',
                fontWeight: 500,
                display: 'flex',
              }}
            >
              FXServer & txAdmin Community Documentation
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#22C55E',
                  display: 'flex',
                }}
              />
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#3B82F6',
                  display: 'flex',
                }}
              />
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#F97316',
                  display: 'flex',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
