import React from 'react'
import './Contact.css'
import SplashImg from '../common/SplashImg'

const Contact = () => {
    return (
        <>
            <SplashImg
                title='Contact'
                img='http://multiversumvr.nl/assets/img/lux-interaction-xL3xDwWx7_s-unsplash.jpg'
                height='300px'
            />
            <div className='container1'>
                <ul>
                    <li>
                        <a>Multiversum B.V.</a>
                    </li>
                    <li>
                        <a>Steenweg 21, 3511 JL, Utrecht</a>
                    </li>
                    <li>
                        <a>info@multiversum.nl</a>
                    </li>
                    <li>
                        <a>030 – 123 456 7</a>
                    </li>
                    <li>
                        <a>KVK nummer: 87654321</a>
                    </li>
                    <li>
                        <a>BTW nummer: NL 123456789B01</a>
                    </li>
                </ul>

                <iframe
                    title='Maps'
                    className='iframe'
                    loading='lazy'
                    allowFullScreen
                    src='https://www.google.com/maps/embed/v1/place?key=AIzaSyBhIQCTv8_dBW16RtWhelBN0UsNoRS-zl0
                    &q=Steenweg+21,+3511+JL+Utrecht'
                ></iframe>
            </div>
        </>
    )
}

export default Contact
