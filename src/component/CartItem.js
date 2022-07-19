
export default function CartItem(props) {
    const { item, decrement, increment } = props

    return (
        <li id={item.id}>
            <img
                className="cart--item-icon"
                src={`/assets/icons/${item.id}.svg`}
                alt={item.name}
            />
            <p>{item.name}</p>
            <button className="quantity-btn remove-btn center" onClick={() => decrement(item)}>-</button>
            <span className="quantity-text center">{item.quantity}</span>
            <button className="quantity-btn add-btn center" onClick={() => increment(item)}>+</button>
        </li>
    )
}