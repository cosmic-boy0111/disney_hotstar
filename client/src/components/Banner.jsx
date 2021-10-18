import React,{useContext} from 'react'
import { userContext } from '../App'
import '../Style/Banner.css'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import { display } from '@mui/system';
import { useHistory } from 'react-router-dom'
const Banner = ({obj,show=false,got=true}) => {

    const history = useHistory();
    const {setMore} = useContext(userContext);

    const go = () =>{

        localStorage.setItem('more',JSON.stringify(obj));
        if(got){
            setMore(obj);
            history.push('/moreabout')
        }
    }

    const go2 = () => {
        
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
                    }}>
                        <AddRoundedIcon fontSize='large'/>
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
