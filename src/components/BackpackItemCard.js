import React from "react"
import './BackpackItemCard.css'

const BackpackItemCard = (props) => {
    const { name, image, price, description } = props


    return (
        <div className="item">
            <img src={image} className="itemImg" alt="item" />
            <h1>{name}</h1>
            <p>{description}</p>
            <div className="priceBox">
                <img src="https://res.cloudinary.com/sanxcloud/image/upload/v1660781312/profilePictures/voggefr2juj6tylqhc0w.png" alt="Coin" />
                <p>{price}</p>
                <button>Sell</button>
            </div>

        </div>
    )
}

export default BackpackItemCard