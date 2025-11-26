import React from "react";

export default function App() {
  return (
    <div style={{minHeight: "100vh", backgroundColor: "#f8fafc", color: "#0f172a", padding: 24}}>
      <header style={{maxWidth: 900, margin: "0 auto", paddingTop: 40, textAlign: "center"}}>
        <h1 style={{fontSize: 36, fontWeight: 700, marginBottom: 8}}>Instant Lead AI Response System</h1>
        <p style={{fontSize: 16, color: "#475569"}}>Convert more leads with automated, human-quality responses in seconds.</p>
      </header>

      <section style={{maxWidth: 900, margin: "40px auto 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24}}>
        <div style={{background: "#fff", padding: 20, borderRadius: 16, boxShadow: "0 6px 18px rgba(2,6,23,0.06)"}}>
          <h2 style={{fontSize: 20, fontWeight: 600}}>Why Your Business Needs This</h2>
          <p style={{color: "#475569"}}>Most businesses lose leads simply because they respond too slowly. Instant Lead AI fixes that by generating personalized replies automatically so potential customers hear back instantly.</p>
        </div>
        <div style={{background: "#fff", padding: 20, borderRadius: 16, boxShadow: "0 6px 18px rgba(2,6,23,0.06)"}}>
          <h2 style={{fontSize: 20, fontWeight: 600}}>What It Does</h2>
          <ul style={{color: "#475569", marginLeft: 18}}>
            <li>Reads incoming leads instantly</li>
            <li>Generates personalized replies with AI</li>
            <li>Sends emails or SMS within seconds</li>
            <li>Fully customized per business</li>
          </ul>
        </div>
      </section>

      <section style={{maxWidth: 900, margin: "40px auto", background: "#fff", padding: 28, borderRadius: 16, boxShadow: "0 6px 18px rgba(2,6,23,0.06)"}}>
        <h2 style={{fontSize: 24, fontWeight: 700, textAlign: "center", marginBottom: 18}}>Pricing</h2>
        <div style={{display: "flex", gap: 16, justifyContent: "center"}}>
          <div style={{flex: 1, border: "1px solid #e6edf3", padding: 18, borderRadius: 12, textAlign: "center"}}>
            <h3 style={{fontSize: 18, fontWeight: 600}}>Starter</h3>
            <p style={{fontSize: 22, fontWeight: 700}}>£99/mo</p>
            <ul style={{color: "#475569", textAlign: "left", marginLeft: 18}}>
              <li>1 AI automation</li>
              <li>Email responses</li>
              <li>Basic support</li>
            </ul>
          </div>
          <div style={{flex: 1, border: "1px solid #e6edf3", padding: 18, borderRadius: 12, textAlign: "center", background: "#f1f5f9"}}>
            <h3 style={{fontSize: 18, fontWeight: 600}}>Growth</h3>
            <p style={{fontSize: 22, fontWeight: 700}}>£249/mo</p>
            <ul style={{color: "#475569", textAlign: "left", marginLeft: 18}}>
              <li>Up to 3 automations</li>
              <li>Email & SMS responses</li>
              <li>Priority support</li>
            </ul>
          </div>
          <div style={{flex: 1, border: "1px solid #e6edf3", padding: 18, borderRadius: 12, textAlign: "center"}}>
            <h3 style={{fontSize: 18, fontWeight: 600}}>Scale</h3>
            <p style={{fontSize: 22, fontWeight: 700}}>£499/mo</p>
            <ul style={{color: "#475569", textAlign: "left", marginLeft: 18}}>
              <li>Unlimited automations</li>
              <li>Full customization</li>
              <li>Advanced reporting</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{maxWidth: 900, margin: "32px auto", textAlign: "center"}}>
        <h2 style={{fontSize: 22, fontWeight: 700}}>Ready to Increase Your Sales?</h2>
        <p style={{color: "#475569"}}>Book a free 10-minute audit and see how much revenue you're losing from slow responses.</p>
        <button style={{padding: "12px 20px", borderRadius: 12, background: "#2563eb", color: "#fff", fontWeight: 600, marginTop: 12}}>Book Free Audit</button>
      </section>

      <footer style={{textAlign: "center", color: "#94a3b8", marginTop: 40, paddingBottom: 40}}>
        © 2025 AC Productions
      </footer>
    </div>
  );
}
