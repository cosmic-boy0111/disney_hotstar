import React,{useState} from 'react'
import ReactPlayer from 'react-player'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

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

    return (
        <div className='studio' onMouseOver={doThis} onMouseOut={doThat} onClick={()=>history.push(`/${obj.path}`)}>
            <img src={obj.img} alt="" className='img'/>
            <video playsInline={true} preload='auto' autoPlay={true} loop={true} muted={true} className='video' >
                <source src={obj.video} type="video/mp4" style={{
                    borderRadius:'5px'
                }}/>
            </video>
        </div>
    )
}

export default StudioHolder
