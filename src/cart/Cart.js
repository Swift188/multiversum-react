import './Cart.css'

const Cart = ({ cart }) => {
    let totalPrice = 0
    cart.map((item) => (totalPrice += item.price * item.qtty))

    return (
        <div className='container mb-5 mt-5'>
            <div className='products-cart'>
                {cart.map((item) => (
                    <div key={item.id} class='product shadow-2'>
                        <div className='product-image'>
                            <img
                                src={`https://multiversumvr.nl/assets/img/products/${item.imageUrl}`}
                                alt={item.name}
                            />
                        </div>
                        <div className='product-info'>
                            <span class='product-title'>{item.name}</span>
                            <p> {item.description} </p>
                        </div>
                        <div className='abc'>
                            <div className='product-qtty'>{item.qtty}x</div>
                            <div className='product-price'>€{item.price}</div>
                        </div>
                    </div>
                ))}
                <div class='totalPrice'>
                    Totale prijs: {totalPrice.toFixed(2)}
                </div>
            </div>
        </div>
    )
}

export default Cart
