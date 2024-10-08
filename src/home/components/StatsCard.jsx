import React, { useEffect, useState, useRef } from 'react';
import '../css/components/StatsCard.css';

const StatsCard = () => {
  const [yearsOfExperience, setYearsOfExperience] = useState(0);
  const [expertTeam, setExpertTeam] = useState(0);
  const [projectCompleted, setProjectCompleted] = useState(0);
  const [trustedClients, setTrustedClients] = useState(0);
  const statsRef = useRef(null); // Reference to the stats section

  useEffect(() => {
    // Function to handle the counting
    const countUp = (setter, target, duration) => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / target));
      const timer = setInterval(() => {
        start += 1;
        setter(start);
        if (start >= target) clearInterval(timer);
      }, stepTime);
    };

    // Function to observe when the stats section is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset the counters before starting the animation
          setYearsOfExperience(0);
          setExpertTeam(0);
          setProjectCompleted(0);
          setTrustedClients(0);

          // Trigger counting when section is in view
          countUp(setYearsOfExperience, 20, 2000);
          countUp(setExpertTeam, 50, 2000);
          countUp(setProjectCompleted, 17, 2000);
          countUp(setTrustedClients, 100, 2000);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <>
      <h2 className="achievementTitle">OUR ACHIEVEMENT</h2> {/* Title outside the container */}
      <aside className="achievement-card_sec" ref={statsRef}> {/* Attach ref here */}
        <div className="container"> {/* Only for the stats */}
          <ul className="cabCounterList">
            <li className='achievement-card_li'>
              <h3 className="cclColumnWrap">
                <span className="achievement-textCount">{yearsOfExperience}+</span>
                <span className="achievement-subtitle">Years of Experience</span>
              </h3>
            </li>
            <li className='achievement-card_li'>
              <h3 className="cclColumnWrap">
                <span className="achievement-textCount">{expertTeam}+</span>
                <span className="achievement-subtitle">Expert Teams</span>
              </h3>
            </li>
            <li className='achievement-card_li'>
              <h3 className="cclColumnWrap">
                <span className="achievement-textCount">{projectCompleted}+</span>
                <span className="achievement-subtitle">Project Completed</span>
              </h3>
            </li>
            <li className='achievement-card_li'>
              <h3 className="cclColumnWrap">
                <span className="achievement-textCount">{trustedClients}+</span>
                <span className="achievement-subtitle">Satisfied Clients</span>
              </h3>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default StatsCard;
