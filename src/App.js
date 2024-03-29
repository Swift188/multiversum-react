import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './home/Home'
import Shop from './shop/Shop'
import Cart from './cart/Cart'
import Contact from './contact/Contact'
import About from './about/About'
import ProductDetails from './detail/Detail'
import Cookie from './policy/Cookie'
import Privacy from './policy/Privacy'
import Terms from './policy/Terms'

function App() {
    const [cart, setCart] = useState([])
    const addToCart = (item, qtty) => {
        /*const newCart = cart.map((product) =>
            product.id === item.id
                ? { ...product, qtty: qtty + product.qtty }
                : product
        )*/
        let prodFound = false
        let newCart = cart.map((product) => {
            if (product.id === item.id) {
                prodFound = true
                return { ...product, qtty: product.qtty + qtty }
            }
            return product
        })

        if (!prodFound) {
            newCart = [...cart, { ...item, qtty: qtty }]
        }

        setCart((cart) => newCart)
        window.localStorage.setItem('cart', JSON.stringify(newCart))
    }

    const removeFromCart = (item) => {
        const newCart = cart.filter((product) => product.id !== item.id)
        setCart(newCart)
        window.localStorage.setItem('cart', JSON.stringify(newCart))
    }

    useEffect(() => {
        if (localStorage.getItem('cart') !== null) {
            setCart((cart) => JSON.parse(localStorage.getItem('cart')))
        }
        //console.log('SET CART')
    }, [])

    return (
        <Router>
            <nav className='navbar navbar-expand-lg navbar-dark sticky-top header'>
                <div className='container-fluid'>
                    <Link className='navbar-brand' to='/'>
                        <img
                            alt='Multiversum'
                            className='logo'
                            src='https://multiversumvr.nl/assets/img/logo/Multiversum_logowit.png'
                        />
                    </Link>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-mdb-toggle='collapse'
                        data-mdb-target='#navbarNavAltMarkup'
                        aria-controls='navbarNavAltMarkup'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <i className='fas fa-bars'></i>
                    </button>
                    <div
                        className='collapse navbar-collapse'
                        id='navbarNavAltMarkup'
                    >
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/shop'>
                                    Winkel
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/contact'>
                                    Contact
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/about'>
                                    Over ons
                                </Link>
                            </li>
                        </ul>
                        <ul className='navbar-nav'>
                            <li className='nav-item me-3 me-lg-0'>
                                <Link className='nav-link' to='/cart'>
                                    <span
                                        className='badge badge-pill bg-danger'
                                        id='carticon'
                                        style={{ display: 'none' }}
                                    ></span>
                                    <i className='fas fa-shopping-cart'></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route path='/shop'>
                    <Shop
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                    />
                </Route>
                <Route path='/cart'>
                    <Cart cart={cart} removeFromCart={removeFromCart} />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/product/:productId'>
                    <ProductDetails addToCart={addToCart} />
                </Route>
                <Route path='/cookie'>
                    <Cookie />
                </Route>
                <Route path='/privacy'>
                    <Privacy />
                </Route>
                <Route path='/terms'>
                    <Terms />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>

            <footer className='bg-green text-center text-white'>
                <div className='container p-3'>
                    <section className='mb-4'>
                        <a
                            className='btn btn-outline-light btn-floating m-1'
                            href='https://github.com/Swift188/multiversum-react'
                            role='button'
                        >
                            <i className='fab fa-github'></i>
                        </a>
                    </section>

                    <section className=''>
                        <div className='footer-links'>
                            <div className='link'>
                                <Link to='/shop'>Winkel</Link>
                            </div>
                            <div className='link'>
                                <Link to='/contact'>Contact</Link>
                            </div>
                            <div className='link'>
                                <Link to='/about'>Over ons</Link>
                            </div>
                            <div className='link'>
                                <Link to='/privacy'>Privacy beleid</Link>
                            </div>
                            <div className='link'>
                                <Link to='/cookie'>Cookie beleid</Link>
                            </div>
                            <div className='link'>
                                <Link to='/terms'>Algemene voorwaarden</Link>
                            </div>
                        </div>
                    </section>
                </div>

                <div
                    className='text-center p-3'
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                >
                    © 2021 Copyright: Multiversum
                </div>
            </footer>
        </Router>
    )
}

export default App
