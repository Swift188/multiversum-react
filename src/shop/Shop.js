import React, { useState, useEffect } from 'react'
import Products from '../common/Products'
import SearchBar from './SearchBar'
import Loader from '../common/Loader'
import './Shop.css'

const Shop = ({ addToCart }) => {
    const [search, setSearch] = useState('')
    const [products, setProducts] = useState([])
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            const products = await fetchProducts()
            setProducts(products)
            setFiltered(products)
        }

        getProducts()
    }, [])

    const updateInput = async (input) => {
        const filtered = products.filter((product) => {
            return product.name.toLowerCase().includes(input.toLowerCase())
        })
        setSearch(input)
        setFiltered(filtered)
    }

    const fetchProducts = async () => {
        const res = await fetch('https://multiversumvr.nl/api/get_products.php')
        const data = await res.json()
        return data.products
    }

    if (!filtered) return <Loader />

    return (
        <div className='container'>
            <SearchBar search={search} setSearch={updateInput} />
            <Products products={filtered} addToCart={addToCart} />
        </div>
    )
}

export default Shop
