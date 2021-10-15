import React,{useContext} from 'react'
import '../Style/Home.css'
import {userContext} from '../App'
import Carousal from './Carousal'
const Tv = () => {

    const { tvBanner } = useContext(userContext)

    return (
        <div className='body2'>
            <Carousal data={tvBanner} />
        </div>
    )
}

export default Tv

