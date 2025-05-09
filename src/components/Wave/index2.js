import React from 'react'
import {Wave} from "./WaveElements"


const WaveBody = () => {
    return (
        <>
            <Wave>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#bbe1fa" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,112C384,75,480,53,576,74.7C672,96,768,160,864,165.3C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            </Wave>
        </>
    )
}

export default WaveBody

