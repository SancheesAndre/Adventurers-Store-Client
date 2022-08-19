import React from "react"
import ItemCard from "./ItemCard"
import './ItemsList.css'

const ItemsList = (props) => {
    const { items } = props

    return (
        <div className="ItemsList">
            
                    {
                        items.map(item => {
                            return <ItemCard
                                key={item._id}
                                id={item._id}
                                name={item.name}
                                image={item.image}
                                price={item.price}
                                description={item.description}
                            />
                        })
                    }
        </div>
    )
}

export default ItemsList