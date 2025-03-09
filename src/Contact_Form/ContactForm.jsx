import React, { useState } from "react";
import "./Contact.css";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    companyName: "",
    phone: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    setFormData({
      email: "",
      firstName: "",
      lastName: "",
      companyName: "",
      phone: "",
      consent: false,
    });
  };

  return (
    <div className="contact-container">
      {/* Left Side Image */}
      <div className="contact-image">
        <img src="/Contact_form/Left.png" alt="Contact Form Decoration" />
      </div>

      {/* Form Section */}
      <div className="contact-form-container">
        <h2 className="form-title">Take the Full Media+ Tour</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          {/* Business Email */}
          <label className="form-label">
            <span className="form-label-text">Business email</span>
            <input
              type="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          {/* First Name & Last Name */}
          <div className="name-fields">
            <label className="form-label name-input">
              <span className="form-label-text">First Name</span>
              <input
                type="text"
                name="firstName"
                className="form-input fname"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>

            <label className="form-label name-input">
              <span className="form-label-text">Last Name</span>
              <input
                type="text"
                name="lastName"
                className="form-input lname"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          {/* Company Name */}
          <label className="form-label">
            <span className="form-label-text">Company name</span>
            <input
              type="text"
              name="companyName"
              className="form-input"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </label>

          {/* Phone Number */}
          <label className="form-label">
            <span className="form-label-text">Phone</span>
            <input
              type="tel"
              name="phone"
              className="form-input"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>

          {/* Consent Checkbox */}
          <label className="form-checkbox">
            <input
              type="checkbox"
              name="consent"
              className="checkbox-input"
              checked={formData.consent}
              onChange={handleChange}
              required
            />
            <span className="checkbox-text">
              I agree to Hubilo’s{" "}
              <a href="#" className="form-link">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="form-link">
                Privacy Policy
              </a>
            </span>
          </label>

          {/* Submit Button */}
          <button type="submit" className="form-submit-btn">
            Get a free demo
          </button>
        </form>
      </div>
    </div>
  );
};
