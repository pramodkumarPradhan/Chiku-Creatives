import { useState } from "react";

export default function Services() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "Do you require long-term contracts?",
      a: "We begin with a minimum 3-month commitment. This allows us sufficient time to establish your brand's voice, implement our strategy, and gather meaningful data before reviewing performance and adjusting our approach.",
    },
    {
      q: "Who provides the visual assets?",
      a: "We work with both client-provided assets and can source or create original visual content depending on your package. Our team handles everything from photography direction to graphic creation.",
    },
    {
      q: "Can packages be customized?",
      a: "Absolutely. Every brand has unique needs. We're happy to discuss tailored scopes of work that combine elements from different packages or add à la carte services.",
    },
  ];

  const plans = [
    {
      name: "Starter",
      tag: null,
      desc: "Foundation social media management for emerging voices.",
      price: "$1,500",
      suffix: "/month",
      features: [
        { text: "3 posts per week across 2 platforms", included: true },
        { text: "Basic community engagement", included: true },
        { text: "Monthly analytics reporting", included: true },
        { text: "Video editing", included: false },
      ],
      btnLabel: "Select Starter",
      btnStyle: "light",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#c8d8c0" strokeWidth="1.2">
          <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      ),
    },
    {
      name: "Growth",
      tag: "MOST POPULAR",
      desc: "Comprehensive strategy with introductory video support.",
      price: "$3,200",
      suffix: "/month",
      features: [
        { text: "5 posts per week across 3 platforms", included: true },
        { text: "Proactive community management", included: true },
        { text: "Bi-weekly strategy calls", included: true },
        { text: "2 Short-form videos edited per month", included: true },
      ],
      btnLabel: "Inquire About Growth",
      btnStyle: "dark",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#c8d8c0" strokeWidth="1.2">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      ),
    },
    {
      name: "Elite",
      tag: null,
      desc: "Full-scale digital curation and premium content production.",
      price: "$6,500+",
      suffix: "/month",
      features: [
        { text: "Daily posting across all relevant platforms", included: true },
        { text: "Dedicated account manager", included: true },
        { text: "Custom aesthetic development", included: true },
        { text: "Weekly premium video editing (4/mo)", included: true },
      ],
      btnLabel: "Discuss Elite Custom",
      btnStyle: "light",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#c8d8c0" strokeWidth="1.2">
          <path d="M6 3l2 6H4L6 3zM18 3l2 6h-4l2-6zM12 3l3 6H9l3-6zM4 9l8 12L4 9zM20 9l-8 12 8-12zM9 9l3 12 3-12H9z" />
        </svg>
      ),
    },
  ];

  return (
    <main style={{ background: "#f5f2eb", minHeight: "100vh", fontFamily: "Georgia, serif" }}>

      {/* NAV */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "20px 48px", background: "#f5f2eb", position: "sticky", top: 0, zIndex: 10,
      }}>
        <span style={{ fontWeight: 700, fontSize: 18 }}>Chiku Creatives</span>
        <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
          {["Work", "Services", "About", "Contact"].map(item => (
            <a key={item} href="#" style={{
              fontSize: 15, color: item === "Services" ? "#4a6741" : "#3a3a3a",
              textDecoration: "none", fontFamily: "system-ui, sans-serif",
              fontWeight: item === "Services" ? 600 : 400
            }}>{item}</a>
          ))}
          <button style={{
            background: "#4a6741", color: "#fff", border: "none", borderRadius: 6,
            padding: "10px 22px", fontSize: 15, cursor: "pointer", fontFamily: "system-ui, sans-serif"
          }}>Inquire</button>
        </div>
      </nav>

      {/* HERO TEXT */}
      <section style={{ padding: "64px 48px 80px", maxWidth: 1300, margin: "0 auto" }}>
        <p style={{
          fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase",
          color: "#6a6a5a", fontFamily: "system-ui, sans-serif", marginBottom: 20
        }}>Our Approach</p>
        <h1 style={{
          fontSize: 72, fontWeight: 700, color: "#1a1a1a", lineHeight: 1.05,
          margin: "0 0 32px", letterSpacing: "-1.5px", maxWidth: 700
        }}>Offerings & Investment</h1>
        <p style={{
          fontSize: 17, lineHeight: 1.7, color: "#5a5a5a",
          fontFamily: "system-ui, sans-serif", maxWidth: 560
        }}>
          We believe in transparent, value-driven partnerships. Our packages are
          designed to elevate your brand's digital presence with intention and artistry.
        </p>
      </section>

      {/* PRICING CARDS */}
      <section style={{ padding: "0 48px 120px", maxWidth: 1300, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24, alignItems: "start"
        }}>
          {plans.map((plan, i) => {
            const isMiddle = i === 1;
            return (
              <div key={i} style={{
                background: "#f0ede4",
                borderRadius: 16,
                padding: "36px 32px 40px",
                marginTop: isMiddle ? -40 : 0,
                boxSizing: "border-box",
                position: "relative",
                border: isMiddle ? "2px solid #4a6741" : "none",
              }}>
                {/* Top accent line for middle */}
                {isMiddle && (
                  <div style={{
                    position: "absolute", top: -2, left: "10%", width: "80%",
                    height: 3, background: "#4a6741", borderRadius: 2
                  }} />
                )}

                {/* Tag + Icon row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  {plan.tag ? (
                    <span style={{
                      fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
                      background: "#d4e8cc", color: "#3a5a32", padding: "4px 12px",
                      borderRadius: 4, fontFamily: "system-ui, sans-serif", fontWeight: 600
                    }}>{plan.tag}</span>
                  ) : <span />}
                  <div style={{ opacity: 0.5 }}>{plan.icon}</div>
                </div>

                {/* Name */}
                <h2 style={{
                  fontSize: isMiddle ? 40 : 28, fontWeight: 700, color: "#1a1a1a",
                  margin: "0 0 10px", letterSpacing: "-0.5px"
                }}>{plan.name}</h2>

                {/* Desc */}
                <p style={{
                  fontSize: 14, color: "#6a6a5a", fontFamily: "system-ui, sans-serif",
                  lineHeight: 1.6, margin: "0 0 24px"
                }}>{plan.desc}</p>

                {/* Price */}
                <div style={{ marginBottom: 28 }}>
                  <span style={{ fontSize: isMiddle ? 52 : 40, fontWeight: 700, color: "#1a1a1a" }}>
                    {plan.price}
                  </span>
                  <span style={{ fontSize: 15, color: "#7a7a6a", fontFamily: "system-ui, sans-serif", marginLeft: 4 }}>
                    {plan.suffix}
                  </span>
                </div>

                {/* Features */}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                  {plan.features.map((f, fi) => (
                    <li key={fi} style={{
                      display: "flex", alignItems: "center", gap: 12,
                      padding: "10px 0",
                      borderBottom: fi < plan.features.length - 1 ? "1px solid #e0dcd2" : "none",
                      fontFamily: "system-ui, sans-serif",
                      fontSize: 14,
                      color: f.included ? "#2a2a2a" : "#aaa8a0",
                    }}>
                      {f.included ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4a6741" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b0ada6" strokeWidth="2.5">
                          <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      )}
                      {f.text}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button style={{
                  width: "100%", padding: "14px 0", borderRadius: 8, fontSize: 15,
                  cursor: "pointer", fontFamily: "system-ui, sans-serif", fontWeight: 500,
                  border: "none",
                  background: isMiddle ? "#4a6741" : "#ddd9cf",
                  color: isMiddle ? "#fff" : "#3a3a2a",
                  transition: "opacity 0.2s"
                }}>{plan.btnLabel}</button>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 48px 120px", maxWidth: 800, margin: "0 auto" }}>
        <h2 style={{
          fontSize: 48, fontWeight: 700, color: "#1a1a1a", textAlign: "center",
          margin: "0 0 16px", letterSpacing: "-0.5px"
        }}>Common Inquiries</h2>
        <p style={{
          textAlign: "center", fontSize: 15, color: "#6a6a5a",
          fontFamily: "system-ui, sans-serif", marginBottom: 48
        }}>Details regarding our partnership process.</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{
              background: "#eeeae0", borderRadius: 8, overflow: "hidden",
              marginBottom: 8
            }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                style={{
                  width: "100%", display: "flex", justifyContent: "space-between",
                  alignItems: "center", padding: "22px 28px",
                  background: "transparent", border: "none", cursor: "pointer",
                  fontFamily: "Georgia, serif", fontSize: 16, color: "#1a1a1a",
                  textAlign: "left"
                }}
              >
                {faq.q}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4a6741" strokeWidth="2">
                  {openFaq === i
                    ? <polyline points="18 15 12 9 6 15" />
                    : <polyline points="6 9 12 15 18 9" />}
                </svg>
              </button>
              {openFaq === i && (
                <div style={{
                  padding: "0 28px 24px",
                  fontFamily: "system-ui, sans-serif", fontSize: 15,
                  lineHeight: 1.75, color: "#5a5a5a"
                }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#eeeae0", padding: "48px 48px" }}>
        <div style={{
          maxWidth: 1300, margin: "0 auto",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 16
        }}>
          <span style={{ fontWeight: 700, fontSize: 17, color: "#2e2e2e", fontFamily: "Georgia, serif" }}>
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