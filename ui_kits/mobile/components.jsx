/* Heree mobile UI kit — all components.
   Load AFTER React/ReactDOM/Babel in index.html. */

const { useState, useEffect, useMemo } = React;

/* ---------- Icons (canonical 24×24 outline set) ---------- */
const Ic = {
  Arrow:   ({s=18,c='currentColor'}) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  Check:   ({s=18,c='currentColor'}) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  X:       ({s=14,c='currentColor'}) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M6 18L18 6" stroke={c} strokeWidth="2" strokeLinecap="round"/></svg>),
  Back:    ({s=16,c='currentColor'}) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  Lock:    ({s=14,c='currentColor'}) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="9" rx="2" stroke={c} strokeWidth="1.6"/><path d="M8 11V8a4 4 0 118 0v3" stroke={c} strokeWidth="1.6"/></svg>),
  Pin:     ({s=16,c='currentColor'}) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13z" stroke={c} strokeWidth="1.6"/><circle cx="12" cy="9" r="2.5" stroke={c} strokeWidth="1.6"/></svg>),
  Restart: ({s=14,c='currentColor'}) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M21 12a9 9 0 11-3-6.7L21 8M21 3v5h-5" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  Sparkle: ({s=14,c='currentColor'}) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" fill={c}/></svg>),
  Bksp: ({s=22,c='currentColor'}) => (<svg width={s} height={s} viewBox="0 0 24 24" fill="none"><path d="M20 5H9L3 12l6 7h11a1 1 0 001-1V6a1 1 0 00-1-1z" stroke={c} strokeWidth="1.6" strokeLinejoin="round"/><path d="M11 9l5 6m0-6l-5 6" stroke={c} strokeWidth="1.6" strokeLinecap="round"/></svg>),
};

/* ---------- Brand marks ---------- */
function HereeWordmark({ size=44, emphasis='.' }) {
  return (
    <div style={{fontFamily:"'Newsreader',Georgia,serif",fontSize:size,letterSpacing:'-0.02em',lineHeight:1,color:'var(--text)'}}>
      heree<span style={{color:'var(--accent)'}}>{emphasis}</span>
    </div>
  );
}
function HereePin({ size=108, letter='h' }) {
  return (
    <div style={{
      width:size,height:size,borderRadius:'50%',
      background:'radial-gradient(circle at 30% 30%, #FFC368 0%, #FF7A45 55%, #C04A1F 100%)',
      boxShadow:'0 0 60px rgba(255,122,69,0.6), inset 0 -14px 26px rgba(0,0,0,0.4), inset 0 8px 14px rgba(255,235,220,0.5)',
      display:'flex',alignItems:'center',justifyContent:'center',
      color:'#131C2E',fontSize:size*0.44,fontWeight:800,letterSpacing:'-0.06em',
      fontFamily:"-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
    }}>{letter}</div>
  );
}

/* ---------- Status bar / home indicator ---------- */
function StatusBar() {
  return (<>
    <div style={{position:'absolute',top:11,left:'50%',transform:'translateX(-50%)',width:124,height:36,background:'#000',borderRadius:100,zIndex:50}}/>
    <div style={{position:'absolute',top:0,left:0,right:0,height:54,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 30px 0',fontSize:15,fontWeight:600,color:'var(--text)',zIndex:40,pointerEvents:'none'}}>
      <div className="num" style={{fontWeight:600}}>9:41</div>
      <div style={{display:'flex',gap:6,alignItems:'center'}}>
        <svg width="17" height="11" viewBox="0 0 17 11" fill="none"><rect x="0" y="8" width="3" height="3" rx="0.5" fill="#F5F7FA"/><rect x="4.5" y="6" width="3" height="5" rx="0.5" fill="#F5F7FA"/><rect x="9" y="3" width="3" height="8" rx="0.5" fill="#F5F7FA"/><rect x="13.5" y="0" width="3" height="11" rx="0.5" fill="#F5F7FA"/></svg>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none"><path d="M8 10.5a1 1 0 100-2 1 1 0 000 2zM4.5 6.5a5 5 0 017 0M1.5 3.5a9 9 0 0113 0" stroke="#F5F7FA" strokeWidth="1.5" strokeLinecap="round"/></svg>
        <svg width="26" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="22" height="11" rx="2.5" stroke="#F5F7FA" strokeOpacity="0.5"/><rect x="2" y="2" width="19" height="8" rx="1.5" fill="#F5F7FA"/><path d="M24 4v4c.7-.3 1.2-1.2 1.2-2S24.7 4.3 24 4z" fill="#F5F7FA" fillOpacity="0.5"/></svg>
      </div>
    </div>
  </>);
}
function HomeIndicator() {
  return <div style={{position:'absolute',bottom:8,left:'50%',transform:'translateX(-50%)',width:134,height:5,borderRadius:100,background:'rgba(245,247,250,0.45)',zIndex:40}}/>;
}

/* ---------- Primitives ---------- */
function Chip({ children, tone='default' }) {
  const base = {display:'inline-flex',alignItems:'center',gap:6,padding:'6px 10px',borderRadius:100,fontSize:11,letterSpacing:'0.02em'};
  if (tone==='accent') return <div style={{...base,background:'rgba(255,122,69,0.16)',color:'var(--accent)',border:'0.5px solid transparent'}}>{children}</div>;
  return <div style={{...base,background:'rgba(184,194,208,0.08)',border:'0.5px solid var(--stroke)',color:'var(--text-dim)'}}>{children}</div>;
}
function PrimaryButton({ children, disabled, onClick, style={} }) {
  if (disabled) {
    return (
      <button onClick={onClick} disabled style={{
        width:'100%',height:56,borderRadius:28,fontFamily:'inherit',fontSize:17,fontWeight:500,
        background:'transparent',border:'0.5px solid var(--stroke-strong)',color:'var(--text-faint)',
        cursor:'not-allowed',letterSpacing:'-0.01em', ...style
      }}>{children}</button>
    );
  }
  return (
    <button onClick={onClick} style={{
      width:'100%',height:56,border:'none',borderRadius:28,fontFamily:'inherit',fontSize:17,fontWeight:500,
      color:'var(--on-accent)',background:'var(--accent)',
      boxShadow:'inset 0 1px 0 rgba(255,255,255,0.22), 0 8px 20px -6px rgba(255,122,69,0.5)',
      cursor:'pointer', transition:'transform 0.12s ease, background 0.15s ease', letterSpacing:'-0.01em',
      ...style
    }}>{children}</button>
  );
}
function Keypad({ onPress, onBack }) {
  const keys = ['1','2','3','4','5','6','7','8','9','','0','<'];
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:8}}>
      {keys.map((k,i) => {
        if (k==='') return <div key={i}/>;
        if (k==='<') return (
          <button key={i} onClick={onBack} style={{height:50,border:'none',borderRadius:16,background:'rgba(184,194,208,0.04)',color:'var(--text-dim)',fontFamily:'inherit',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Ic.Bksp/>
          </button>
        );
        return (
          <button key={i} onClick={()=>onPress(k)} className="num" style={{height:50,borderRadius:16,background:'rgba(184,194,208,0.07)',border:'0.5px solid var(--stroke)',color:'var(--text)',fontSize:24,fontWeight:400,fontFamily:'inherit',cursor:'pointer'}}>{k}</button>
        );
      })}
    </div>
  );
}

/* ---------- Scenes ---------- */
function Splash({ onDone }) {
  useEffect(()=>{ const t=setTimeout(onDone,1700); return()=>clearTimeout(t); },[]);
  return (
    <div className="scene scene-enter" style={{alignItems:'center',justifyContent:'center'}}>
      <div style={{position:'relative',width:160,height:160,marginBottom:28}}>
        <div style={{position:'absolute',inset:0,borderRadius:'50%',border:'1px solid rgba(255,122,69,0.34)',animation:'ping 1.4s ease-out infinite'}}/>
        <div style={{position:'absolute',inset:20,borderRadius:'50%',border:'1px solid rgba(255,122,69,0.45)',animation:'ping 1.4s ease-out 0.4s infinite'}}/>
        <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',animation:'pulse 2s ease-in-out infinite'}}><HereePin size={108}/></div>
      </div>
      <HereeWordmark size={44}/>
      <div style={{marginTop:14,fontSize:11,letterSpacing:'0.24em',textTransform:'uppercase',color:'var(--text-faint)',fontFamily:"'JetBrains Mono',ui-monospace,monospace"}}>twoja ulica · twoi ludzie</div>
    </div>
  );
}

function Phone({ onNext, onDemo }) {
  const [digits,setDigits] = useState('');
  const [consent,setConsent] = useState(false);
  const formatted = useMemo(()=>{ const g=digits.match(/.{1,3}/g); return g?g.join(' '):''; },[digits]);
  const press=(d)=>{ if(digits.length>=9) return; setDigits(digits+d); };
  const back=()=>setDigits(digits.slice(0,-1));
  const ok = digits.length===9 && consent;
  return (
    <div className="scene scene-enter" style={{padding:'70px 22px 28px'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:24}}>
        <Chip><Ic.Lock c="var(--text-dim)"/> szyfrowane</Chip>
        <button onClick={onDemo} style={{background:'transparent',border:'0.5px solid var(--stroke-strong)',borderRadius:100,padding:'6px 12px',fontSize:11,color:'var(--text-dim)',fontFamily:'inherit',cursor:'pointer',display:'inline-flex',alignItems:'center',gap:6}}>
          <Ic.Sparkle c="var(--accent-2)" s={11}/> wypróbuj demo
        </button>
      </div>
      <div style={{fontFamily:"'Newsreader',Georgia,serif",fontSize:38,lineHeight:1,letterSpacing:'-0.02em',marginBottom:8}}>
        Cześć <span style={{fontStyle:'italic',color:'var(--accent)'}}>sąsiedzie</span>
      </div>
      <div style={{fontSize:14,color:'var(--text-dim)',marginBottom:28,maxWidth:300,lineHeight:1.5}}>
        Daj numer — wyślemy kod SMS. Bez maili, bez haseł. Zero spamu.
      </div>
      <div className="glass" style={{display:'flex',alignItems:'center',gap:12,padding:'16px 18px',borderRadius:18,marginBottom:14}}>
        <div style={{display:'flex',alignItems:'center',gap:6,paddingRight:12,borderRight:'0.5px solid var(--stroke)'}}>
          <span style={{fontSize:16}}>🇵🇱</span>
          <span className="num" style={{fontSize:16,fontWeight:500}}>+48</span>
        </div>
        <div className="num" style={{fontSize:22,fontWeight:500,letterSpacing:'0.04em',color:digits?'var(--text)':'var(--text-faint)',flex:1}}>
          {formatted || '___ ___ ___'}
        </div>
      </div>
      <label style={{display:'flex',alignItems:'flex-start',gap:10,padding:'8px 4px',cursor:'pointer',marginBottom:'auto'}}>
        <div onClick={()=>setConsent(!consent)} style={{width:22,height:22,borderRadius:7,flexShrink:0,marginTop:1,background:consent?'var(--accent)':'rgba(184,194,208,0.08)',border:consent?'none':'0.5px solid var(--stroke-strong)',display:'flex',alignItems:'center',justifyContent:'center',transition:'all 0.18s'}}>
          {consent && <Ic.Check s={14} c="#0B1220"/>}
        </div>
        <div style={{fontSize:12,lineHeight:1.5,color:'var(--text-dim)'}}>
          Akceptuję <span style={{color:'var(--text)',textDecoration:'underline',textUnderlineOffset:3}}>regulamin</span> i <span style={{color:'var(--text)',textDecoration:'underline',textUnderlineOffset:3}}>politykę prywatności</span>.
        </div>
      </label>
      <div style={{marginTop:16,marginBottom:14}}><Keypad onPress={press} onBack={back}/></div>
      <PrimaryButton disabled={!ok} onClick={()=>onNext(digits)}>Wyślij kod →</PrimaryButton>
    </div>
  );
}

function Otp({ phone, onNext, onBack }) {
  const [code,setCode] = useState(['','','','','','']);
  const [error,setError] = useState(false);
  const [resendIn,setResendIn] = useState(38);
  const [autoFillHint,setAutoFillHint] = useState(true);
  const [shake,setShake] = useState(false);
  useEffect(()=>{ if(resendIn<=0) return; const t=setTimeout(()=>setResendIn(resendIn-1),1000); return()=>clearTimeout(t); },[resendIn]);
  useEffect(()=>{
    const t=setTimeout(()=>{
      setAutoFillHint(false);
      const correct=['4','8','2','1','5','7']; let i=0;
      const iv=setInterval(()=>{
        setCode(c=>{const n=[...c]; n[i]=correct[i]; return n;});
        i++; if(i===6){ clearInterval(iv); setTimeout(onNext,500); }
      },110);
    },2000);
    return()=>clearTimeout(t);
  },[]);
  const press=(d)=>{
    const i=code.findIndex(c=>c===''); if(i<0) return;
    const next=[...code]; next[i]=d; setCode(next);
    if(i===5){
      const joined=next.join('');
      if(joined!=='482157'){ setShake(true); setError(true); setTimeout(()=>{setShake(false);setCode(['','','','','','']);setError(false);},700); }
      else setTimeout(onNext,400);
    }
  };
  const back=()=>{
    const i=code.findIndex(c=>c==='');
    const idx=i<0?5:i-1; if(idx<0) return;
    const next=[...code]; next[idx]=''; setCode(next);
  };
  const maskedPhone = phone ? '+48 '+phone.slice(0,3)+' ••• '+phone.slice(6) : '+48 ••• ••• •••';
  return (
    <div className="scene scene-enter" style={{padding:'70px 22px 28px'}}>
      <button onClick={onBack} style={{alignSelf:'flex-start',cursor:'pointer',marginBottom:20,background:'rgba(184,194,208,0.08)',border:'0.5px solid var(--stroke-strong)',fontFamily:'inherit',color:'var(--text-dim)',borderRadius:100,padding:'6px 10px',display:'inline-flex',alignItems:'center',gap:6,fontSize:11}}>
        <Ic.Back c="var(--text-dim)"/> zmień numer
      </button>
      <div style={{fontFamily:"'Newsreader',Georgia,serif",fontSize:38,lineHeight:1,letterSpacing:'-0.02em',marginBottom:6}}>
        Kod z <span style={{fontStyle:'italic',color:'var(--accent)'}}>SMS-a</span>
      </div>
      <div style={{fontSize:14,color:'var(--text-dim)',marginBottom:22}}>
        Wysłano na <span className="num" style={{color:'var(--text)'}}>{maskedPhone}</span>
      </div>
      {autoFillHint && (
        <div className="glass" style={{display:'flex',alignItems:'center',gap:10,padding:'10px 14px',borderRadius:14,marginBottom:16,animation:'slideDown 0.5s ease-out both'}}>
          <div style={{width:24,height:24,borderRadius:8,background:'rgba(255,122,69,0.2)',display:'flex',alignItems:'center',justifyContent:'center'}}><Ic.Sparkle s={12} c="var(--accent)"/></div>
          <div style={{flex:1,fontSize:12.5,color:'var(--text-dim)'}}>Z iPhone'a · autouzupełnianie</div>
          <div style={{width:14,height:14,borderRadius:'50%',border:'1.5px solid var(--accent)',borderTopColor:'transparent',animation:'spin 0.7s linear infinite'}}/>
        </div>
      )}
      <div className={shake?'shake':''} style={{display:'grid',gridTemplateColumns:'repeat(6, 1fr)',gap:8,marginBottom:14}}>
        {code.map((c,i)=>{
          const active = c==='' && i===code.findIndex(x=>x==='');
          return (
            <div key={i} className="num" style={{
              aspectRatio:'1/1.1',borderRadius:14,
              background:error?'rgba(255,107,122,0.16)':'rgba(184,194,208,0.07)',
              border:error?'1px solid #FF6B7A':(active?'1px solid var(--accent)':'0.5px solid var(--stroke-strong)'),
              display:'flex',alignItems:'center',justifyContent:'center',
              fontSize:28,fontWeight:500,color:error?'#FF6B7A':'var(--text)',
              boxShadow:active?'0 0 0 4px rgba(255,122,69,0.11)':'none',transition:'all 0.15s'
            }}>
              {c || (active?<span style={{width:2,height:24,background:'var(--accent)',animation:'pulse 1s ease-in-out infinite'}}/>:'')}
            </div>
          );
        })}
      </div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'auto',fontSize:12}}>
        <span style={{color:error?'#FF6B7A':'var(--text-faint)'}}>{error?'Kod niepoprawny':'Kod ważny 10 min'}</span>
        {resendIn>0 ? (
          <span style={{color:'var(--text-faint)'}} className="num">wyślij ponownie · 0:{String(resendIn).padStart(2,'0')}</span>
        ) : (
          <span style={{color:'var(--accent)',cursor:'pointer'}}>wyślij ponownie</span>
        )}
      </div>
      <div style={{marginTop:16}}><Keypad onPress={press} onBack={back}/></div>
    </div>
  );
}

function Loading({ onDone }) {
  const [step,setStep] = useState(0);
  const steps = ['Weryfikacja numeru','Lokalizuję sąsiedztwo','Ładowanie zgłoszeń'];
  useEffect(()=>{
    if(step<steps.length){ const t=setTimeout(()=>setStep(step+1),700); return()=>clearTimeout(t); }
    const t=setTimeout(onDone,400); return()=>clearTimeout(t);
  },[step]);
  return (
    <div className="scene scene-enter" style={{alignItems:'center',justifyContent:'center',padding:'54px 24px 30px'}}>
      <div style={{position:'relative',width:140,height:140,marginBottom:28}}>
        <div style={{position:'absolute',inset:0,borderRadius:'50%',background:'conic-gradient(from 0deg, transparent, var(--accent))',animation:'orbit 1.2s linear infinite'}}/>
        <div style={{position:'absolute',inset:6,borderRadius:'50%',background:'var(--bg-0)',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Ic.Check s={36} c="var(--accent)"/>
        </div>
      </div>
      <div style={{fontFamily:"'Newsreader',Georgia,serif",fontSize:32,letterSpacing:'-0.02em',marginBottom:4}}>Zweryfikowano</div>
      <div style={{fontSize:13,color:'var(--text-dim)',marginBottom:26}}>Jesteś w heree.</div>
      <div style={{width:'100%',maxWidth:280,display:'flex',flexDirection:'column',gap:10}}>
        {steps.map((s,i)=>(
          <div key={i} className="glass" style={{display:'flex',alignItems:'center',gap:12,padding:'11px 14px',borderRadius:14,opacity:i<=step?1:0.35,transition:'opacity 0.3s'}}>
            <div style={{width:20,height:20,borderRadius:'50%',background:i<step?'var(--accent)':'rgba(184,194,208,0.08)',border:i<step?'none':'1px solid var(--stroke-strong)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
              {i<step && <Ic.Check s={12} c="#0B1220"/>}
              {i===step && <div style={{width:10,height:10,borderRadius:'50%',border:'1.5px solid var(--accent)',borderTopColor:'transparent',animation:'spin 0.7s linear infinite'}}/>}
            </div>
            <div style={{fontSize:13,color:'var(--text)'}}>{s}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Dashboard({ demoMode, onExitDemo }) {
  const [tab,setTab] = useState('feed');
  const reports = [
    {id:1,t:'2 min',who:'Kasia',dist:'140 m',icon:'🧹',txt:'Rozbite szkło przy placu zabaw na Wierzbowej. Dzieciaki tam biegają.',up:12},
    {id:2,t:'8 min',who:'Tomasz',dist:'220 m',icon:'🚌',txt:'Autobus 175 — objazd przez Puławską, +15 min.',up:34},
    {id:3,t:'24 min',who:'Magda',dist:'80 m',icon:'🐕',txt:'Zaginął rudy kot „Borys". Niebieska obroża. Ostatnio na Grójeckiej.',up:58},
  ];
  return (
    <div className="scene scene-enter" style={{padding:0,paddingTop:demoMode?36:0}}>
      {demoMode && (
        <div style={{position:'absolute',top:0,left:0,right:0,zIndex:45,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'8px 14px 8px 18px',background:'linear-gradient(90deg, rgba(255,195,104,0.95), rgba(255,138,91,0.95))',color:'var(--on-accent)',fontSize:11,fontWeight:600,letterSpacing:'0.04em',animation:'slideDown 0.4s ease-out'}}>
          <div style={{display:'flex',alignItems:'center',gap:8}}>
            <div style={{width:18,height:18,borderRadius:5,background:'#0B1220',display:'flex',alignItems:'center',justifyContent:'center',color:'#FFC368',fontSize:10,fontWeight:700}}>D</div>
            <span>Tryb demo · przeglądasz bez konta</span>
          </div>
          <button onClick={onExitDemo} style={{background:'#1E080E',color:'#FFC368',border:'none',borderRadius:100,padding:'6px 12px',fontSize:11,fontWeight:600,cursor:'pointer',fontFamily:'inherit',display:'inline-flex',alignItems:'center',gap:5}}>Wyjdź <Ic.X s={11}/></button>
        </div>
      )}
      {/* Map */}
      <div style={{position:'relative',height:'46%',overflow:'hidden',background:'linear-gradient(180deg, #1E080E 0%, #2A0D16 100%)'}}>
        <svg width="100%" height="100%" style={{position:'absolute',inset:0,opacity:0.4}}>
          <defs>
            <pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0H0v40" fill="none" stroke="rgba(255,122,69,0.13)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#g)"/>
          <path d="M-20 220 Q 100 180, 220 220 T 420 210" stroke="rgba(184,194,208,0.22)" strokeWidth="14" fill="none" strokeLinecap="round"/>
          <path d="M180 -20 Q 200 120, 180 260 T 220 440" stroke="rgba(184,194,208,0.22)" strokeWidth="10" fill="none" strokeLinecap="round"/>
          <ellipse cx="90" cy="100" rx="90" ry="50" fill="rgba(93,212,176,0.1)" stroke="rgba(93,212,176,0.26)" strokeWidth="0.5"/>
        </svg>
        {[{x:'45%',y:'42%',c:'var(--accent-2)'},{x:'62%',y:'58%',c:'var(--accent-3)'},{x:'30%',y:'68%',c:'var(--accent)'}].map((p,i)=>(
          <div key={i} style={{position:'absolute',left:p.x,top:p.y,transform:'translate(-50%,-50%)'}}>
            <div style={{position:'absolute',inset:-10,borderRadius:'50%',background:p.c,opacity:0.3,animation:`ping 2s ease-out ${i*0.4}s infinite`}}/>
            <div style={{width:18,height:18,borderRadius:'50%',background:p.c,border:'2px solid #1E080E',boxShadow:`0 0 18px ${p.c}`}}/>
          </div>
        ))}
        <div style={{position:'absolute',left:'50%',top:'50%',transform:'translate(-50%,-50%)'}}>
          <div style={{position:'absolute',inset:-16,borderRadius:'50%',background:'rgba(255,122,69,0.34)',animation:'ping 2.2s ease-out infinite'}}/>
          <div style={{width:22,height:22,borderRadius:'50%',background:'var(--accent)',border:'3px solid #1E080E',boxShadow:'0 0 24px var(--accent)'}}/>
        </div>
        <div style={{position:'absolute',top:64,left:20,right:20,display:'flex',gap:10,alignItems:'center'}}>
          <div className="glass" style={{flex:1,display:'flex',alignItems:'center',gap:10,padding:'10px 14px',borderRadius:14}}>
            <Ic.Pin s={14} c="var(--accent)"/>
            <div style={{flex:1}}>
              <div style={{fontSize:9,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'0.16em',fontFamily:"'JetBrains Mono',ui-monospace,monospace"}}>jesteś w</div>
              <div style={{fontSize:13,fontWeight:500}}>Mokotów · Pole Mokotowskie</div>
            </div>
            <Chip tone="accent">500 m</Chip>
          </div>
        </div>
      </div>
      {/* Sheet */}
      <div style={{flex:1,background:'linear-gradient(180deg, #3A1220 0%, #2A0D16 100%)',borderTopLeftRadius:28,borderTopRightRadius:28,marginTop:-24,position:'relative',zIndex:2,boxShadow:'0 -20px 40px rgba(0,0,0,0.5)',padding:'14px 18px 28px',display:'flex',flexDirection:'column',overflow:'hidden',border:'0.5px solid rgba(184,194,208,0.14)',borderBottom:'none'}}>
        <div style={{width:42,height:4,background:'rgba(255,200,200,0.2)',borderRadius:2,alignSelf:'center',marginBottom:12}}/>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:12}}>
          <div>
            <div style={{fontFamily:"'Newsreader',Georgia,serif",fontSize:26,letterSpacing:'-0.02em',lineHeight:1}}>
              W <span style={{fontStyle:'italic',color:'var(--accent)'}}>sąsiedztwie</span>
            </div>
            <div style={{fontSize:10,color:'var(--text-faint)',textTransform:'uppercase',letterSpacing:'0.16em',marginTop:4,fontFamily:"'JetBrains Mono',ui-monospace,monospace"}}>
              <span style={{color:'var(--accent)'}}>●</span> 14 aktywnych · 38 dziś
            </div>
          </div>
          <div style={{display:'flex',gap:3,background:'rgba(184,194,208,0.08)',borderRadius:100,padding:3,border:'0.5px solid var(--stroke)'}}>
            {['feed','mapa'].map(t=>(
              <button key={t} onClick={()=>setTab(t)} style={{border:'none',padding:'5px 12px',borderRadius:100,fontFamily:'inherit',fontSize:11.5,cursor:'pointer',background:tab===t?'var(--accent)':'transparent',color:tab===t?'#0B1220':'var(--text-dim)',fontWeight:tab===t?600:500}}>{t}</button>
            ))}
          </div>
        </div>
        <div style={{flex:1,overflow:'hidden',display:'flex',flexDirection:'column',gap:8}}>
          {reports.map((r,i)=>(
            <div key={r.id} className="glass" style={{padding:'11px 13px',borderRadius:16,display:'flex',gap:11,animation:`rise 0.5s ease-out ${i*0.1+0.2}s both`}}>
              <div style={{width:36,height:36,borderRadius:12,background:'rgba(184,194,208,0.10)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,flexShrink:0}}>{r.icon}</div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{display:'flex',alignItems:'center',gap:6,marginBottom:2,flexWrap:'wrap'}}>
                  <span style={{fontSize:12,fontWeight:600}}>{r.who}</span>
                  <span style={{fontSize:10,color:'var(--text-faint)'}}>·</span>
                  <span style={{fontSize:10,color:'var(--text-faint)'}} className="num">{r.t}</span>
                  <span style={{fontSize:10,color:'var(--text-faint)'}}>·</span>
                  <span style={{fontSize:10,color:'var(--accent)'}} className="num">{r.dist}</span>
                </div>
                <div style={{fontSize:12.5,color:'var(--text-dim)',lineHeight:1.4}}>{r.txt}</div>
              </div>
              <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:1,color:'var(--text-faint)'}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 4l8 10h-5v6h-6v-6H4l8-10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
                <span className="num" style={{fontSize:10}}>{r.up}</span>
              </div>
            </div>
          ))}
        </div>
        <PrimaryButton style={{marginTop:10,height:48,fontSize:14,borderRadius:24}}>+ Zgłoś coś sąsiedztwu</PrimaryButton>
      </div>
    </div>
  );
}

Object.assign(window, { Ic, HereeWordmark, HereePin, StatusBar, HomeIndicator, Chip, PrimaryButton, Keypad, Splash, Phone, Otp, Loading, Dashboard });
