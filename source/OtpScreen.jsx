// OTP screen — 6 digits, auto-advance, shake on wrong, haptic viz
// Correct code for demo: 123456
function OtpScreen({ phone, onSuccess, onBack }) {
  const [digits, setDigits] = React.useState(['', '', '', '', '', '']);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [resendLeft, setResendLeft] = React.useState(42);
  const [hapticKey, setHapticKey] = React.useState(0);

  React.useEffect(() => {
    if (resendLeft <= 0) return;
    const t = setTimeout(() => setResendLeft(n => n - 1), 1000);
    return () => clearTimeout(t);
  }, [resendLeft]);

  const full = digits.join('');
  const firstEmpty = digits.findIndex(d => d === '');
  const activeIdx = firstEmpty === -1 ? 5 : firstEmpty;

  const addDigit = (d) => {
    if (loading) return;
    setError(false);
    setDigits(arr => {
      const copy = [...arr];
      const idx = copy.findIndex(x => x === '');
      if (idx === -1) return copy;
      copy[idx] = d;
      return copy;
    });
    setHapticKey(k => k + 1);
  };

  const del = () => {
    if (loading) return;
    setError(false);
    setDigits(arr => {
      const copy = [...arr];
      const lastFilled = [...copy].reverse().findIndex(x => x !== '');
      if (lastFilled === -1) return copy;
      copy[5 - lastFilled] = '';
      return copy;
    });
  };

  // Submit when full
  React.useEffect(() => {
    if (full.length !== 6 || loading) return;
    setLoading(true);
    setTimeout(() => {
      if (full === '123456') {
        onSuccess && onSuccess();
      } else {
        setError(true);
        setLoading(false);
        setTimeout(() => setDigits(['', '', '', '', '', '']), 500);
      }
    }, 700);
  }, [full]);

  return (
    <div className="scene-enter" style={{
      position: 'absolute', inset: 0, zIndex: 2,
      display: 'flex', flexDirection: 'column',
      paddingTop: 72,
    }}>
      {/* Back */}
      <div style={{ padding: '8px 16px 0' }}>
        <div
          className="press"
          onClick={onBack}
          style={{
            width: 44, height: 44, borderRadius: 100,
            background: 'rgba(255,255,255,0.6)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '0.5px solid rgba(255,255,255,0.7)',
            boxShadow: 'inset 1px 1px 0 rgba(255,255,255,0.7), 0 1px 3px rgba(138,67,30,0.06)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <svg width="11" height="18" viewBox="0 0 11 18">
            <path d="M9 1L1 9l8 8" stroke="var(--text)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Heading */}
      <div style={{ padding: '28px 24px 8px' }}>
        <div style={{
          fontSize: 34, fontWeight: 700, letterSpacing: '-0.03em',
          lineHeight: 1.08, color: 'var(--text)',
        }}>
          Sprawdzamy,<br/>czy to Ty <span style={{ color: 'var(--accent)' }}>🔑</span>
        </div>
        <div style={{
          marginTop: 10, fontSize: 15, lineHeight: 1.4,
          color: 'var(--muted)', fontWeight: 400, letterSpacing: '-0.01em',
          textWrap: 'pretty',
        }}>
          Wysłaliśmy kod na <span className="num" style={{ color: 'var(--text)', fontWeight: 600 }}>{phone}</span>
        </div>
      </div>

      {/* Auto-read banner */}
      <div style={{ padding: '20px 20px 0', animation: 'slideUp 0.5s 0.3s both' }}>
        <div className="glass" style={{
          borderRadius: 14, padding: '10px 14px',
          display: 'flex', alignItems: 'center', gap: 10,
          background: 'rgba(255,255,255,0.55)',
        }}>
          <div style={{
            width: 24, height: 24, borderRadius: '50%',
            background: 'var(--accent)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="12" height="12" viewBox="0 0 12 12">
              <path d="M2 3h8v6H3l-1 1V3z" fill="#fff"/>
            </svg>
          </div>
          <div style={{ flex: 1, fontSize: 13, color: 'var(--text)', letterSpacing: '-0.01em' }}>
            <div style={{ fontWeight: 600 }}>Oczekujemy SMS-a...</div>
            <div style={{ color: 'var(--muted)', fontSize: 12 }}>Wpiszemy kod automatycznie</div>
          </div>
          <div style={{
            width: 14, height: 14, borderRadius: '50%',
            border: '2px solid var(--accent)',
            borderTopColor: 'transparent',
            animation: 'spin 1s linear infinite',
          }} />
        </div>
      </div>

      {/* OTP digits */}
      <div className={error ? 'shake' : ''} style={{
        padding: '36px 20px 8px',
        display: 'flex', justifyContent: 'space-between', gap: 8,
      }}>
        {digits.map((d, i) => {
          const active = i === activeIdx && !loading && !error;
          const filled = d !== '';
          return (
            <div key={i} style={{
              flex: 1, aspectRatio: '0.78',
              borderRadius: 16, position: 'relative',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: filled ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.45)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: error
                ? '1.5px solid #E8441E'
                : active
                  ? '1.5px solid var(--accent)'
                  : '0.5px solid rgba(255,255,255,0.7)',
              boxShadow: filled
                ? '0 2px 8px rgba(138,67,30,0.08), inset 1px 1px 0 rgba(255,255,255,0.8)'
                : active
                  ? '0 0 0 4px rgba(255,94,58,0.12), inset 1px 1px 0 rgba(255,255,255,0.8)'
                  : 'inset 1px 1px 0 rgba(255,255,255,0.7), inset -1px -1px 0 rgba(255,255,255,0.25)',
              transition: 'all 0.2s',
            }}>
              <span className="num" style={{
                fontSize: 32, fontWeight: 500, color: 'var(--text)',
                letterSpacing: '-0.02em',
                animation: filled ? 'scaleIn 0.2s ease-out' : 'none',
              }}>{d}</span>
              {active && !filled && (
                <div style={{
                  width: 2, height: 28, background: 'var(--accent)',
                  animation: 'fadeIn 0.5s ease-in-out infinite alternate',
                }} />
              )}
            </div>
          );
        })}
      </div>

      {/* Error / loading text */}
      <div style={{
        textAlign: 'center', height: 22, fontSize: 13,
        color: error ? '#E8441E' : 'var(--muted)',
        letterSpacing: '-0.01em', marginTop: 12, fontWeight: error ? 600 : 400,
      }}>
        {error ? 'Kod nieprawidłowy — spróbuj ponownie' : loading ? 'Weryfikujemy...' : ''}
      </div>

      {/* Resend */}
      <div style={{
        textAlign: 'center', marginTop: 8, fontSize: 14,
        color: 'var(--muted)', letterSpacing: '-0.01em',
      }}>
        {resendLeft > 0 ? (
          <>Nie dotarł? Wyślij ponownie za <span className="num" style={{ color: 'var(--text)', fontWeight: 600 }}>0:{String(resendLeft).padStart(2, '0')}</span></>
        ) : (
          <span style={{ color: 'var(--accent)', fontWeight: 600, cursor: 'pointer' }} onClick={() => setResendLeft(42)}>
            Wyślij kod ponownie
          </span>
        )}
      </div>

      <div style={{ flex: 1 }} />

      {/* Haptic feedback blob (visual only) */}
      <div key={hapticKey} style={{
        position: 'absolute', bottom: 380, left: '50%',
        transform: 'translateX(-50%)',
        width: 100, height: 4, borderRadius: 2,
        background: 'var(--accent)',
        opacity: hapticKey ? 0 : 0,
        animation: hapticKey ? 'fadeOut 0.3s ease-out' : 'none',
        pointerEvents: 'none',
      }} />

      {/* Demo hint */}
      <div style={{
        padding: '0 20px 12px', textAlign: 'center',
        fontSize: 11, color: 'var(--muted)', letterSpacing: '-0.01em',
      }}>
        💡 Demo: użyj kodu <span className="num" style={{ fontWeight: 700, color: 'var(--text)' }}>123456</span>
      </div>

      {/* Keypad */}
      <div style={{ paddingBottom: 40 }}>
        <NumericKeypad onPress={addDigit} onDelete={del} disabled={loading} />
      </div>
    </div>
  );
}

Object.assign(window, { OtpScreen });
