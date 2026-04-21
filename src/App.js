import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import AboutPage from './pages/AboutPage';
import AboutDetail from './pages/AboutDetail';
import ContactPage from './pages/ContactPage';
import CybersecurityPage from './pages/CybersecurityPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:type" element={<ServiceDetail />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/:type" element={<AboutDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cybersecurity" element={<CybersecurityPage />} />
      </Routes>
    </Router>
  );
}

export default App;