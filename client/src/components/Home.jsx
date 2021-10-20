import React,{useContext,useEffect,useState} from 'react'
import '../Style/Home.css'
import {userContext} from '../App'
import Carousal2 from './Carousal2'
import Slider from './Slider'
import SkeletonColor from './Skeleton'
import Footer from './Footer'

const Home = () => {

    const { homeBanner } = useContext(userContext)
    const [show, setShow] = useState(false)

    const [data, setData] = useState([])
    const [shows, setShows] = useState([])
    const [superHero, setSuperHero] = useState([])

    
    // function shuffleArray(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     return array
    // }
    
  const getData = async () =>{


    try {
      
      const res5 = await fetch('/tv',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })

      const data5 = await res5.json();
      setShows(data5)

      const res6 = await fetch('/movies',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })

      const data6 = await res6.json();

      const res7 = await fetch('/disney',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })

      const data7 = await res7.json();

      const res8 = await fetch('/pixar',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })

      const data8 = await res8.json();

      const res9 = await fetch('/marvel',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })

      const data9 = await res9.json();

      const res10 = await fetch('/starWars',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })

      setSuperHero([...data6,...data7,...data8,...data9])

      const data10 = await res10.json();

      const res11 = await fetch('/geo',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })

      const data11 = await res11.json();

      setData([...data6,...data7,...data8,...data9,...data10,...data11])

      setShow(true);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  },[])

    return (
        <div className='body2'>
            <Carousal2 data={homeBanner} />

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
                <h5>Latest & Trending</h5>
                <Slider data={[...data]} mov={true}/>
                <h5>Popular Shows</h5>
                <Slider data={[...data].reverse()} mov={true}/>
                <h5>Shows Recommended For You</h5>
                <Slider data={shows} />
                <h5>Movies Recommended For You</h5>
                <Slider data={[...data]} mov={true}/>
                <h5>Popular Movies</h5>
                <Slider data={[...data].reverse()} mov={true}/>
                <h5>New on Disney+ Hotstar</h5>
                <Slider data={[...data]} mov={true}/>
                <h5>Popular in Action</h5>
                <Slider data={[...data].reverse()} mov={true}/>
                <h5>Best of Superheroes</h5>
                <Slider data={superHero} mov={true}/>
                <h5>Popular in Disney+</h5>
                <Slider data={[...data].reverse()} mov={true}/>
                <Footer />
            </div>

        </div>
    )
}

export default Home
