import React,{useContext,useEffect,useState} from 'react'
import { userContext } from '../App'
import '../Style/Studio.css'
import Slider from './Slider'
import N5 from '../Videos/N5.mp4'
import SkeletonColor from './Skeleton'
import Footer from './Footer'

const Geo = () => {

    const [show, setShow] = useState(false)


    const [data, setData] = useState([])

    const getData = async() =>{
        try {
            
            const res5 = await fetch('/geo',{
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
            <video playsInline={true} preload='auto' autoPlay={true} muted={true} className='video2'>
                <source src={N5} type="video/mp4" style={{
                    borderRadius:'5px'
                }}/>
            </video>

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

                <h5>Originals</h5>
                <Slider data={[...data]} mov={true}/>
                <h5>Movies</h5>
                <Slider data={[...data].reverse()} mov={true}/>
                <h5>Series</h5>
                <Slider data={[...data]} mov={true}/>
                <h5>Science and Innovation</h5>
                <Slider data={[...data].reverse()} mov={true}/>
                <h5>Exploring Our World</h5>
                <Slider data={[...data]} mov={true}/>
                <Footer />
            </div>
        </div>
    )
}

export default Geo
