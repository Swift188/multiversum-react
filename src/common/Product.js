import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product, addToCart }) => {
    const onAdd = () => {
        addToCart(product, 1)
    }

    const imgUrl = `http://multiversumvr.nl/assets/img/products/${product.imageUrl}`

    return (
        <div className='product'>
            <div className='card'>
                <div className='card-body text-center'>
                    <div className='product-image'>
                        <img src={imgUrl} alt={product.title} />
                    </div>

                    <h5 className='card-title'>{product.name}</h5>
                    <p className='card-text'>{product.description}</p>
                </div>
                <div className='card-footer'>
                    <div className='d-flex justify-content-center gap-2'>
                        <button
                            className='btn btn-green btn-lg'
                            onClick={onAdd}
                        >
                            In winkelwagen + <b>€{product.price}</b>
                        </button>
                        <Link
                            className='btn btn-primary btn-lg'
                            to={`/product/${product.id}`}
                        >
                            <i className='fas fa-chevron-right'></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
