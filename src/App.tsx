import { useState, useEffect, useRef } from 'react'
import './App.css'
import { initializeApp, getApps } from 'firebase/app'
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider,
  onAuthStateChanged,
  signOut,
  type User
} from 'firebase/auth'

// ─────────────────────────────────────────────────────────────────────────────
// FIREBASE CONFIG
// Replace these values with yours from Firebase Console → Project Settings
// If you already have firebase configured in another file, import auth from there
// ─────────────────────────────────────────────────────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyCmFaSucPvyFIXt_mxfc8X-U6rDcrYJ1T8",
  authDomain: "bringit-25.firebaseapp.com",
  projectId: "bringit-25",
  storageBucket: "bringit-25.firebasestorage.app.appspot.com",
  messagingSenderId: "812546413996",
  appId: "1:812546413996:web:26f3777ad763bfd76d9609"
  measurementId: "G-DEXHDD6XFK"
}

const fbApp = getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig)
const auth = getAuth(fbApp)
const googleProvider = new GoogleAuthProvider()
const microsoftProvider = new OAuthProvider('microsoft.com')

// ─────────────────────────────────────────────────────────────────────────────
// FORMSPREE ENDPOINT
// 1. Go to formspree.io → Sign up free → Create a form
// 2. Replace the URL below with your form endpoint
// ─────────────────────────────────────────────────────────────────────────────
const FORMSPREE_URL = 'https://formspree.io/f/mgorgakb'

// WhatsApp & Email for contact modals
const WA_NUMBER = '8801351656330'
const CONTACT_EMAIL = 'bringit.bpo@gmail.com'

// ─────────────────────────────────────────────────────────────────────────────
export default function App() {
  const [user, setUser] = useState<User | null>(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [showAuth, setShowAuth] = useState(false)
  const [showPkgContact, setShowPkgContact] = useState(false)
  const [selectedPkg, setSelectedPkg] = useState('')
  const [authError, setAuthError] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formSent, setFormSent] = useState(false)
  const [formSending, setFormSending] = useState(false)

  // Scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.rv').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // Auth state listener
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u)
      setAuthLoading(false)
    })
    return () => unsub()
  }, [])

  // Google fonts injection
  useEffect(() => {
    if (!document.querySelector('#bringit-fonts')) {
      const link = document.createElement('link')
      link.id = 'bringit-fonts'
      link.rel = 'stylesheet'
      link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,600;1,700&family=Outfit:wght@300;400;500;600;700&display=swap'
      document.head.appendChild(link)
    }
  }, [])

  const handlePackageClick = (pkg: string) => {
    setSelectedPkg(pkg)
    if (!user) {
      setShowAuth(true)
      setAuthError('')
    } else {
      setShowPkgContact(true)
    }
  }

  const signInGoogle = async () => {
    setAuthError('')
    try {
      await signInWithPopup(auth, googleProvider)
      setShowAuth(false)
      setShowPkgContact(true)
    } catch (err: any) {
      setAuthError(err?.message?.includes('popup') ? 'Popup was blocked. Please allow popups for this site.' : 'Sign in failed. Please try again.')
    }
  }

  const signInMicrosoft = async () => {
    setAuthError('')
    try {
      await signInWithPopup(auth, microsoftProvider)
      setShowAuth(false)
      setShowPkgContact(true)
    } catch (err: any) {
      setAuthError('Sign in failed. Please try again.')
    }
  }

  const handleSignOut = async () => {
    await signOut(auth)
  }

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormSending(true)
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      })
      if (res.ok) {
        setFormSent(true)
        form.reset()
      } else {
        alert('Something went wrong. Please email us directly at ' + CONTACT_EMAIL)
      }
    } catch {
      alert('Network error. Please email us at ' + CONTACT_EMAIL)
    }
    setFormSending(false)
  }

  const waLink = (msg: string) =>
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

  const mailLink = (subject: string) =>
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`

  return (
    <>
      {/* ── NAV ── */}
      <nav>
        <div className="nav-logo">
          <img
            src="/LOGO_1_1_no_BG.png"
            alt="BringIT"
            onError={(e) => {
              const t = e.currentTarget
              t.style.display = 'none'
              const next = t.nextElementSibling as HTMLElement
              if (next) next.style.display = 'block'
            }}
          />
          <span className="nav-logo-text" style={{ display: 'none' }}>BringIT</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-right">
          {authLoading ? null : user ? (
            <>
              <div className="nav-user">
                {user.photoURL && <img src={user.photoURL} alt="" referrerPolicy="no-referrer" />}
                <span>{user.displayName?.split(' ')[0] || 'Partner'}</span>
              </div>
              <button className="nav-signout" onClick={handleSignOut}>Sign out</button>
            </>
          ) : (
            <>
              <button className="nav-login" onClick={() => { setSelectedPkg(''); setShowAuth(true); setAuthError('') }}>Login</button>
              <button className="nav-cta" onClick={() => { window.location.href = '#contact' }}>Book Free Consultation</button>
            </>
          )}
        </div>
        <div className="nav-burger" onClick={() => setMobileOpen(o => !o)}>
          <span /><span /><span />
        </div>
      </nav>
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <a href="#home" onClick={() => setMobileOpen(false)}>Home</a>
        <a href="#services" onClick={() => setMobileOpen(false)}>Services</a>
        <a href="#pricing" onClick={() => setMobileOpen(false)}>Pricing</a>
        <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
        <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
        {!user && <button className="nav-cta" style={{ marginTop: '.5rem' }} onClick={() => { setMobileOpen(false); setShowAuth(true) }}>Login / Sign Up</button>}
      </div>

      {/* ── HERO ── */}
      <section className="hero" id="home">
        <div className="hero-g1" /><div className="hero-g2" /><div className="hero-g3" />
        <div className="eyebrow"><div className="edot" /><span>Remote Operations &amp; Revenue Control for Restaurants</span></div>
        <h1 className="hero-h">Stop Losing Money From<br /><em>Small Daily Mistakes</em></h1>
        <p className="hero-sub">BringIT helps restaurant owners stay in control with remote back-office operations, revenue protection, and daily accountability systems.</p>
        <p className="hero-trust">We don't replace your manager — we make sure nothing slips.</p>
        <div className="hero-btns">
          <a href="#contact" className="btn-g">Book Free Strategy Call</a>
          <a href="#pricing" className="btn-o">See Pricing</a>
        </div>
        <div className="hero-stats">
          <div className="hstat"><span className="hval">6–15%</span><span className="hlbl">Revenue Leakage<br />Prevented</span></div>
          <div className="hstat"><span className="hval">$150K+</span><span className="hlbl">Hidden Annual Loss<br />Per Store</span></div>
          <div className="hstat"><span className="hval">6</span><span className="hlbl">Major Franchise<br />Brands Supported</span></div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="trust-bar rv">
        <div className="trust-inner">
          <span className="t-lbl">Operational experience across</span>
          <div className="t-sep" />
          <span className="t-brand">Cold Stone Creamery</span>
          <span className="t-brand">Dunkin'</span>
          <span className="t-brand">Baskin Robbins</span>
          <span className="t-brand">Charleys Cheesesteaks &amp; Wings</span>
          <span className="t-brand">Domino's</span>
          <span className="t-brand">Papa John's</span>
        </div>
      </div>

      {/* ── PROBLEMS ── */}
      <section className="prob-bg" id="services">
        <div className="tc rv">
          <span className="lbl">The Hidden Problem</span>
          <h2 className="stitle">The Hidden Leaks Costing Restaurants Thousands</h2>
          <p className="ssub">Restaurants lose 6%–15%+ of annual revenue through preventable operational leakage. A $1M store can silently lose $150,000 every year.</p>
        </div>
        <div className="prob-stat rv">
          <p>The average restaurant owner is too busy handling rush hours, staff shortages, and customer complaints to notice the <strong>slow, daily revenue leaks</strong> that compound into massive annual losses — until it's too late.</p>
        </div>
        <div className="prob-grid rv">
          {[
            ['📦','Inventory Shrinkage','Food stolen, wasted, or given away without records. Employees taking items while management is focused elsewhere. Every item unaccounted for is direct profit loss.'],
            ['📱','Missed Online Orders','UberEats, DoorDash, Grubhub going offline during rush hours. Tablets switched off. Slow prep times triggering platform blackouts. Every minute offline is money gone.'],
            ['⏱️','Labor Inefficiency','Employees clocking in early, leaving late, or not working at all. Clock manipulation draining payroll. Managers turning a blind eye while owners pay the difference.'],
            ['💸','Refund Abuse','False food quality complaints filed on delivery apps. Fraudulent refund requests accepted without dispute. Thousands lost monthly to claims that could be contested.'],
            ['👥','Staff Accountability Issues','Untracked attendance, unreported incidents, cash stolen from registers. Without consistent monitoring, employee misconduct goes unseen and unchallenged.'],
            ['📋','Compliance & Deadline Failures','Missed license renewals, unpaid utility bills, forgotten franchise submissions, equipment repairs ignored. Small lapses that become expensive emergencies.'],
          ].map(([ico, title, desc]) => (
            <div className="prob-cell" key={title as string}>
              <span className="prob-ico">{ico}</span>
              <p className="prob-n">{title}</p>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gline" />

      {/* ── WHY BRINGIT ── */}
      <section>
        <div className="rv">
          <span className="lbl">Why BringIT</span>
          <h2 className="stitle">Why Owners Choose BringIT</h2>
          <p className="ssub">We're not a virtual assistant service. We are a remote operational control system built by someone who has worked inside real restaurant operations for years.</p>
        </div>
        <div className="why-grid rv">
          {[
            ['🛡️','We Prevent Small Mistakes That Quietly Cost Money','Daily monitoring catches issues before they become losses. Follow-ups ensure nothing slips through the cracks and becomes an expensive problem weeks later.'],
            ['📡','We Monitor Delivery Platforms So You Don\'t Miss Sales','UberEats, DoorDash, Grubhub, and OLO monitored daily. Platform outages caught and resolved fast. Missed orders flagged before the revenue disappears permanently.'],
            ['✅','We Track Tasks Until They Are Completed','Vendor follow-ups, equipment repairs, permit renewals — all tracked in a structured system. We chase every open item until it is closed. Nothing forgotten.'],
            ['💰','We Reduce Refund Losses','False refund claims disputed with delivery platforms. Weekly volume maximized. Recovery tracked and reported so owners see exactly what money was saved.'],
            ['👁️','We Improve Owner Visibility Without Being In-Store','CCTV monitoring, POS reports, attendance tracking, and daily summaries give owners a clear picture of operations without needing to be physically present.'],
            ['📈','We Help Owners Scale Without Chaos','Multi-store reporting, cross-location performance tracking, and expansion support systems so growth doesn\'t mean losing control of what you\'ve already built.'],
          ].map(([ico, title, desc]) => (
            <div className="why-card" key={title as string}>
              <div className="why-ico">{ico}</div>
              <div><h4>{title}</h4><p>{desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      <div className="gline" />

      {/* ── HOW IT WORKS ── */}
      <section className="how-bg">
        <div className="tc rv" style={{ marginBottom: '5rem' }}>
          <span className="lbl">The Process</span>
          <h2 className="stitle">How BringIT Works</h2>
          <p className="ssub">Four steps that turn operational chaos into controlled, protected revenue — starting from day one.</p>
        </div>

        <div className="how-row rv">
          <div className="how-txt">
            <span className="snum">01</span>
            <h3>We Identify Operational Leaks</h3>
            <p>We conduct a full back-office review — platforms, POS data, attendance records, complaint history, review profiles, and vendor status. Every leak gets identified before we even begin monitoring.</p>
          </div>
          <div className="how-vis">
            {[['📊','POS Report — Revenue vs Deposit Gap','a','Gap Found'],['⭐','Google Reviews — 6 unanswered (14 days)','a','Risk'],['📱','DoorDash — 3 offline incidents last week','a','Flagged'],['📋','License renewal — overdue 22 days','a','Critical'],['👤','Payroll — 4 clock manipulation patterns','a','Escalate']].map(([ico,label,cls,badge])=>(
              <div className="vrow" key={label as string}><div className="vico">{ico}</div><span>{label}</span><span className={`vbadge ${cls}`}>{badge}</span></div>
            ))}
          </div>
        </div>

        <div className="how-row rev rv">
          <div className="how-vis">
            {[['🔍','Platform sweep — All stores','d','Done 5:00 PM'],['📝','1-star Google Review — Response sent','d','Replied'],['⚠️','UberEats offline — Store 2 restored','d','Resolved'],['📞','Vendor follow-up — Equipment repair','l','In Progress'],['📋','Daily task log — 11 items completed','d','Logged']].map(([ico,label,cls,badge])=>(
              <div className="vrow" key={label as string}><div className="vico">{ico}</div><span>{label}</span><span className={`vbadge ${cls}`}>{badge}</span></div>
            ))}
          </div>
          <div className="how-txt">
            <span className="snum">02</span>
            <h3>We Monitor + Follow Up Daily</h3>
            <p>On a fixed schedule Saturday to Thursday, we sweep every platform, review channel, task list, and operational system. Every open issue is chased until closed — no exceptions, no forgotten items.</p>
          </div>
        </div>

        <div className="how-row rv">
          <div className="how-txt">
            <span className="snum">03</span>
            <h3>We Protect Revenue + Reduce Losses</h3>
            <p>Disputes filed, refunds contested, attendance verified, cash discrepancies flagged, and vendor delays escalated. We actively recover money that most owners never even realize they're losing.</p>
          </div>
          <div className="how-vis">
            {[['💰','False refund claim — Disputed DoorDash','d','Recovered $47'],['🚨','Cash shortage $340 — Manager alerted','d','Escalated'],['📷','CCTV — Unauthorized food incident logged','a','Reported'],['💡','OLO bill — Restored after lapse','d','Fixed'],['📈','Weekly recovery total: $1,240','l','Tracked']].map(([ico,label,cls,badge])=>(
              <div className="vrow" key={label as string}><div className="vico">{ico}</div><span>{label}</span><span className={`vbadge ${cls}`}>{badge}</span></div>
            ))}
          </div>
        </div>

        <div className="how-row rev rv">
          <div className="how-vis">
            {[['📊','Weekly executive summary — All stores','d','Sent'],['📈','Store 1 vs Store 2 — Performance gap','l','Identified'],['🛡️','New store setup checklist — 80% complete','l','On Track'],['✅','Open tasks: 3 / Closed this week: 18','d','Logged']].map(([ico,label,cls,badge])=>(
              <div className="vrow" key={label as string}><div className="vico">{ico}</div><span>{label}</span><span className={`vbadge ${cls}`}>{badge}</span></div>
            ))}
          </div>
          <div className="how-txt">
            <span className="snum">04</span>
            <h3>You Gain Control + Scale Confidently</h3>
            <p>Clear weekly summaries, cross-store performance reporting, and expansion support systems give you the visibility to make real decisions — and the confidence to grow without losing control.</p>
          </div>
        </div>
      </section>

      <div className="gline" />

      {/* ── PRICING ── */}
      <section id="pricing">
        <div className="tc rv">
          <span className="lbl">Pricing</span>
          <h2 className="stitle">Simple, Transparent Pricing</h2>
          <p className="ssub">Every package includes the same dedication — scaled to your operation. Saturday to Thursday, assigned daily time windows per store.</p>
        </div>
        <div className="pkg-row rv">
          {/* STARTER */}
          <div className="pkg">
            <div className="pkg-tier">Starter</div>
            <div className="pkg-name">Basic Relief</div>
            <div className="pkg-price">$149<sub>/mo per store</sub></div>
            <div className="pkg-for">Best for single-store owners who want affordable daily back-office support and peace of mind.</div>
            <ul className="pkg-feats">
              {['Review & message replies — Google, Yelp, DoorDash, UberEats, Grubhub','Complaint logging & basic handling','Daily reminders — renewals, deadlines, tasks','Follow-up tracking — nothing gets missed','Calendar & appointment scheduling','Basic admin & data entry','Task tracking — logged & followed every day','1–2 operational tasks per day'].map(f=><li key={f}>{f}</li>)}
              {['Platform monitoring — not included','Staff tracking — not included'].map(f=><li key={f} className="dim">{f}</li>)}
            </ul>
            <button className="pbtn l" onClick={() => handlePackageClick('Starter — $149/mo')}>Get Started</button>
          </div>
          {/* GROWTH */}
          <div className="pkg hi">
            <div className="hi-badge">Most Popular</div>
            <div className="pkg-tier">Growth</div>
            <div className="pkg-name">Full Back Office</div>
            <div className="pkg-price">$299<sub>/mo per store</sub></div>
            <div className="pkg-for">Best for busy owners who want daily operational control and fewer revenue leaks.</div>
            <ul className="pkg-feats">
              {['Everything in Starter, plus:','Full customer complaint communication handling','Vendor & utility coordination — calls, follow-ups','UberEats, DoorDash, Grubhub, OLO monitoring','Missed order & downtime alerts','Basic dispute handling — refunds, missing orders','Hiring coordination & shift issue reporting','Performance tracking & weekly owner summary','Social media posting 1–2x per week','3–5 operational tasks per day','Extended support hours'].map(f=><li key={f}>{f}</li>)}
            </ul>
            <button className="pbtn s" onClick={() => handlePackageClick('Growth — $299/mo')}>Get Started</button>
          </div>
          {/* PREMIUM */}
          <div className="pkg">
            <div className="pkg-tier">Premium</div>
            <div className="pkg-name">Operations Partner</div>
            <div className="pkg-price">$499<sub>/mo per store</sub></div>
            <div className="pkg-for">Best for multi-store owners who want full visibility, control, and a dedicated operations partner.</div>
            <ul className="pkg-feats">
              {['Everything in Growth, plus:','Staff attendance tracking via POS','Inventory follow-up & procurement coordination','Bill tracking & payment coordination','Refund & loss tracking with recovery reporting','CCTV review & incident investigation','Legal & insurance coordination support','Escalation management — we push until resolved','Multi-location reporting & executive summaries','New store setup & franchise paperwork tracking','Dedicated account manager','Near real-time priority response'].map(f=><li key={f}>{f}</li>)}
            </ul>
            <button className="pbtn l" onClick={() => handlePackageClick('Premium — $499/mo')}>Get Started</button>
          </div>
        </div>
        <div className="addons rv">
          <div className="addon-lbl">Optional Add-Ons</div>
          <div className="addon-flex">
            <div className="addon"><span>Extra social media content</span><span className="addon-v">$100–$200</span></div>
            <div className="addon"><span>24/7 coverage</span><span className="addon-v">$150+</span></div>
            <div className="addon"><span>Priority escalation — 1hr response</span><span className="addon-v">$100</span></div>
          </div>
        </div>
      </section>

      <div className="gline" />

      {/* ── REVENUE STATS ── */}
      <section className="rev-bg">
        <div className="tc rv">
          <span className="lbl">Revenue Reality</span>
          <h2 className="stitle">Revenue Lost Is Revenue You Never See</h2>
          <p className="ssub">These aren't estimates — they are documented patterns across U.S. restaurant operations. Your store faces every single one of them.</p>
        </div>
        <div className="rev-grid rv">
          {[['📦','2–10%','of annual revenue lost to inventory waste and shrinkage'],['📱','3–15%','of online order revenue lost to platform downtime'],['⏱️','2–8%','of payroll wasted on labor inefficiency and time fraud'],['💳','1–5%','of revenue leaked through unmonitored POS discrepancies'],['💸','0.5–3%','of revenue lost to fraudulent refund abuse on delivery apps'],['⭐','30','customers lost for every single unanswered negative review']].map(([ico,val,desc])=>(
            <div className="rc" key={val as string}><span className="rv-ico">{ico}</span><span className="rv-val">{val}</span><p>{desc}</p></div>
          ))}
        </div>
        <div className="rev-close rv">
          <p><strong>Increasing sales by 10% is hard.</strong><br />Stopping 10% leakage is faster — and BringIT is built exactly to do that.</p>
        </div>
      </section>

      <div className="gline" />

      {/* ── TESTIMONIALS ── */}
      <section>
        <div className="tc rv">
          <span className="lbl">Testimonials</span>
          <h2 className="stitle">What Restaurant Owners Say</h2>
          <p className="ssub">Real operators. Real results. Real peace of mind.</p>
        </div>
        <div className="testi-grid rv">
          {[
            ['M','Marcus T.','Franchise Owner — 2 Locations, Florida','"I had no idea how much was slipping through the cracks until BringIT started monitoring my store. Within the first month, they caught a cash discrepancy I never would have seen on my own. The weekly summaries alone changed how I run my business."'],
            ['R','Rachel D.','Fast Casual Owner — Chicago, IL','"My DoorDash and UberEats were going offline during lunch rush and I didn\'t even know. BringIT fixed that in the first week. They also handle all my Google reviews now. I don\'t have to think about it anymore — it just gets done."'],
            ['J','James K.','Multi-Location Operator — Texas','"Running 4 stores was becoming impossible. BringIT gives me visibility across all of them without me having to be there. The escalation system is the best part — if something is wrong, I hear about it immediately instead of finding out weeks later."'],
          ].map(([initial, name, role, text]) => (
            <div className="tcard" key={name as string}>
              <div className="tcard-stars">★★★★★</div>
              <p className="tcard-text">{text}</p>
              <div className="tcard-author">
                <div className="tcard-avatar">{initial}</div>
                <div><div className="tcard-name">{name}</div><div className="tcard-role">{role}</div></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="gline" />

      {/* ── ABOUT ── */}
      <section className="about-bg" id="about">
        <div className="about-wrap">
          <div className="rv">
            <span className="lbl">The Founder</span>
            <h2 className="stitle">Meet the Founder</h2>
            <p className="ssub" style={{ maxWidth: '100%' }}>Fahad Siddique built BringIT from 5+ years of working daily inside real U.S. restaurant operations — not from theory, but from personally handling the exact problems that cost restaurant owners money every single day.</p>
            <div className="about-q">
              <p>I didn't need to research restaurant pain points. I've chased the missed follow-ups, uncovered hidden losses, caught employees stealing from the register, recovered delivery platforms during rush hours, handled legal cases, and tracked financial discrepancies. BringIT is simply that real experience turned into a structured system for owners who deserve better control.</p>
              <footer>— Fahad Siddique, Founder &amp; Operations Director, BringIT</footer>
            </div>
          </div>
          <div className="about-cards rv">
            {[
              ['🏪','6 Major Franchise Brands','Cold Stone Creamery, Dunkin\', Baskin Robbins, Charleys, Domino\'s, Papa John\'s — real daily operational experience across all of them for 5+ years.'],
              ['🔍','Real Problems Solved','Caught employees stealing cash and food, prevented platform outages, won a customer legal case, recovered unpaid OLO services, identified financial discrepancies owners couldn\'t see.'],
              ['📊','Full Back-Office Experience','Social media management, POS report analysis, review management, staff supervision, accounting support, vendor coordination — done daily across multiple brands simultaneously.'],
              ['🎓','BBA in Marketing — North South University','Academic foundation in business strategy combined with years of practical, field-level operational experience inside real U.S. restaurant stores.'],
            ].map(([ico, title, desc]) => (
              <div className="acard" key={title as string}>
                <div className="aico">{ico}</div>
                <div><h4>{title}</h4><p>{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gline" />

      {/* ── FAQ ── */}
      <section>
        <div className="tc rv" style={{ marginBottom: '3rem' }}>
          <span className="lbl">FAQ</span>
          <h2 className="stitle">Common Questions</h2>
          <p className="ssub">Straight answers for restaurant owners who want to know exactly what they're getting.</p>
        </div>
        <div className="faq-list rv">
          {[
            ['Are you replacing my manager?','No. BringIT works behind the scenes to support your existing team — not replace them. We handle the tasks your manager doesn\'t have time for, and we help hold everyone accountable so your manager can focus on running the store properly.'],
            ['Do you work with franchises?','Yes — and we understand franchise operations specifically. We have hands-on experience working with Cold Stone Creamery, Dunkin\', Baskin Robbins, Charleys, Domino\'s, and Papa John\'s. We understand franchise compliance requirements and the unique pressures franchise operators face.'],
            ['Can you support multiple locations?','Absolutely. Our Premium package is built specifically for multi-store operators. We offer cross-location reporting, executive summaries, comparative performance tracking, and dedicated account management so you have one clear picture across all your stores.'],
            ['Do you handle delivery app disputes?','Yes. False refund claims and fraudulent order disputes on UberEats, DoorDash, and Grubhub are a significant source of revenue leakage. We dispute these claims on your behalf up to the platform limits, track recovery weekly, and report exactly how much money was saved.'],
            ['Is this only for large restaurants?','Not at all. Our Starter package at $149/month is designed for single-store owners who need affordable daily support. The problems we solve — missed reviews, forgotten follow-ups, platform outages — affect every size of operation.'],
            ['Who has access to my store systems?','Access is handled carefully and personally by Fahad Siddique, the BringIT founder. Sensitive credentials are managed directly and never shared without your explicit approval.'],
          ].map(([q, a], i) => (
            <div className={`faq-item${openFaq === i ? ' open' : ''}`} key={q as string}>
              <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{q}</span><div className="faq-arrow">▾</div>
              </button>
              <div className="faq-body"><div className="faq-a">{a}</div></div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="fcta-bg">
        <div className="fcta-box rv">
          <span className="lbl">Get Started</span>
          <h2>Your Store Runs Better With BringIT</h2>
          <p>Let us handle the back office while you focus on growth. No long contracts, no complicated setup — just consistent, professional operational support from day one.</p>
          <a href="#contact" className="btn-g">Book Free Strategy Call</a>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ background: 'var(--dark)' }}>
        <div className="contact-grid rv">
          <div className="contact-info">
            <span className="lbl">Contact</span>
            <h3>Let's Talk About Your Stores</h3>
            <p>Book a free 15-minute strategy call. We'll identify your biggest operational gaps and show you exactly how BringIT can protect your revenue — no pressure, no commitment.</p>
            <div className="cinfo-item"><div className="cinfo-ico">💬</div><a href={waLink("Hi, I'd like to learn more about BringIT")} target="_blank" rel="noreferrer">WhatsApp: +880 1351-656330</a></div>
            <div className="cinfo-item"><div className="cinfo-ico">✉️</div><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div>
            <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--dark2)', border: '1px solid var(--border)', borderRadius: '14px' }}>
              <p style={{ fontSize: '.88rem', color: 'var(--muted)', lineHeight: '1.75' }}>📍 <strong style={{ color: 'var(--soft)' }}>Response Time:</strong> We reply within 24 hours to all inquiries. WhatsApp is the fastest way to reach us for urgent questions.</p>
            </div>
          </div>
          <div className="cform">
            {formSent ? (
              <div className="form-success" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✅</div>
                <p style={{ fontWeight: 600, marginBottom: '.5rem', color: 'var(--text)' }}>Message Sent!</p>
                <p style={{ fontSize: '.88rem', color: 'var(--muted)' }}>We'll reach out within 24 hours. You can also WhatsApp us for a faster response.</p>
              </div>
            ) : (
              <form className="cform-grid" onSubmit={handleContactSubmit}>
                <div className="crow">
                  <input name="name" type="text" placeholder="Your name" required />
                  <input name="business" type="text" placeholder="Business name" />
                </div>
                <div className="crow">
                  <input name="email" type="email" placeholder="Email address" required />
                  <input name="whatsapp" type="tel" placeholder="WhatsApp number" />
                </div>
                <select name="locations">
                  <option value="" disabled>Number of locations</option>
                  <option>1 location</option>
                  <option>2–3 locations</option>
                  <option>4–6 locations</option>
                  <option>7+ locations</option>
                </select>
                <textarea name="message" placeholder="What's your biggest operational challenge right now?" />
                <button type="submit" className="fsub" disabled={formSending}>
                  {formSending ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <img src="/LOGO_1_1_no_BG.png" alt="BringIT" style={{ height: '28px' }}
          onError={(e) => { e.currentTarget.style.display = 'none' }} />
        <p className="fcopy">© 2025 BringIT. Remote Operations &amp; Revenue Control for Restaurants. All rights reserved.</p>
        <div className="footer-links">
          <a onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Home</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>

      {/* ── AUTH MODAL ── */}
      {showAuth && (
        <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setShowAuth(false) }}>
          <div className="modal-box">
            <button className="modal-close" onClick={() => setShowAuth(false)}>✕</button>
            <h2 className="modal-title">Welcome <em>Partner</em></h2>
            <p className="modal-sub">Sign in to get started with BringIT. Takes 10 seconds.</p>
            {selectedPkg && <div className="modal-pkg-badge">Selected: {selectedPkg}</div>}
            {authError && <div className="auth-error">{authError}</div>}
            <button className="auth-btn" onClick={signInGoogle}>
              <svg viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Continue with Google
            </button>
            <button className="auth-btn" onClick={signInMicrosoft}>
              <svg viewBox="0 0 24 24" fill="none"><rect x="1" y="1" width="10" height="10" fill="#F25022"/><rect x="13" y="1" width="10" height="10" fill="#7FBA00"/><rect x="1" y="13" width="10" height="10" fill="#00A4EF"/><rect x="13" y="13" width="10" height="10" fill="#FFB900"/></svg>
              Continue with Microsoft (Hotmail / Outlook)
            </button>
            <p className="auth-note">By signing in, you agree to our terms. Apple and Yahoo sign-in available on request via WhatsApp.</p>
          </div>
        </div>
      )}

      {/* ── PACKAGE CONTACT MODAL (shown after auth) ── */}
      {showPkgContact && user && (
        <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setShowPkgContact(false) }}>
          <div className="modal-box">
            <button className="modal-close" onClick={() => setShowPkgContact(false)}>✕</button>
            <h2 className="modal-title">Let's Get <em>Started</em></h2>
            <p className="modal-sub">You've selected the <strong style={{ color: 'var(--text)' }}>{selectedPkg}</strong> package. Choose how you'd like to connect with us:</p>
            <div className="contact-modal-options">
              <a
                className="contact-option"
                href={waLink(`Hi! I'm interested in the ${selectedPkg} package for my restaurant. Can we talk?`)}
                target="_blank" rel="noreferrer"
              >
                <div className="co-icon wa">💬</div>
                <div>
                  <div className="co-label">WhatsApp Us</div>
                  <div className="co-sub">Fastest response — usually within a few hours</div>
                </div>
                <span style={{ marginLeft: 'auto', color: 'var(--muted)', fontSize: '18px' }}>→</span>
              </a>
              <a
                className="contact-option"
                href={mailLink(`BringIT Package Inquiry — ${selectedPkg}`)}
              >
                <div className="co-icon mail">✉️</div>
                <div>
                  <div className="co-label">Send an Email</div>
                  <div className="co-sub">We reply within 24 hours — {CONTACT_EMAIL}</div>
                </div>
                <span style={{ marginLeft: 'auto', color: 'var(--muted)', fontSize: '18px' }}>→</span>
              </a>
            </div>
            <p className="logged-as">Signed in as {user.displayName || user.email}</p>
          </div>
        </div>
      )}
    </>
  )
}
