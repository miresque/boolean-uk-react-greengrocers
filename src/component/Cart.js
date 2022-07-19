import CartItem from "./CartItem"

export default function Cart(props) {
    const { addToCart, cartItems, setCartItems } = props

    const decrementItem = (item) => {
        let newCart = [...cartItems]
        const index = newCart.findIndex((basketItem => basketItem.id === item.id))
    
        if (cartItems.some(e => e.id === item.id) && newCart[index].quantity > 1) {
          newCart[index].quantity--
        } else if(cartItems.some(e => e.id === item.id) && newCart[index].quantity <=1 ) {
          newCart.splice(index, 1)
        }
        setCartItems(newCart)
    }

    const updateTotalPrice = () => {
        let totalPrice = 0
      
        for (let i = 0; i < cartItems.length; i++) {
          const item = cartItems[i];
      
          totalPrice += (item.quantity * item.price)
        }
        return `£${totalPrice.toFixed(2)}`
    }

    return (
        <main id="cart">
            <h2>Your Cart</h2>
            <div className="cart--item-list-container">
                <ul className="item-list cart--item-list">
                    {cartItems.map(item => (
                        <CartItem key={item.id} item={item} decrement={decrementItem} increment={addToCart} />
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
    )
}