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
  const [tv, setTv] = useState([])
  const [watchData, setWatchData] = useState(
    JSON.parse(localStorage.getItem('watch')) === null ? [] : JSON.parse(localStorage.getItem('watch'))
  )


  return (
    <>
      <Router > 
        <userContext.Provider value={{
          tv, 
          setTv,
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
          setWatchData,
          setHomeBanner,
          setTvBanner,
          setMoviesBanner,
          setDisneyBanner,
          setAllData
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

