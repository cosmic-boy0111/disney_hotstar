import React,{useState,useContext,useEffect} from 'react'
import { userContext } from '../App'
import Card from './Card3'
import uuid from 'react-uuid'
import empty from '../Images/empty.svg'


const Watchlist = () => {


    const {watchData, setWatchData} = useContext(userContext)

    const [show, setShow] = useState(false)

    useEffect(() => {
        if(watchData.length === 0){
            setShow(false)
        }else{
            setShow(true)
        }
    }, [watchData])


    return (
        <div className='body2' style={{
            padding:'.5rem 3.5rem',
            height:'100vh',
            maxHeight:'100%'
        }}>
            <h5> <span style={{
                    opacity:'.7',
                    margin:'.5rem',
                }}>Watch List</span></h5>

            <div style={{
                width:'100%',
                height:'100vh',
                display:show?'none':'flex',
                flexDirection:'column'
                // justifyContent:'center',
                // alignItems:'center'
            }}>
                <img src={empty} alt="" style={{
                    width:'20rem',
                    marginTop:'2rem'
                }}/>
                <h6 style={{
                    width:'30%',
                    textAlign:'center',
                    marginTop:'1rem',
                    opacity:'.7',
                    fontWeight:'lighter'

                }}>Keep track of Movies, TV Shows and clips you want to watch</h6>
            </div>  
            <div style={{
                display:show?'block':'none'
            }}>
                
                <div style={{
                    display:'flex',
                    flexWrap:'wrap',
                    marginTop:'2rem'
                }}>

                {
                    watchData===undefined?'':watchData.map((e)=>{
                        return <Card obj={e} idx={uuid()} mov={e.path==='tv'?false:true}/>
                    })
                }

                </div>
            </div>
        </div>
    )
}

export default Watchlist
