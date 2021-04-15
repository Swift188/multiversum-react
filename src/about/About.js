import React from 'react'
import './About.css'
import SplashImg from '../common/SplashImg'

const About = () => {
    return (
        <>
            <SplashImg
                title='Over ons'
                img='https://multiversumvr.nl/assets/img/lux-interaction-xL3xDwWx7_s-unsplash.jpg'
                height='300px'
            />
            <div className='container1'>
                <div className='container page-content'>
                    <div className='img'></div>
                    <div>
                        <p>
                            Wij zijn Multiversum, dé eerste fysieke Virtual
                            Reality winkel van Nederland. Wij zitten centraal
                            gelegen in de binnenstad van Utrecht aan de
                            Steenweg, waar je onze VR brillen kunt uitproberen.
                            Op zoek naar een VR Headset? Multiversum heeft het
                            breedste aanbod aan VR Headsets en accessoires.
                            Bekijk het aanbod in onze gloednieuwe webshop.
                        </p>

                        <p>
                            Bij Multiversum houden wij van Virtual Reality. Want
                            hoe gaaf is het, dat de wereld op een digitale
                            manier volledig nagemaakt kan worden?! Dit biedt
                            niet alleen mogelijkheden voor gamen, maar ook nog
                            eens enorme kansen voor commerciële en zakelijke
                            instellingen. Wij willen deze passie dan ook met
                            onze klanten delen. Door jarenlange ervaring in de
                            VR-wereld en B2B geven wij jou altijd het beste
                            advies. Of dit nou voor je eerste VR-headset thuis
                            is, of als je een VR-arcade wil gaan beginnen:
                            Multiversum staat voor je klaar. Multiversum is er
                            voor de consument en voor de zakelijke gebruiker.
                            Onze klantenservice-medewerkers staan 5 dagen in de
                            week voor je klaar! Of je nou vragen hebt over een
                            nieuwe VR-headset, wilt weten waar je bestelling is
                            gebleven, of benieuwd bent naar de laatste
                            VR-ontwikkeling: vraag het aan onze klantenservice!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
