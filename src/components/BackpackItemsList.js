import React from "react"
import BackpackItemCard from "./BackpackItemCard"
import './BackpackItemList.css'


const BackpackItemsList = (props) => {
    const { items } = props

    return (
        <div className="ItemsList">

            {
                items.map(item => {
                    return <BackpackItemCard
                        key={item._id}
                        name={item.name}
                        image={item.image}
                        price={item.price / 2}
                        description={item.description}
                    />
                })
            }
        </div>
    )
}

export default BackpackItemsList