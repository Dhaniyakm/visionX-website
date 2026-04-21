import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/aboutDetail.css';
import { useParams } from 'react-router-dom';

function ServiceDetail() {
  const { type } = useParams();

  const data = {
    web: {
      title: "Web Development",
      points: [
        "Responsive website design",
        "Modern UI development",
        "Fast performance",
        "SEO friendly structure"
      ]
    },
    app: {
      title: "App Development",
      points: [
        "Android applications",
        "iOS applications",
        "User-friendly design",
        "High performance apps"
      ]
    },
    uiux: {
      title: "UI/UX Design",
      points: [
        "User-centered design",
        "Creative layouts",
        "Modern interface",
        "Better user experience"
      ]
    },
    hacking: {
      title: "Ethical Hacking",
      points: [
        "Penetration testing",
        "Vulnerability assessment",
        "Network security testing",
        "Protect systems from cyber threats"
      ]
    }
  };

  const item = data[type];

  return (
    <>
      <Navbar />

      <main className="detail-page">
        <h1>{item?.title}</h1>

        <ul className="points">
          {item?.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </main>

      <Footer />
    </>
  );
}

export default ServiceDetail;