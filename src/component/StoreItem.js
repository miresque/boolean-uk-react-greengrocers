import { useState } from "react"
import StoreItemDetails from "./StoreItemDetails"

export default function StoreItem(props) {
    const { item, add } = props
    const imgSrc = `/assets/icons/${item.id}.svg`
    const [showingDetails, setShowingDetails] = useState(false)

    return (
        <li id={item.id}>
            <div className="store--item-icon" onClick={() => setShowingDetails(!showingDetails)}>
                {!showingDetails?<img src={imgSrc} alt={item.name} />:
                 <StoreItemDetails name={item.name} price={item.price} type={item.type} />}
            </div>
            <button onClick={() => add(item)}>Add to cart</button>
        </li>
    )
}
  