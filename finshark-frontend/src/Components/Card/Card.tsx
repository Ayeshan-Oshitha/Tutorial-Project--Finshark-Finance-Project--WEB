import React from 'react'
import './Card.css'

type Props = {}

const Card = (props: Props) => {
  return (
    
    <>
    <div className="card">
        <img src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg" />
        <div className="details">
            <h2>AAPL</h2>
            <p>$110</p>
        </div>
        <p className="infon">
            Lorem Ipsum
        </p>
    </div>
    
    </>
  )
}

export default Card