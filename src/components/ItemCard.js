import React from "react"
import './ItemCard.css'

const ItemCard = (props) => {
    const { name, image, price, description } = props


    return (
        <div className="item">
            <img src={image} className="itemImg" alt="item" />
            <h1>{name}</h1>
            <p>{description}</p>
            <div className="priceBox">
                <img src="https://res.cloudinary.com/sanxcloud/image/upload/v1660781312/profilePictures/voggefr2juj6tylqhc0w.png" alt="Coin" />
                <p>{price}</p>
                <button>Buy</button>
            </div>

        </div>
    )
}

export default ItemCard