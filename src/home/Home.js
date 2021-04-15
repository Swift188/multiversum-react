import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import SplashImg from '../common/SplashImg'

const index = () => {
    return (
        <>
            <SplashImg
                title='Multiversum VR'
                subtitle='dé plek voor de nieuwste, beste en best geprijsde VR brillen!'
                img='http://multiversumvr.nl/assets/img/lux-interaction-xL3xDwWx7_s-unsplash.jpg'
            />

            <div className='splits'>
                <div className='cards' id='cards1'>
                    <div>
                        Wij zijn Multiversum, dé eerste fysieke Virtual Reality
                        winkel van Nederland. Wij zitten centraal gelegen in de
                        binnenstad van Utrecht aan de Steenweg, waar je onze VR
                        brillen kunt uitproberen. Op zoek naar een VR Headset?
                        Multiversum heeft het breedste aanbod aan VR Headsets en
                        accessoires. Bekijk het aanbod in onze gloednieuwe
                        webshop.
                        <Link className='navbar-brand' to='/about'>
                            Lees Meer
                        </Link>
                    </div>

                    <div id='img1'></div>
                </div>

                <div className='cards'>
                    <div id='img2'></div>
                    <div>
                        Met een VR-bril duik je in de wondere wereld van Virtual
                        Reality! Zet een VR-bril op je hoofd en geniet van de
                        mooiste VR-applicaties en 360-graden video's. Kies voor
                        een VR-bril die je op een PC aansluit voor extra power,
                        of voor een standalone VR-bril om te genieten van extra
                        vrijheid zonder kabels.
                    </div>
                </div>
            </div>
        </>
    )
}

export default index
