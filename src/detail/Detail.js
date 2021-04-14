import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../common/Loader'

const Detail = ({ addToCart }) => {
    const [product, setProduct] = useState()
    const [qtty, setQtty] = useState()
    let { productId } = useParams()

    useEffect(() => {
        const getProduct = async () => {
            const product = await fetchProduct()
            setProduct(product)
        }

        getProduct()
    }, [])

    const fetchProduct = async () => {
        const res = await fetch(
            `http://localhost/dreamteam-vr-site/api/get_product.php?id=${productId}`
        )
        const data = await res.json()
        return data
    }

    const onAdd = () => {
        addToCart(product)
    }

    if (!product) return <Loader />

    const imgUrl = `http://localhost/dreamteam-vr-site/assets/img/products/${product.imageUrl}`

    return (
        <div className='card'>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-md-5'>
                        <img
                            src={imgUrl}
                            height='350px'
                            width='400px'
                            alt={product.name}
                        />
                    </div>
                    <div className='col-md-7'>
                        <h1 className='text-black'>{product.name}</h1>
                        <h4 className='text-black'>€{product.price}</h4>

                        <div className='row'>
                            <div className='col-md-12'>
                                <button
                                    className='btn btn-green'
                                    onclick='min()'
                                    id='min'
                                >
                                    -
                                </button>
                                <input
                                    className='input input-green'
                                    id='cartNr'
                                    type='text'
                                    value='0'
                                />
                                <button
                                    className='btn btn-green'
                                    onclick='plus()'
                                    id='plus'
                                >
                                    +
                                </button>
                            </div>
                            <div className='col-12 mt-3'>
                                <button
                                    className='btn btn-green btn-lg'
                                    onClick={onAdd}
                                >
                                    In winkelwagen + <b>€{product.price}</b>
                                </button>
                            </div>
                        </div>

                        <br />
                        <br />

                        <div className='row'>
                            <div className='col-md-12'>
                                <ul>
                                    <li>
                                        <a>Ophalen bij webwinkel in Utrecht</a>
                                    </li>
                                    <li>
                                        <a>
                                            30 dagen bedenktijd en gratis
                                            retourneren
                                        </a>
                                    </li>
                                    <li>
                                        <a>Dag en nacht klantenservice</a>
                                    </li>
                                    <li>
                                        <a>
                                            Cadeautje? Laat het voor je inpakken
                                            en bezorgen
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail
