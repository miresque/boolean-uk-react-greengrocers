
export default function CartItem(props) {
    const { item } = props
    // const imgSrc = `/assets/icons/${item.id}.svg`
    // const index = items.length - 1

    return (
        <li key={item.id} id={item.id}>
            <img
                className="cart--item-icon"
                src={`/assets/icons/${item.id}.svg`}
                alt={item.name}
            />
            <p>{item.name}</p>
            <button className="quantity-btn remove-btn center">-</button>
            <span className="quantity-text center">{item.quantity}</span>
            <button className="quantity-btn add-btn center">+</button>
        </li>
    )
}