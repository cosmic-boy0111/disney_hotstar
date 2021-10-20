import React,{useContext,useEffect,useState} from 'react'
import '../Style/Home.css'
import {userContext} from '../App'
import Slider from './Slider'
import Carousal2 from './Carousal2'
import SkeletonColor from './Skeleton'
import Footer from './Footer'

const Tv = () => {



    const { tvBanner,setTvBanner } = useContext(userContext)
    const [show, setShow] = useState(false)
    const [data, setData] = useState([])

    const getData = async() =>{
        try {
            
            const res5 = await fetch('/tv',{
            method:'GET',
            headers:{
                'Content-Type' : 'application/json'
            }
            })

            const data5 = await res5.json();
            setData(data5)

            
            const res2 = await fetch('/tvHeader',{
                method:'GET',
                headers:{
                    'Content-Type' : 'application/json'
                }
            })
            
            const data2 = await res2.json();
            setTvBanner(data2)
            setShow(true)
            var link = document.getElementsByClassName('control-next')[0];
            link.click();

        } catch (error) {
            console.log('error');
        }
    }

    
    useEffect(() => {
        getData()
    }, [])



    return (
        <div className='body2'>
            <Carousal2 data={tvBanner} />

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
                <Slider data={[...data]}/>
                <h5>Popular Shows</h5>
                <Slider data={[...data].reverse()}/>
                <h5>New on Disney+ Hotstar</h5>
                <Slider data={[...data]}/>
                <h5>Popular in Reality</h5>
                <Slider data={[...data].reverse()}/>
                <Footer />
            </div>

        </div>
    )
}

export default Tv

