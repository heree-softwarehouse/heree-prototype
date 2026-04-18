/* Heree logo components — canonical (V2, navy + coral)
   Use alongside React UMD globals. */

// Wordmark: "heree" with a coral period — used across splash, headers.
// Uses Newsreader italic-serif style in canonical V2.
function HereeWordmark({ size = 44, color = 'var(--text)', style = {} }) {
  return (
    <div
      className="serif"
      style={{
        fontFamily: "'Newsreader', 'New York', Georgia, serif",
        fontSize: size,
        color,
        lineHeight: 1,
        letterSpacing: '-0.02em',
        fontWeight: 400,
        ...style,
      }}
    >
      heree<span style={{ color: 'var(--accent)' }}>.</span>
    </div>
  );
}

// Pin: canonical logo mark — coral sphere (the 'h' sun/ember).
// Rendered with a radial gradient in an inset bowl.
function HereePin({ size = 108, letter = 'h' }) {
  return (
    <div
      style={{
        width: size, height: size, borderRadius: '50%',
        background: 'radial-gradient(circle at 30% 30%, #FFC368 0%, #FF7A45 55%, #C04A1F 100%)',
        boxShadow:
          '0 0 60px rgba(255,122,69,0.6),' +
          'inset 0 -14px 26px rgba(0,0,0,0.4),' +
          'inset 0 8px 14px rgba(255,235,220,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#131C2E',
        fontSize: size * 0.44, fontWeight: 800,
        letterSpacing: '-0.06em',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif",
      }}
    >{letter}</div>
  );
}

// Full splash lockup with radiating rings
function HereeMark({ size = 160 }) {
  return (
    <div style={{ position: 'relative', width: size, height: size, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, borderRadius: '50%',
        border: '1px solid rgba(255,122,69,0.34)', animation: 'ping 1.4s ease-out infinite' }}/>
      <div style={{ position: 'absolute', inset: size*0.12, borderRadius: '50%',
        border: '1px solid rgba(255,122,69,0.45)', animation: 'ping 1.4s ease-out 0.4s infinite' }}/>
      <div style={{ animation: 'pulse 2s ease-in-out infinite' }}>
        <HereePin size={size * 0.67}/>
      </div>
    </div>
  );
}

Object.assign(window, { HereeWordmark, HereePin, HereeMark });
