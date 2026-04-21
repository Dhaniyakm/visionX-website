import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/services.css';
import { FaCode, FaMobileAlt, FaPaintBrush, FaUserSecret } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function ServicesPage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <main className="services">
        <h2>All Services</h2>

        <div className="service-box">

          <div className="card" onClick={() => navigate('/services/web')}>
            <FaCode className="icon" />
            <h3>Web Development</h3>
            <p>Professional websites</p>
          </div>

          <div className="card" onClick={() => navigate('/services/app')}>
            <FaMobileAlt className="icon" />
            <h3>App Development</h3>
            <p>Mobile applications</p>
          </div>

          <div className="card" onClick={() => navigate('/services/uiux')}>
            <FaPaintBrush className="icon" />
            <h3>UI/UX Design</h3>
            <p>Modern design</p>
          </div>

          <div className="card" onClick={() => navigate('/services/hacking')}>
            <FaUserSecret className="icon" />
            <h3>Ethical Hacking</h3>
            <p>Security testing services</p>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default ServicesPage;