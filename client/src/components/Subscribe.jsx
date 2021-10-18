import React,{useState} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../Style/Subscribe.css'
import img from '../Images/back.png'
import Footer from './Footer'
import logo from '../Images/disney-hotstar-logo-dark.svg'
import PackContainer from './PackContainer';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useHistory } from 'react-router-dom'

const Subscribe = () => {

    // const change = () =>{
    //     console.log('up');
    //     document.getElementById('new_nav').style.backgroundColor = '#121926'
    // }

    const history = useHistory();

    // var lastScrollTop = 0;

    // window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
    //     var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    //     if (st > lastScrollTop){

    //         document.getElementById('new_nav').style.backgroundColor = '#121926'
    //     } else {
    //         setTimeout(() => {
    //             document.getElementById('new_nav').style.backgroundColor = 'transparent'
                
    //         }, 500);
    //     }
    //     lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    // }, false);

    return (
        <>
        <div className='new_nav' id='new_nav' >
                <div  style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    cursor:'pointer'
                }}
                    onClick={()=>history.goBack()}
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
                    <img src="" alt="" />
                    <h4>Subscribe to watch </h4>
                    <PackContainer />
                </div>
            </div>
            <div style={{
                backgroundColor:'#0b0f18',
            }}>

            <Footer />
            </div>
        </div>
        </>
    )
}

export default Subscribe
