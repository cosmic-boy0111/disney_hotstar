import React,{useContext,useEffect,useState} from 'react'
import '../Style/Home.css'
import {userContext} from '../App'
import Carousal2 from './Carousal2'
import '../Style/Disney.css'
import StudioHolder from './StudioHolder'
import ReactPlayer from 'react-player'
import SkeletonColor from './Skeleton'
import Slider from './Slider'
import v1 from '../Videos/v1.mp4'
import v2 from '../Videos/v2.mp4'
import v3 from '../Videos/v3.mp4'
import v4 from '../Videos/v4.mp4'
import v5 from '../Videos/v5.mp4'
import Footer from './Footer'



const Disney = () => {

    const [show, setShow] = useState(false)
    const { disneyBanner,setDisneyBanner } = useContext(userContext)

    const [data, setData] = useState([])


    const getData = async() =>{
        try {

            const res4 = await fetch('/disneyHeader',{
                method:'GET',
                headers:{
                  'Content-Type' : 'application/json'
                }
              })
        
              const data4 = await res4.json();
              setDisneyBanner(data4)
            
            const res5 = await fetch('/disney',{
            method:'GET',
            headers:{
                'Content-Type' : 'application/json'
            }
            })

            const data5 = await res5.json();

            const res6 = await fetch('/marvel',{
                method:'GET',
                headers:{
                    'Content-Type' : 'application/json'
                }
                })
    
            const data6 = await res6.json();

            const res7 = await fetch('/pixar',{
                method:'GET',
                headers:{
                    'Content-Type' : 'application/json'
                }
                })
    
            const data7 = await res7.json();

            const res8 = await fetch('/starWars',{
                method:'GET',
                headers:{
                    'Content-Type' : 'application/json'
                }
                })
    
            const data8 = await res8.json();

            const res9 = await fetch('/geo',{
                method:'GET',
                headers:{
                    'Content-Type' : 'application/json'
                }
                })
    
            const data9 = await res9.json();
                
            setData([...data5,...data6,...data7,...data8,...data9])

            setShow(true)
            var link = document.getElementsByClassName('control-next')[0];
            link.click();

        } catch (error) {
            console.log('error');
        }
    }


    useEffect(() => {
        getData();
    }, [])

    const Studios = [
        {
            img:'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6347/746347-h',
            path:'disney',
            video:v1,
            id:0,
        },
        
        {
            img:'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6348/746348-h',
            path:'pixar',
            video:v2,
            id:1,
        },
        
        {
            img:'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6349/746349-h',
            path:'marvel',
            video:v3,
            id:2,
        },
        
        {
            img:'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6357/746357-h',
            path:'starwars',
            video:v4,
            id:3,
        },
        
        {
            img:'https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6355/746355-h',
            path:'geo',
            video:v5,
            id:4,
        },

    ]

    return (
        <div className='body2'>
            <Carousal2 data={disneyBanner} />

            <div style={{
              display:show?'none':'flex'
            }}> 
                <SkeletonColor />
                <SkeletonColor />
                <SkeletonColor />
                <SkeletonColor />
            </div>

            <div style={{
              display:show?'block':'none'
            }}>

                <div className='studio_holder'>

                    {
                        Studios.map((e)=>{
                            return <StudioHolder obj={e}/>
                        })
                    }
                </div>

                <h5>Recommended For You</h5>
                <Slider data={[...data]} mov={true}/>
                <h5>New To Disney+</h5>
                <Slider data={[...data].reverse()} mov={true}/>
                <h5>Hit Movies</h5>
                <Slider data={[...data]} mov={true}/>
                <h5>Disney+ Originals</h5>
                <Slider data={[...data].reverse()} mov={true}/>
                <h5>Trending</h5>
                <Slider data={[...data]} mov={true}/>
                <h5>Reimagined Classics</h5>
                <Slider data={[...data].reverse()} mov={true}/>
                <h5>Beasts and Monsters</h5>
                <Slider data={[...data]} mov={true}/>
                <h5>Inspired by True Stories</h5>
                <Slider data={[...data].reverse()} mov={true}/>
                <h5>Documentaries</h5>
                <Slider data={[...data]} mov={true}/>
                <h5>Action and Adventure</h5>
                <Slider data={[...data].reverse()} mov={true}/>
                <h5>Animals And Nature</h5>
                <Slider data={[...data]} mov={true}/>
                <Footer />
            </div>
        </div>
    )
}

export default Disney

