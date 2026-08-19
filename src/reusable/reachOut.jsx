import React from 'react';
import '../styles/reachout.css'; // Import the CSS file for styling
// standard anchor navigation
const Link = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>;

const ReachOut = ({btnText,title,heading, path}) => {
  return (
    <div className="background-image-container">
      <div className="text-overlay">
        <p className="title">{title}</p>
        <p className="desc">
          {heading}
        </p>
        <Link to="/contact-us" className='link'><button className='secondary-button'>{btnText}</button></Link>
      </div>
    </div>
  );
};

export default ReachOut;
