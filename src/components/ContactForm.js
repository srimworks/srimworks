import React, { useState } from "react";
import "../styles/getInTouch.css";
import { IMAGES } from "../utils/images.js";
import { Link } from "react-router-dom";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    companyName: "",
    website: "",
    message: "",
    captcha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://srimmedia-backend.onrender.com/submit-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          mobile: "",
          companyName: "",
          website: "",
          message: "",
        });
      } else {
        alert(`Failed to submit form: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please check the console for details.");
    }
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="get-in-touch-section">
      <div className="get-in-touch-section-left">
        <div className="get-in-touch-l-top">
          <h4 className="l-top-tag">Get in Touch</h4>
          <h1 className="l-top-heading">Let’s chat. Reach out to us.</h1>
          <p className="l-top-content">
            Have questions or feedback? We’re here to help. Send us a message,
            and we’ll respond within 24 Hours
          </p>
        </div>
        <div className="get-in-touch-l-bottom">
          <div id="l-bottom-container">
            <img src={IMAGES.CALL_ICON} />
            <p id="l-bottom-container-text">
              USA/CA +1 (832) 501-3875, IND +91 (080) 6218-0277
            </p>
          </div>
          <div id="l-bottom-container">
            <img src={IMAGES.MAIL_ICON} />
            <p id="l-bottom-container-text">info@srimworks.com</p>
          </div>
          <div id="l-bottom-container">
            <img src={IMAGES.LOCATION_ICON} />
            <p id="l-bottom-container-text">
              GET PLACED INDIA PRIVATE LIMITED Rajapushpa Summit, SY. 130P &
              115/1P, Nanakramguda Rd, Ranga Reddy Dist., Financial District,
              Manikonda Jagir, Telangana 500032
            </p>
          </div>
        </div>
      </div>

      <div className="get-in-touch-section-right">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-grid">
            <div id="row">
              <div id="input-container">
                <label id="input-label">First Name *</label>
                <input
                  id="input"
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="First Name"
                  onClick={stopPropagation}
                  required
                />
              </div>
              <div id="input-container">
                <label id="input-label">Last Name *</label>
                <input
                  id="input"
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Last Name"
                  onClick={stopPropagation}
                  required
                />
              </div>
            </div>
            <div id="row">
              <div id="input-container">
                <label id="input-label">Email *</label>
                <input
                  id="input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  onClick={stopPropagation}
                  required
                />
              </div>
              <div id="input-container">
                <label id="input-label">Mobile Number *</label>
                <input
                  id="input"
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  onClick={stopPropagation}
                  required
                />
              </div>
            </div>
            <div id="row">
              <div id="input-container">
                <label id="input-label">Company Name *</label>
                <input
                  id="input"
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Company Name"
                  onClick={stopPropagation}
                  required
                />
              </div>
              <div id="input-container">
                <label id="input-label">Website *</label>
                <input
                  id="input"
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="Website"
                  onClick={stopPropagation}
                  required
                />
              </div>
            </div>
            <div id="input-container">
              <label id="input-label">Message *</label>
              <textarea
                id="input"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write Message"
                onClick={stopPropagation}
                required
              ></textarea>
            </div>
            <div id="row">
              <div id="input-container">
                <label id="input-label">Captcha *</label>
                <input
                  id="input"
                  type="text"
                  name="companyName"
                  value={formData.captcha}
                  onChange={handleChange}
                  placeholder="Enter Captcha"
                  onClick={stopPropagation}
                  required
                />
              </div>
              <div id="input-container">
                <div className="c-div">
                <div className="captcha-div">
                  <div className="captcha">eFif7</div>
                </div>
                <img src={IMAGES.REFRESH_ICON} id='refresh'/>
                </div>
                
              </div>
            </div>
            <div className="check">
              <input
                type="checkbox"
                id="Accept_Privacy"
                name="Privacy"
                value="Checked"
              ></input>

              <p className="check-text">
                I agree to our <Link className="privacy"> privacy policy </Link>
              </p>
            </div>
          </div>

          <button
            type="submit"
            onClick={(e) => e.stopPropagation()}
            className="primary-button"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
