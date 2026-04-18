import { useState } from "react";

export default function Home() {
  const [hovered, setHovered] = useState(null);

  const services = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .84h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.09a16 16 0 006.29 6.29l1.42-1.42a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
      title: "Social Media Management",
      desc: "End-to-end curation of your digital presence. From content calendars to community engagement, built on aesthetic consistency.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      ),
      title: "Video Editing",
      desc: "Cinematic, rhythm-driven editing for short-form platforms. Transforming raw footage into compelling visual narratives.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      title: "Strategy & Direction",
      desc: "Data-informed creative direction. We analyze trends to build a sustainable roadmap for organic growth.",
    },
  ];

  const getCardBg = (i) => hovered === i ? "#d4e8cc" : "#ffffff";
  const getIconBg = (i) => hovered === i ? "#b8d9af" : "#d9ecd4";

  return (
    <main style={{ background: "#f5f2eb", minHeight: "100vh", fontFamily: "Georgia, serif", display: "flex", flexDirection: "column" }}>

      {/* NAV */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "20px 48px", background: "#f5f2eb", position: "sticky", top: 0, zIndex: 10,
      }}>
        <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: "-0.3px" }}>Chiku Creatives</span>
        <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
          {["Work", "Services", "About", "Contact"].map(item => (
            <a key={item} href="#" style={{ fontSize: 15, color: "#3a3a3a", textDecoration: "none", fontFamily: "system-ui, sans-serif" }}>{item}</a>
          ))}
          <button style={{
            background: "#4a6741", color: "#fff", border: "none", borderRadius: 6,
            padding: "10px 22px", fontSize: 15, cursor: "pointer", fontFamily: "system-ui, sans-serif"
          }}>Inquire</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "60px 48px 80px", maxWidth: 1300, margin: "0 auto", gap: 48, width: "100%", boxSizing: "border-box"
      }}>
        <div style={{ flex: "0 0 50%", maxWidth: 580 }}>
          <p style={{
            fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase",
            color: "#5a5a5a", fontFamily: "system-ui, sans-serif", marginBottom: 20
          }}>Digital Curation & Strategy</p>
          <h1 style={{
            fontSize: 64, fontWeight: 700, lineHeight: 1.1, color: "#1a1a1a",
            margin: "0 0 28px", letterSpacing: "-1px"
          }}>
            Elevating brands through intentional design.
          </h1>
          <p style={{
            fontSize: 16, lineHeight: 1.7, color: "#5a5a5a",
            fontFamily: "system-ui, sans-serif", marginBottom: 36, maxWidth: 480
          }}>
            We craft bespoke social media strategies and cinematic video edits
            that transform digital noise into a curated, high-end gallery
            experience for your audience.
          </p>
          <button style={{
            background: "#4a6741", color: "#fff", border: "none", borderRadius: 6,
            padding: "14px 28px", fontSize: 16, cursor: "pointer", fontFamily: "system-ui, sans-serif"
          }}>View My Work →</button>
        </div>

        <div style={{ flex: 1 }}>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfaN8VZuqX6pB3ucG6ytyXGSCrdhiCGV-ZVbWe_p_5WDuxlpXQth7r2MtIBP-uGcHzVJv-dCESwRGU1K7uOUrV5-ONO6IZUequdS_YTyEUE8gBMiL5oFemwqCI57Ha-QVCTybcde34Gr1bJNT97YFFV2yBvPDDptfJxqzT69C3lnKit3BzN0OfrXmWnrYeZDg0sml1elfKmlhn9vzvsgBeQH5wRbwh8pU-ZcT-rHgRtC_SPmYUwAjF78w1mzpQDRFUxfgMzQcZ5_2Z"
            alt="Designer at work"
            style={{ width: "100%", borderRadius: 12, display: "block", objectFit: "cover" }}
          />
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: "#eeeae0", padding: "80px 48px 120px", flex: 1 }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <p style={{
            fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase",
            color: "#5a5a5a", fontFamily: "system-ui, sans-serif", marginBottom: 16
          }}>Core Offerings</p>
          <h2 style={{
            fontSize: 48, fontWeight: 700, color: "#1a1a1a",
            margin: "0 0 56px", letterSpacing: "-0.5px"
          }}>Services at a Glance.</h2>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24, alignItems: "start",
          }}>
            {services.map((svc, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: getCardBg(i),
                  borderRadius: 16,
                  padding: "40px 36px 48px",
                  minHeight: 300,
                  marginTop: i === 1 ? 48 : 0,
                  boxSizing: "border-box",
                  transition: "background 0.3s ease",
                  cursor: "default",
                }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: "50%",
                  background: getIconBg(i),
                  color: "#4a6741",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 28,
                  transition: "background 0.3s ease",
                }}>
                  {svc.icon}
                </div>
                <h3 style={{
                  fontSize: 20, fontWeight: 700, color: "#1a1a1a",
                  margin: "0 0 16px", fontFamily: "Georgia, serif"
                }}>{svc.title}</h3>
                <p style={{
                  fontSize: 15, lineHeight: 1.7, color: "#5a5a5a",
                  fontFamily: "system-ui, sans-serif", margin: 0
                }}>{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#eeeae0",
        padding: "48px 48px",
      }}>
        <div style={{
          maxWidth: 1300, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 16
        }}>
          <span style={{ fontWeight: 700, fontSize: 17, letterSpacing: "-0.3px", color: "#2e2e2e", fontFamily: "Georgia, serif" }}>
            Chiku Creatives
          </span>
          <div style={{ display: "flex", gap: 40 }}>
            {["Privacy", "Terms", "LinkedIn", "Instagram"].map(link => (
              <a key={link} href="#" style={{
                fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase",
                color: "#6a6a5a", textDecoration: "none", fontFamily: "system-ui, sans-serif"
              }}>{link}</a>
            ))}
          </div>
          <span style={{
            fontSize: 11, color: "#9a9a8a", fontFamily: "system-ui, sans-serif",
            letterSpacing: "0.08em", textTransform: "uppercase"
          }}>
            © 2024 Chiku Creatives Agency. All Rights Reserved.
          </span>
        </div>
      </footer>

    </main>
  );
}