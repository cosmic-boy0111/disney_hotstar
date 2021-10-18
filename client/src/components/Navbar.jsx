import React,{useState,useContext} from 'react'
import '../Style/Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../Images/disney-hotstar-logo-dark.svg'
import SearchIcon from '@mui/icons-material/Search';
import { userContext } from '../App'

const Navbar = () => {

    const [text, setText] = useState('')
    const { allData } = useContext(userContext)

    const [searchData, setSearchData] = useState(allData);

    const incBar = () =>{
        var t = document.getElementsByClassName('search_div')[0];
        t.style.width = '500px';
        t.style.borderBottom = '1px solid #1f80e0';
    }

    document.addEventListener('mousedown',()=>{
        setText('')
        var t = document.getElementsByClassName('search_div')[0];
        t.style.transition = 'all .5s ease-in-out';
        t.style.width = '250px';
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
                        <div style={{
                            display:'flex'
                        }}>
                        <input type="text" name="" id="dropdownMenuButton1" className='dropdown-toggle' value={text} onChange={(e)=>setText(e.target.value)}  placeholder='Search' data-bs-toggle="dropdown" aria-expanded="false"/>
                        <SearchIcon  style={{
                          opacity:'.7'  ,
                          fontSize:'19px'
                        }}/>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </div>
                        {/* <div className='search_container'>
                        </div> */}
                    </div>
                    <button className='sub'>SUBSCRIBE</button>
                    <button className='login'>LOGIN</button>
                </div>
            </div>
        </>
    )
}

export default Navbar
