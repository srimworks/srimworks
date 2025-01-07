import React from 'react'
import '../styles/marketreuse.css'
const MarketReuse = ({heading, desc,title, content, image, subHead1,subHead2}) => {
  return (
    <div className='market-reuse'>
   <h1 className='market-head'>
{heading}
   </h1>
   <p className='market-desc'>{desc}</p>
   <div className='market-aside'>
    <div className='market-left'>
        <h1>{title}</h1>
        <p>{content}</p>
        <div className='subhead'>
            <h2>{subHead1}</h2>
            <h2>{subHead2}</h2>
        </div>
    </div>
    <div className='market-right'>
        <img src={image} alt="img"/>
    </div>
   </div>
    </div>
  )
}

export default MarketReuse;