import React from 'react'
import PropTypes from 'prop-types'
import './SplashImg.css'

const SplashImg = ({ title, subtitle, height, img }) => {
    const styles = {
        height: height || '600px',
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5) ), url(${img})`,
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
    height: '600px',
}

SplashImg.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    height: PropTypes.string,
    img: PropTypes.string.isRequired,
}

export default SplashImg
