
export default function StoreItem(props) {
    const { item } = props
    const imgSrc = `/assets/icons/${item.id}.svg`

    const addToCart = null

    return (
    <li key={item.id}>
        <div class="store--item-icon">
            <img src={imgSrc} alt={item.name} />
        </div>
        <button onClick={() => console.log(imgSrc)}>Add to cart</button>
    </li>
    )
  }
  