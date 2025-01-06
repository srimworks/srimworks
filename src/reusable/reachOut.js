import React from 'react';
import '../styles/reachout.css'; // Import the CSS file for styling

const ReachOut = ({btnText,title,heading, path}) => {
  return (
    <div className="background-image-container">
      <div className="text-overlay">
        <p className="title">{title}</p>
        <p className="desc">
          {heading}
        </p>
        <button className='secondary-button'>{btnText}</button>
      </div>
    </div>
  );
};

export default ReachOut;
