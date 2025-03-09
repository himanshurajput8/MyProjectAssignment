import React, { useState, useEffect } from "react";
import "./Carousel.css";

const images = [
  "/Agrora.png",
  "/Ignition.png",
  "/Azuga.png",
  "/Gennext.png",
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Har 2 second me slide change hogi

    return () => clearInterval(interval); // Cleanup effect to prevent memory leaks
  }, [currentIndex]); // Depend on currentIndex to restart interval on update

  return (
    <div>
      <div className="carousel-container-heading">
        <h3>Media+ in action:</h3>
        <h1>Customer Spotlight</h1>
        <p>
          See how customers use Media+ to create branded media sites that
          captivate and convert.
        </p>
      </div>
      <div className="carousel-container">
        <img
          src={images[currentIndex]}
          alt="carousel slide"
          className="carousel-image"
        />
        <button onClick={prevSlide} className="carousel-button prev">
          &#8249;
        </button>
        <button onClick={nextSlide} className="carousel-button next">
          &#8250;
        </button>
      </div>
    </div>
  );
};
