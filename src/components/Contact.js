import '../styles/contact.css';
import { useState } from 'react';
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    const phoneNumber = "918301964951"; // 👉 CHANGE THIS

    const text = `Hello, my name is ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(url, "_blank");
  };

  return (
    <section className="contact" id="contact">

      <h1 className="contact-title">Contact Us</h1>

      <div className="contact-wrapper">

        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>Let’s Talk</h2>
          <p>We’re here to help you grow your business 🚀</p>

          <div className="info-item">
            <FaPhone /> <span>+91 8301964951</span>
          </div>

          <div className="info-item">
            <FaEnvelope /> <span>visionXsolution@gmail.com</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt /> <span>Kozhikode, Kerala</span>
          </div>
        </div>

        {/* FORM */}
        <div className="contact-form">

          <h2>Send Message</h2>

          <div className="input-box">
            <FaUser />
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-box">
            <FaEnvelope />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-box">
            <FaCommentDots />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button className="send-btn" onClick={handleSend}>
            <FaWhatsapp /> Send via WhatsApp
          </button>

        </div>

      </div>

      {/* GOOGLE MAP */}
      <div className="map">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=kozhikode&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
        ></iframe>
      </div>

    </section>
  );
}

export default Contact;