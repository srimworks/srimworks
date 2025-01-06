import React from "react";
import "../styles/footer.css";
import { IMAGES } from "../utils/images";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <hr className="footer-line" />
      <div className="footer-top">
        {/* <div className="column-1">
          <div className="logo-and-tittle">
            <img
              src={IMAGES.MAINlOGO}
              alt="mainLogo"
              className="main-logo-large"
            />
            <p className="logo-tittle">
              Scalable Results through Innovative Marketing
            </p>
          </div>
          <div className="news-letter-section">
            <h1 className="news-letter-tittle">Subscribe to our newsletter</h1>
            <form className="email-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="email-placeholder"
                onClick={(e)=>{e.stopPropagation()}}
              />
              <button className="primary-button">Subscribe</button>
            </form>
          </div>
        </div> */}
        <div className="column-content">
          {/* <div className="column-2">
            <h1 className="links-heading">Links</h1>
            <ul className="links">
              <li className="links-body">
                <Link to="/about" className="links-body">
                  About Us
                </Link>
              </li>
              <li className="links-body">
                <Link to="/options/option-1" className="links-body">
                  Services
                </Link>
              </li>
              <li className="links-body">
                <Link to="/options/product-1" className="links-body">
                  UI & UX
                </Link>
              </li>
              <li className="links-body">
              <Link to="/generals" className="links-body">
                 Resources
                </Link>
                </li>
            </ul>
          </div> */}
              <div className="column-3">
            <h1 className="links-heading">Home</h1>
          </div>
          <div className="column-3">
            <h1 className="links-heading">Who We Are</h1>
            <ul className="links">
              <li className="links-body">About Us</li>
              <li className="links-body">Leader Ship Team</li>
              <li className="links-body">Press Room</li>
              <li className="links-body">Carrers</li>
            </ul>
          </div>
          <div className="column-3">
            <h1 className="links-heading">Practises</h1>
            <ul className="links">
              <li className="links-body">Design</li>
              <li className="links-body">Digital Marketing</li>
              <li className="links-body">Big Data Analytics</li>
              <li className="links-body">AI & ML</li>
              <li className="links-body">Open Source Technologies</li>
              <li className="links-body">Cloud Computing</li>
              <li className="links-body">ERP & CRM Solutions</li>

            </ul>
          </div>
          <div className="column-3">
            <h1 className="links-heading">Offerings</h1>
            <ul className="links">
              <li className="links-body">Innovation & Research Lab</li>
              <li className="links-body">Prod Dev Lifecycle</li>
              <li className="links-body">Creative Media Solutions</li>
              <li className="links-body">Lean Product Engineering</li>
              <li className="links-body">Professional Services</li>
              <li className="links-body">Channel Partners</li>
            </ul>
          </div>
          <div className="column-3">
            <h1 className="links-heading">Industries</h1>
            <ul className="links">
              <li className="links-body">Marine</li>
              <li className="links-body">Logistics</li>
              <li className="links-body">Real Estate</li>
              <li className="links-body">Retail</li>
              <li className="links-body">e-Commerce</li>
              <li className="links-body">Pharma</li>
              <li className="links-body">FMCG</li>
              <li className="links-body">Health Care</li>
              <li className="links-body">BFSI</li>
            </ul>
          </div>
          <div className="column-3">
            <h1 className="links-heading">Resources</h1>
            <li className="links-body">Blogs</li>
              <li className="links-body">Case Studies</li>
              <li className="links-body">Submit Your Review</li>
          </div>
          <div className="column-3">
            <h1 className="links-heading">Carrers</h1>
          </div>
          <div className="column-3">
            <h1 className="links-heading">Contact Us</h1>
          </div>
        </div>
      </div>
      <hr className="footer-line" />
      <div className="footer-bottom">
        <div className="footer-bottom-text">
          <p className="footer-bottom-text-1">© 2024 · SRIM Media</p>
          <p className="footer-bottom-text-1">· Terms</p>
          <p className="footer-bottom-text-1">· Privacy</p>
        </div>
        <div className="social-media">
          {/* <IMAGES.FACEBOOK_ICON className="icon-fill"/>
          <IMAGES.TWITTER_ICON className="icon-fill"/>
          <IMAGES.LINKEDIN_ICON className="icon-fill"/>
          <IMAGES.INSTAGRAM_ICON className="icon-fill"/> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
