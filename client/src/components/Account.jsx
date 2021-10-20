import React,{useContext} from 'react'
import { userContext } from '../App'
import '../Style/Account.css'
import Footer from './Footer'
import logo from '../Images/user_iocn.svg'
import { useHistory } from 'react-router-dom'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const Account = () => {

    const {rootUser,setIsLogin} = useContext(userContext)
    const history = useHistory();


    const go = async () =>{ 
        try {
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
        } catch (error) {
            console.log('err');
        }
    }

    return (
        <div className='body2'>
            <div className='user_data'>
                <div className='data'>
                    <img src={logo} alt=""/>
                    <span className='user_name'>{rootUser.user}</span>
                    <div className='user_function'>
                        <div style={{display:'flex',flexDirection:'column',padding:'0 1rem'}}>
                            <span>Get more with Disney+ Hotstar Premium</span>
                            <span style={{
                                fontSize:'14px',
                                opacity:'.7'
                            }}> Only ₹1499/year </span>
                        </div>
                        <button  className='continue2' onClick={()=>history.push('/subscribe')}>
                            <span style={{
                                fontSize:'14px'
                            }}>get disnet+ Hotstar premium </span>
                        </button>
                    </div>    
                    <div className='user_function' style={{
                        display:'flex',
                        justifyContent:'space-between',
                        padding:'1.2rem',
                        width:'100%',
                        cursor:'pointer',
                    }}
                    onClick={go}
                    >
                        <span>Log Out</span>
                        <ChevronRightRoundedIcon />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Account
