/* Heree logo components — Desert Orange navigation mark
   Use alongside React UMD globals. */

// Wordmark matching prototype/logo-color-comparison.html.
function HereeWordmark({ size = 44, color = 'var(--text)', accent = '#E8901A', style = {} }) {
  return (
    <div
      style={{
        fontFamily: "'Inter Tight', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
        fontSize: size,
        color,
        lineHeight: 1,
        letterSpacing: '-0.05em',
        fontWeight: 700,
        ...style,
      }}
    >
      heree<span style={{ color: accent }}>.</span>
    </div>
  );
}

// App icon mark from the final Desert Orange recommendation in prototype/logo-color-comparison.html.
function HereePin({ size = 108, glow = true }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      aria-hidden="true"
      style={{
        display: 'block',
        filter: glow ? 'drop-shadow(0 0 40px rgba(232,144,26,0.5))' : 'none',
      }}
    >
      <defs>
        <radialGradient id="hereeOrangeBg" cx="28%" cy="28%" r="85%">
          <stop offset="0" stopColor="#2B1D08"/>
          <stop offset="100%" stopColor="#0F0B06"/>
        </radialGradient>
        <linearGradient id="hereeOrangeRing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD89B"/>
          <stop offset="55%" stopColor="#E8901A"/>
          <stop offset="100%" stopColor="#B86010"/>
        </linearGradient>
      </defs>
      <rect width="200" height="200" rx="44" fill="url(#hereeOrangeBg)"/>
      <circle cx="100" cy="100" r="64" fill="none" stroke="url(#hereeOrangeRing)" strokeWidth="16" strokeLinecap="round" strokeDasharray="290 78" transform="rotate(-60 100 100)"/>
      <circle cx="100" cy="100" r="10" fill="#FFD89B"/>
    </svg>
  );
}

// Full splash lockup with radiating rings
function HereeMark({ size = 160 }) {
  return (
      <div style={{ position: 'relative', width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, borderRadius: '50%',
        border: '1px solid rgba(232,144,26,0.34)', animation: 'ping 1.4s ease-out infinite' }}/>
      <div style={{ position: 'absolute', inset: size*0.12, borderRadius: '50%',
        border: '1px solid rgba(232,144,26,0.45)', animation: 'ping 1.4s ease-out 0.4s infinite' }}/>
      <div style={{ animation: 'pulse 2s ease-in-out infinite' }}>
        <HereePin size={size * 0.67}/>
      </div>
    </div>
  );
}

Object.assign(window, { HereeWordmark, HereePin, HereeMark });
