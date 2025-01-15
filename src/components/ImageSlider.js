import React, { useEffect, useState } from "react";
import { HOME_SLIDE } from "../utils/constsnts";
import "../styles/imageSlider.css";
import { Link } from "react-router-dom";
const ImageSlider = () => {
  const [slidesData, setSlidesData] = useState(HOME_SLIDE);
  const [nextImg, setNextImg] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      return setNextImg((prev) => (prev + 1) % slidesData.length);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  

  return (
    <>
      <div className="image-slider-css">
        <div className="overlay">
          <h3 className="overlay-heading-1">SRIM WORKS</h3>
          <h1 className="overlay-heading-2">
            Your Global Partner for Technology Innovation and Excellence
          </h1>
          <div className="home-content-css">
            <p>
              Welcome to SRIM Works, your trusted multinational partner for
              advanced technology solutions. Headquartered in Hyderabad, India's
              thriving tech hub, we drive innovation and deliver transformative
              solutions that empower businesses worldwide.
            </p>
          </div>
          <span><Link to="/Get-Started" className="link">
            <button className="primary-button-homepage">Get Started</button>
            <button className="primary-button-homepage">Learn More</button>
          </Link></span>
          </div>
        <img src={HOME_SLIDE[nextImg].image} alt="image" />
        {/* <img src={slidesData[nextImg].image} alt="" /> */}
        {/* {HOME_SLIDE.length > 0 &&
        HOME_SLIDE.map((item,index)=>{
          return <img  key={index} src={item.image} alt="img"/>
        })
        } */}
      </div>
    </>
  );
};

export default ImageSlider;
