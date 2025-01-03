import React from 'react'
import '../styles/leftAside.css'
const LeftAside = ({title, content,description, image, alt, listItems}) => {
  return (
    // <div>
    //   <div>
    //     <img src={image} alt ={alt}/>
    //   </div>
    //   <div>
    //     {description.length >0 && <p>{description}</p>}
    //     <h1>{title}</h1>
    //     <p>{content}</p>
    //   {listItems.length>0 && listItems.map((item, index)=>{
    //     return(
    //         <li key={index}>{item}</li>
    //     )
    //   })}
    //   </div>
    // </div>
    <div className="article-container">
      <div className="text-section">
        <h1>{title}</h1>
        <p>
          {description}
        </p>
        <p>
          {content}
        </p>
      </div>
      <div className="image-section">
        <img
          src={image}
          alt={alt}
          className="article-image"
        />
      </div>
    </div>
  )
}

export default LeftAside;
