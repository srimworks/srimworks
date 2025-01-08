import React from 'react'
import '../styles/cards.css'
const Cards = ({postedon,title, image, content}) => {
  return (
    <div className='card-section'>
      {postedon.length > 0 && <h1>{postedon}</h1>}
        <img src={image} alt=""/>
        <h1 className='card-heading'>{title}</h1>
        <p className='card-content'>{content}</p>

    </div>
  )
}

export default Cards