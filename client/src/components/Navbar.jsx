import React,{useState,useContext,useEffect} from 'react'
import '../Style/Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../Images/disney-hotstar-logo-dark.svg'
import SearchIcon from '@mui/icons-material/Search';
import { userContext } from '../App'
import Search from './Search';
import { useHistory } from 'react-router-dom'
import CustomizedDialogs from './LoginContainer';
import BasicMenu from './Menu';
import { getListSubheaderUtilityClass } from '@mui/material';

const Navbar = () => {

    const history = useHistory();
    const {setText,setOpen,isLogin,setRootUser,setIsLogin,setAllData} = useContext(userContext)

    const set = () =>{
        setText('')
        var t = document.getElementsByClassName('search_div')[0];
        var p = document.getElementsByClassName('border2')[0];
        t.style.transition = 'all .2s ease-in-out';
        t.style.width = '250px';
        p.style.borderBottom = '1px solid white';
    }

    const go = () => {
        localStorage.removeItem('movie_selected')
        history.push('/subscribe')
    }

    const getUser = async() =>{
      try {
        const loginRes = await fetch('/getdata',{
          method:'GET',
          headers:{
            'Content-Type':'application/json'
          }
        })
  
        const loginData =  await loginRes.json();
        if(loginRes.status === 200){
          setRootUser(loginData);
          setIsLogin(true);
        }
      } catch (error) {
        console.log('err');
      }
    }

    useEffect(() => {
      getUser()
    }, [])
     
  const getData = async () =>{


    try {

      
      


      const res = await fetch('/mainHeader',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })

      const data = await res.json();
    //   setHomeBanner(data);

      const res2 = await fetch('/tvHeader',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })

      const data2 = await res2.json();
    //   setTvBanner(data2)


      const res3 = await fetch('/moviesHeader',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })

      const data3 = await res3.json();
    //   setMoviesBanner(data3)

      const res4 = await fetch('/disneyHeader',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })

      const data4 = await res4.json();
    //   setDisneyBanner(data4)


      
      const res5 = await fetch('/tv',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })

      const data5 = await res5.json();
    //   setTv(data5)
    //   setShows(data5)

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

    //   setSuperHero([...data6,...data7,...data8,...data9])

      const data10 = await res10.json();

      const res11 = await fetch('/geo',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })

      const data11 = await res11.json();

    //   setData([...data6,...data7,...data8,...data9,...data10,...data11])

    //   setShow(true);

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
        getData(); 
    }, [])


    return (
        <>
            <CustomizedDialogs />
            <div className="navbar2" >
                <div className='links' onClick={()=>set()}>
                    <NavLink to='/' className='logo'>  <img src={logo} alt="img" /> </NavLink>
                    <NavLink to='/tv' className='link'>  TV </NavLink>
                    <NavLink to='/movies' className='link'>  Movies </NavLink>
                    <NavLink to='/disneypage' className='link'>  Disney+ </NavLink>
                </div>

                <div className='search_login'>
                    <Search />
                    <button className='sub' onClick={go}>SUBSCRIBE</button>
                    <div style={{
                        display:!isLogin?'none':'inline'
                    }}>
                        <BasicMenu />
                    </div>
                    <button className='login' onClick={()=>setOpen(true)} style={{
                        display:isLogin?'none':'inline'
                    }}>LOGIN</button>
                </div>
            </div>
        </>
    )
}

export default Navbar
