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
              <Link to="/"><li className="links-body">
                <Link to="/"><Link to="/about" className="links-body">
                  About Us
                </Link>
              </li></Link>
              <Link to="/"><li className="links-body">
                <Link to="/"><Link to="/options/option-1" className="links-body">
                  Services
                </Link>
              </li></Link>
              <Link to="/"><li className="links-body">
                <Link to="/"><Link to="/options/product-1" className="links-body">
                  UI & UX
                </Link>
              </li></Link>
              <Link to="/"><li className="links-body">
              <Link to="/"><Link to="/generals" className="links-body">
                 Resources
                </Link>
                </li></Link>
            </ul>
          </div> */}
              <div className="column-3">
            <h1 className="links-heading">Home</h1>
          </div>
          <div className="column-3">
            <h1 className="links-heading">Who We Are</h1>
            <ul className="links">
              <Link to="/about-us"><li className="links-body">About Us</li></Link>
              <Link to="/leadership"><li className="links-body">LeaderShip Team</li></Link>
              <Link to="/pressroom"><li className="links-body">Press Room</li></Link>
              <Link to="/carrers"><li className="links-body">Carrers</li></Link>
            </ul>
          </div>
          <div className="column-3">
            <h1 className="links-heading">Practises</h1>
            <ul className="links">
            <Link to='/design'><li className="links-body">Design</li></Link>
              <Link to="/digital-marketing"><li className="links-body">Digital Engineering</li></Link>
              <Link to="/big-data"><li className="links-body">Big Data Analytics</li></Link>
              <Link to="/AI&ML"><li className="links-body">AI & ML</li></Link>
              <Link to="/open-source"><li className="links-body">Open Source Technologies</li></Link>
              <Link to="/cloud-computing"><li className="links-body">Cloud Computing</li></Link>
              <Link to="/erp-crm"><li className="links-body">ERP & CRM Solutions</li></Link>

            </ul>
          </div>
          <div className="column-3">
            <h1 className="links-heading">Offerings</h1>
            <ul className="links">
              <Link to="/innovation &research"><li className="links-body">Innovation & Research Lab</li></Link>
              <Link to="/prod dev-lifecycle"><li className="links-body">Prod Dev Lifecycle</li></Link>
              {/* <Link to="/"><li className="links-body">Creative Media Solutions</li></Link> */}
              <Link to="/lean prod-engineering"><li className="links-body">Lean Product Engineering</li></Link>
              <Link to="/professional-services"><li className="links-body">Professional Services</li></Link>
              <Link to="/channel-partners"><li className="links-body">Channel Partners</li></Link>
            </ul>
          </div>
          <div className="column-3">
            <h1 className="links-heading">Industries</h1>
            <ul className="links">
              <Link to="/marine"><li className="links-body">Marine</li></Link>
              <Link to="/logistics"><li className="links-body">Logistics</li></Link>
              <Link to="/real-estate"><li className="links-body">Real Estate</li></Link>
              <Link to="/retail"><li className="links-body">Retail</li></Link>
              <Link to="/e-commerce"><li className="links-body">e-Commerce</li></Link>
              <Link to="/media-entertainment"><li className="links-body">Media and Entertainment</li></Link>
              <Link to="/fmcg"><li className="links-body">FMCG</li></Link>
              <Link to="/health-care"><li className="links-body">Health Care</li></Link>
              <Link to="/bfsi"><li className="links-body">BFSI</li></Link>
            </ul>
          </div>
          <div className="column-3">
            <h1 className="links-heading">Resources</h1>
            <Link to="/blogs"><li className="links-body">Blogs</li></Link>
              <Link to="/case-studies"><li className="links-body">Case Studies</li></Link>
              <Link to="/reviews"><li className="links-body">Submit Your Review</li></Link>
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
