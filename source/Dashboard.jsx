// Dashboard — map + bottom sheet with events + people
function Dashboard() {
  const [sheetExpanded, setSheetExpanded] = React.useState(false);

  // People pins (relative to map viewport)
  const people = [
    { id: 1, x: 32, y: 26, label: 'Ola', avatar: '#FFC98A', tag: '2 min' },
    { id: 2, x: 58, y: 34, label: 'Marek', avatar: '#FFA078', tag: '5 min' },
    { id: 3, x: 45, y: 52, label: 'Ania', avatar: '#FFB8AA', tag: '8 min' },
    { id: 4, x: 72, y: 62, label: 'Kuba', avatar: '#FFD6B0', tag: '12 min' },
    { id: 5, x: 22, y: 58, label: 'Zosia', avatar: '#F9B48A', tag: '3 min' },
  ];

  const events = [
    { id: 1, emoji: '☕', title: 'Kawa w Cafe Relax', when: 'Dziś · 17:00', who: 4, dist: '350 m', color: '#FFE3CF' },
    { id: 2, emoji: '🏃', title: 'Poranny bieg w parku', when: 'Jutro · 7:00', who: 12, dist: '1.2 km', color: '#FFD4B8' },
    { id: 3, emoji: '🎸', title: 'Open mic night', when: 'Piątek · 20:00', who: 28, dist: '2.4 km', color: '#FFC7A0' },
    { id: 4, emoji: '🎲', title: 'Planszówki u Piotrka', when: 'Sobota · 19:00', who: 6, dist: '600 m', color: '#FFE9D9' },
  ];

  return (
    <div className="scene-enter" style={{
      position: 'absolute', inset: 0, zIndex: 2,
      display: 'flex', flexDirection: 'column',
    }}>
      {/* MAP */}
      <div style={{
        position: 'absolute', inset: 0, overflow: 'hidden',
        background: `
          radial-gradient(600px 500px at 40% 30%, #f8ede0 0%, transparent 70%),
          linear-gradient(180deg, #EFE7DB 0%, #E8DFD1 100%)
        `,
      }}>
        {/* Fake streets */}
        <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }} preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M80 0H0V80" fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
          {/* main roads */}
          <path d="M-20 180 Q 100 160, 220 200 T 440 220" stroke="#fff" strokeWidth="18" fill="none" opacity="0.9"/>
          <path d="M-20 180 Q 100 160, 220 200 T 440 220" stroke="#F4E4D0" strokeWidth="14" fill="none"/>
          <path d="M120 0 Q 140 150, 180 280 T 220 560" stroke="#fff" strokeWidth="14" fill="none" opacity="0.9"/>
          <path d="M120 0 Q 140 150, 180 280 T 220 560" stroke="#F4E4D0" strokeWidth="10" fill="none"/>
          <path d="M320 40 Q 300 200, 340 360 T 380 640" stroke="#fff" strokeWidth="14" fill="none" opacity="0.9"/>
          <path d="M320 40 Q 300 200, 340 360 T 380 640" stroke="#F4E4D0" strokeWidth="10" fill="none"/>
          {/* park */}
          <ellipse cx="90" cy="420" rx="100" ry="70" fill="#D6E4C8" opacity="0.6"/>
          <ellipse cx="90" cy="420" rx="80" ry="52" fill="#CCDDBD" opacity="0.5"/>
          {/* water */}
          <path d="M260 560 Q 340 520, 420 540 L 420 700 L 260 700 Z" fill="#C9DEE8" opacity="0.7"/>
        </svg>

        {/* Current user blue dot */}
        <div style={{
          position: 'absolute', left: '50%', top: '42%',
          transform: 'translate(-50%, -50%)',
        }}>
          <div style={{
            position: 'absolute', width: 80, height: 80,
            borderRadius: '50%', background: 'rgba(52,120,246,0.15)',
            top: -40, left: -40,
            animation: 'pinPulse 2.5s ease-out infinite',
          }} />
          <div style={{
            width: 20, height: 20, borderRadius: '50%',
            background: '#3478F6',
            border: '3px solid #fff',
            boxShadow: '0 2px 8px rgba(52,120,246,0.4)',
          }} />
        </div>

        {/* People pins */}
        {people.map(p => (
          <div key={p.id} style={{
            position: 'absolute', left: `${p.x}%`, top: `${p.y}%`,
            transform: 'translate(-50%, -100%)',
            animation: `slideUp 0.5s ${p.id * 0.08}s both`,
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: '50% 50% 50% 4px',
              transform: 'rotate(-45deg)',
              background: `linear-gradient(135deg, ${p.avatar} 0%, #FF7A45 100%)`,
              border: '2.5px solid #fff',
              boxShadow: '0 4px 12px rgba(138,67,30,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{
                transform: 'rotate(45deg)',
                width: 30, height: 30, borderRadius: '50%',
                background: p.avatar,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 700, color: '#fff',
                letterSpacing: '-0.01em',
              }}>
                {p.label[0]}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* TOP glass bar */}
      <div style={{
        position: 'relative', zIndex: 3,
        padding: '60px 16px 0',
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <div style={{
          flex: 1, height: 44, borderRadius: 100,
          background: 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: '0.5px solid rgba(255,255,255,0.8)',
          boxShadow: 'inset 1px 1px 0 rgba(255,255,255,0.8), 0 4px 12px rgba(138,67,30,0.08)',
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '0 16px',
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16">
            <circle cx="7" cy="7" r="5" fill="none" stroke="var(--muted)" strokeWidth="1.6"/>
            <path d="M11 11l3.5 3.5" stroke="var(--muted)" strokeWidth="1.6" strokeLinecap="round"/>
          </svg>
          <span style={{ fontSize: 15, color: 'var(--muted)', letterSpacing: '-0.01em' }}>
            Znajdź ludzi lub miejsca
          </span>
        </div>
        {/* Profile */}
        <div style={{
          width: 44, height: 44, borderRadius: '50%',
          background: 'linear-gradient(135deg, #FFC98A 0%, #FF7A45 100%)',
          border: '2px solid #fff',
          boxShadow: '0 4px 12px rgba(138,67,30,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontWeight: 700, fontSize: 16, letterSpacing: '-0.01em',
        }}>
          K
        </div>
      </div>

      {/* Filter chips */}
      <div style={{
        position: 'relative', zIndex: 3,
        padding: '12px 16px 0',
        display: 'flex', gap: 8, overflow: 'auto',
      }}>
        {[
          { icon: '👋', label: 'Ludzie', active: true },
          { icon: '☕', label: 'Kawka' },
          { icon: '🎲', label: 'Hobby' },
          { icon: '🏃', label: 'Sport' },
          { icon: '🎵', label: 'Muzyka' },
        ].map((c, i) => (
          <div key={i} className="press" style={{
            height: 36, padding: '0 14px', borderRadius: 100,
            background: c.active ? 'var(--accent)' : 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: c.active ? 'none' : '0.5px solid rgba(255,255,255,0.8)',
            boxShadow: c.active
              ? '0 4px 12px rgba(255,74,30,0.25)'
              : '0 2px 6px rgba(138,67,30,0.06)',
            display: 'flex', alignItems: 'center', gap: 6,
            fontSize: 14, fontWeight: 600, letterSpacing: '-0.01em',
            color: c.active ? '#fff' : 'var(--text)',
            cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0,
          }}>
            <span style={{ fontSize: 14 }}>{c.icon}</span>
            {c.label}
          </div>
        ))}
      </div>

      {/* BOTTOM SHEET */}
      <div
        onClick={() => setSheetExpanded(e => !e)}
        style={{
          position: 'absolute', left: 0, right: 0, bottom: 0,
          height: sheetExpanded ? '62%' : '38%',
          borderRadius: '28px 28px 0 0',
          background: 'rgba(255,255,255,0.72)',
          backdropFilter: 'blur(30px) saturate(180%)',
          WebkitBackdropFilter: 'blur(30px) saturate(180%)',
          border: '0.5px solid rgba(255,255,255,0.8)',
          boxShadow: '0 -4px 24px rgba(138,67,30,0.1), inset 1px 1px 0 rgba(255,255,255,0.8)',
          zIndex: 4,
          transition: 'height 0.35s cubic-bezier(.3, 1, .3, 1)',
          paddingBottom: 34,
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
      >
        {/* Handle */}
        <div style={{
          width: 40, height: 5, borderRadius: 100,
          background: 'rgba(26,20,17,0.2)', margin: '10px auto 14px',
          flexShrink: 0,
        }} />

        {/* Title */}
        <div style={{
          padding: '0 20px 10px', flexShrink: 0,
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
        }}>
          <div>
            <div style={{
              fontSize: 22, fontWeight: 700, color: 'var(--text)',
              letterSpacing: '-0.02em',
            }}>
              W pobliżu
            </div>
            <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2, letterSpacing: '-0.01em' }}>
              5 osób · 4 wydarzenia w 1km
            </div>
          </div>
          <div style={{
            fontSize: 13, fontWeight: 600, color: 'var(--accent)',
            letterSpacing: '-0.01em',
          }}>
            Zobacz wszystko
          </div>
        </div>

        {/* People row */}
        <div style={{
          padding: '10px 20px 14px', display: 'flex', gap: 12,
          overflow: 'auto', flexShrink: 0,
        }} onClick={(e) => e.stopPropagation()}>
          {people.map(p => (
            <div key={p.id} style={{
              flexShrink: 0, width: 72,
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
            }}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  width: 60, height: 60, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${p.avatar} 0%, #FF7A45 100%)`,
                  border: '2px solid #fff',
                  boxShadow: '0 3px 10px rgba(138,67,30,0.18)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontWeight: 700, fontSize: 22, letterSpacing: '-0.01em',
                }}>
                  {p.label[0]}
                </div>
                <div style={{
                  position: 'absolute', bottom: 0, right: 0,
                  width: 14, height: 14, borderRadius: '50%',
                  background: '#33C759', border: '2px solid #fff',
                }} />
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.01em' }}>
                {p.label}
              </div>
              <div style={{ fontSize: 10, color: 'var(--muted)' }}>{p.tag}</div>
            </div>
          ))}
        </div>

        {/* Events */}
        <div style={{ flex: 1, overflow: 'auto', padding: '4px 16px 0' }}
             onClick={(e) => e.stopPropagation()}>
          <div style={{
            fontSize: 12, fontWeight: 700, color: 'var(--muted)',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            padding: '4px 4px 10px',
          }}>
            Wydarzenia
          </div>
          {events.map(ev => (
            <div key={ev.id} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '12px 8px', borderRadius: 16,
              marginBottom: 4,
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: ev.color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 24, flexShrink: 0,
              }}>
                {ev.emoji}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: 15, fontWeight: 600, color: 'var(--text)',
                  letterSpacing: '-0.01em', marginBottom: 2,
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>
                  {ev.title}
                </div>
                <div style={{
                  fontSize: 12, color: 'var(--muted)',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <span>{ev.when}</span>
                  <span style={{ width: 2, height: 2, borderRadius: '50%', background: 'var(--muted)' }} />
                  <span>{ev.who} osób</span>
                  <span style={{ width: 2, height: 2, borderRadius: '50%', background: 'var(--muted)' }} />
                  <span>{ev.dist}</span>
                </div>
              </div>
              <div className="press" style={{
                height: 32, padding: '0 14px', borderRadius: 100,
                background: 'rgba(255,94,58,0.1)',
                color: 'var(--accent)', fontSize: 13, fontWeight: 600,
                display: 'flex', alignItems: 'center',
                letterSpacing: '-0.01em', cursor: 'pointer',
              }}>
                Dołącz
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating "I'm here" CTA */}
      {!sheetExpanded && (
        <div className="press" style={{
          position: 'absolute', right: 16, bottom: '40%',
          transform: 'translateY(-12px)', zIndex: 5,
          width: 56, height: 56, borderRadius: '50%',
          background: 'linear-gradient(180deg, #FF7A55 0%, #FF4A1E 100%)',
          boxShadow: '0 8px 20px rgba(255,74,30,0.35), inset 0 1px 0 rgba(255,255,255,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
        }}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 2 C16 2 19 5 19 9 C19 13 14 20 12 22 C10 20 5 13 5 9 C5 5 8 2 12 2 Z"
                  fill="#fff"/>
            <circle cx="12" cy="9" r="3" fill="var(--accent)"/>
          </svg>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { Dashboard });
