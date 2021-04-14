import { useState, useEffect } from 'react'
import Products from './common/Products'

function App() {
  const [products, setProducts] = useState([])

  useEffect(async () => {
    const products = await fetchProducts()
    setProducts(products)
  }, [])

  const fetchProducts = async () => {
    const res = await fetch(
      'http://localhost/dreamteam-vr-site/api/get_products.php'
    )
    const data = await res.json()
    return data.products
  }

  return <Products products={products} />
}

export default App
