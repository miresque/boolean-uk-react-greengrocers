import '../styles/index.css'

import initialStoreItems from '../store-items'
import StoreItem from '../component/StoreItem'
import { useState } from 'react'
import Cart from './Cart'

console.log(initialStoreItems)

export default function Store() {
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])

  const addToCart = (item) => {
    let newCart = [...cartItems]
    const index = newCart.findIndex((basketItem => basketItem.id === item.id))
    let quantity = 1 

    if (cartItems.some(e => e.id === item.id)) {
      newCart[index].quantity++
    } else {
      const cartItem = {
        id: item.id,
        name: item.name,
        img: `/assets/icons/${item.id}.svg`,
        price: item.price,
        quantity: quantity
      }
      newCart = [...cartItems, cartItem]
    }

    setCartItems(newCart)
  }

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItems.map(item => (
              <StoreItem key={item.id} item={item} add={addToCart} />
          ))}
        </ul>
      </header>
      <Cart cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} />
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
