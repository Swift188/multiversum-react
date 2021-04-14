import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './home'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const products = await fetchProducts()
      setProducts(products)
    }

    getTasks()
  }, [])

  const fetchProducts = async () => {
    const res = await fetch(
      'http://localhost/dreamteam-vr-site/api/get_products.php'
    )
    const data = await res.json()
    return data.products
  }

  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Home products={products} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
