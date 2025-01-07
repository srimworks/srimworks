import React, { useState } from "react";
import AccordianItem from "./accodianItem";
import { ACCORDIAN_LIST } from "../utils/constsnts";
import "../styles/accordianStyles.css";
// import { Link } from "react-router-dom";

const Accordian = () => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <>
      <>
        <div className="faq-section">
          <div className="faq-section-right">
            {ACCORDIAN_LIST?.map((item, index, self) => {
              return (
                <AccordianItem
                  key={item.id}
                  {...item}
                  isOpen={index === openIndex ? true : false}
                  setIsOpen={() => {
                    index === openIndex
                      ? setOpenIndex(null)
                      : setOpenIndex(index);
                  }}
                />
              );
            })}
          </div>
        </div>
      </>
    </>
  );
};

export default Accordian;
