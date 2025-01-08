import React,{useState} from "react";
import '../styles/getInTouch.css'
// import {IMAGES} from '../utils/Images'
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    companyName: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try { 
      const response = await fetch("https://srimmedia-backend.onrender.com/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

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
        <div className="get-in-touch-contact">
          <div className="get-in-touch-contact-details">
            <div className="aside-tag">
              <hr className="aside-tag-hr" />
              <h2 className="aside-tag-heading">Email</h2>
            </div>
            <p className="get-in-touch-body">
              For inquiries, please feel free to contact us via email at
              Info@srimworks.com
            </p>
          </div>
          <div className="get-in-touch-contact-details">
            <div className="aside-tag">
              <hr className="aside-tag-hr" />
              <h2 className="aside-tag-heading">Phone</h2>
            </div>
            <p className="get-in-touch-body">
              Should you require any further assistance, do not hesitate to
              reach out to us at <br /> +91 (080) 6218-0277
            </p>
          </div>
          <div className="get-in-touch-contact-details">
            <div className="aside-tag">
              <hr className="aside-tag-hr" />
              <h2 className="aside-tag-heading">Head Office</h2>
            </div>
            <p className="get-in-touch-body">
              `GET PLACED INDIA PRIVATE LIMITED Rajapushpa Summit, SY. 130P &
              115/1P, Nanakramguda Rd, Ranga Reddy Dist., Financial District,
              Manikonda Jagir, Telangana 500032`
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="get-in-touch-social-media">
          {/* <IMAGES.FACEBOOK_ICON className="icon-fill"/>
          <IMAGES.TWITTER_ICON className="icon-fill"/>
          <IMAGES.LINKEDIN_ICON className="icon-fill"/>
          <IMAGES.INSTAGRAM_ICON className="icon-fill"/> */}
        </div>
      </div>

      <div className="get-in-touch-section-right">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-grid">
            <input
              className="input"
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="First Name"
              onClick={stopPropagation}
              required
            />
            <input
              className="input"
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Last Name"
              onClick={stopPropagation}
              required
            />
            <input
              className="input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              onClick={stopPropagation}
              required
            />
            <input
              className="input"
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              onClick={stopPropagation}
              required
            />
            <input
              className="input"
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              onClick={stopPropagation}
              required
            />
            <input
              className="input"
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Website"
              onClick={stopPropagation}
              required
            />
            <textarea
              className="input"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              onClick={stopPropagation}
              required
            ></textarea>
          </div>
          <button type="submit" onClick={(e)=>e.stopPropagation()} className="primary-button-filled">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
