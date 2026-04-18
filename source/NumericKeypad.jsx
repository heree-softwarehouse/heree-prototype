// Custom numeric keypad — iOS Liquid Glass
function NumericKeypad({ onPress, onDelete, disabled = false }) {
  const [pressed, setPressed] = React.useState(null);

  const keys = [
    ['1', ''], ['2', 'ABC'], ['3', 'DEF'],
    ['4', 'GHI'], ['5', 'JKL'], ['6', 'MNO'],
    ['7', 'PQRS'], ['8', 'TUV'], ['9', 'WXYZ'],
    ['', ''], ['0', '+'], ['del', ''],
  ];

  const handlePress = (k) => {
    if (disabled) return;
    setPressed(k);
    setTimeout(() => setPressed(null), 120);
    if (k === 'del') onDelete && onDelete();
    else if (k) onPress && onPress(k);
  };

  const keyStyle = (active) => ({
    height: 58, borderRadius: 16,
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    position: 'relative', overflow: 'hidden',
    background: active ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.55)',
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    border: '0.5px solid rgba(255,255,255,0.7)',
    boxShadow: active
      ? '0 2px 4px rgba(138,67,30,0.08), inset 0 1px 0 rgba(255,255,255,0.8)'
      : 'inset 1px 1px 0 rgba(255,255,255,0.7), inset -1px -1px 0 rgba(255,255,255,0.25), 0 1px 2px rgba(138,67,30,0.04)',
    transform: active ? 'scale(0.96)' : 'scale(1)',
    transition: 'transform 0.1s, background 0.1s',
    cursor: 'pointer',
    color: 'var(--text)',
  });

  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 10, padding: '0 16px',
    }}>
      {keys.map(([k, sub], i) => {
        if (k === '') return <div key={i} />;
        const active = pressed === k;
        return (
          <div key={i} style={keyStyle(active)} onClick={() => handlePress(k)}>
            {k === 'del' ? (
              <svg width="28" height="22" viewBox="0 0 28 22">
                <path d="M9 1h16a2 2 0 012 2v16a2 2 0 01-2 2H9l-8-10 8-10z"
                      fill="none" stroke="#1a1411" strokeWidth="1.6" strokeLinejoin="round"/>
                <path d="M13 7l7 7M20 7l-7 7" stroke="#1a1411" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            ) : (
              <>
                <div className="num" style={{
                  fontSize: 30, fontWeight: 400,
                  lineHeight: 1, letterSpacing: '-0.02em',
                }}>{k}</div>
                {sub && <div style={{
                  fontSize: 9, fontWeight: 600, letterSpacing: '0.18em',
                  color: 'var(--muted)', marginTop: 2,
                }}>{sub}</div>}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

Object.assign(window, { NumericKeypad });
