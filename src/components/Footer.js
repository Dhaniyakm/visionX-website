import '../styles/footer.css';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

function Footer() {

  const phoneNumber = "918301964951"; // 👉 CHANGE
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <footer className="footer">

      <h2>VisionX</h2>
      <p>Building modern digital solutions 🚀</p>

      {/* SOCIAL ICONS */}
      <div className="social-icons">

        <a href={whatsappLink} target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>

        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>

        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>

      </div>

      <p className="copyright">
        © 2026 VisionX. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;