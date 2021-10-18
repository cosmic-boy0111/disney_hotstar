import React,{ useEffect,useState,useContext } from 'react'
import { userContext } from '../App'
import Banner from './Banner'
import Footer from './Footer'
import Slider from './Slider'
import LinearIndeterminate from './LinearProgress'
import SkeletonColor from './Skeleton'

const MoreAbout =  () => {

    const { more } = useContext(userContext)

    const [data, setData] = useState([])
    const [show2, setShow2] = useState(true)
    const [show, setShow] = useState(false)

    const getData = async (path) => {
        if(path==='tv'){
            setShow2(false)
        }
        try {
            const res = await fetch(`/${path}`,{
                method:'GET',
                headers:{
                    'Content-Type' : 'application/json'
                }
            })

            const Data = await res.json();
            setData(Data);
            setShow(true)
        } catch (error) {
            console.log('err');
        }
    }


    useEffect(() => {
        setShow(false)
        var path = JSON.parse(localStorage.getItem('more')).path;
        getData(path);
    }, [more])


    return (
        <div className='body2'>
            <div style={{
                margin:'0 2.8rem'
            }}>

            <Banner obj={JSON.parse(localStorage.getItem('more'))===null?{}:JSON.parse(localStorage.getItem('more'))} show={true} got={false}/>

            </div>

            <div style={{
              display:show?'none':'flex',
              margin:'2rem 2.8rem',
              flexDirection:'column'
            }}> 
                <LinearIndeterminate />
            </div>

            <div style={{
              display:show?'block':'none'
            }}>
                <h5>More Like This</h5>
                <Slider data={data} mov={show2} />
                <Footer />
            </div>
        </div>
    )
}

export default MoreAbout
