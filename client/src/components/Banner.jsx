import React from 'react'
import '../Style/Banner.css'

const Banner = ({obj}) => {
    return (
        <div className='banner' >
            <div className='info2'>
                <h2>{obj.name}</h2>
                <h6>{obj.desc1}</h6>
                <p>{obj.desc2}</p>
            </div>
            <div className='info'>
                
            </div>
            <div className='img' style={{
                backgroundImage:`url(${obj.hImg})`,
                backgroundSize:'cover'
            }}>
                <div className='gradient'>

                </div>
            </div>
        </div>
    )
}

export default Banner
