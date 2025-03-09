import React, { useState } from "preact/compat";
import "./Faq.css";

export const FaqQuestionComp = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "1. How is Media+ beneficial for Marketers?",
      answer:
        "Media+ helps marketers streamline content distribution. It offers deep analytics to track engagement and optimize performance. Additionally, it integrates seamlessly with CRM and marketing automation tools for better lead nurturing.",
    },
    {
      question:
        "2. How does Media+ improve user retention, engagement & help in generating more leads?",
      answer:
        "Media+ boosts user retention with personalized recommendations and interactive video features. Advanced analytics help track engagement, allowing marketers to optimize content strategies. Integrated CTAs and lead capture forms convert engagement into actionable leads.",
    },
    {
      question: "3. How does Media+ result in better brand visibility?",
      answer:
        "Custom branding options ensure a consistent brand identity across media content. SEO-optimized video pages improve discoverability on search engines. Social sharing features increase reach and audience engagement.",
    },
    {
      question: "4. How does Media+ simplify video content management?",
      answer:
        "Media+ offers a centralized library for seamless video storage and retrieval. AI-powered tagging and metadata help in quick content categorization. Automated workflows streamline content publishing and organization.",
    },
    {
      question: "5. How does Media+ use AI to improve content discovery?",
      answer:
        "AI-driven recommendations suggest relevant content based on user behavior. Automated transcription and keyword tagging enhance searchability. Smart categorization ensures easy navigation for users.",
    },
    {
      question: "6. What kind of analytics does Media+ provide?",
      answer:
        "Media+ offers real-time insights into viewer engagement, watch time, and drop-off rates. Audience segmentation helps identify high-value prospects. Performance reports assist in optimizing video content strategy.",
    },
    {
      question:
        "7. Can Media+ integrate with my existing MAP tools like Hubspot?",
      answer:
        "Yes, Media+ seamlessly integrates with Hubspot, Marketo, and other MAP tools. It enables automated lead syncing for better follow-ups. This integration helps streamline marketing campaigns and audience segmentation.",
    },
    {
      question: "8. How many videos can I host in one Media+ site?",
      answer:
        "Media+ supports an extensive video library with scalable storage options. Users can manage thousands of videos efficiently. The platform ensures high-speed playback and adaptive streaming for optimal performance.",
    },
  ];

  return (
    <div className="faq-container">
      <div className="faq-heading">
        <p>Our top-list of commonly asked questions</p>
        <h1>FAQs</h1>
      </div>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-header" onClick={() => toggleAnswer(index)}>
            <h3>{item.question}</h3>
            <span className="faq-icon">{openIndex === index ? "-" : "+"}</span>
          </div>
          {openIndex === index && <p className="faq-answer">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};
