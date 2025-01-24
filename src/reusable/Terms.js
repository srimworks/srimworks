import React from "react";
import "../styles/terms.css";
import { terms } from "../utils/constsnts";
const Terms = () => {
  return (
    <div className="outlet-render-terms">
        <div className="terms-section-top">
            <h3 className="terms-title">{terms.title}</h3>
            <h1 className="terms-heading">{terms.heading}</h1>
        </div>
        <hr className="terms-hr"/>
      <p className="terms-page-text">{terms.content}</p>
    </div>
  );
};

export default Terms;
