// Splash — pulsing pin + wordmark, auto-transitions after 1.5s
function SplashScreen({ onDone }) {
  React.useEffect(() => {
    const t = setTimeout(() => onDone && onDone(), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="scene-enter" style={{
      position: 'absolute', inset: 0, display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: 28, zIndex: 2,
    }}>
      {/* Animated pin with rings */}
      <div style={{ position: 'relative', width: 120, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Outer ripples */}
        {[0, 0.6, 1.2].map((delay, i) => (
          <div key={i} style={{
            position: 'absolute', width: 80, height: 80, borderRadius: '50%',
            border: '2px solid rgba(255,94,58,0.45)',
            animation: `splashRing 2s ${delay}s ease-out infinite`,
          }} />
        ))}
        <div style={{ animation: 'splashPulse 2s ease-in-out infinite' }}>
          <HereePin size={80} />
        </div>
      </div>

      <div style={{ animation: 'fadeIn 0.8s 0.2s both' }}>
        <HereeWordmark size={48} />
      </div>

      <div className="num" style={{
        animation: 'fadeIn 0.8s 0.5s both',
        fontSize: 14, color: 'var(--muted)', letterSpacing: '0.14em',
        textTransform: 'uppercase', fontWeight: 500, marginTop: 4,
      }}>
        Znajdź swoich ludzi
      </div>
    </div>
  );
}

Object.assign(window, { SplashScreen });
