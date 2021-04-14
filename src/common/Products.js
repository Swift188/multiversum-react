import React from 'react'
import Product from './Product'
import './Products.css'

const Products = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  )
}

export default Products
