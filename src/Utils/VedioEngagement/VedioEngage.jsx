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
    { title: "Curate your video media collection with an AI powered library", text: "Math is a good subject" },
    { title: "Build, Brand & Publish your Media+", text: "Publish your on-demand media faster than ever using Media+. Add your custom branding and host all your media on your website or any other custom URL of your choice." },
    { title: "Gate your media, capture leads & connect your CRM - it’s easy", text: "English is a good subject" },
    { title: "Track your views - with detailed analytics.", text: "History is a good subject" },
  ];

  return (
    <div className="engage-container">
      <div>
        {subjects.map((subject, index) => (
          <div key={index} className={`div${index + 1}`}>
            <h4>{subject.title}</h4>
            {visible[index] && <p>{subject.text}</p>}
            <i
              className={`fa-solid ${visible[index] ? "fa-minus" : "fa-plus"}`}
              onClick={() => toggleVisibility(index)}
              style={{ cursor: "pointer" }}
            ></i>
          </div>
        ))}
      </div>
      <div class="ai-img">
        <img src="public/Right.png" alt="" />
      </div>
    </div>
  );
};
