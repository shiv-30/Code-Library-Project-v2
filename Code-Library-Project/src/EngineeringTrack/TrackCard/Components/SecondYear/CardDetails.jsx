import React from 'react'
import  './CardDetails.css'
const CardDetails = (props) => {
  return (
    <div className='horizontal-Card'>
        <div className="iframe">
        <iframe width="500" height="280" src={props.data.youtube} title="YouTube video player" frameborder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen={true}></iframe>
        </div>
        <div className="details">
            <div className="details__title">{props.data.title}</div>
            <p className='details__description'>{props.data.content}</p>
        </div>
    </div>
)
}

export default CardDetails