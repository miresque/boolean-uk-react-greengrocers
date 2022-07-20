import '../styles/index.css'

import initialStoreItems from '../store-items'
import StoreItem from '../component/StoreItem'
import { useState } from 'react'
import Cart from './Cart'
import FilterBar from './FilterBar'

console.log(initialStoreItems)

export default function Store() {
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [storeItemsOnDisplay, setStoreItemsOnDisplay] = useState(storeItems)
  const [cartItems, setCartItems] = useState([])

  const getIndex = (list, item) => {
    const index = list.findIndex((e => e.id === item.id))
    return index
  }

  const hasItem = (list, item) => {
    const itemCheck = list.some(e => e.id === item.id)
    return itemCheck
  }

  const addToCart = (item) => {
    let newCart = [...cartItems]
    let quantity = 1 
    const index = getIndex(newCart, item)

    if (hasItem(cartItems, item)) {
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
        <FilterBar 
          storeItems={storeItems} 
          storeItemsOnDisplay={storeItemsOnDisplay}
          setStoreItemsOnDisplay={setStoreItemsOnDisplay}
        />
        <ul className="item-list store--item-list">
          {storeItemsOnDisplay.map(item => (
              <StoreItem key={item.id} item={item} add={addToCart} />
          ))}
        </ul>
      </header>
      <Cart 
        cartItems={cartItems} 
        setCartItems={setCartItems} 
        addToCart={addToCart} 
        getIndex={getIndex}
        hasItem={hasItem}
      />
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
