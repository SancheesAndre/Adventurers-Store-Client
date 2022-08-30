import React, { useState } from "react"
import apiService from '../services/api.service';
import './ItemCard.css'

const ItemCard = (props) => {
    const { operation, id, name, image, price, description } = props

    const operationFunc = () => {
        if (operation === "Buy") {
            apiService.purchaseItem(id)
            apiService.subtractGold(id)
           // alert("The item has been purchased!")
        }
        if (operation === "Sell") {
            apiService.sellItem(id)
            apiService.addGold(id)
        }
    }

    return (
        <div className="item">
            <img src={image} className="itemImg" alt="item" />
            <h1>{name}</h1>
            <p>{description}</p>
            <div className="priceBox">
                <img className="coinImg" src="https://res.cloudinary.com/sanxcloud/image/upload/v1660781312/profilePictures/voggefr2juj6tylqhc0w.png" alt="Coin" />
                <p>{price}</p>
                <button onClick={operationFunc}>{operation}</button>
            </div>

        </div>
    )
}

export default ItemCard