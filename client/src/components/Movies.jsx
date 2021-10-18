import React,{useContext,useEffect,useState} from 'react'
import '../Style/Home.css'
import {userContext} from '../App'
import Carousal2 from './Carousal2'
import Slider from './Slider'
import SkeletonColor from './Skeleton'
import Footer from './Footer'
const Movies = () => {

    const [show, setShow] = useState(false)
    const { moviesBanner} = useContext(userContext)
    const [data, setData] = useState([])

    const getData = async() =>{
        try {
            
            const res5 = await fetch('/movies',{
            method:'GET',
            headers:{
                'Content-Type' : 'application/json'
            }
            })

            const data5 = await res5.json();
            setData(data5)

            setShow(true)

        } catch (error) {
            console.log('error');
        }
    }


    
    useEffect(() => {
        getData(); 
    }, [])



    return (
        <div className='body2'>
            <Carousal2 data={moviesBanner} />

            <div style={{
              display:show?'none':'flex'
            }}> 
                <SkeletonColor />
                <SkeletonColor />
                <SkeletonColor />
                <SkeletonColor />
            </div>

            <div style={{
              display:show?'block':'none'
            }}>
                <h5>Top Picks For You</h5>
                <Slider data={[...data]} mov={true}/>
                <h5>Popular Movies</h5>
                <Slider data={[...data].reverse()} mov={true}/>
                <h5>New on Disney+ Hotstar</h5>
                <Slider data={[...data]} mov={true}/>
                <h5>Multiplex Movies</h5>
                <Slider data={[...data].reverse()} mov={true}/>
                <Footer />
            </div>
        </div>
    )
}

export default Movies

