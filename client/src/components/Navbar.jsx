import React,{useState} from 'react'
import '../Style/Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../Images/disney-hotstar-logo-dark.svg'
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {

    const [text, setText] = useState('')

    const incBar = () =>{
        var t = document.getElementsByClassName('search_div')[0];
        t.style.width = '100%';
        t.style.borderBottom = '1px solid #1f80e0';
    }

    document.addEventListener('mousedown',()=>{
        setText('')
        var t = document.getElementsByClassName('search_div')[0];
        t.style.transition = 'all .5s ease-in-out';
        t.style.width = '40%';
        t.style.borderBottom = '1px solid white';
    })

    return (
        <>
            <div className="navbar2">
                <div className='links'>
                    <NavLink to='/' className='logo'>  <img src={logo} alt="img" /> </NavLink>
                    <NavLink to='/tv' className='link'>  TV </NavLink>
                    <NavLink to='/movies' className='link'>  Movies </NavLink>
                    <NavLink to='/disneypage' className='link'>  Disney+ </NavLink>
                </div>

                <div className='search_login'>
                    <div className='search_div' onClick={incBar}>
                        <input type="text" name="" value={text} onChange={(e)=>setText(e.target.value)}  placeholder='Search'/>
                        <SearchIcon fontSize='small' style={{
                          opacity:'.7'  
                        }}/>
                    </div>
                    <button className='sub'>SUBSCRIBE</button>
                    <button className='login'>LOGIN</button>
                </div>
            </div>
        </>
    )
}

export default Navbar