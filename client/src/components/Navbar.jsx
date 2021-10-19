import React,{useState,useContext} from 'react'
import '../Style/Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../Images/disney-hotstar-logo-dark.svg'
import SearchIcon from '@mui/icons-material/Search';
import { userContext } from '../App'
import Search from './Search';
import { useHistory } from 'react-router-dom'
import CustomizedDialogs from './LoginContainer';

const Navbar = () => {

    const history = useHistory();
    const {setText,setOpen} = useContext(userContext)

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
                    <button className='login' onClick={()=>setOpen(true)}>LOGIN</button>
                </div>
            </div>
        </>
    )
}

export default Navbar
