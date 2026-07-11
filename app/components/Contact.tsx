"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const emailAddress = "studio66.photographer@gmail.com";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");
    const subject = encodeURIComponent(`Studio66 enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    setStatus("Opening your email application…");
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <div id="contact" className="contact-section" style={{ marginTop: "110px", paddingTop: "100px", borderTop: "1px solid rgba(201,165,90,.18)" }}>
      <div style={{ textAlign: "center", marginBottom: "72px" }}>
        <p style={{ color: "#C9A55A", letterSpacing: ".4em", fontWeight: 600, marginBottom: "16px" }}>GET IN TOUCH</p>
        <h2 style={{ fontSize: "clamp(34px,4vw,58px)", color: "#fff", fontWeight: 800, marginBottom: "18px" }}>Let&apos;s Create Something Amazing</h2>
        <p style={{ color: "#bdbdbd", fontSize: "18px" }}>Get in touch and let&apos;s discuss your next project.</p>
      </div>
      <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "70px", alignItems: "start" }}>
        <div>
          <div style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
            <Phone color="#C9A55A" size={34} />
            <div><h3 style={{ color: "#fff", marginBottom: "8px" }}>Phone</h3><p><a href="tel:+4550172284">+45 50 17 22 84</a></p><p><a href="tel:+40762471112">+40 0762 471 112</a></p></div>
          </div>
          <div style={{ display: "flex", gap: "20px", marginBottom: "40px" }}>
            <Mail color="#C9A55A" size={34} />
            <div><h3 style={{ color: "#fff", marginBottom: "8px" }}>Email</h3><p><a href={`mailto:${emailAddress}`}>{emailAddress}</a></p></div>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <MapPin color="#C9A55A" size={34} />
            <div><h3 style={{ color: "#fff", marginBottom: "8px" }}>Location</h3><p style={{ color: "#bdbdbd" }}>Horsens, Denmark</p><p style={{ color: "#bdbdbd" }}>Bucuresti, Romania</p></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <input name="name" required autoComplete="name" placeholder="Your Name" aria-label="Your name" style={{ padding: "20px", background: "#141414", border: "1px solid rgba(201,165,90,.2)", color: "#fff", borderRadius: "10px" }} />
          <input name="email" required type="email" autoComplete="email" placeholder="Email" aria-label="Your email" style={{ padding: "20px", background: "#141414", border: "1px solid rgba(201,165,90,.2)", color: "#fff", borderRadius: "10px" }} />
          <textarea name="message" required rows={7} placeholder="Message" aria-label="Your message" style={{ padding: "20px", background: "#141414", border: "1px solid rgba(201,165,90,.2)", color: "#fff", borderRadius: "10px", resize: "none" }} />
          <button type="submit" style={{ padding: "20px", background: "linear-gradient(135deg,#FFF7E3,#E8C26B,#B9832D)", color: "#111", fontWeight: 700, borderRadius: "10px", cursor: "pointer", border: "none" }}>SEND MESSAGE</button>
          <p aria-live="polite" style={{ minHeight: "24px", color: "#C9A55A", fontSize: "14px" }}>{status}</p>
        </form>
      </div>
    </div>
  );
}
