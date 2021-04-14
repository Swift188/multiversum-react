import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import Products from '../common/Products'

const SearchPage = ({ products, setProducts, addToCart }) => {
    const [input, setInput] = useState('')
    const [productsDefault, setProductsDefault] = useState([])

    const updateInput = async (input) => {
        console.log(input)
        console.log(productsDefault)
        const filtered = productsDefault.filter((product) => {
            return product.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input)
        setProducts(filtered)
    }

    useEffect(() => {
        setProductsDefault(products)
    }, [])

    return (
        <div className='container'>
            <SearchBar keyword={input} setKeyword={updateInput} />
            <Products products={products} addToCart={addToCart} />
        </div>
    )
}

export default SearchPage
