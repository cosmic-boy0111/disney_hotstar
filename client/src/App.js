import React,{useEffect,useState,createContext} from 'react'
import { 
  BrowserRouter as Router ,
  Switch,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Tv from './components/Tv';
import Movies from './components/Movies';
import Disney from './components/Disney';
import axios from 'axios'

export const userContext = createContext();

const App = () => {

  const [homeBanner, setHomeBanner] = useState([])
  const [tvBanner, setTvBanner] = useState([])
  const [moviesBanner, setMoviesBanner] = useState([])
  const [disneyBanner, setDisneyBanner] = useState([])

  const getData = async () =>{


    try {
      const res = await fetch('/mainHeader',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })

      const data = await res.json();
      setHomeBanner(data);

      const res2 = await fetch('/tvHeader',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })

      const data2 = await res2.json();
      setTvBanner(data2)


      const res3 = await fetch('/moviesHeader',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })

      const data3 = await res3.json();
      setMoviesBanner(data3)

      const res4 = await fetch('/disneyHeader',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })

      const data4 = await res4.json();
      setDisneyBanner(data4)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Router > 
        <userContext.Provider value={{
          homeBanner,
          tvBanner,
          moviesBanner,
          disneyBanner
        }}>

        <Switch > 
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
          <Route exact path="/tv">
            <Navbar />
            <Tv />
          </Route>
          <Route exact path="/movies">
            <Navbar />
            <Movies />
          </Route> 
          <Route exact path="/disneypage">
            <Navbar />
            <Disney />
          </Route>
        </Switch>
        </userContext.Provider>
      </Router>
    </>
  )
}

export default App

