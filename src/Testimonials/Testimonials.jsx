import React, { useState } from "react";
import "./Testimonials.css";

export const Testimonials = () => {
  const testimonialArray = [
    {
      title: "Take it from a Customer",
      quote: "Beautifully showcases our best videos...",
      imageURL: "/Testimonial_img/image1.png",
      content:
        "Media+ has created our own 'UNI-FLIX'. It's exactly the OTT platform I've been looking for...",
      author: "Girish C. Ballolla",
      designation: "Founder & CEO, Gen Next Education, Inc",
    },
    {
      title: "Take it from a Customer",
      quote: "A tool that can make it easy to manage our videos with AI...",
      imageURL: "/Testimonial_img/image2.png",
      content:
        "For the marketers & go-to-market teams this is a great portal...",
      author: "Jenifer Ho",
      designation: "VP of Marketing, Bitwarden",
    },
    {
      title: "Take it from a Customer",
      quote: "Integrates our media with HubSpot CRM...",
      imageURL: "/Testimonial_img/image3.png",
      content: "Media+ seamlessly integrates our media with HubSpot CRM...",
      author: "Tami Strand",
      designation: "Director of Marketing, Azuga",
    },
    {
      title: "Take it from a Customer",
      quote: "A tool that makes it easy to manage our videos...",
      imageURL: "/Testimonial_img/image4.png",
      content: "We do webinars twice or once a week. This works for us...",
      author: "Jule Hiller",
      designation: "Senior Marketing Manager, EQS Group",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialArray.length - 1 : prevIndex - 1,
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialArray.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-container-inner">
        {/* Left Arrow */}
        <button onClick={prevTestimonial} className="nav-button">
          {"<"}
        </button>

        {/* Testimonial Content */}
        <div className="testimonials-div">
          <p>{testimonialArray[currentIndex].title}</p>
          <h1>{testimonialArray[currentIndex].quote}</h1>
          <img
            src={testimonialArray[currentIndex].imageURL}
            alt={testimonialArray[currentIndex].author}
          />
          <p className="test-content">
            {testimonialArray[currentIndex].content}
          </p>
          <p>
            <strong>{testimonialArray[currentIndex].author}</strong>
          </p>
          <p>{testimonialArray[currentIndex].designation}</p>
          <button className="request-demo-btn">Request a Demo</button>

          {/* Pagination Dots */}
          <div className="pagination">
            {testimonialArray.map((_, index) => (
              <span
                key={index}
                className={`pagination-dot ${index === currentIndex ? "active" : ""}`}
              ></span>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button onClick={nextTestimonial} className="nav-button">
          {">"}
        </button>
      </div>
    </div>
  );
};
