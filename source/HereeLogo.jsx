// Heree logo — pin + wordmark
function HereePin({ size = 56, glow = true }) {
  return (
    <div style={{ position: 'relative', width: size, height: size, display: 'inline-block' }}>
      {glow && (
        <div style={{
          position: 'absolute', inset: -8, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,94,58,0.35) 0%, transparent 65%)',
          filter: 'blur(6px)',
        }} />
      )}
      <svg width={size} height={size} viewBox="0 0 56 56" style={{ position: 'relative' }}>
        <defs>
          <linearGradient id="pinGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#FF8A65"/>
            <stop offset="1" stopColor="#FF4A1E"/>
          </linearGradient>
          <radialGradient id="pinShine" cx="0.35" cy="0.3" r="0.5">
            <stop offset="0" stopColor="#fff" stopOpacity="0.55"/>
            <stop offset="1" stopColor="#fff" stopOpacity="0"/>
          </radialGradient>
        </defs>
        {/* Pin body */}
        <path d="M28 4 C38 4 46 12 46 22 C46 32 36 44 28 52 C20 44 10 32 10 22 C10 12 18 4 28 4 Z"
              fill="url(#pinGrad)"/>
        <path d="M28 4 C38 4 46 12 46 22 C46 32 36 44 28 52 C20 44 10 32 10 22 C10 12 18 4 28 4 Z"
              fill="url(#pinShine)"/>
        {/* Inner dot */}
        <circle cx="28" cy="22" r="7" fill="#fff"/>
        <circle cx="28" cy="22" r="7" fill="url(#pinShine)" opacity="0.4"/>
      </svg>
    </div>
  );
}

function HereeWordmark({ size = 42, color = '#1a1411' }) {
  return (
    <div className="wordmark" style={{
      fontSize: size, color, lineHeight: 1, letterSpacing: '-0.05em',
      display: 'flex', alignItems: 'baseline', gap: 0,
    }}>
      <span>here</span>
      <span style={{ color: 'var(--accent)' }}>e.</span>
    </div>
  );
}

Object.assign(window, { HereePin, HereeWordmark });
