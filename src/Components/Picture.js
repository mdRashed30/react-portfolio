import * as React from 'react'
import weatherImg from '../assets/profileimg.jpeg'

function ImgOfMe() {
    const imgStyle = {
        height: '30%',
        width: '20vw'
    }

    return (
        <div>
            <img src={weatherImg} alt="Weather" style={imgStyle} />
        </div>
    )
}

export default ImgOfMe
