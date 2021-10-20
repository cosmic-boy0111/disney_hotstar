import React,{useContext,useState,useEffect} from 'react'
import { userContext } from '../App'
import '../Style/Banner.css'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import { display } from '@mui/system';
import { useHistory } from 'react-router-dom'
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import Watchlist from './Watchlist';

const Banner = ({obj,show=false,got=true}) => {

    const history = useHistory();
    const {more, setMore, setText,watchData, setWatchData} = useContext(userContext);

    const [watch, setWatch] = useState(false)

    useEffect(() => {
        var t = false;
        watchData.forEach((e)=>{
            if(e.name===obj.name){
                t = true;
            }
        })
        setWatch(t);
    }, [more])

    const go = () =>{

        localStorage.setItem('more',JSON.stringify(obj));
        setText('')
        var t = document.getElementsByClassName('search_div')[0];
        var p = document.getElementsByClassName('border2')[0];
        t.style.transition = 'all .2s ease-in-out';
        t.style.width = '250px';
        p.style.borderBottom = '1px solid white';
        if(got){
            setMore(obj);
            history.push('/moreabout')
        }
    }

    const go2 = () => {
        localStorage.setItem('movie_selected',JSON.stringify(obj.vImg))
        history.push('/subscribe')
    }

    const add_remove = () =>{
        if(watch){
            setWatch(false)
            let data = watchData.filter((e)=>{
                return e.name !== obj.name;
            })
            setWatchData(data);
            localStorage.setItem('watch',JSON.stringify(data))
        }else{
            setWatch(true)
            let data = [...watchData,obj];
            setWatchData(data);
            localStorage.setItem('watch',JSON.stringify(data))
        }
    }

    return (
        <div style={{
            padding:'0 .7rem'
        }}>

        
        <div className='banner' onClick={go}>
            <div className='info2'>
                <div className='buttons' style={{
                    display:show?'flex':'none'
                }}>
                    <div style={{
                        // border:'1px solid red',
                        display:'flex',
                        alignItems:'center',
                        cursor:'pointer'
                    }}
                    onClick={go2}
                    >
                        <PlayArrowRoundedIcon fontSize='large'/> <h4 style={{
                            margin:'0 1rem'
                        }}>Watch</h4>
                    </div>

                    <div style={{
                        display:'flex',
                        flexDirection:'column',
                        // width:'70%',
                        alignItems:'center',
                        cursor:'pointer'
                    }}
                    onClick={add_remove}
                    >
                        
                        {
                            watch?<DoneRoundedIcon fontSize='large' style={{color:'#1f80e0'}}/>:<AddRoundedIcon fontSize='large'/>
                        }
                        <p style={{
                            margin:'0 1rem',
                            fontSize:'10px',
                            fontWeight:'500'
                        }}>WATCHLIST</p>
                    </div>
                </div>
                <div>

                
                <h2>{obj.name}</h2>
                <h6>{obj.desc1}</h6>
                <p>{obj.desc2}</p>
                </div>
                
            </div>
            <div className='info'>
                
            </div>
            <div className='img' style={{
                backgroundImage:`url(${obj.hImg})`,
                backgroundSize:'cover'
            }}>
                <div className='gradient' style={{
                    display:'flex',
                    flexDirection:'column-reverse',
                    paddingBottom:'4rem'
                }}>
                    
                    <div style={{
                        // border:'1px solid red',
                        display:show?'flex':'none',
                        justifyContent:'space-between'
                    }}>
                        
                    </div>
                </div>
            </div>

        </div>

        </div>
    )
}

export default Banner
