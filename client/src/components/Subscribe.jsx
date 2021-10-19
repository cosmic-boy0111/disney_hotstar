import React,{useState,useEffect} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../Style/Subscribe.css'
import img from '../Images/back.png'
import Footer from './Footer'
import logo from '../Images/disney-hotstar-logo-dark.svg'
import PackContainer from './PackContainer';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useHistory } from 'react-router-dom'
import CircularIndeterminate from './CircularProgress'

const Subscribe = () => {

    const history = useHistory();
    const [show, setShow] = useState(false)

    useEffect(() => {
       setTimeout(() => {
           setShow(true)
       }, 1000);
    },[])


    return (
        <>
        <div className='load' display={{
            display:!show?'flex':'none'
        }}>
            <img src={logo} alt="" style={{width:'150px'}}/>
            <CircularIndeterminate />
        </div>
        <div style={{
            display:show?'block':'none'
        }}>
        <div className='new_nav' id='new_nav' >
                <div  style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    cursor:'pointer'
                }}
                    onClick={()=>history.push('/')}
                >
                    <ArrowBackRoundedIcon /> <img src={logo} alt="" style={{marginLeft:'1rem'}}/>
                </div>
                <div style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}> 
                    <button className='sub_login' >Log in</button>
                </div>
            </div>
        <div className='sub_container' id='sub_container'>
            
            <div className='sub2'>
                <img src={img} alt="" className='sub_img'/>
                <div className='aise-hi'>

                </div>
                <div className='extra'>

                </div>
                <div className='aisa-vaisa'>

                </div>
                
                <div className='container2' id='container2'>
                    <img src={JSON.parse(localStorage.getItem('movie_selected'))===null?"":JSON.parse(localStorage.getItem('movie_selected'))} alt="" className='muze-ni-pta'/>
                    <h4>Subscribe to watch </h4>
                    <PackContainer />
                </div>
            </div>
            <div style={{
                backgroundColor:'#0b0f18',
                display:JSON.parse(localStorage.getItem('movie_selected'))===null?'block':'none'
            }}>

            <Footer />
            </div>
        </div>
        </div>
        </>
    )
}

export default Subscribe
