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
import DisneyPage from './components/DisneyPage';
import Disney from './components/Disney'
import Pixar from './components/Pixar';
import Marvel from './components/Marvel';
import StartWars from './components/StartWars';
import Geo from './components/Geo';
import Footer from './components/Footer';
import MoreAbout from './components/MoreAbout';
import SearchMore from './components/SearchMore';
import Subscribe from './components/Subscribe';
import { useScrollTrigger } from '@mui/material';
import Watchlist from './components/Watchlist';
import Account from './components/Account';
import Pay from './components/Pay';

export const userContext = createContext();

const App = () => {

  const [homeBanner, setHomeBanner] = useState([])
  const [tvBanner, setTvBanner] = useState([])
  const [moviesBanner, setMoviesBanner] = useState([])
  const [disneyBanner, setDisneyBanner] = useState([])
  const [more, setMore] = useState({})
  const [allData, setAllData] = useState([])
  const [text, setText] = useState('')
  const [open, setOpen] = React.useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [rootUser, setRootUser] = useState({})
  const [watchData, setWatchData] = useState(
    JSON.parse(localStorage.getItem('watch')) === null ? [] : JSON.parse(localStorage.getItem('watch'))
  )



  const getData = async () =>{


    try {


      const loginRes = await fetch('/getdata',{
        method:'GET',
        headers:{
          'Content-Type':'application/json'
        }
      })

      const loginData =  await loginRes.json();
      if(loginRes.status === 200){
        // console.log(loginData);
        setRootUser(loginData);
        setIsLogin(true);
      }


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

      const res5 = await fetch('/tv',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })

      const data5 = await res5.json();

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


      const data10 = await res10.json();

      const res11 = await fetch('/geo',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })

      const data11 = await res11.json();
      const uniqueValuesSet = new Set();
      const arr = [...data,...data2,...data3,...data4,...data5,...data6,...data7,...data8,...data9,...data10,...data11]
      const filteredArr = arr.filter((obj) => {
        const isPresentInSet = uniqueValuesSet.has(obj.name);
        uniqueValuesSet.add(obj.name);
        return !isPresentInSet;
      });

      setAllData(filteredArr)
      

      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <>
      <Router > 
        <userContext.Provider value={{
          homeBanner,
          tvBanner,
          moviesBanner,
          disneyBanner,
          more, 
          setMore,
          allData,
          text, 
          setText,
          open, 
          setOpen,
          isLogin, 
          setIsLogin,
          rootUser, 
          setRootUser,
          watchData, 
          setWatchData
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
            <DisneyPage />
            
          </Route>
          <Route exact path="/disney">
            <Navbar />
            <Disney />
            
          </Route>
          <Route exact path="/pixar">
            <Navbar />
            <Pixar />
            
          </Route>
          <Route exact path="/marvel">
            <Navbar />
            <Marvel />
            
          </Route>
          <Route exact path="/starwars">
            <Navbar />
            <StartWars />
            
          </Route>
          <Route exact path="/geo">
            <Navbar />
            <Geo />
            
          </Route>
          <Route exact path="/moreabout">
            <Navbar />
            <MoreAbout />
          </Route>
          <Route exact path="/searchdata/:text">
            <Navbar />
            <SearchMore />
          </Route>
          <Route exact path="/subscribe">
            <Subscribe />
          </Route>
          <Route exact path="/watchlist">
            <Navbar />
            <Watchlist />
          </Route>
          <Route exact path="/account">
            <Navbar />
            <Account />
          </Route>
          <Route exact path="/pay/:name/:prize/:device/:qua">
            <Pay />
          </Route>
        </Switch>
        </userContext.Provider>
      </Router>
    </>
  )
}

export default App

