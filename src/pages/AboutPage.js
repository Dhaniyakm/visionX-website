import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/aboutPage.css';
import { FaLightbulb, FaUsers, FaRocket, FaShieldAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function AboutPage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <main className="about-page">
        <h1>About VisionX</h1>
        <p className="subtitle">
          We build innovative digital solutions for modern businesses.
        </p>

        <div className="about-container">

          <div className="about-card" onClick={() => navigate('/about/innovation')}>
            <FaLightbulb className="icon" />
            <h3>Innovation</h3>
            <p>We create unique and creative solutions.</p>
          </div>

          <div className="about-card" onClick={() => navigate('/about/teamwork')}>
            <FaUsers className="icon" />
            <h3>Team Work</h3>
            <p>We believe in strong collaboration.</p>
          </div>

          <div className="about-card" onClick={() => navigate('/about/growth')}>
            <FaRocket className="icon" />
            <h3>Growth</h3>
            <p>Helping businesses grow faster.</p>
          </div>

          <div className="about-card" onClick={() => navigate('/about/security')}>
            <FaShieldAlt className="icon" />
            <h3>Security</h3>
            <p>Safe and secure solutions always.</p>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;