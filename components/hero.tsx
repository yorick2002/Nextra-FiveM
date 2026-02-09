'use client'

export function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-badge">Open-Source Documentation</div>
      <div className="hero-title" role="heading" aria-level={1}>
        {'Build & manage your '}
        <span className="hero-gradient">FXServer</span>
        {' with confidence'}
      </div>
      <div className="hero-description">
        Step-by-step guides for server setup, txAdmin, databases, security, and
        everything you need to run a FiveM server.
      </div>
    </div>
  )
}
