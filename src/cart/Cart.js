import React from 'react'
import './Cart.css'
import Product from './Product'

const Cart = ({ cart, removeFromCart }) => {
    let totalPrice = 0
    cart.map((item) => (totalPrice += item.price * item.qtty))

    return (
        <div className='container mb-5 mt-5'>
            <div className='products-cart'>
                {cart.map((item) => (
                    <Product
                        key={item.id}
                        item={item}
                        removeFromCart={removeFromCart}
                    />
                ))}
                <div class='totalPrice'>
                    Totale prijs: €{totalPrice.toFixed(2)}
                </div>
            </div>
        </div>
    )
}

export default Cart
