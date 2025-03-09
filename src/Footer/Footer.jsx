import React from "preact/compat";
import "./Footer.css";

export const FooterComponent = () => {
  return (
    <footer className="footer-container">
      <div className="inner-footer-container">
        <div className="ul-container">
          <ul>
            <li>Product</li>
            <li>Webinar+</li>
            <li>Media+</li>
            <li>Generate Interest</li>
            <li>Capture Intent</li>
            <li>Prove Impact</li>
            <li>Repurpose Content</li>
          </ul>
          <ul>
            <li>Who are You</li>
            <li>Demand Gen Marketer</li>
            <li>Content Marketer</li>
            <li>Event Marketer</li>
            <li>Field Marketer</li>
            <li>Marketing OP</li>
            <li>CMO</li>
          </ul>
          <ul>
            <li>Resources</li>
            <li>People who love us</li>
            <li>People who hate us</li>
            <li>Our Webinars</li>
            <li>Our Thoughts</li>
            <li>Help</li>
          </ul>
          <ul>
            <li>About us</li>
            <li>Misson + values</li>
            <li>The Head Honchos</li>
            <li>The Gossip</li>
            <li>Our Contact Deets</li>
            <li>Join the team</li>
          </ul>

          <div class="ccpa-container">
            <img src="public/bsi.png" alt="" />
            <img src="public/bsi.png" alt="" />
            <img src="public/bsi.png" alt="" />
            <img src="public/gdpr.png" alt="" />
            <img src="public/ccpa.png" alt="" />
          </div>
        </div>

        <div className="footer-contact-container">
          <div className="contact-us-heading">
            <h2>Contact us</h2>
            <p>to see what Webinar + can do for your bussiness</p>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="g2-img-container">
            <img src="public/Frame 1000004479.png" alt="" />
            <p>Read our review on G2.com</p>
          </div>
          <div className="icon-div">
            <img src="public/linkdin.png" alt="" />
            <img src="public/facebook.png" alt="" />
            <img src="public/twitter.png" alt="" />
            <img src="public/instagram.png" alt="" />
          </div>
        </div>
      </div>
      <div className="copyright-div">
        <div>
          {" "}
          <p>@2025 Hubilo. All right reserved</p>
        </div>
        <div>
          <ul>
            <li></li>
            <li>terms of Use</li>
            <li>Privacy Policy</li>
            <li>Security and Compilance</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
