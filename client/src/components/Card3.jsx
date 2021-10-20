import React,{useContext,useState} from 'react'
import '../Style/Card.css'
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { userContext } from '../App'
import { useHistory } from 'react-router-dom'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';

const Card = ({obj,idx,mov}) => {

    
    const {setMore,setText,watchData, setWatchData} = useContext(userContext)
    const [watch, setWatch] = useState(false)

    const history = useHistory();

    const doThis = () =>{
        watchData.forEach((e)=>{
            if(e.name === obj.name){
                setWatch(true)
            }
        })
        document.getElementById(idx).style.opacity = '1';
        document.getElementById(idx).style.backgroundImage = 'linear-gradient(to bottom, rgba(4,8,15,0), #192133, #192133)'
        document.getElementById(idx).style.backgroundSize = 'center-cover'

    
    }

    const doThat = () =>{
        document.getElementById(idx).style.opacity = '0';
    }

    const go = () =>{
        setText('')
        var t = document.getElementsByClassName('search_div')[0];
        var p = document.getElementsByClassName('border2')[0];
        t.style.transition = 'all .2s ease-in-out';
        t.style.width = '250px';
        p.style.borderBottom = '1px solid white';
        localStorage.setItem('more',JSON.stringify(obj));
        setMore(obj);
        history.push('/moreabout')
    }
    const go2 = () =>{
        localStorage.setItem('movie_selected',JSON.stringify(obj.vImg))
        history.push('/subscribe')
    }

    
    const add_remove = () =>{
        if(watch){
            setWatch(false);
            const data =  watchData.filter(e=>{
                return e.name !== obj.name;
            })

            setWatchData(data)
            localStorage.setItem('watch',JSON.stringify(data));
        }else{
            setWatch(true);
            const data = [...watchData,obj];
            setWatchData(data);
            localStorage.setItem('watch',JSON.stringify(data));
        }
    }


    return (
        <div className='card_body' style={{
            backgroundImage : `url(${obj.vImg})`,
            backgroundSize : 'cover',
            cursor:'pointer',
            width:'150px',
            margin:'.5rem'
        }}
        onMouseOver={doThis}
        onMouseLeave={doThat}
        // onClick={go}
        >
            <div style={{
                height:'50%',
                // border:'1px solid red'
            }}
            onClick={go}
            >

            </div>
            <div className='my_card' id={idx}>
                <span onClick={go}>{obj.name}</span>
                <span style={{
                    fontSize:'10px',
                }}
                onClick={go}
                >{obj.desc1}</span>
                <span style={{
                    opacity:'.7',
                    fontSize:'10px',
                    textOverflow:'ellipsis'
                }}
                onClick={go}
                >
                    {(obj.desc2).substr(1,40)+'...'}
                </span>
                <div className='controls'>
                    <span style={{
                      display:mov?'flex':'none' ,
                      alignItems:'center'
                    }}
                    className='controls2'
                    onClick={go2}
                    > <span style={{fontSize:'11px', marginRight:'.7rem'}}><PlayArrowRoundedIcon fontSize='small'/> </span>  <span>watch movie</span></span> 
                    <span style={{
                      display:'flex' ,
                      flexDirection:watch?'column':'row',
                      alignItems:watch?'flex-start':'center'

                    }}
                    className='controls2'
                    onClick={add_remove}
                    > <span style={{fontSize:'11px', marginRight:'.7rem'}}>
                    {
                        watch?<DoneRoundedIcon color='success' style={{fontSize:'12px',fontWeight:'bold'}}/>:<AddRoundedIcon fontSize='small'/>
                    }
                    </span>  <span>
                    {
                        watch?'remove from Watchlist':'Add to Watchlist'
                    }
                    
                    </span></span> 
                </div>
                
            </div>
        </div>
    )
}

export default Card
