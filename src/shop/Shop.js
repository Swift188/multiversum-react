import React, { useState, useEffect } from 'react'
import SearchPage from './SearchPage'
import Loader from '../common/Loader'
import './Shop.css'

/*
function productReducer(state, action) {
    const {products, productsDefault} = state
    const {type, newPresent} = action
    switch(type) {
        case 'SEARCH': {
            
        }
        default: {
            throw new Error('Unhandled error')
        }
    }
}*/

const Shop = ({ addToCart }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const products = await fetchProducts()
            setProducts(products)
        }

        getProducts()
    }, [])

    const fetchProducts = async () => {
        const res = await fetch(
            'http://localhost/dreamteam-vr-site/api/get_products.php'
        )
        const data = await res.json()
        return data.products
    }

    if (!products) return <Loader />

    return (
        <>
            <SearchPage
                products={products}
                setProducts={setProducts}
                addToCart={addToCart}
            />
        </>
    )
}

export default Shop
