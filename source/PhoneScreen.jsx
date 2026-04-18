// Phone number screen — playful copy, custom keypad, Try Demo CTA
function PhoneScreen({ onContinue, onDemo }) {
  const [number, setNumber] = React.useState('');
  const [country, setCountry] = React.useState({ flag: '🇵🇱', code: '+48', name: 'Polska' });
  const [showCountrySheet, setShowCountrySheet] = React.useState(false);

  const formatPL = (n) => {
    const d = n.replace(/\D/g, '').slice(0, 9);
    const parts = [d.slice(0,3), d.slice(3,6), d.slice(6,9)].filter(Boolean);
    return parts.join(' ');
  };

  const addDigit = (d) => setNumber(n => (n.replace(/\D/g, '').length < 9 ? n + d : n));
  const del = () => setNumber(n => n.slice(0, -1));

  const isValid = number.replace(/\D/g, '').length === 9;
  const display = formatPL(number);

  return (
    <div className="scene-enter" style={{
      position: 'absolute', inset: 0, zIndex: 2,
      display: 'flex', flexDirection: 'column',
      paddingTop: 72,
    }}>
      {/* Top bar: small logo + demo */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '8px 20px 0',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <HereePin size={28} glow={false} />
          <HereeWordmark size={22} />
        </div>
        <div
          className="press"
          onClick={onDemo}
          style={{
            height: 34, padding: '0 14px', borderRadius: 100,
            background: 'rgba(26,20,17,0.06)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '0.5px solid rgba(26,20,17,0.08)',
            display: 'flex', alignItems: 'center', gap: 6,
            fontSize: 13, fontWeight: 600, color: 'var(--text)',
            cursor: 'pointer', letterSpacing: '-0.01em',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path d="M3 2.5v7l6-3.5-6-3.5z" fill="var(--accent)"/>
          </svg>
          See Demo
        </div>
      </div>

      {/* Heading */}
      <div style={{ padding: '32px 24px 8px' }}>
        <div style={{
          fontSize: 34, fontWeight: 700, letterSpacing: '-0.03em',
          lineHeight: 1.08, color: 'var(--text)',
        }}>
          Gdzie Cię<br/>znajdziemy? <span style={{ color: 'var(--accent)' }}>👋</span>
        </div>
        <div style={{
          marginTop: 10, fontSize: 15, lineHeight: 1.4,
          color: 'var(--muted)', fontWeight: 400, letterSpacing: '-0.01em',
          textWrap: 'pretty', maxWidth: 320,
        }}>
          Podaj numer — wyślemy kod i zaczniemy. Bez haseł, bez dramatów.
        </div>
      </div>

      {/* Input */}
      <div style={{ padding: '24px 20px 0' }}>
        <div className="glass" style={{
          borderRadius: 20, padding: '18px 18px',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          {/* Country picker */}
          <div
            className="press"
            onClick={() => setShowCountrySheet(true)}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              paddingRight: 12, borderRight: '1px solid rgba(26,20,17,0.12)',
              cursor: 'pointer',
            }}
          >
            <span style={{ fontSize: 22, lineHeight: 1 }}>{country.flag}</span>
            <span className="num" style={{
              fontSize: 22, fontWeight: 500, color: 'var(--text)',
              letterSpacing: '-0.01em',
            }}>{country.code}</span>
            <svg width="10" height="6" viewBox="0 0 10 6">
              <path d="M1 1l4 4 4-4" stroke="var(--muted)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
          {/* Number */}
          <div className="num" style={{
            flex: 1, fontSize: 24, fontWeight: 500,
            color: display ? 'var(--text)' : 'rgba(26,20,17,0.3)',
            letterSpacing: '0.01em', minHeight: 30,
            display: 'flex', alignItems: 'center',
          }}>
            {display || '600 000 000'}
            {display && (
              <span style={{
                display: 'inline-block', width: 2, height: 24,
                background: 'var(--accent)', marginLeft: 3,
                animation: 'fadeIn 0.5s ease-in-out infinite alternate',
              }} />
            )}
          </div>
        </div>

        {/* Hint */}
        <div style={{
          marginTop: 12, fontSize: 12, color: 'var(--muted)',
          display: 'flex', alignItems: 'center', gap: 6,
          letterSpacing: '-0.01em',
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12">
            <circle cx="6" cy="6" r="5" fill="none" stroke="var(--muted)" strokeWidth="1.2"/>
            <path d="M6 3.5v3M6 8v.5" stroke="var(--muted)" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          Nie spamujemy. Numer trzymamy tylko do weryfikacji.
        </div>
      </div>

      {/* Spacer pushes CTA + keypad down */}
      <div style={{ flex: 1 }} />

      {/* CTA */}
      <div style={{ padding: '0 20px 16px' }}>
        <button
          className="press"
          disabled={!isValid}
          onClick={() => isValid && onContinue && onContinue(country.code + ' ' + display)}
          style={{
            width: '100%', height: 56, borderRadius: 20, border: 'none',
            background: isValid
              ? 'linear-gradient(180deg, #FF7A55 0%, #FF4A1E 100%)'
              : 'rgba(26,20,17,0.08)',
            color: isValid ? '#fff' : 'rgba(26,20,17,0.35)',
            fontSize: 17, fontWeight: 600, letterSpacing: '-0.01em',
            cursor: isValid ? 'pointer' : 'not-allowed',
            boxShadow: isValid
              ? '0 8px 20px rgba(255,74,30,0.3), inset 0 1px 0 rgba(255,255,255,0.3)'
              : 'none',
            transition: 'all 0.2s',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}
        >
          Wyślij kod
          {isValid && (
            <svg width="16" height="14" viewBox="0 0 16 14">
              <path d="M1 7h13m-5-5l5 5-5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          )}
        </button>
        <div style={{
          marginTop: 14, textAlign: 'center', fontSize: 11,
          color: 'var(--muted)', lineHeight: 1.45, letterSpacing: '-0.01em',
        }}>
          Klikając dalej akceptujesz <u>Regulamin</u> i <u>Politykę prywatności</u>
        </div>
      </div>

      {/* Keypad */}
      <div style={{ paddingBottom: 40 }}>
        <NumericKeypad onPress={addDigit} onDelete={del} />
      </div>

      {/* Country sheet */}
      {showCountrySheet && (
        <CountrySheet
          current={country}
          onPick={(c) => { setCountry(c); setShowCountrySheet(false); }}
          onClose={() => setShowCountrySheet(false)}
        />
      )}
    </div>
  );
}

function CountrySheet({ current, onPick, onClose }) {
  const countries = [
    { flag: '🇵🇱', code: '+48', name: 'Polska' },
    { flag: '🇩🇪', code: '+49', name: 'Niemcy' },
    { flag: '🇬🇧', code: '+44', name: 'Wielka Brytania' },
    { flag: '🇺🇸', code: '+1',  name: 'USA' },
    { flag: '🇫🇷', code: '+33', name: 'Francja' },
    { flag: '🇪🇸', code: '+34', name: 'Hiszpania' },
    { flag: '🇮🇹', code: '+39', name: 'Włochy' },
    { flag: '🇺🇦', code: '+380', name: 'Ukraina' },
  ];
  return (
    <div
      onClick={onClose}
      style={{
        position: 'absolute', inset: 0, zIndex: 50,
        background: 'rgba(26,20,17,0.4)',
        backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'flex-end',
        animation: 'fadeIn 0.25s ease-out',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass"
        style={{
          width: '100%', background: 'rgba(255,255,255,0.85)',
          borderRadius: '28px 28px 0 0', padding: '12px 0 34px',
          animation: 'slideUp 0.3s ease-out',
        }}
      >
        <div style={{
          width: 40, height: 5, borderRadius: 100,
          background: 'rgba(26,20,17,0.2)', margin: '0 auto 14px',
        }} />
        <div style={{
          fontSize: 17, fontWeight: 600, textAlign: 'center', marginBottom: 12,
          color: 'var(--text)', letterSpacing: '-0.01em',
        }}>
          Wybierz kraj
        </div>
        <div style={{ maxHeight: 360, overflow: 'auto' }}>
          {countries.map(c => {
            const sel = c.code === current.code;
            return (
              <div
                key={c.code}
                onClick={() => onPick(c)}
                className="press"
                style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '14px 24px', cursor: 'pointer',
                  background: sel ? 'rgba(255,94,58,0.08)' : 'transparent',
                }}
              >
                <span style={{ fontSize: 26 }}>{c.flag}</span>
                <span style={{ flex: 1, fontSize: 16, color: 'var(--text)', letterSpacing: '-0.01em' }}>{c.name}</span>
                <span className="num" style={{ fontSize: 16, color: 'var(--muted)' }}>{c.code}</span>
                {sel && (
                  <svg width="18" height="14" viewBox="0 0 18 14">
                    <path d="M1 7l5 5 10-11" stroke="var(--accent)" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { PhoneScreen });
