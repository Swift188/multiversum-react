import React from 'react'
import './Contact.css'
import SplashImg from '../common/SplashImg'

const Contact = () => {
    return (
        <>
            <SplashImg
                title='Contact'
                img='https://cdn.searchenginejournal.com/wp-content/uploads/2018/06/best-contact-us-pages.png'
                height='300px'
            />
            <div className='container contacts_container'>
                <div className='info'>
                    <ul>
                        <li className='h3'>Multiversum B.V.</li>
                        <li>
                            <div className='icon'>
                                <i class='fas fa-map-marker-alt'></i>
                            </div>
                            Steenweg 21, 3511 JL, Utrecht
                        </li>
                        <li>
                            <div className='icon'>
                                <i class='fas fa-envelope'></i>
                            </div>
                            <a href='mailto:info@multiversumvr.nl'>
                                info@multiversumvr.nl
                            </a>
                        </li>
                        <li>
                            <div className='icon'>
                                <i class='fas fa-phone'></i>
                            </div>
                            030 – 123 456 7
                        </li>
                        <li>
                            <div className='icon'>
                                <i class='fas fa-fax'></i>
                            </div>
                            KVK nummer: 87654321
                        </li>
                        <li>
                            <div className='icon'>
                                <i class='fas fa-receipt'></i>
                            </div>
                            BTW nummer: NL 123456789B01
                        </li>
                    </ul>
                </div>

                <div className='map'>
                    <iframe
                        title='Maps'
                        className='maps_iframe'
                        loading='lazy'
                        allowFullScreen
                        src='https://www.google.com/maps/embed/v1/place?key=AIzaSyBhIQCTv8_dBW16RtWhelBN0UsNoRS-zl0
                    &q=Steenweg+21,+3511+JL+Utrecht'
                    ></iframe>
                </div>
            </div>
        </>
    )
}

export default Contact
