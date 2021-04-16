import React from 'react'

const Product = ({ item, removeFromCart }) => {
    const handleRemove = () => {
        removeFromCart(item)
    }

    return (
        <div class='product shadow-2'>
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
            <div className='product-actions'>
                <div className='product-qtty'>{item.qtty}x</div>
                <div className='product-price'>€{item.price}</div>
                <button
                    className='btn btn-danger btn-sm'
                    onClick={handleRemove}
                >
                    x
                </button>
            </div>
        </div>
    )
}

export default Product
