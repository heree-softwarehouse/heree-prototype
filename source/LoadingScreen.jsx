// Loading screen — success check → transition to dashboard
function LoadingScreen({ onDone }) {
  const [stage, setStage] = React.useState('verify'); // verify → success

  React.useEffect(() => {
    const t1 = setTimeout(() => setStage('success'), 800);
    const t2 = setTimeout(() => onDone && onDone(), 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="scene-enter" style={{
      position: 'absolute', inset: 0, zIndex: 2,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 24,
    }}>
      <div style={{
        width: 96, height: 96, borderRadius: '50%',
        position: 'relative', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
      }}>
        {stage === 'verify' ? (
          <>
            <div style={{
              position: 'absolute', inset: 0, borderRadius: '50%',
              border: '3px solid rgba(255,94,58,0.2)',
            }} />
            <div style={{
              position: 'absolute', inset: 0, borderRadius: '50%',
              border: '3px solid var(--accent)',
              borderRightColor: 'transparent', borderBottomColor: 'transparent',
              animation: 'spin 0.9s linear infinite',
            }} />
          </>
        ) : (
          <div style={{
            width: 96, height: 96, borderRadius: '50%',
            background: 'linear-gradient(180deg, #FF7A55 0%, #FF4A1E 100%)',
            boxShadow: '0 12px 32px rgba(255,74,30,0.35)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: 'scaleIn 0.4s cubic-bezier(.3, 1.4, .5, 1)',
          }}>
            <svg width="42" height="32" viewBox="0 0 42 32">
              <path d="M3 16l11 11L39 3" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"
                    style={{ strokeDasharray: 60, strokeDashoffset: 60, animation: 'check 0.5s 0.1s forwards' }}/>
            </svg>
            <style>{`@keyframes check { to { stroke-dashoffset: 0; } }`}</style>
          </div>
        )}
      </div>
      <div style={{
        fontSize: 22, fontWeight: 700, color: 'var(--text)',
        letterSpacing: '-0.02em', textAlign: 'center',
        animation: 'fadeIn 0.3s ease-out',
      }} key={stage}>
        {stage === 'verify' ? 'Szykujemy Twoje miejsce...' : 'Cześć, jesteś w Heree 👋'}
      </div>
    </div>
  );
}

Object.assign(window, { LoadingScreen });
