import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <>
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
                        <a>KVK nummer: 87654321</a>
                    </li>
                </ul>

                <iframe
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
