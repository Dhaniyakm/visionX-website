import '../styles/services.css';
import { FaCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';

function Services() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>

      <div className="service-box">
        <div className="card"><FaCode className="icon" /><h3>Web Development</h3></div>
        <div className="card"><FaMobileAlt className="icon" /><h3>App Development</h3></div>
        <div className="card"><FaPaintBrush className="icon" /><h3>UI/UX</h3></div>
      </div>
    </section>
  );
}

export default Services;