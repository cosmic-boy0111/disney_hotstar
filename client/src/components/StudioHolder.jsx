import React,{useState,useContext} from 'react'
import ReactPlayer from 'react-player'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import { userContext } from '../App'

const StudioHolder = ({obj}) => {


    const history = useHistory();

    const doThis = () =>{
        document.getElementsByClassName('img')[obj.id].style.opacity = '0' ;
        document.getElementsByClassName('video')[obj.id].style.opacity = '1' ;
    }
    const doThat = () =>{
        document.getElementsByClassName('img')[obj.id].style.opacity = '1' ;
        document.getElementsByClassName('video')[obj.id].style.opacity = '0' ;
    }

    const go = () =>{
        history.push(`/${obj.path}`)
    
    }

    return (
        <div className='studio' onMouseEnter={doThis} onMouseLeave={doThat} onClick={go}>
            {/* <Link to={`/${obj.path}`}> */}
            <img src={obj.img} alt="" className='img'/>
            <video playsInline={true} preload='auto' autoPlay={true} loop={true} muted={true} className='video' >
                <source src={obj.video} type="video/mp4" style={{
                    borderRadius:'5px'
                }}/>
            </video>
            {/* </Link> */}
        </div>
    )
}

export default StudioHolder
