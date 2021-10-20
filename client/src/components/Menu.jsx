import React,{useState,useContext} from 'react'
import { IconButton } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useHistory } from 'react-router-dom'
import { userContext } from '../App'

const BasicMenu = () => {

    const [show, setShow] = useState(false)
    const history = useHistory();
    const { setIsLogin  } = useContext(userContext)

    const set = () =>{
        setShow(true)
        document.getElementsByClassName('menu_holder')[0].style.display = 'flex'; 
        document.getElementsByClassName('menu_holder')[0].style.opacity = '1'; 
    }
    
    const set2 = () =>{
        setShow(false)
        document.getElementsByClassName('menu_holder')[0].style.display = 'none'; 
        document.getElementsByClassName('menu_holder')[0].style.opacity = '0'; 
    }

    const change = (idx) =>{
        document.getElementsByClassName('item')[idx].style.backgroundColor = '#030b17'
    }
    const change2 = (idx) =>{
        document.getElementsByClassName('item')[idx].style.backgroundColor = 'transparent'
    }

    const go = async (idx) =>{
        setShow(false)
        document.getElementsByClassName('menu_holder')[0].style.opacity = '0'; 
        if(idx===0){
            history.push('/watchlist')
        }else if(idx===1){
            history.push('/account')
        }else{
            const res = await fetch('/logout',{
                method:'Get',
                headers:{
                    'Content-Type' : 'application/json'
                }
            })

            if(res.status === 200){
                setIsLogin(false);
                window.alert('logout')
                history.push('/')
            }
        }
    }

    return (
        <div  >
            <IconButton 
                // onMouseDown={set2}
                onClick={show?set2:set}
            >
                <AccountCircleIcon />
            </IconButton>

                <div className='menu_holder' >
                    <div className='item' onMouseOver={()=>change(0)} onMouseOut={()=>change2(0)} onClick={()=>go(0)}  style={{
                        borderTopLeftRadius:'5px',
                        borderTopRightRadius:'5px'
                    }}>Watchlist</div>
                    <div className='item' onMouseOver={()=>change(1)} onMouseOut={()=>change2(1)} onClick={()=>go(1)}>My Account</div>
                    <div className='item' onMouseOver={()=>change(2)} onMouseOut={()=>change2(2)} onClick={()=>go(2)} style={{
                        borderBottomLeftRadius:'5px',
                        borderBottomRightRadius:'5px'
                    }}>Log out</div>
                </div>
        </div>
    )
}

export default BasicMenu

