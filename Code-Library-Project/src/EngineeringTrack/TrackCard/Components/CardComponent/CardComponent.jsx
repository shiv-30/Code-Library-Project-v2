import React from 'react'
import { Link } from 'react-router-dom'
import './CardComponent.css'
const CardComponent = (props) => {
  return (
    <div className="card custom-card">
      <img width="300px" height="280px" className="card-img-top custom-card__image" src={props.data.img} alt="Card image cap"  />
      <div className="card-body">
        <h3 className="card-title"><strong>{props.data.title}</strong></h3>
        <p className="card-text">{props.data.content}</p>
        <Link to={props.data.link} className="btn btn-primary custom-card__btn"><strong>Click here</strong></Link>
      </div>
    </div>  
  )
}

export default CardComponent