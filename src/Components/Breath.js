import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../Breath.json'


const Breath = () => {
    return (
        <div>
            <Lottie animationData={animationData} />
        </div>
    )
}

export default Breath;