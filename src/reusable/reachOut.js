import React from 'react';
import '../styles/reachout.css'; // Import the CSS file for styling

const ReachOut = () => {
  return (
    <div className="background-image-container">
      <div className="text-overlay">
        <p className="title">SRIM WORKS</p>
        <p className="desc">
          Have questions or want to
          collaborate? Reach out to us
        </p>
        <button className='secondary-button'>Schedule Meeting</button>
      </div>
    </div>
  );
};

export default ReachOut;
