import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/cybersecurity.css';

function CybersecurityPage() {

  const sendWhatsApp = (service) => {
    const phoneNumber = "918301964951"; // 👉 CHANGE THIS

    const text = `Hello, I am interested in ${service} service. Please give more details.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />

      <section className="cyber">
        <h1>Cybersecurity Services</h1>

        <div className="cyber-container">

          {/* ROW 1 */}
          <div className="cyber-card">
            <div className="line"></div>
            <h3>Penetration Testing</h3>
            <p className="tools">OWASP • Kali Linux • Burp Suite</p>
            <p>Identify vulnerabilities before attackers do.</p>
            <button onClick={() => sendWhatsApp("Penetration Testing")}>
              More Details
            </button>
          </div>

          <div className="cyber-card">
            <div className="line"></div>
            <h3>Network Security</h3>
            <p className="tools">Firewalls • IDS/IPS • SIEM Solutions</p>
            <p>Protect infrastructure from internal and external threats.</p>
            <button onClick={() => sendWhatsApp("Network Security")}>
              More Details
            </button>
          </div>

          <div className="cyber-card">
            <div className="line"></div>
            <h3>Cloud Security</h3>
            <p className="tools">AWS Shield • Azure Security • IAM Services</p>
            <p>Secure cloud workloads and prevent data breaches.</p>
            <button onClick={() => sendWhatsApp("Cloud Security")}>
              More Details
            </button>
          </div>

          {/* ROW 2 */}
          <div className="cyber-card">
            <div className="line"></div>
            <h3>Security Auditing</h3>
            <p className="tools">Compliance • Risk Analysis • ISO</p>
            <p>Comprehensive security assessments and compliance audits.</p>
            <button onClick={() => sendWhatsApp("Security Auditing")}>
              More Details
            </button>
          </div>

          <div className="cyber-card">
            <div className="line"></div>
            <h3>Endpoint Protection</h3>
            <p className="tools">EDR • Antivirus • Monitoring</p>
            <p>Advanced endpoint monitoring and threat response.</p>
            <button onClick={() => sendWhatsApp("Endpoint Protection")}>
              More Details
            </button>
          </div>

          <div className="cyber-card">
            <div className="line"></div>
            <h3>SOC Monitoring</h3>
            <p className="tools">24/7 Monitoring • SIEM</p>
            <p>Real-time threat detection and incident response.</p>
            <button onClick={() => sendWhatsApp("SOC Monitoring")}>
              More Details
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default CybersecurityPage;