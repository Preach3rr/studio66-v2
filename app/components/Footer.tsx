import Image from "next/image";
import { featuredSeoLinks } from "./seoLandingData";

const navigation = [
  ["Home", "#top"], ["Services", "#services"], ["Portfolio", "#portfolio"], ["Pricing", "#pricing"], ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <footer className="footer-section" style={{ background: "#050505", padding: "120px 8% 50px", borderTop: "1px solid rgba(201,165,90,.15)" }}>
      <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr", gap: "80px", marginBottom: "70px" }}>
        <div>
          <Image src="/logo/studio66.png" alt="Studio66" width={180} height={180} />
          <p style={{ color: "#BDBDBD", lineHeight: 1.9, marginTop: "25px", maxWidth: "420px" }}>Premium photography & cinematic videography for weddings, baptisms, events, portraits, real estate and commercial projects.</p>
        </div>
        <nav aria-label="Footer navigation" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <h3 style={{ color: "#fff", marginBottom: "25px", fontSize: "24px" }}>Navigation</h3>
          {navigation.map(([label, href]) => <a key={label} href={href} className="footer-link">{label}</a>)}
        </nav>
        <div>
          <h3 style={{ color: "#fff", marginBottom: "25px", fontSize: "24px" }}>Contact</h3>
          <p><a href="tel:+4550172284" className="footer-link">+45 50 17 22 84</a></p>
          <p><a href="tel:+40762471112" className="footer-link">+40 762 471 112</a></p>
          <p><a href="mailto:studio66.photographer@gmail.com" className="footer-link">studio66.photographer@gmail.com</a></p>
          <p className="footer-location">Bucuresti, Romania</p><p className="footer-location">Horsens, Denmark</p>
          <div style={{ display: "flex", gap: "14px", marginTop: "30px" }}>
            <a href="https://www.facebook.com/silviu0serban" target="_blank" rel="noreferrer" className="footer-social">Facebook</a>
            <a href="https://www.instagram.com/___studio66___?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="footer-social">Instagram</a>
          </div>
        </div>
      </div>
      <div style={{ height: "1px", background: "linear-gradient(90deg,transparent,#C9A55A,transparent)", marginBottom: "30px" }} />

      <div style={{ marginBottom: "30px" }}>
        <p style={{ color: "#C9A55A", letterSpacing: ".22em", marginBottom: "14px", fontWeight: 600 }}>POPULAR SEARCHES</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 14px" }}>
          {featuredSeoLinks.map((item) => (
            <a key={item.href} href={item.href} className="footer-link" style={{ width: "auto", marginBottom: 0, textAlign: "left" }}>
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <p style={{ color: "#777", textAlign: "center" }}>© 2026 Studio66 Photography. All Rights Reserved.</p>
    </footer>
  );
}
