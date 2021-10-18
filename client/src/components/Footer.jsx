import React from 'react'
import { NavLink } from 'react-router-dom'
import face from '../Images/facebook.png'
import twit from '../Images/twitter.png'
import play from '../Images/play_store.png'
import app from '../Images/apple_store.png'
const Footer = () => {
    return (
        <div style={{
            padding:'2rem 3rem',
            display:'flex',
            color:'white',
            opacity:'.7',
            fontSize:'13px',
        }}>
            <div style={{
                width:'50%',
                display:'flex',
                flexDirection:'column',
            }}>
                <div style={{
                    display:'flex',
                    justifyContent:'space-between',
                    marginBottom:'1rem'
                }}>
                    <a href='https://www.hotstar.com/in/about-us' target="_blank" rel="noopener noreferrer" class='link_foot'
                    >About Disney+ Hotstar</a>
                    <a href='https://www.hotstar.com/in/terms-of-use' target="_blank" rel="noopener noreferrer" class='link_foot'
                    >Terms Of Use</a>
                    <a href='https://www.hotstar.com/in/privacy-policy' target="_blank" rel="noopener noreferrer" class='link_foot'
                    >Privacy Policy</a>
                    <a href='https://help.hotstar.com/in/en/support/home' target="_blank" rel="noopener noreferrer" class='link_foot'
                    >FAQ</a>
                    <a href='https://help.hotstar.com/in/en/support/tickets/new' target="_blank" rel="noopener noreferrer" class='link_foot'
                    >Feedback</a>
                    <a href='https://jobs.lever.co/hotstar' target="_blank" rel="noopener noreferrer" class='link_foot'
                    >Careers</a>
                </div>

            <p>© 2021 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p>
            </div> 
            <div style={{
                width:'20%',
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
            }}>
                    <span>Contact with us</span>
                <div style={
                    {
                        display:'flex'
                    }
                }>
                    <a href="https://www.facebook.com/DisneyPlusHotstar" target="_blank" rel="noopener noreferrer">
                    <div className='social'>
                        <img src={face} alt="" style={{
                        //   height:'100%' , 
                            width:'25px',
                            filter:'brightness(0) invert(1)'
                        }}/>
                    </div>
                    </a>
                    <a href="https://twitter.com/DisneyPlusHS" target="_blank" rel="noopener noreferrer">
                    <div className='social'>
                        <img src={twit} alt=""  style={{
                        //   height:'100%' , 
                            width:'25px',
                            height:'25.2px',
                            filter:'brightness(0) invert(1)'
                        }}/>
                    </div>
                    </a>
                </div>
            </div> 
            <div style={{
                width:'30%',
                display:'flex',
                flexDirection:'column',
                alignItems:'center'
            }}>

                <span>Disney+ Hotstar App</span>
                <div style={
                    {
                        display:'flex'
                    }
                }>
                    <a href="https://play.google.com/store/apps/details?id=in.startv.hotstar" target="_blank" rel="noopener noreferrer">
                    <div className='social'>
                        <img src={play} alt="" style={{
                        //   height:'100%' , 
                            height:'25px',
                            filter:'invert(100%)'
                        }}/>
                    </div>
                    </a>
                    <a href="https://apps.apple.com/in/app/hotstar/id934459219" target="_blank" rel="noopener noreferrer">
                    <div className='social'>
                        <img src={app} alt=""  style={{
                        //   height:'100%' , 
                            height:'25px',
                            filter:'invert(100%)'
                        }}/>
                    </div>
                    </a>
                </div>

            </div> 
        </div>
    )
}

export default Footer
