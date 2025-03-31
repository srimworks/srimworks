import React, { useState } from "react";
import { IMAGES } from "../utils/images.js";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
import "../styles/getInTouch.css";
import {sendEvent} from '../gtag.js'


const ContactForm = () => {
  const [loading, setLoading] = useState('Submit');
  const [submit_btn, setSubmit_btn] = useState('secondary-button-black-filled');
  const generateCaptcha = () => {
    return Math.random().toString(36).substring(2, 8); // Generates a random string
  };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    companyName: "",
    website: "",
    message: "",
    captcha: "",
    generatedCaptcha: generateCaptcha(), // Initial captcha value
    from:"Form Submitted from SRIM Works Website",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleMobile = (value) => {
    setFormData({ ...formData, mobile: value });
  };


  //Email Validation
  const isValidURL = (url) => {
    const urlPattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/;
    return urlPattern.test(url);
  };

  //Mobile Validation
  const validateMobile=(num)=>{
    const patt = /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
    return patt.test(num);
  }
  const validate=(data)=>{
    if (!validateMobile(data.mobile) || data.mobile.length<10){
      alert("Mobile Number must contain 10 numbers")
      return false;
    }
    if(!isValidURL(data.website)){
      alert('Please Enter Valid Website URL')
      return false
    }

    if (data.message.split(" ").length<10){
      alert("Your Message is too short")
      return false;
    }
    if(data.captcha!=data.generatedCaptcha ){
      alert("Captcha does not match! Please try again.");
      return false;
    }
    
      return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate captcha before submitting
    if (!validate(formData)) {
      // alert("Captcha does not match! Please try again.");
      return;
    }
    setLoading('Loading...');
    setSubmit_btn("secondary-button-black-loading")
    formData.mobile=`+${formData.mobile}`
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
        setLoading(!loading)
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          mobile: "",
          companyName: "",
          website: "",
          message: "",
          captcha: "",
          generatedCaptcha: generateCaptcha(), // Reset captcha on successful submission
          from:"Form Subbmitted from SRIM Works Website",
        });
        sendEvent()
        setLoading('Submitted Sucessfully');
        setTimeout(()=>{
          setLoading('Submit')
          setSubmit_btn('secondary-button-black-filled')
        },3000)
      } else {
        alert(`Failed to submit form: ${data.message || "Unknown error"}`);
        setLoading('Retry');
        setTimeout(()=>{
          setLoading('Submit')
          setSubmit_btn('secondary-button-black-filled')
        },3000)
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please check the console for details.");
      setLoading('Not Submitted Retry');
      setTimeout(()=>{
        setLoading('Submit')
        setSubmit_btn('secondary-button-black-filled')
      },5000)
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
            <img src={IMAGES.CALL_ICON} alt="CALL Icon" />
            <p id="l-bottom-container-text">
              {`USA/CA +1 (832) 501-3875,
               IND +91 (080) 6218-0277`}
            </p>
          </div>
          <div id="l-bottom-container">
            <img src={IMAGES.MAIL_ICON} alt="Mail Icon"/>
            <p id="l-bottom-container-text">info@srimworks.com</p>
          </div>
          <div id="l-bottom-container">
            <img src={IMAGES.LOCATION_ICON} alt="Location Icon"/>
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
                <PhoneInput
                  id="input"
                  country={'us'}
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleMobile}
                  placeholder="Mobile Number"
                  onClick={stopPropagation}
                  inputProps={{required:true}}
                  containerClass="custom-container"
                  inputClass="custom-input"
                  buttonClass="custom-button"
                  
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
                placeholder="Write Message minimum 10 words"
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
                  name="captcha"
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
                    <div className="captcha">{formData.generatedCaptcha}</div>
                  </div>
                  <img
                    src={IMAGES.REFRESH_ICON}
                    id="refresh"
                    onClick={() => setFormData({ ...formData, generatedCaptcha: generateCaptcha() })}
                    alt="Refresh Captcha"
                  />
                </div>
              </div>
            </div>
            <div className="check">
              <input
                type="checkbox"
                id="Accept_Privacy"
                name="Privacy"
                value="Checked"
                required
              ></input>
              <label htmlFor='Accept_Privacy' className="check-text">
                I agree to our <Link className="privacy" to="/privacy"> privacy policy </Link>
              </label>
            </div>
          </div>

          {/* <button type="submit" className="secondary-button-black-filled" disabled={loading}>
            {loading ? <div className="loading-spinner"></div> : "Submit"}
            </button> */}
            
          <button type="submit"  className={submit_btn} disabled ={loading!=='Submit'} >
          {loading }
            </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
