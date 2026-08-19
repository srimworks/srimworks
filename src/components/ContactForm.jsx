import React, { useState, useEffect, useRef } from "react";
import { IMAGES } from "../utils/images.js";
import "../styles/getInTouch.css";
import { sendEvent } from "../gtag.js";

const Link = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>;

const TURNSTILE_SITEKEY = "0x4AAAAAAEVQMmY5UZUp1Jnp";

const ContactForm = () => {
  const [loading, setLoading] = useState("Submit");
  const [submitBtnClass, setSubmitBtnClass] = useState("secondary-button-black-filled");
  const [formStatus, setFormStatus] = useState({ type: null, message: "" });
  const [turnstileToken, setTurnstileToken] = useState("");
  const turnstileContainerRef = useRef(null);
  const widgetIdRef = useRef(null);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    countryCode: "+1",
    mobile: "",
    companyName: "",
    website: "",
    message: "",
    privacyAccepted: false,
  });

  // Load and initialize Cloudflare Turnstile
  useEffect(() => {
    let script = document.getElementById("cf-turnstile-script");
    
    const initWidget = () => {
      if (window.turnstile && turnstileContainerRef.current && widgetIdRef.current === null) {
        try {
          widgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
            sitekey: TURNSTILE_SITEKEY,
            callback: (token) => {
              setTurnstileToken(token);
              setFormStatus({ type: null, message: "" });
            },
            "expired-callback": () => {
              setTurnstileToken("");
            },
            "error-callback": () => {
              setTurnstileToken("");
            },
            theme: "light",
            size: "flexible"
          });
        } catch (e) {
          console.warn("Turnstile render note:", e);
        }
      }
    };

    if (!script) {
      script = document.createElement("script");
      script.id = "cf-turnstile-script";
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.turnstile) {
          window.turnstile.ready(initWidget);
        }
      };
      document.head.appendChild(script);
    } else if (window.turnstile) {
      window.turnstile.ready(initWidget);
    }

    return () => {
      if (window.turnstile && widgetIdRef.current !== null) {
        try {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        } catch (e) {}
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (formStatus.type === "error") {
      setFormStatus({ type: null, message: "" });
    }
  };

  const validateForm = () => {
    if (!formData.firstname.trim() || !formData.lastname.trim()) {
      setFormStatus({ type: "error", message: "Please enter your full name." });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setFormStatus({ type: "error", message: "Please enter a valid business email address." });
      return false;
    }

    if (!formData.mobile.trim() || formData.mobile.replace(/\D/g, "").length < 7) {
      setFormStatus({ type: "error", message: "Please enter a valid contact phone number." });
      return false;
    }

    if (formData.message.trim().length < 10) {
      setFormStatus({ type: "error", message: "Please provide a brief description of your project or inquiry (minimum 10 characters)." });
      return false;
    }

    if (!formData.privacyAccepted) {
      setFormStatus({ type: "error", message: "Please agree to the privacy policy before submitting." });
      return false;
    }

    if (!turnstileToken) {
      setFormStatus({ type: "error", message: "Please complete the security verification." });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading("Sending securely...");
    setSubmitBtnClass("secondary-button-black-loading");

    const fullMobile = `${formData.countryCode} ${formData.mobile.trim()}`;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname: formData.firstname.trim(),
          lastname: formData.lastname.trim(),
          email: formData.email.trim(),
          mobile: fullMobile,
          companyName: formData.companyName.trim(),
          website: formData.website.trim(),
          message: formData.message.trim(),
          turnstileToken: turnstileToken,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        try { sendEvent(); } catch (err) {}

        setFormStatus({
          type: "success",
          message: data.message || "Your inquiry has been securely received by SRIM WORKS. An enterprise solution architect will get back to you within 24 hours.",
        });

        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          countryCode: "+1",
          mobile: "",
          companyName: "",
          website: "",
          message: "",
          privacyAccepted: false,
        });

        setTurnstileToken("");
        if (window.turnstile && widgetIdRef.current !== null) {
          window.turnstile.reset(widgetIdRef.current);
        }

        setLoading("Message Sent ✓");
        setSubmitBtnClass("secondary-button-black-filled");

        setTimeout(() => {
          setLoading("Submit");
        }, 5000);
      } else {
        setFormStatus({
          type: "error",
          message: data.error || "Failed to submit form. Please check your details and try again.",
        });
        setLoading("Retry Submission");
        setSubmitBtnClass("secondary-button-black-filled");
        if (window.turnstile && widgetIdRef.current !== null) {
          window.turnstile.reset(widgetIdRef.current);
          setTurnstileToken("");
        }
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus({
        type: "error",
        message: "Network error submitting inquiry. Please check your connection or contact us directly at info@srimworks.com.",
      });
      setLoading("Retry Submission");
      setSubmitBtnClass("secondary-button-black-filled");
    }
  };

  return (
    <div className="get-in-touch-section">
      <div className="get-in-touch-section-left">
        <div className="get-in-touch-l-top">
          <h4 className="l-top-tag">Get in Touch</h4>
          <h1 className="l-top-heading">Let’s chat. Reach out to us.</h1>
          <p className="l-top-content">
            Have questions about enterprise AI, data annotation, or digital platforms? Send us a message, and our engineering team will respond within 24 hours.
          </p>
        </div>
        <div className="get-in-touch-l-bottom">
          <div id="l-bottom-container">
            <img src={IMAGES.CALL_ICON} alt="Phone" width="24" height="24" loading="lazy" />
            <p id="l-bottom-container-text">
              USA/CA +1 (832) 501-3875<br />
              IND +91 (080) 6218-0277
            </p>
          </div>
          <div id="l-bottom-container">
            <img src={IMAGES.MAIL_ICON} alt="Email" width="24" height="24" loading="lazy" />
            <p id="l-bottom-container-text">
              <a href="mailto:info@srimworks.com" style={{ color: "inherit", textDecoration: "none" }}>info@srimworks.com</a>
            </p>
          </div>
          <div id="l-bottom-container">
            <img src={IMAGES.LOCATION_ICON} alt="Office Location" width="24" height="24" loading="lazy" />
            <p id="l-bottom-container-text">
              Rajapushpa Summit, SY. 130P & 115/1P, Nanakramguda Rd, Financial District, Manikonda Jagir, Hyderabad, Telangana 500032
            </p>
          </div>
        </div>
      </div>

      <div className="get-in-touch-section-right">
        <form onSubmit={handleSubmit} className="form" noValidate>
          <div className="form-grid">
            <div id="row">
              <div id="input-container">
                <label id="input-label" htmlFor="contact-firstname">First Name *</label>
                <input
                  id="contact-firstname"
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="First Name"
                  autoComplete="given-name"
                  required
                />
              </div>
              <div id="input-container">
                <label id="input-label" htmlFor="contact-lastname">Last Name *</label>
                <input
                  id="contact-lastname"
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Last Name"
                  autoComplete="family-name"
                  required
                />
              </div>
            </div>

            <div id="row">
              <div id="input-container">
                <label id="input-label" htmlFor="contact-email">Corporate Email *</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  autoComplete="email"
                  required
                />
              </div>
              <div id="input-container">
                <label id="input-label" htmlFor="contact-mobile">Phone Number *</label>
                <div style={{ display: "flex", gap: "8px", width: "100%" }}>
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    style={{
                      width: "90px",
                      padding: "10px 6px",
                      borderRadius: "6px",
                      border: "1px solid #ccc",
                      fontSize: "14px",
                      background: "#fff",
                      cursor: "pointer"
                    }}
                    aria-label="Country Dial Code"
                  >
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+971">🇦🇪 +971</option>
                    <option value="+65">🇸🇬 +65</option>
                  </select>
                  <input
                    id="contact-mobile"
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile / Office Phone"
                    autoComplete="tel-national"
                    style={{ flex: 1 }}
                    required
                  />
                </div>
              </div>
            </div>

            <div id="row">
              <div id="input-container">
                <label id="input-label" htmlFor="contact-company">Company / Organization *</label>
                <input
                  id="contact-company"
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Your Company Name"
                  autoComplete="organization"
                  required
                />
              </div>
              <div id="input-container">
                <label id="input-label" htmlFor="contact-website">Website (Optional)</label>
                <input
                  id="contact-website"
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://yourcompany.com"
                  autoComplete="url"
                />
              </div>
            </div>

            <div id="input-container">
              <label id="input-label" htmlFor="contact-message">Project Description / Requirements *</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project requirements, data annotation needs, or timeline..."
                rows="4"
                required
              ></textarea>
            </div>

            {/* Cloudflare Turnstile Bot Protection */}
            <div style={{ marginTop: "8px", minHeight: "65px" }}>
              <div ref={turnstileContainerRef} id="cf-turnstile-container"></div>
            </div>

            {/* Privacy Checkbox */}
            <div className="check" style={{ marginTop: "4px" }}>
              <input
                type="checkbox"
                id="Accept_Privacy"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleChange}
                required
              />
              <label htmlFor="Accept_Privacy" className="check-text">
                I agree to the <Link className="privacy" to="/privacy">privacy policy</Link> and consent to being contacted regarding this inquiry.
              </label>
            </div>

            {/* Accessible Inline Status / Alert Box */}
            {formStatus.message && (
              <div
                role="alert"
                aria-live="polite"
                style={{
                  padding: "12px 16px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 500,
                  marginTop: "8px",
                  color: formStatus.type === "success" ? "#065f46" : "#991b1b",
                  backgroundColor: formStatus.type === "success" ? "#d1fae5" : "#fee2e2",
                  border: `1px solid ${formStatus.type === "success" ? "#a7f3d0" : "#fecaca"}`
                }}
              >
                {formStatus.message}
              </div>
            )}
          </div>

          <button
            type="submit"
            className={submitBtnClass}
            disabled={loading.startsWith("Sending") || loading.startsWith("Message Sent")}
            style={{ marginTop: "16px" }}
          >
            {loading}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
