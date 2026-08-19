import React, { useState, useEffect, useRef } from "react";
import { IMAGES } from "../utils/images.js";
import "../styles/getInTouch.css";
import { sendEvent } from "../gtag.js";

const TURNSTILE_SITEKEY = "0x4AAAAAAEVQMmY5UZUp1Jnp";

const ContactForm = () => {
  const [loading, setLoading] = useState("Submit Message");
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    window.onTurnstileSuccess = (token) => {
      setTurnstileToken(token);
      setFormStatus({ type: null, message: "" });
    };

    window.onTurnstileExpired = () => {
      setTurnstileToken("");
    };

    window.onTurnstileError = () => {
      setTurnstileToken("");
    };

    const tryRender = () => {
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
            size: "normal"
          });
        } catch (e) {
          // May already be rendered
        }
      }
    };

    if (window.turnstile) {
      if (typeof window.turnstile.ready === 'function') {
        window.turnstile.ready(tryRender);
      } else {
        tryRender();
      }
    } else {
      let script = document.getElementById("cf-turnstile-script");
      if (!script) {
        script = document.createElement("script");
        script.id = "cf-turnstile-script";
        script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
        script.async = true;
        script.defer = true;
        script.onload = () => {
          if (window.turnstile) {
            window.turnstile.ready(tryRender);
          }
        };
        document.head.appendChild(script);
      }
    }

    const intervalId = setInterval(() => {
      const hidden = document.querySelector('[name="cf-turnstile-response"]');
      if (hidden && hidden.value && !turnstileToken) {
        setTurnstileToken(hidden.value);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
      delete window.onTurnstileSuccess;
      delete window.onTurnstileExpired;
      delete window.onTurnstileError;
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (formStatus.type) {
      setFormStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstname.trim()) {
      setFormStatus({ type: "error", message: "Please enter your first name." });
      return;
    }
    if (!formData.lastname.trim()) {
      setFormStatus({ type: "error", message: "Please enter your last name." });
      return;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      setFormStatus({ type: "error", message: "Please enter a valid corporate email address." });
      return;
    }
    if (!formData.mobile.trim()) {
      setFormStatus({ type: "error", message: "Please enter your contact phone number." });
      return;
    }
    if (!formData.companyName.trim()) {
      setFormStatus({ type: "error", message: "Please enter your company or organization name." });
      return;
    }
    if (!formData.message.trim()) {
      setFormStatus({ type: "error", message: "Please enter your message or project requirements." });
      return;
    }
    if (!formData.privacyAccepted) {
      setFormStatus({ type: "error", message: "Please accept the Privacy Policy to proceed." });
      return;
    }

    let effectiveToken = turnstileToken;
    if (!effectiveToken) {
      const hidden = document.querySelector('[name="cf-turnstile-response"]');
      if (hidden && hidden.value) {
        effectiveToken = hidden.value;
        setTurnstileToken(hidden.value);
      }
    }

    setIsSubmitting(true);
    setLoading("Sending inquiry...");
    setFormStatus({ type: null, message: "" });

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
          turnstileToken: effectiveToken,
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
          try { window.turnstile.reset(widgetIdRef.current); } catch (e) {}
        }

        setLoading("Message Sent ✓");
        setIsSubmitting(false);

        setTimeout(() => {
          setLoading("Submit Message");
        }, 5000);
      } else {
        setFormStatus({
          type: "error",
          message: data.error || "Failed to submit form. Please check your details and try again.",
        });
        setLoading("Retry Submission");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setFormStatus({
        type: "error",
        message: "Network error submitting inquiry. Please contact us directly at info@srimworks.com.",
      });
      setLoading("Retry Submission");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-hub-section" aria-label="Contact and Consultation Hub">
      <div className="contact-hub-container">
        
        {/* Left Column: Contact Channels & Credentials */}
        <div className="contact-hub-left">
          <div className="contact-hub-header">
            <span className="contact-pill-tag">Get in Touch</span>
            <h2 className="contact-main-heading">Let’s discuss your next breakthrough.</h2>
            <p className="contact-main-subtitle">
              Have questions about enterprise AI models, precision data annotations, or digital platform modernization? Our senior architects are ready to assist.
            </p>
          </div>

          <div className="contact-channels-list">
            <div className="contact-channel-card">
              <div className="channel-icon-wrap">
                <img src={IMAGES.CALL_ICON} alt="" width="22" height="22" loading="lazy" />
              </div>
              <div className="channel-info">
                <span className="channel-label">Direct Lines</span>
                <a href="tel:+18325013875" className="channel-value">USA / CA: +1 (832) 501-3875</a>
                <a href="tel:+9108062180277" className="channel-value">IND: +91 (080) 6218-0277</a>
              </div>
            </div>

            <div className="contact-channel-card">
              <div className="channel-icon-wrap">
                <img src={IMAGES.MAIL_ICON} alt="" width="22" height="22" loading="lazy" />
              </div>
              <div className="channel-info">
                <span className="channel-label">Corporate Inquiries</span>
                <a href="mailto:info@srimworks.com" className="channel-value">info@srimworks.com</a>
              </div>
            </div>

            <div className="contact-channel-card">
              <div className="channel-icon-wrap">
                <img src={IMAGES.LOCATION_ICON} alt="" width="22" height="22" loading="lazy" />
              </div>
              <div className="channel-info">
                <span className="channel-label">Global Delivery HQ</span>
                <p className="channel-text">
                  Rajapushpa Summit, Financial District, Nanakramguda, Hyderabad, Telangana 500032, India
                </p>
              </div>
            </div>
          </div>

          <div className="contact-assurances">
            <div className="assurance-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>Strict Mutual NDA & Enterprise IP Protection</span>
            </div>
            <div className="assurance-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>Guaranteed 24-Hour Business SLA Response</span>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Consultation Form Card */}
        <div className="contact-hub-right">
          <div className="contact-form-card">
            <div className="form-card-header">
              <h3 className="form-card-title">Schedule a Consultation</h3>
              <p className="form-card-desc">Fill out the form below to connect with an engineering lead.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form-body" noValidate>
              <div className="form-row-2col">
                <div className="form-field-group">
                  <label className="form-field-label" htmlFor="contact-firstname">First Name *</label>
                  <input
                    id="contact-firstname"
                    type="text"
                    name="firstname"
                    className="form-field-input"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="First Name"
                    autoComplete="given-name"
                    required
                  />
                </div>
                <div className="form-field-group">
                  <label className="form-field-label" htmlFor="contact-lastname">Last Name *</label>
                  <input
                    id="contact-lastname"
                    type="text"
                    name="lastname"
                    className="form-field-input"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Last Name"
                    autoComplete="family-name"
                    required
                  />
                </div>
              </div>

              <div className="form-row-2col">
                <div className="form-field-group">
                  <label className="form-field-label" htmlFor="contact-email">Corporate Email *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    className="form-field-input"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="form-field-group">
                  <label className="form-field-label" htmlFor="contact-mobile">Phone Number *</label>
                  <div className="form-phone-wrapper">
                    <select
                      name="countryCode"
                      className="form-phone-select"
                      value={formData.countryCode}
                      onChange={handleChange}
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
                      className="form-field-input phone-input"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Mobile Number"
                      autoComplete="tel-national"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-row-2col">
                <div className="form-field-group">
                  <label className="form-field-label" htmlFor="contact-company">Company / Organization *</label>
                  <input
                    id="contact-company"
                    type="text"
                    name="companyName"
                    className="form-field-input"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Your Company Name"
                    autoComplete="organization"
                    required
                  />
                </div>
                <div className="form-field-group">
                  <label className="form-field-label" htmlFor="contact-website">Company Website</label>
                  <input
                    id="contact-website"
                    type="url"
                    name="website"
                    className="form-field-input"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourcompany.com"
                    autoComplete="url"
                  />
                </div>
              </div>

              <div className="form-field-group full-width">
                <label className="form-field-label" htmlFor="contact-message">Project Requirements / Inquiry *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-field-textarea"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your technical objectives, timeline, or team scaling needs..."
                  required
                ></textarea>
              </div>

              {/* Turnstile Security Widget */}
              <div className="form-turnstile-container">
                <div ref={turnstileContainerRef} className="cf-turnstile"></div>
              </div>

              {/* Privacy Consent Checkbox */}
              <div className="form-privacy-wrapper">
                <label className="form-checkbox-label">
                  <input
                    type="checkbox"
                    name="privacyAccepted"
                    checked={formData.privacyAccepted}
                    onChange={handleChange}
                    className="form-checkbox-input"
                    required
                  />
                  <span>
                    I agree to the <a href="/privacy" target="_blank" rel="noopener noreferrer" className="privacy-link">Privacy Policy</a> and consent to SRIM WORKS processing my information.
                  </span>
                </label>
              </div>

              {/* Status Alert Banner */}
              {formStatus.message && (
                <div className={`form-status-alert ${formStatus.type}`}>
                  {formStatus.type === "success" ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  )}
                  <span>{formStatus.message}</span>
                </div>
              )}

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="form-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="btn-loading-state">
                    <span className="spinner-circle"></span>
                    {loading}
                  </span>
                ) : (
                  <span>{loading} →</span>
                )}
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
