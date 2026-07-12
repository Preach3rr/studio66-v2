import Image from "next/image";
import { featuredSeoLinks } from "./seoLandingData";
import { featuredVenueLinks } from "./seoVenueData";

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

      <details style={{ marginBottom: "24px", border: "1px solid rgba(201,165,90,.12)", borderRadius: "12px", background: "rgba(255,255,255,.008)" }}>
        <summary style={{ color: "#9F8654", letterSpacing: ".12em", fontWeight: 500, fontSize: "12px", padding: "10px 14px", cursor: "pointer", userSelect: "none", textTransform: "uppercase", opacity: 0.85 }}>
          Related Searches
        </summary>

        <div style={{ padding: "0 14px 14px" }}>
          <div style={{ marginBottom: "14px" }}>
            <p style={{ color: "#9F8654", letterSpacing: ".12em", marginBottom: "8px", fontWeight: 500, fontSize: "11px", textTransform: "uppercase", opacity: 0.75 }}>Popular Searches</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 10px" }}>
              {featuredSeoLinks.map((item) => (
                <a key={item.href} href={item.href} className="footer-link" style={{ width: "auto", marginBottom: 0, textAlign: "left", fontSize: "12px", color: "#8C8C8C", opacity: 0.85 }}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p style={{ color: "#9F8654", letterSpacing: ".12em", marginBottom: "8px", fontWeight: 500, fontSize: "11px", textTransform: "uppercase", opacity: 0.75 }}>Venue Searches</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 10px" }}>
              {featuredVenueLinks.map((item) => (
                <a key={item.href} href={item.href} className="footer-link" style={{ width: "auto", marginBottom: 0, textAlign: "left", fontSize: "12px", color: "#8C8C8C", opacity: 0.85 }}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </details>

      <p style={{ color: "#777", textAlign: "center" }}>© 2026 Studio66 Photography. All Rights Reserved.</p>
    </footer>
  );
}
