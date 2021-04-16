import React, { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
    'pk_test_51Igm0sCZ1zZO5fUF001WpCNoeRfaA3BcApcMRaD02i9Z5ES7u7xqXh1M58Q3QS07gQVT9Q3f61HKY85vST4Rh5aO008jt2zcWa'
)

const ProductDisplay = ({ items, price, handleClick }) => (
    <button
        type='button'
        className='btn btn-primary btn-lg'
        role='link'
        onClick={handleClick}
    >
        Checkout
    </button>
)

const Message = ({ message }) => (
    <div className='alert alert-warning'>{message}</div>
)

export default function App({ cart }) {
    let totalPrice = 0
    cart.map((item) => (totalPrice += item.price * item.qtty))

    const [message, setMessage] = useState('')

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search)

        if (query.get('success')) {
            setMessage('Order placed! You will receive an email confirmation.')
        }

        if (query.get('canceled')) {
            setMessage(
                "Order canceled -- continue to shop around and checkout when you're ready."
            )
        }
    }, [])

    const handleClick = async (event) => {
        const stripe = await stripePromise

        let formData = new FormData()
        for (var key in cart) {
            formData.append(key, cart[key])
        }

        const response = await fetch(
            'https://multiversumvr.nl/api/create-checkout-session.php',
            {
                method: 'POST',
                cart: formData,
            }
        )

        const session = await response.json()

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        })

        if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
        }
    }

    return message ? (
        <Message message={message} />
    ) : (
        <ProductDisplay
            items={cart.length}
            price={totalPrice}
            handleClick={handleClick}
        />
    )
}
