import '../styles/stats.css';
import { useEffect, useState, useRef } from 'react';

function Counter({ end, suffix, startAnimation }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;

    const runCounter = () => {
      const duration = 2000; // counting time
      const incrementTime = 20;
      const step = Math.ceil(end / (duration / incrementTime));

      const timer = setInterval(() => {
        start += step;

        if (start >= end) {
          start = end;
          clearInterval(timer);

          // ⏳ WAIT 2.5 SECONDS THEN RESTART
          setTimeout(() => {
            start = 0;
            setCount(0);
            runCounter(); // 🔁 repeat
          }, 2500);
        }

        setCount(start);
      }, incrementTime);
    };

    runCounter();

  }, [startAnimation, end]);

  return (
    <h1>
      {count}
      {suffix}
    </h1>
  );
}

function Stats() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="stats-section" ref={sectionRef}>
      <div className="stats-container">

        <div className="stat-card">
          <Counter end={15} suffix="+" startAnimation={visible} />
          <p><h2>Years of Experience</h2></p>
        </div>

        <div className="stat-card">
          <Counter end={2000} suffix="+" startAnimation={visible} />
          <p><h2>Projects Delivered</h2></p>
        </div>

        <div className="stat-card">
          <Counter end={300} suffix="+" startAnimation={visible} />
          <p><h2>Happy Clients</h2></p>
        </div>

      </div>
    </div>
  );
}

export default Stats;