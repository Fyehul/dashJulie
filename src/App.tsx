import { useState, useEffect, useRef } from "react";
import "./App.css";
import JuliePhoto from "./assets/img/Julie.png";

/* ── Constants ── */
const WA_NUM  = "5579998891984";
const WA_MSG  = encodeURIComponent("Olá, Julie! Vim pelo site e gostaria de saber mais sobre seus imóveis.");
const IG_URL  = "https://www.instagram.com/juliemenezes_corretora/";
const TK_URL  = "https://www.tiktok.com/@corretorajuliemenezes";
const WA_LINK = `https://wa.me/${WA_NUM}?text=${WA_MSG}`;

/* ── Design tokens ── */
const G      = "#1C3829";
const SAGE   = "#4A7A5E";
const SAGE_L = "#8FB5A0";
const CREAM  = "#F8F3EC";
const GOLD   = "#C9A84C";
const DARK   = "#0F1F18";

/* ──────────────────────────────────────────
   SVG Icons
────────────────────────────────────────── */
const WhatsAppIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const IGIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TKIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.29 8.29 0 004.84 1.56V6.79a4.85 4.85 0 01-1.07-.1z"/>
  </svg>
);

/* ── Decorative leaf SVG ── */
const LeafSVG = ({ style }) => (
  <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
    <path d="M100 380 C100 380 10 280 10 180 C10 80 60 10 100 10 C140 10 190 80 190 180 C190 280 100 380 100 380Z" fill="currentColor" opacity="0.1"/>
    <path d="M100 380 L100 10" stroke="currentColor" strokeWidth="1.5" opacity="0.12"/>
    <path d="M100 150 C60 130 30 100 20 60"   stroke="currentColor" strokeWidth="1" opacity="0.09"/>
    <path d="M100 200 C140 180 170 150 180 110" stroke="currentColor" strokeWidth="1" opacity="0.09"/>
    <path d="M100 260 C65 240 48 208 44 172"   stroke="currentColor" strokeWidth="1" opacity="0.07"/>
    <path d="M100 310 C130 295 155 265 162 230" stroke="currentColor" strokeWidth="1" opacity="0.06"/>
  </svg>
);

/* ── Background decoration that fills the dark green sidebar areas ── */
const BackgroundDeco = () => (
  <div
    aria-hidden="true"
    style={{
      position: "fixed",
      inset: 0,
      pointerEvents: "none",
      zIndex: 0,
      overflow: "hidden",
    }}
  >
    {/* Left panel botanical */}
    <div style={{ position: "absolute", left: 0, top: "10%", width: "260px", color: SAGE_L, opacity: 0.18 }}>
      <LeafSVG style={{ width: "100%", height: "520px" }} />
    </div>
    <div style={{ position: "absolute", left: "20px", top: "55%", width: "160px", color: GOLD, opacity: 0.07 }}>
      <LeafSVG style={{ width: "100%", height: "320px" }} />
    </div>

    {/* Right panel botanical */}
    <div style={{ position: "absolute", right: 0, top: "5%", width: "240px", color: SAGE_L, opacity: 0.15, transform: "scaleX(-1)" }}>
      <LeafSVG style={{ width: "100%", height: "480px" }} />
    </div>
    <div style={{ position: "absolute", right: "24px", top: "60%", width: "140px", color: GOLD, opacity: 0.07, transform: "scaleX(-1)" }}>
      <LeafSVG style={{ width: "100%", height: "280px" }} />
    </div>

    {/* Geometric circles — left */}
    <svg style={{ position: "absolute", left: "10px", top: "38%", opacity: 0.1 }} width="180" height="180" viewBox="0 0 180 180" fill="none">
      <circle cx="90" cy="90" r="88" stroke={GOLD} strokeWidth="1"/>
      <circle cx="90" cy="90" r="60" stroke={SAGE_L} strokeWidth="0.8"/>
      <circle cx="90" cy="90" r="32" stroke={GOLD} strokeWidth="0.5"/>
    </svg>

    {/* Geometric circles — right */}
    <svg style={{ position: "absolute", right: "10px", top: "70%", opacity: 0.09 }} width="160" height="160" viewBox="0 0 160 160" fill="none">
      <circle cx="80" cy="80" r="78" stroke={SAGE_L} strokeWidth="1"/>
      <circle cx="80" cy="80" r="50" stroke={GOLD} strokeWidth="0.7"/>
    </svg>

    {/* Thin vertical line accents */}
    <div style={{ position: "absolute", left: "48px", top: "20%", width: "1px", height: "220px", background: `linear-gradient(to bottom, transparent, ${GOLD}30, transparent)` }}/>
    <div style={{ position: "absolute", right: "48px", top: "30%", width: "1px", height: "280px", background: `linear-gradient(to bottom, transparent, ${SAGE_L}30, transparent)` }}/>
  </div>
);

/* ──────────────────────────────────────────
   Hooks
────────────────────────────────────────── */
function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const fn = () => setY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return y;
}

function useInView(threshold = 0.12) {
  const ref     = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* Suave fade-up com delay configurável */
function FadeIn({ children, delay = 0, className = "", style: extraStyle = {} }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.8s cubic-bezier(.25,.46,.45,.94) ${delay}s,
                     transform 0.8s cubic-bezier(.25,.46,.45,.94) ${delay}s`,
        ...extraStyle,
      }}
    >
      {children}
    </div>
  );
}

/* ── Reusable Section Label ── */
const Label = ({ children, light = false }) => (
  <p style={{
    color:         light ? GOLD : SAGE,
    fontSize:      "11px",
    letterSpacing: "3.5px",
    textTransform: "uppercase",
    fontWeight:    700,
    marginBottom:  "18px",
    fontFamily:    "'Lato', sans-serif",
  }}>
    {children}
  </p>
);

/* ── Reusable Section Title ── */
const SectionTitle = ({ children, light = false, center = false }) => (
  <h2 style={{
    fontFamily:   "'Cormorant Garamond', serif",
    fontSize:     "clamp(34px, 5vw, 54px)",
    fontWeight:   300,
    lineHeight:   1.12,
    color:        light ? CREAM : G,
    textAlign:    center ? "center" : "left",
    marginBottom: "28px",
  }}>
    {children}
  </h2>
);

/* ──────────────────────────────────────────
   App
────────────────────────────────────────── */
export default function App() {
  const scrollY   = useScrollY();
  const navSolid  = scrollY > 60;

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>

      {/* ── Decorative background for side panels ── */}
      <BackgroundDeco />

      {/* ── Float WhatsApp ── */}
      <a href={WA_LINK} target="_blank" rel="noreferrer" className="float-wa" aria-label="Falar no WhatsApp">
        <WhatsAppIcon size={22} />
        <span className="wa-text">Falar agora</span>
      </a>

      {/* ════════════════════════════════════════
          NAVBAR — grid 3 colunas para centralizar
      ════════════════════════════════════════ */}
      <header
        style={{
          position:       "fixed",
          top:            0,
          left:           0,
          right:          0,
          zIndex:         200,
          height:         "72px",
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          padding:        "0 clamp(16px, 4vw, 48px)",
          background:     navSolid ? `${DARK}EE` : "transparent",
          backdropFilter: navSolid ? "blur(14px)" : "none",
          borderBottom:   navSolid ? "1px solid rgba(201,168,76,.15)" : "none",
          transition:     "background .4s, backdrop-filter .4s, border-color .4s",
        }}
      >
        {/* Inner container: 3 colunas simétricas */}
        <div
          className="nav-inner"
          style={{
            maxWidth:            "1200px",
            width:               "100%",
            display:             "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems:          "center",
            gap:                 "16px",
          }}
        >
          {/* Left — Logo */}
          <div>
            <span
              style={{
                fontFamily:    "'Cormorant Garamond', serif",
                color:         GOLD,
                fontSize:      "26px",
                fontWeight:    600,
                letterSpacing: "3px",
                cursor:        "default",
              }}
            >
              JM
            </span>
          </div>

          {/* Center — Nav links */}
          <nav className="nav-links-group" style={{ display: "flex", gap: "32px" }}>
            {[["#sobre","Sobre"],["#processo","Processo"],["#catalogo","Catálogo"],["#contato","Contato"]].map(
              ([href, label]) => (
                <a key={href} href={href} className="nav-a">{label}</a>
              )
            )}
          </nav>

          {/* Right — CTA (justified right) */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-nav-cta">
              Falar agora
            </a>
          </div>
        </div>
      </header>

      {/* ════════════════════════════════════════
          HERO
      ════════════════════════════════════════ */}
      <section
        style={{
          minHeight:      "100vh",
          background:     `linear-gradient(148deg, ${DARK} 0%, ${G} 55%, #2D5040 100%)`,
          display:        "flex",
          alignItems:     "center",
          padding:        "100px clamp(20px, 6vw, 80px) 80px",
          position:       "relative",
          overflow:       "hidden",
        }}
      >
        {/* Botanical overlay */}
        <div style={{ position: "absolute", right: "-40px", top: 0, bottom: 0, width: "46%", color: SAGE_L, pointerEvents: "none" }}>
          <LeafSVG style={{ width: "100%", height: "100%", position: "absolute", top: 0, right: 0 }} />
        </div>
        <div style={{ position: "absolute", bottom: "-60px", left: "8%", width: "160px", height: "280px", color: GOLD, pointerEvents: "none", opacity: 0.07 }}>
          <LeafSVG style={{ width: "100%", height: "100%" }} />
        </div>
        {/* Radial glow */}
        <div style={{ position: "absolute", top: "22%", right: "28%", width: "420px", height: "420px", borderRadius: "50%", background: `radial-gradient(circle, ${SAGE}1A 0%, transparent 70%)`, pointerEvents: "none" }} />

        {/* Grid content */}
        <div
          className="hero-grid"
          style={{
            maxWidth:            "1200px",
            width:               "100%",
            margin:              "0 auto",
            display:             "grid",
            gridTemplateColumns: "1fr 420px",
            gap:                 "64px",
            alignItems:          "center",
            position:            "relative",
            zIndex:              1,
          }}
        >
          {/* Text */}
          <div>
            <FadeIn>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
                <div style={{ width: "32px", height: "1.5px", background: GOLD }} />
                <Label light>Julie Menezes · Corretora de Imóveis · Sergipe</Label>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1
                style={{
                  fontFamily:   "'Cormorant Garamond', serif",
                  fontSize:     "clamp(46px, 7vw, 74px)",
                  fontWeight:   300,
                  lineHeight:   1.06,
                  color:        CREAM,
                  marginBottom: "28px",
                }}
              >
                Mais que<br />
                vender imóveis—<br />
                <em style={{ color: GOLD, fontStyle: "italic" }}>eu realizo sonhos.</em>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p style={{ color: "rgba(248,243,236,.72)", fontSize: "16px", lineHeight: 1.9, maxWidth: "500px", marginBottom: "48px", fontWeight: 300 }}>
                Perita Avaliadora com Pós em Direito Imobiliário. Entrego confiança, ética e
                credibilidade em cada negociação — do primeiro contato até a entrega das chaves.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa">
                  <WhatsAppIcon size={20} />
                  Falar no WhatsApp
                </a>
                <a href="#catalogo" className="btn-outline">Ver catálogo →</a>
              </div>
            </FadeIn>
          </div>

          {/* Photo */}
          <div className="hero-photo-wrap" style={{ display: "flex", justifyContent: "center" }}>
            <FadeIn delay={0.15}>
              <div style={{ position: "relative" }}>
                <div
                  className="hero-photo-frame"
                  style={{
                    width:        "360px",
                    height:       "460px",
                    borderRadius: "180px 180px 180px 48px",
                    border:       `2px solid ${GOLD}35`,
                    overflow:     "hidden",
                    background:   `linear-gradient(160deg, ${SAGE}50 0%, ${G}80 100%)`,
                  }}
                >
                  <img
                    src={JuliePhoto}
                    alt="Julie Menezes — Corretora de Imóveis"
                    className="hero-photo-img"
                  />
                </div>

                {/* Badge */}
                <div
                  className="hero-badge"
                  style={{
                    position:    "absolute",
                    bottom:      "40px",
                    left:        "-32px",
                    background:  GOLD,
                    color:       "#fff",
                    padding:     "14px 22px",
                    borderRadius:"14px",
                    boxShadow:   `0 8px 32px ${GOLD}55`,
                  }}
                >
                  <p className="hero-badge-num" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "28px", fontWeight: 600, lineHeight: 1 }}>+14</p>
                  <p className="hero-badge-label" style={{ fontSize: "10px", letterSpacing: "1.5px", fontWeight: 700, opacity: 0.85 }}>ANOS DE EXPERIÊNCIA</p>
                </div>

                {/* Decorative rings */}
                <div style={{ position: "absolute", top: "-16px", right: "-16px", width: "80px", height: "80px", borderRadius: "50%", border: `1.5px solid ${GOLD}40` }} />
                <div style={{ position: "absolute", top: "20px", right: "20px", width: "28px", height: "28px", borderRadius: "50%", background: `${GOLD}22` }} />
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position:  "absolute",
            bottom:    "32px",
            left:      "50%",
            transform: "translateX(-50%)",
            display:   "flex",
            flexDirection: "column",
            alignItems: "center",
            gap:       "8px",
            color:     "rgba(248,243,236,.3)",
            fontSize:  "10px",
            letterSpacing: "2px",
          }}
        >
          <span>SCROLL</span>
          <div style={{ width: "1px", height: "40px", background: `linear-gradient(${GOLD}55, transparent)` }} />
        </div>
      </section>

      {/* ════════════════════════════════════════
          STATS BAR
      ════════════════════════════════════════ */}
      <section style={{ background: G, padding: "52px clamp(20px,5vw,60px)", position: "relative", zIndex: 1 }}>
        <div
          className="stat-grid"
          style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "24px", textAlign: "center" }}
        >
          {[
            ["14+","anos de experiência"],
            ["8,5K","seguidores no Instagram"],
            ["365","posts publicados"],
            ["100%","compromisso com você"],
          ].map(([n, l]) => (
            <FadeIn key={l}>
              <p className="stat-n">{n}</p>
              <p style={{ color: "rgba(248,243,236,.55)", fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", marginTop: "8px" }}>{l}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════
          SOBRE
      ════════════════════════════════════════ */}
      <section id="sobre" style={{ padding: "100px clamp(20px,5vw,80px)", background: "#F8F3EC", position: "relative", zIndex: 1 }}>
        <div
          className="about-grid"
          style={{ maxWidth: "1150px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}
        >
          <FadeIn>
            <Label>Sobre Julie Menezes</Label>
            <SectionTitle>
              Cada família merece a{" "}
              <em style={{ color: SAGE }}>escolha certa.</em>
            </SectionTitle>
            <p style={{ color: "#5a5a5a", lineHeight: 1.95, fontSize: "15px", marginBottom: "18px", fontWeight: 300 }}>
              Mais do que vender imóveis, eu caminho ao seu lado em cada etapa. Ouço com profundidade o
              que sua família realmente precisa e oriento com clareza toda a parte documental e análise de crédito.
            </p>
            <p style={{ color: "#5a5a5a", lineHeight: 1.95, fontSize: "15px", marginBottom: "36px", fontWeight: 300 }}>
              Sou transparente até para dizer quando não é a hora certa ou a melhor escolha — porque acredito
              que a <strong style={{ color: G, fontWeight: 700 }}>confiança</strong> é o maior patrimônio que existe.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {["Perita Avaliadora","Pós em Direito Imobiliário","Desde 2010","Barra dos Coqueiros, SE"].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </FadeIn>

          <div className="svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {[
              { icon: "🏡", t: "Imóveis de Alto Padrão",  d: "Especialista em propriedades premium em Sergipe" },
              { icon: "📋", t: "Assessoria Documental",    d: "Orientação em crédito e toda a documentação" },
              { icon: "🔑", t: "Do início ao fim",         d: "Acompanho até a entrega das chaves com você" },
              { icon: "🤝", t: "Ética e Transparência",    d: "Clareza em cada etapa, mesmo nas decisões difíceis" },
            ].map((c, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="card-svc">
                  <span style={{ fontSize: "30px", display: "block", marginBottom: "14px" }}>{c.icon}</span>
                  <h3 style={{ color: G, fontSize: "14px", fontWeight: 700, marginBottom: "8px" }}>{c.t}</h3>
                  <p style={{ color: "#888", fontSize: "13px", lineHeight: 1.65, fontWeight: 300 }}>{c.d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PROCESSO
      ════════════════════════════════════════ */}
      <section id="processo" style={{ padding: "100px clamp(20px,5vw,80px)", background: "#FFFDF9", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <Label>Como funciona</Label>
              <SectionTitle center>
                Meu processo,{" "}
                <em style={{ color: SAGE }}>passo a passo</em>
              </SectionTitle>
            </div>
          </FadeIn>

          <div className="step-grid svc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}>
            {[
              ["01","Entendo sua família",     "Ouço com profundidade o que você realmente precisa, sem pressa nem pressão."],
              ["02","Busco o imóvel ideal",    "Filtro e apresento apenas os imóveis que fazem sentido para o seu momento."],
              ["03","Oriento a documentação",  "Assessoria completa em análise de crédito e toda a parte burocrática."],
              ["04","Sou honesta com você",    "Transparente até para dizer quando não é o momento ou a melhor escolha."],
              ["05","Garanto sua segurança",   "Acompanho todo o processo: da análise do imóvel à entrega das chaves."],
              ["06","Celebro com você 🏠",     "Cada conquista é sentida de verdade. Faço parte da sua história."],
            ].map(([n, t, d], i) => (
              <FadeIn key={n} delay={i * 0.07}>
                <div className="card-svc">
                  <p style={{ fontFamily: "'Cormorant Garamond',serif", color: GOLD, fontSize: "44px", fontWeight: 600, lineHeight: 1, marginBottom: "14px", opacity: 0.7 }}>{n}</p>
                  <h3 style={{ color: G, fontSize: "16px", fontWeight: 700, marginBottom: "10px" }}>{t}</h3>
                  <p style={{ color: "#777", fontSize: "14px", lineHeight: 1.75, fontWeight: 300 }}>{d}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CATÁLOGO SOCIAL
      ════════════════════════════════════════ */}
      <section
        id="catalogo"
        style={{
          padding:    "100px clamp(20px,5vw,80px)",
          background: `linear-gradient(160deg, ${DARK} 0%, ${G} 100%)`,
          position:   "relative",
          overflow:   "hidden",
          zIndex:     1,
        }}
      >
        {/* Botanical deco inside section */}
        <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "380px", height: "580px", color: SAGE_L, opacity: 0.06, pointerEvents: "none", transform: "scaleX(-1)" }}>
          <LeafSVG style={{ width: "100%", height: "100%" }} />
        </div>

        <div style={{ maxWidth: "1150px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <Label light>Catálogo digital</Label>
              <SectionTitle light center>
                Siga e <em style={{ color: GOLD }}>inspire-se</em>
              </SectionTitle>
              <p style={{ color: "rgba(248,243,236,.6)", fontSize: "15px", fontWeight: 300, maxWidth: "520px", margin: "0 auto" }}>
                Imóveis disponíveis, clientes realizados e conteúdo exclusivo sobre o mercado imobiliário sergipano.
              </p>
            </div>
          </FadeIn>

          <div className="social-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }}>

            {/* Instagram */}
            <FadeIn delay={0.06}>
              <a href={IG_URL} target="_blank" rel="noreferrer" className="card-social">
                <div style={{
                  background: "linear-gradient(145deg, #833AB4 0%, #FD1D1D 50%, #FCAF45 100%)",
                  padding: "44px 38px", color: "#fff", minHeight: "300px",
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ background: "rgba(255,255,255,.18)", width: "52px", height: "52px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <IGIcon size={26} />
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: "16px", marginBottom: "2px" }}>@juliemenezes_corretora</p>
                      <p style={{ fontSize: "12px", opacity: 0.8 }}>8.584 seguidores · 365 posts</p>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(20px,3vw,26px)", fontWeight: 300, lineHeight: 1.45, marginBottom: "28px" }}>
                      Imóveis de alto padrão, entregues com <strong>confiança e ética</strong> em Sergipe.
                    </p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,.2)", backdropFilter: "blur(8px)", padding: "11px 22px", borderRadius: "60px", fontSize: "12px", fontWeight: 700, letterSpacing: "1px" }}>
                      VER PERFIL →
                    </span>
                  </div>
                </div>
              </a>
            </FadeIn>

            {/* TikTok */}
            <FadeIn delay={0.14}>
              <a href={TK_URL} target="_blank" rel="noreferrer" className="card-social">
                <div style={{
                  background: "linear-gradient(145deg, #010101 0%, #1a1a2e 100%)",
                  padding: "44px 38px", color: "#fff", minHeight: "300px",
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                  border: "1px solid rgba(105,201,208,.15)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ background: "rgba(105,201,208,.15)", width: "52px", height: "52px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <TKIcon size={26} />
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: "16px", marginBottom: "2px" }}>@corretorajuliemenezes</p>
                      <p style={{ fontSize: "12px", opacity: 0.6 }}>Julie Menezes | Corretora</p>
                    </div>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(20px,3vw,26px)", fontWeight: 300, lineHeight: 1.45, marginBottom: "28px" }}>
                      Conteúdo exclusivo sobre <strong style={{ color: "#69C9D0" }}>mercado imobiliário</strong> e imóveis em Sergipe.
                    </p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(105,201,208,.15)", color: "#69C9D0", padding: "11px 22px", borderRadius: "60px", fontSize: "12px", fontWeight: 700, letterSpacing: "1px" }}>
                      VER NO TIKTOK →
                    </span>
                  </div>
                </div>
              </a>
            </FadeIn>
          </div>

          {/* Badges */}
          <FadeIn delay={0.2}>
            <div style={{ marginTop: "40px", display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              {[["✓","Verificado no Instagram"],["🏡","Imóveis em Sergipe"],["⭐","Perita Avaliadora"],["🔑","Desde 2010"]].map(([ic, t]) => (
                <div
                  key={t}
                  style={{
                    background: "rgba(201,168,76,.1)",
                    border:     "1px solid rgba(201,168,76,.25)",
                    color:       GOLD,
                    padding:    "10px 20px",
                    borderRadius: "60px",
                    fontSize:   "12px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    display:    "flex",
                    alignItems: "center",
                    gap:        "8px",
                  }}
                >
                  <span>{ic}</span>{t}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ════════════════════════════════════════
          DEPOIMENTOS
      ════════════════════════════════════════ */}
      <section style={{ padding: "100px clamp(20px,5vw,80px)", background: "#F8F3EC", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <Label>Clientes realizados</Label>
              <SectionTitle center>
                O que dizem sobre <em style={{ color: SAGE }}>Julie</em>
              </SectionTitle>
            </div>
          </FadeIn>

          <div className="quote-grid svc-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}>
            {[
              ["Yasmin",        "Sem dúvidas, a melhor corretora do Brasil! Profissional, ética e extremamente dedicada."],
              ["Antônio César", "Excelente profissional! Nos acompanhou com cuidado e atenção em cada detalhe do processo."],
              ["Família Santos","Julie foi além de uma simples corretora. Realizou nosso sonho com discrição e respeito."],
            ].map(([a, t], i) => (
              <FadeIn key={a} delay={i * 0.08}>
                <div className="quote-card">
                  <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "52px", color: GOLD, lineHeight: 0.8, marginBottom: "16px", opacity: 0.55 }}>"</p>
                  <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.85, marginBottom: "24px", fontStyle: "italic", fontWeight: 300 }}>{t}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: `${SAGE}25`, display: "flex", alignItems: "center", justifyContent: "center", color: SAGE, fontSize: "14px", fontWeight: 700 }}>
                      {a[0]}
                    </div>
                    <p style={{ color: G, fontWeight: 700, fontSize: "13px" }}>{a}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA CONTATO
      ════════════════════════════════════════ */}
      <section
        id="contato"
        style={{
          background: `linear-gradient(145deg, ${G} 0%, ${DARK} 100%)`,
          padding:    "110px clamp(20px,5vw,80px)",
          textAlign:  "center",
          position:   "relative",
          overflow:   "hidden",
          zIndex:     1,
        }}
      >
        {/* Concentric rings */}
        {[300, 500, 700].map((s, i) => (
          <div
            key={i}
            style={{
              position:    "absolute",
              top:         "50%",
              left:        "50%",
              transform:   "translate(-50%,-50%)",
              width:       `${s}px`,
              height:      `${s}px`,
              borderRadius:"50%",
              border:      `1px solid rgba(201,168,76,${0.08 - i * 0.02})`,
              pointerEvents: "none",
            }}
          />
        ))}

        <FadeIn>
          <div style={{ position: "relative", zIndex: 1 }}>
            <Label light>Vamos conversar?</Label>
            <h2 style={{
              fontFamily:   "'Cormorant Garamond',serif",
              fontSize:     "clamp(38px,6vw,62px)",
              fontWeight:   300,
              lineHeight:   1.15,
              color:        CREAM,
              marginBottom: "24px",
            }}>
              Pronto para encontrar<br />
              o imóvel <em style={{ color: GOLD }}>dos seus sonhos?</em>
            </h2>
            <p style={{ color: "rgba(248,243,236,.6)", fontSize: "16px", fontWeight: 300, maxWidth: "500px", margin: "0 auto 48px", lineHeight: 1.8 }}>
              Entre em contato agora mesmo. Julie está pronta para ouvir você e encontrar a solução perfeita para a sua família.
            </p>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="btn-wa" style={{ fontSize: "17px", padding: "20px 46px" }}>
              <WhatsAppIcon size={24} />
              Falar com Julie agora
            </a>
            <p style={{ color: "rgba(248,243,236,.32)", fontSize: "13px", marginTop: "20px", letterSpacing: "1px" }}>
              +55 (79) 9 9889-1984
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════ */}
      <footer style={{ background: "#0A130D", padding: "52px clamp(20px,5vw,60px)", textAlign: "center", position: "relative", zIndex: 1 }}>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", color: GOLD, fontSize: "32px", fontWeight: 600, letterSpacing: "4px", marginBottom: "6px" }}>JM</p>
        <p style={{ color: "rgba(255,255,255,.35)", fontSize: "11px", letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: "28px" }}>
          Julie Menezes · Corretora de Imóveis
        </p>

        <div style={{ display: "flex", gap: "0", justifyContent: "center", flexWrap: "wrap", marginBottom: "28px" }}>
          {[[IG_URL,"Instagram"],[TK_URL,"TikTok"],[WA_LINK,"WhatsApp"]].map(([u, l]) => (
            <a
              key={l}
              href={u}
              target="_blank"
              rel="noreferrer"
              style={{
                color:         "rgba(255,255,255,.4)",
                fontSize:      "12px",
                textDecoration:"none",
                letterSpacing: "1.5px",
                padding:       "0 18px",
                borderRight:   "1px solid rgba(255,255,255,.1)",
                transition:    "color .2s",
              }}
            >
              {l}
            </a>
          ))}
        </div>

        <p style={{ color: "rgba(255,255,255,.18)", fontSize: "11px" }}>
          © 2025 Julie Menezes · Corretora de Imóveis · Sergipe, Brasil
        </p>

        {/* Dev credit */}
        <p className="footer-dev">
          Desenvolvido por{" "}
          <a
            href="https://heverecstudiocode.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-dev-link"
          >
            Heverec Studio Code
          </a>
        </p>
      </footer>

    </div>
  );
}