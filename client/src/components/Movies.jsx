import React,{useContext} from 'react'
import '../Style/Home.css'
import {userContext} from '../App'
import Carousal from './Carousal'
const Movies = () => {

    const { moviesBanner } = useContext(userContext)

    return (
        <div className='body2'>
            <Carousal data={moviesBanner} />
        </div>
    )
}

export default Movies

