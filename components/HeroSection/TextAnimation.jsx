import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TextAnimation = () => {
    return (
        <TypeAnimation
            sequence={[
                "Baron.", 1000,
                "Web Developer!", 1000,
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
            className='font-pixelify'
        />
    )
}

export default TextAnimation