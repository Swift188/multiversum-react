import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './home/Home'
import Shop from './shop/Shop'
import Cart from './cart/Cart'
import Contact from './contact/Contact'
import About from './about/About'
import ProductDetails from './detail/Detail'

function App() {
    const [cart, setCart] = useState([])
    const addToCart = (item) => {
        setCart((cart) => [...cart, item])
        console.log(cart)
    }

    return (
        <Router>
            <nav className='navbar navbar-expand-lg navbar-dark sticky-top header'>
                <div className='container-fluid'>
                    <Link className='navbar-brand' to='/'>
                        <img
                            className='logo'
                            src='http://localhost/dreamteam-vr-site/assets/img/logo/Multiversum_logowit.png'
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
                            <li className='nav-item me-3 me-lg-0 dropdown'>
                                <a
                                    className='nav-link dropdown-toggle'
                                    id='navbarDropdown'
                                    role='button'
                                    data-mdb-toggle='dropdown'
                                    aria-expanded='false'
                                    href='#navbarDropdown'
                                >
                                    <i className='fas fa-user'></i>
                                </a>
                                <ul
                                    className='dropdown-menu dropdown-menu-right'
                                    aria-labelledby='navbarDropdown'
                                >
                                    <li>
                                        <a
                                            className='dropdown-item'
                                            data-mdb-toggle='modal'
                                            data-mdb-target='#exampleCentralModal3'
                                            href='#exampleCentralModal3'
                                        >
                                            Login
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Switch>
                <Route path='/shop'>
                    <Shop addToCart={addToCart} />
                </Route>
                <Route path='/cart'></Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/product/:productId'>
                    <ProductDetails addToCart={addToCart} />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
            <footer className='bg-green text-center text-white'>
                <div className='container p-4'>
                    <section className='mb-4'>
                        <a
                            className='btn btn-outline-light btn-floating m-1'
                            href='#!'
                            role='button'
                        >
                            <i className='fab fa-github'></i>
                        </a>
                    </section>

                    <section className=''>
                        <div className='row'>
                            <div className='col-md-6 mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Informatie</h5>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Sunt distinctio earum
                                    repellat quaerat voluptatibus placeat nam,
                                    commodi optio pariatur est quia magnam eum
                                    harum corrupti dicta, aliquam sequi
                                    voluptate quas.
                                </p>
                            </div>

                            <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Links</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 3
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 4
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className='col-lg-3 col-md-6 mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Links</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 3
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 4
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                <div
                    className='text-center p-3'
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                >
                    © 2021 Copyright:
                </div>
            </footer>
        </Router>
    )
}

export default App
