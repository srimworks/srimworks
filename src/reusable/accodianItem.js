import React from "react";
import "../styles/accordianStyles.css";
import { IMAGES } from "../utils/images";
import '../index.css'

const AccordianItem = ({ title, content, id, isOpen, setIsOpen }) => {

  const handleClick = () => {
    setIsOpen(isOpen != isOpen);
  };

  return (
    <>
      <div className="accordion">
        <div className="accordion-top" onClick={handleClick}>
          <h1 className="accordion-top-tittle">{title}</h1>
          <div className="accordion-top-icon">
            {!isOpen ? (
                < img src={IMAGES.PLUS_ICON} />
            ) : (
              < img src={IMAGES.MINUS_ICON} />
            )}
          </div>
        </div>
        {isOpen &&
        
        <p className="accordion-bottom">{isOpen && <>{content}</>}</p>
       }
      </div>
    </>
    // {/* </div> */}
  );
};

export default AccordianItem; 
