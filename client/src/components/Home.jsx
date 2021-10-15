import React,{useContext} from 'react'
import '../Style/Home.css'
import {userContext} from '../App'
import Carousal from './Carousal'
const Home = () => {

    const { homeBanner } = useContext(userContext)

    return (
        <div className='body2'>
            <Carousal data={homeBanner} />
        </div>
    )
}

export default Home
