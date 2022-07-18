
export default function StoreItem(props) {
    const { item, add } = props
    const imgSrc = `/assets/icons/${item.id}.svg`

    return (
        <li key={item.id} id={item.id}>
            <div className="store--item-icon">
                <img src={imgSrc} alt={item.name} />
            </div>
            <button onClick={() => add(item)}>Add to cart</button>
        </li>
    )
}
  