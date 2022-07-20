import React from "react"

export default function StoreItemDetails(props) {
    const { name, price, type } = props
    const captialiseFirstLetter = (word) => word.charAt(0).toUpperCase() + word.slice(1)

    return (
        <>
            <p className="details">{captialiseFirstLetter(name)}</p>
            <p className="details">{type}</p>  
            <p className="details">{'£' + price}</p>  
        </>
    )
}