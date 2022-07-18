import StoreItem from "./StoreItem"

export default function Store(props) {
  const {storeItems} = props

  return (
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItems.map(item => (
              <StoreItem item={item} />
          ))}
        </ul>
      </header>
  )
}