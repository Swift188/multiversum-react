import React from 'react'
import PropTypes from 'prop-types'
import './SplashImg.css'

const SplashImg = ({ title, subtitle, height, img }) => {
    const styles = {
        height: height || '600px',
        backgroundImage: `url(${img})`,
    }

    return (
        <>
            <div className='splash_img' style={styles}>
                <h1>{title.toUpperCase()}</h1>
                <div className='line' />
                <p>{subtitle}</p>
            </div>
        </>
    )
}

SplashImg.defaultProps = {
    title: '',
    subtitle: '',
}

SplashImg.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}

export default SplashImg
