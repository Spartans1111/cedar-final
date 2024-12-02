import React, { useState, useEffect, useRef } from 'react';
import './exprience.css';

function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [experience, setExperience] = useState(0);
  const [warranty, setWarranty] = useState(0);
  const [sqft, setSqft] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null, // use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1 // Trigger when at least 10% of the target is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, options);

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const experienceFinal = 45;
    const warrantyFinal = 4;
    const sqftFinal = 10;

    const interval = setInterval(() => {
      setExperience((prev) => (prev < experienceFinal ? prev + 1 : experienceFinal));
      setWarranty((prev) => (prev < warrantyFinal ? prev + 1 : warrantyFinal));
      setSqft((prev) => (prev < sqftFinal ? prev + 1000 : sqftFinal));
    }, 50);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div className="exprience">
      <div className='exprience-row'>
      <div className="counter-container" ref={counterRef}>
        <div className="counter-item">
          <div className="counter-number">{experience} <span className='counter-span'> Days</span></div>
          <div className="counter-text">On-Time Delivery Guaranteed</div>
        </div>
        <div className="counter-item">
          <div className="counter-number">{warranty} <span className='counter-span'> Lakh+ Sq. Ft.</span></div>
          <div className="counter-text">Projects Successfully Completed</div>
        </div>
        <div className="counter-item">
          <div className="counter-number">{sqft.toLocaleString()} <span className='counter-span'> Years</span></div>
          <div className="counter-text">Trusted Warranty Coverage</div>
        </div>
      </div>
      <div className="exprence-content">
          <p>Trusted by Many</p>
          <h3>Proudly associated with India Bible College & Seminary, leading banks such as SBI, IOB, Federal Bank, and renowned establishments like Hotel Devi Residency.</h3>
      </div>
      </div>
      <div className="hr"></div>
    </div>
  );
}

export default Experience;
