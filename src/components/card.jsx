import React from 'react'

function Card(props) {
  return (
    <div className='card'>
    <h1 style={{
        textAlign: 'center'
    }}>{props.title}</h1>
    <img src={props.src} alt="mobiles" />
    <p>RS: {props.price}</p>
    <p>{props.description}</p>
    <h3>{props.location}</h3>
    </div>
  )
}

export default Card