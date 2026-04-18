import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", email: "", service: "", budget: "", message: ""
  });

  return (
    <main style={{ background: "#f5f2eb", minHeight: "100vh", fontFamily: "Georgia, serif" }}>

      {/* NAV */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "20px 48px", background: "#f5f2eb", position: "sticky", top: 0, zIndex: 10,
      }}>
        <span style={{ fontWeight: 700, fontSize: 18 }}>Curated Gallery</span>
        <div style={{ display: "flex", gap: 36, alignItems: "center" }}>
          {["Portfolio", "Services", "About", "Contact"].map(item => (
            <a key={item} href="#" style={{
              fontSize: 15,
              color: item === "Contact" ? "#3a3a3a" : "#3a3a3a",
              textDecoration: item === "Contact" ? "underline" : "none",
              textUnderlineOffset: 6,
              fontFamily: "system-ui, sans-serif",
              fontWeight: item === "Contact" ? 600 : 400
            }}>{item}</a>
          ))}
          <button style={{
            background: "#4a6741", color: "#fff", border: "none", borderRadius: 6,
            padding: "10px 22px", fontSize: 15, cursor: "pointer", fontFamily: "system-ui, sans-serif"
          }}>Start a Project</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "64px 48px 48px", maxWidth: 1300, margin: "0 auto" }}>
        <p style={{
          fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase",
          color: "#8a8a7a", fontFamily: "system-ui, sans-serif", marginBottom: 20
        }}>Get In Touch</p>
        <h1 style={{
          fontSize: 80, fontWeight: 700, color: "#1a1a1a", lineHeight: 1.0,
          margin: "0 0 28px", letterSpacing: "-2px"
        }}>Let's Collaborate</h1>
        <p style={{
          fontSize: 17, color: "#5a5a5a", fontFamily: "system-ui, sans-serif",
          lineHeight: 1.6, maxWidth: 560
        }}>
          Tell us about your vision, and we'll help you curate a narrative that resonates.
        </p>
      </section>

      {/* MAIN CONTENT — LEFT INFO + RIGHT FORM */}
      <section style={{
        display: "flex", gap: 0, maxWidth: 1300, margin: "0 auto",
        padding: "48px 48px 0", alignItems: "flex-start"
      }}>

        {/* LEFT */}
        <div style={{ flex: "0 0 360px", paddingRight: 48, paddingTop: 8 }}>
          <div style={{ marginBottom: 48 }}>
            <p style={{
              fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#8a8a7a", fontFamily: "system-ui, sans-serif", marginBottom: 12
            }}>Email</p>
            <p style={{ fontSize: 18, color: "#1a1a1a", margin: 0 }}>hello@curatedgallery.com</p>
          </div>

          <div style={{ marginBottom: 48 }}>
            <p style={{
              fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#8a8a7a", fontFamily: "system-ui, sans-serif", marginBottom: 12
            }}>Location</p>
            <p style={{ fontSize: 18, color: "#1a1a1a", margin: "0 0 4px" }}>Based in London</p>
            <p style={{ fontSize: 16, color: "#6a6a5a", fontStyle: "italic", margin: 0 }}>Available Globally</p>
          </div>

          <div>
            <p style={{
              fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#8a8a7a", fontFamily: "system-ui, sans-serif", marginBottom: 16
            }}>Connect</p>
            {["Instagram", "LinkedIn", "Vimeo"].map(s => (
              <p key={s} style={{ margin: "0 0 14px" }}>
                <a href="#" style={{
                  fontSize: 18, color: "#1a1a1a", textDecoration: "none",
                  display: "inline-flex", alignItems: "center", gap: 6
                }}>
                  {s}
                  <span style={{ fontSize: 14, color: "#4a6741" }}>↗</span>
                </a>
              </p>
            ))}
          </div>
        </div>

        {/* RIGHT FORM PANEL */}
        <div style={{
          flex: 1, background: "#eeeae0", borderRadius: 16,
          padding: "48px 48px 40px", boxSizing: "border-box"
        }}>

          {/* Row 1: Full Name + Email */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 36 }}>
            <div>
              <label style={{
                fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
                color: "#8a8a7a", fontFamily: "system-ui, sans-serif", display: "block", marginBottom: 12
              }}>Full Name</label>
              <input
                placeholder="Elias Thorne"
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
                style={{
                  width: "100%", background: "transparent", border: "none",
                  borderBottom: "1px solid #c0bdb4", padding: "8px 0", fontSize: 16,
                  color: "#1a1a1a", fontFamily: "Georgia, serif", outline: "none",
                  boxSizing: "border-box"
                }}
              />
            </div>
            <div>
              <label style={{
                fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
                color: "#8a8a7a", fontFamily: "system-ui, sans-serif", display: "block", marginBottom: 12
              }}>Email Address</label>
              <input
                placeholder="hello@domain.com"
                value={form.email}
                onChange={e => setForm({...form, email: e.target.value})}
                style={{
                  width: "100%", background: "transparent", border: "none",
                  borderBottom: "1px solid #c0bdb4", padding: "8px 0", fontSize: 16,
                  color: "#1a1a1a", fontFamily: "Georgia, serif", outline: "none",
                  boxSizing: "border-box"
                }}
              />
            </div>
          </div>

          {/* Row 2: Service + Budget */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 36 }}>
            <div>
              <label style={{
                fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
                color: "#8a8a7a", fontFamily: "system-ui, sans-serif", display: "block", marginBottom: 12
              }}>Service Interested In</label>
              <div style={{ position: "relative" }}>
                <select
                  value={form.service}
                  onChange={e => setForm({...form, service: e.target.value})}
                  style={{
                    width: "100%", background: "transparent", border: "none",
                    borderBottom: "1px solid #c0bdb4", padding: "8px 0", fontSize: 16,
                    color: form.service ? "#1a1a1a" : "#9a9a8a",
                    fontFamily: "Georgia, serif", outline: "none",
                    appearance: "none", cursor: "pointer", boxSizing: "border-box"
                  }}
                >
                  <option value="" disabled>Select a Service</option>
                  <option value="social">Social Media Management</option>
                  <option value="video">Video Editing</option>
                  <option value="strategy">Strategy & Direction</option>
                </select>
                <span style={{
                  position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)",
                  pointerEvents: "none", color: "#6a6a5a", fontSize: 14
                }}>⌄</span>
              </div>
            </div>
            <div>
              <label style={{
                fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
                color: "#8a8a7a", fontFamily: "system-ui, sans-serif", display: "block", marginBottom: 12
              }}>Budget Range</label>
              <input
                placeholder="e.g. $5k - $10k"
                value={form.budget}
                onChange={e => setForm({...form, budget: e.target.value})}
                style={{
                  width: "100%", background: "transparent", border: "none",
                  borderBottom: "1px solid #c0bdb4", padding: "8px 0", fontSize: 16,
                  color: "#1a1a1a", fontFamily: "Georgia, serif", outline: "none",
                  boxSizing: "border-box"
                }}
              />
            </div>
          </div>

          {/* Message */}
          <div style={{ marginBottom: 32 }}>
            <label style={{
              fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase",
              color: "#8a8a7a", fontFamily: "system-ui, sans-serif", display: "block", marginBottom: 12
            }}>Message</label>
            <textarea
              placeholder="Tell us about your project vision..."
              value={form.message}
              onChange={e => setForm({...form, message: e.target.value})}
              rows={4}
              style={{
                width: "100%", background: "transparent", border: "none",
                borderBottom: "1px solid #c0bdb4", padding: "8px 0", fontSize: 16,
                color: "#1a1a1a", fontFamily: "Georgia, serif", outline: "none",
                resize: "none", boxSizing: "border-box"
              }}
            />
          </div>

          {/* Footer row: note + button */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{
              fontSize: 14, color: "#8a8a7a", fontStyle: "italic",
              fontFamily: "Georgia, serif", margin: 0, maxWidth: 340, lineHeight: 1.6
            }}>
              Expect a response within 48 hours. We value intentional communication.
            </p>
            <button
              onClick={() => alert("Inquiry sent!")}
              style={{
                background: "#4a6741", color: "#fff", border: "none", borderRadius: 8,
                padding: "16px 32px", fontSize: 16, cursor: "pointer",
                fontFamily: "system-ui, sans-serif", display: "flex", alignItems: "center", gap: 10,
                whiteSpace: "nowrap"
              }}
            >
              Send Inquiry <span style={{ fontSize: 18 }}>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* IMAGE + QUOTE ROW */}
      <section style={{
        display: "flex", maxWidth: 1300, margin: "0 auto",
        padding: "0 48px 80px", gap: 0, alignItems: "flex-start", marginTop: -40
      }}>
        {/* Image */}
        <div style={{ flex: "0 0 380px" }}>
          <img
            src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&q=80"
            alt="Abstract green architecture"
            style={{ width: "100%", borderRadius: 12, display: "block", objectFit: "cover", height: 460 }}
          />
        </div>
        {/* Quote */}
        <div style={{
          flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
          padding: "60px 80px"
        }}>
          <p style={{
            fontSize: 26, lineHeight: 1.6, color: "#4a6741", fontStyle: "italic",
            textAlign: "center", maxWidth: 560
          }}>
            "Digital architecture is not just about aesthetics, it's about the silent narrative between the pixels."
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#f5f2eb", borderTop: "1px solid #e0dcd2", padding: "40px 48px" }}>
        <div style={{ maxWidth: 1300, margin: "0 auto" }}>
          <p style={{ fontWeight: 700, fontSize: 16, color: "#1a1a1a", fontFamily: "Georgia, serif", marginBottom: 16 }}>
            Curated Gallery
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{
              fontSize: 11, color: "#8a8a7a", fontFamily: "system-ui, sans-serif",
              letterSpacing: "0.1em", textTransform: "uppercase"
            }}>
              © 2024 Curated Gallery. Digital Architects of Social Narrative.
            </span>
            <div style={{ display: "flex", gap: 32 }}>
              {["Instagram", "LinkedIn", "Vimeo", "Terms"].map(link => (
                <a key={link} href="#" style={{
                  fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "#8a8a7a", textDecoration: "none", fontFamily: "system-ui, sans-serif"
                }}>{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}