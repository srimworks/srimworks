import React, { useState } from "react";
import AccordianItem from "./accodianItem";
import { ACCORDIAN_LIST } from "../utils/constsnts";
import "../styles/accordianStyles.css";
// // standard anchor navigation
const Link = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>;

const Accordian = ({MARKKET_TRENDS}) => {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <>
      <>
        <div className="faq-section">
          <div className="faq-section-top">
            <h1 className="faq-section-heading">How We Do It</h1>
            <p className="faq-section-body">We follow a structured process, starting with in-depth discovery to identify key problems, defining clear objectives, and prototyping innovative solutions. Through evaluation and iterative refinement, we develop exceptional products that deliver value and meet business goals.</p>
          </div>
          <div className="faq-section-bottom">
            {MARKKET_TRENDS.accordian_content?.map((item, index, self) => {
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
