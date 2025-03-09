import React, { useState, useEffect } from "preact/compat";
import "./LandingPage.css";

export const LandingPageComponent = () => {
  const words = ["Optimize 😎", "Engage 🤩", "Yeah 😁"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true); // Start exit animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false); // Start entry animation
      }, 500); // 500ms delay before changing the text
    }, 2500); // Every 2.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="landing-page-div">
        <div className="landing-page-heading">
          <h1>Unlock Video's Full Potential;</h1>
          <h1>
            <span>half of marketers</span> haven't yet!
          </h1>
        </div>
      </div>
      <div className="landing-page-div2">
        <div>
          <h3>Media+</h3>
        </div>
        <div>=</div>
        <div className="animation-wrapper">
          <div
            className={`animation-text ${isAnimating ? "slide-out" : "slide-in"}`}
          >
            <h2> {words[currentIndex]}</h2>
          </div>
        </div>
      </div>
      <p class="netflix-para">
        Netflix-style video discovery for your prospects that turns viewers into
        customers
      </p>
      <button className="demo-btn2">Request a Demo</button>
      <div className="image-container">
        <img src="/Hero video.png" alt="Hero Video" />
      </div>
      <div class="partner-img-div">
        <img src="/partners.png" alt="" />
      </div>
    </>
  );
};
