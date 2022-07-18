import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import StoreItem from './component/StoreItem'
import { useState } from 'react'
import CartItem from './component/CartItem'

console.log(initialStoreItems)

export default function App() {
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [cartItems, setCartItems] = useState([])
  console.log(cartItems)


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
    console.log(cartItems.length === 0?false:true)
  }

  function updateTotalPrice() {
    let totalPrice = 0
  
    for (let i = 0; i < cartItems.length; i++) {
      const item = cartItems[i];
  
      totalPrice += (item.quantity * item.price)
    }
    return `£${totalPrice.toFixed(2)}`
  }

  console.log(cartItems.length === 0?false:true)

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItems.map(item => (
              <StoreItem item={item} add={addToCart} />
          ))}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map(item => (
                <CartItem item={item} add={() => addToCart(item)}/>
            ))} 
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">{updateTotalPrice()}</span>
          </div>
        </div>
      </main>
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
