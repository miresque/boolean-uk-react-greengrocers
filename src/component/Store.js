import '../styles/index.css'

import initialStoreItems from '../store-items'
import StoreItem from '../component/StoreItem'
import { useEffect, useState } from 'react'
import Cart from './Cart'

console.log(initialStoreItems)

export default function Store() {
  const [storeItems, setStoreItems] = useState(initialStoreItems)
  const [storeItemsOnDisplay, setStoreItemsOnDisplay] = useState(storeItems)
  const [cartItems, setCartItems] = useState([])
  const [selectedType, setSelectedType] = useState('none')

  const ascendingOrder = -1
  const noOrder = 0
  const descendingOrder = 1
  const [sortedStatus, setSortedStatus] = useState(noOrder)


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

  const filterByType = () => {
    let filteredStoreItems = [...storeItems]
    if (selectedType === 'Veg') {
        filteredStoreItems = storeItems.filter(item => item.type === 'Veg')
    } else if(selectedType === 'Fruit') {
        filteredStoreItems = storeItems.filter(item => item.type === 'Fruit')
    }
    setStoreItemsOnDisplay(filteredStoreItems)
  }

  const sortByPrice = () => {
    let sortedStoreItems = [...storeItemsOnDisplay]
    if (sortedStatus === descendingOrder || sortedStatus === 0) {
        setSortedStatus(ascendingOrder)
        sortedStoreItems.sort((a, b) => {
            return a.price - b.price
        })
    } else if(sortedStatus === ascendingOrder) {
        setSortedStatus(descendingOrder)
        sortedStoreItems.sort((a, b) => {
            return b.price - a.price
        })
    }
    setStoreItemsOnDisplay(sortedStoreItems)
  }

  useEffect(() => {
        filterByType()
    },
    [selectedType]
  )

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="filter-sort">
            <li>
                <form id='filter-by-type-form'>
                    <label>
                        <p>Filter By Type:</p>
                        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                            <option value="none"></option>
                            <option value="Veg">Veg</option>
                            <option value="Fruit">Fruit</option>
                        </select>
                    </label>
                </form>
            </li>
            <li>
                <button onClick={sortByPrice}>{sortedStatus === ascendingOrder?'Ascending ↑':
                                               sortedStatus === descendingOrder?'Descending ↓':'Sort By Price'}</button>
            </li>
        </ul>
        <ul className="item-list store--item-list">
          {storeItemsOnDisplay.map(item => (
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
