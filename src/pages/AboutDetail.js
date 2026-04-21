import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/aboutDetail.css';
import { useParams } from 'react-router-dom';

function AboutDetail() {
  const { type } = useParams();

  const data = {
    innovation: {
      title: "Innovation",
      points: [
        "Creative problem solving",
        "Modern technology usage",
        "Unique design thinking",
        "Continuous improvement"
      ]
    },
    teamwork: {
      title: "Team Work",
      points: [
        "Strong collaboration",
        "Clear communication",
        "Shared goals",
        "Supportive environment"
      ]
    },
    growth: {
      title: "Growth",
      points: [
        "Business scaling strategies",
        "Performance optimization",
        "Market expansion",
        "Customer engagement"
      ]
    },
    security: {
      title: "Security",
      points: [
        "Data protection",
        "Secure systems",
        "User privacy",
        "Reliable infrastructure"
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

export default AboutDetail;