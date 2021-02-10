import React from 'react'
import "./Card.css"
const Card = ({ artistName, songName, image }) => {
    return (
        <div className="card">
            <div className="card_img">
                <img src={image} />
            </div>
            <div className="card_footer">
                <h4>{songName}</h4>
                <h5>{artistName}</h5>
            </div>
        </div>
    )
}

export default Card
