import React from "react";
import "../styles/footer.css";
import { IMAGES } from "../utils/images";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      
      <div className="footer-bottom">
        <div className="footer-bottom-text">
          <img src={IMAGES.FOOTER_ICON}/>
          
        </div>
        <div className="social-media">
        <img src={IMAGES.FACEBOOK_ICON}/>
        <img src={IMAGES.TWITTER_ICON}/>
        <img src={IMAGES.LINKEDIN_ICON}/>
        <img src={IMAGES.INSTAGRAM_ICON}/>
        </div>
      </div>
      <hr className="footer-line" />
     
        <div className="column-content">
          
              <div className="column">
            <h1 className="links-heading">Home</h1>
          </div>
          <div className="column">
            <h1 className="links-heading">Who We Are</h1>
            <ul className="links">
              <Link to="/about-us" className="link"><li className="links-body">About Us</li></Link>
              <Link to="/about-us#leader-ship" className="link"><li className="links-body">LeaderShip Team</li></Link>
              <Link to="/pressroom" className="link"><li className="links-body">Press Room</li></Link>
              <Link to="/careers" className="link"><li className="links-body">Carrers</li></Link>
            </ul>
          </div>
          <div className="column">
            <h1 className="links-heading">Practices</h1>
            <ul className="links">
            <Link to='/design' className="link"><li className="links-body">Design</li></Link>
              <Link to="/digital-marketing" className="link"><li className="links-body">Digital Engineering</li></Link>
              <Link to="/big-data" className="link"><li className="links-body">Big Data Analytics</li></Link>
              <Link to="/AI&ML" className="link"><li className="links-body">AI & ML</li></Link>
              <Link to="/open-source" className="link"><li className="links-body">Open Source Technologies</li></Link>
              <Link to="/cloud-computing" className="link"><li className="links-body">Cloud Computing</li></Link>
              <Link to="/erp-crm" className="link"><li className="links-body">ERP & CRM Solutions</li></Link>

            </ul>
          </div>
          <div className="column">
            <h1 className="links-heading">Offerings</h1>
            <ul className="links">
              <Link to="/innovation-research" className="link"><li className="links-body">Innovation & Research Lab</li></Link>
              <Link to="/prod-dev-lifecycle" className="link"><li className="links-body">Prod Dev Lifecycle</li></Link>
              {/* <Link to="/"><li className="links-body">Creative Media Solutions</li></Link> */}
              <Link to="/lean-product-engineering" className="link"><li className="links-body">Lean Product Engineering</li></Link>
              <Link to="/professional-services" className="link"><li className="links-body">Professional Services</li></Link>
              <Link to="/channel-partners" className="link"><li className="links-body">Channel Partners</li></Link>
            </ul>
          </div>
          <div className="column">
            <h1 className="links-heading">Industries</h1>
            <ul className="links">
              <Link to="/marine" className="link"><li className="links-body">Marine</li></Link>
              <Link to="/logistics" className="link"><li className="links-body">Logistics</li></Link>
              <Link to="/real-estate" className="link"><li className="links-body">Real Estate</li></Link>
              <Link to="/retail" className="link"><li className="links-body">Retail</li></Link>
              <Link to="/e-commerce" className="link"><li className="links-body">e-Commerce</li></Link>
              <Link to="/media-entertainment" className="link"><li className="links-body">Media and Entertainment</li></Link>
              <Link to="/fmcg" className="link"><li className="links-body">FMCG</li></Link>
              <Link to="/health-care" className="link"><li className="links-body">Health Care</li></Link>
              <Link to="/bfsi" className="link"><li className="links-body">BFSI</li></Link>
            </ul>
          </div>
          <div className="column">
            <h1 className="links-heading">Resources</h1>
            <Link to="/blogs" className="link"><li className="links-body">Blogs</li></Link>
              <Link to="/case-studies" className="link"><li className="links-body">Case Studies</li></Link>
              <Link to="/reviews" className="link"><li className="links-body">Submit Your Review</li></Link>
          </div>
          <div className="column">
            <h1 className="links-heading"><Link className="link" to='/careers'>Careers</Link></h1>
          </div>
          <div className="column">
            <h1 className="links-heading"><Link className="link" to='/contact-us'>Contact Us</Link></h1>
          </div>
        </div>
      
      <hr className="footer-line" />
      <div className="footer-bottom">
        <div className="footer-bottom-text">
          <p className="footer-bottom-text-1">© 2024 · SRIM Media</p>
          
        </div>
        <div className="social-media">
        <p className="footer-bottom-text-1">· Terms</p>
        <p className="footer-bottom-text-1">· Privacy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
