import React,{useContext,useEffect,useState} from 'react'
import { userContext } from '../App'
import '../Style/Studio.css'
import Slider from './Slider'
import N1 from '../Videos/N1.mp4'
import SkeletonColor from './Skeleton'
import Footer from './Footer'

const Disney = () => {

    const [show, setShow] = useState(false)

    
    const [data, setData] = useState([])

    const getData = async() =>{
        try {
            
            const res5 = await fetch('/disney',{
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

    const {setText} = useContext(userContext)

    const set = () =>{
        setText('')
        var t = document.getElementsByClassName('search_div')[0];
        var p = document.getElementsByClassName('border2')[0];
        t.style.transition = 'all .2s ease-in-out';
        t.style.width = '250px';
        p.style.borderBottom = '1px solid white';
    }


    return (
        <div className='body2'>
            <video playsInline={true} preload='auto' autoPlay={true} muted={true} className='video2' onClick={set}>
                <source src={N1} type="video/mp4" style={{
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
                <h5>Live Action Movies</h5>
                <Slider data={[...data].reverse()} mov={true}/>
                <h5>Walt Disney Animation Studios</h5>
                <Slider data={[...data]} mov={true}/>
                <h5>Additional Animated Movies</h5>
                <Slider data={[...data].reverse()} mov={true}/>
                <h5>Disney Channel Original Movies</h5>
                <Slider data={[...data]} mov={true}/>
                <Footer />
            </div>
        </div>
    )
}

export default Disney
