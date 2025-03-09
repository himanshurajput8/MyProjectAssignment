import React, { useState } from "preact/compat";
import "./VedioEngage.css";

export const ElevateEngageComp = () => {
  const [visible, setVisible] = useState({});

  const toggleVisibility = (index) => {
    setVisible((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const subjects = [
    {
      title: "Curate your video media collection with an AI-powered library",
      text: "Easily organize and manage your video collection with AI-driven tagging and categorization. Quickly find and stream your favorite content with smart search and recommendations.",
    },
    {
      title: "Build, Brand & Publish your Media+",
      text: "Publish your on-demand media faster than ever using Media+. Add your custom branding and host all your media on your website or any other custom URL of your choice.",
    },
    {
      title: "Gate your media, capture leads & connect your CRM - it’s easy",
      text: "Restrict access to your media and turn viewers into leads effortlessly. Collect valuable audience data with gated content and custom forms. Seamlessly integrate with your CRM to nurture and convert leads faster.",
    },
    {
      title: "Track your views - with detailed analytics.",
      text: "Monitor your audience engagement with real-time view tracking. Gain insights with in-depth analytics on watch time, retention, and interactions. Optimize your content strategy with data-driven performance reports.",
    },
  ];

  return (
    <>
      <div className="choose-media-heading">
        <h3>Why Choose Media?</h3>
        <h2>Media+ turns video engagement into customer conversion</h2>
      </div>

      <div className="engage-container">
        <div className="text-section">
          {subjects.map((subject, index) => (
            <div key={index} className="info-box">
              <h2>{subject.title}</h2>
              <i
                className={`fa-solid ${visible[index] ? "fa-minus" : "fa-plus"}`}
                onClick={() => toggleVisibility(index)}
              ></i>
              {visible[index] && <p>{subject.text}</p>}
            </div>
          ))}
        </div>

        <div className="ai-img">
          <img src="/Right.png" alt="AI-powered media" />
        </div>
      </div>
    </>
  );
};
