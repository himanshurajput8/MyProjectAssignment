import React from "preact/compat";
import "./Media.css";

export const MediaFeatureComp = () => {
  return (
    <div className="media-container">
      <h2>Explore</h2>
      <h1>Media + Features</h1>
      <div className="media-offering-div">
        <img src="public/Offering.png" alt="Media Offering" />
      </div>
      <div class="inner-div-1">
        <div>
          <span>
            <img src="public/Icon (5).png" alt="" />
          </span>{" "}
          <h1>Media Library</h1>
          <li>
            25 video uploads included, 1 Media site with options to add more
          </li>
          <li>Upload videos directly from your computer</li>
          <li>Import past event recordings in a few clicks</li>
          <li>Effortlessly set up new events or import details</li>
        </div>
        <div>
          <span>
            <img src="public/Icon (4).png" alt="" />
          </span>
          <h1>Automated process</h1>
          <li>AI-generated metadata</li>
          <li>AI-generated thumbnails, transcripts &speaker lists</li>
          <li>AI-generated tags by category & audience</li>
          <li>
            Auto-transfer videos from Hubilo webinars & digital events to Media+
          </li>
        </div>
        <div>
          <span>
            <img src="public/Icon (3).png" alt="" />
          </span>
          <h1>branding & Personalization</h1>
          <li>Use your logo and accent color; choose light or dark themes</li>
          <li>Create a unique media site URL withyour own domain</li>
          <li>
            Use preference forms to deliver tailored content to your audience
          </li>
        </div>
      </div>
      <div class="inner-div-2">
        <div>
          <span>
            <img src="public/Icon (2).png" alt="" />
          </span>
          <h1>Vedio Players</h1>
          <li>
            Top video quality with descriptions, speaker info, resources, and
            recommendations
          </li>
          <li>Integrated CTAs for better engagement</li>
          <li>Ask questions and share content easily</li>
          <li>Navigate through video chapters seamlessly</li>
        </div>
        <div>
          <span>
            <img src="public/Icon.png" alt="" />
          </span>
          <h1>Deep analytics</h1>
          <li>Comprehensive analytics on your media engagement</li>
          <li>Video level analytics</li>
          <li>Audience level analytics</li>
        </div>
        <div>
          <span>
            <img src="public/Icon (1).png" alt="" />
          </span>
          <h1>boost your pipeline</h1>
          <li>CTAs linked to MAP/CRM</li>
          <li>Gate your content with forms</li>
          <li>Capture pipeline and engagement data via CRM (HubSpot)</li>
        </div>
      </div>
      <img className="pricing-card" src="public/Pricing card.png" alt="" />
    </div>
  );
};
