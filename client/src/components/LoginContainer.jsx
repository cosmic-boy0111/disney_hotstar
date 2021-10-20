import React,{useContext,useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import { userContext } from '../App'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import '../Style/Login.css'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import CircularColor from './WhiteCircular';

export default function AlertDialog() {

    const {open, setOpen, setIsLogin, setRootUser} = useContext(userContext)
    const [valid, setValid] = useState(false)

    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

    const [what, setWhat] = useState('option')

    const [user, setUser] = useState('')
    const [lPassword, setLPassword] = useState('')

    const [show, setShow] = useState(false)



    var arr = [];





    const handleInput = (text) =>{
        if(/^\d+$/.test(text)!==true && text!==''){
            return;
        }
        if(text.length > 10){
            return;
        }
        if(text === ""){
            setWhat('option')
            setValid(false)
            setNumber('')
            return;
        }
        setWhat('number')
        setNumber(text)
    }

    const submit1 = (e) =>{
        e.preventDefault();
        setWhat('pass')
    }

    const submit2 = (e) =>{
        e.preventDefault();
        if(number.length < 10){
            setValid(true);
            return
        }
        setWhat('pass')
        // setWhat('number')
    }


    const register = async (e) =>{
        e.preventDefault();
        setShow(true)
        try {
            
            const res = await fetch('/register',{
                method: 'POST',
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    user:email===''?number:email,
                    password:password
                })
            })

            if(res.status === 422){
                window.alert('invalid')
            }else{
                setShow(false)
                window.alert('complete')
                setWhat('login')
            }
        } catch (error) {
            console.log('err');
        }

    }


    const login = async(e) =>{
        e.preventDefault();
        setShow(true)
        try {
            
            const res = await fetch('/signin',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    user : user,
                    password : lPassword
                })
                
            })

            setShow(false);
            if(res.status === 400){
                window.alert('invalid')
            }else{
                window.alert('complete')
                setLPassword('')
                setIsLogin(true)
                setRootUser({
                    user : user,
                    password : lPassword
                })
                setUser('')
                setOpen(false)
            }
        } catch (error) {
            
        }
    }

    const whatToShow = () => {
        if(what==='option'){
            return (
                
                <div className='login_option'>
                    <h6>Register to continue</h6>
                    <div className='email_click' onClick={()=>setWhat('email')}>
                        Have an Email account?
                    </div>
                    <div className='or'>
                        <h6>or</h6>
                    </div>
                    <div className='mob' id='mob'>
                        <span style={{borderRight:' 1px solid #1f80e0',padding:'0',paddingRight:'.7rem'}} >+91</span> 
                        <div style={{paddingLeft:'.8rem'}} >
                            <input type="text" placeholder='Enter your mobile number' value={number} onChange={(e)=>handleInput(e.target.value)} autoFocus={true}/>
                        </div>
                    </div>
                    <div id='bottom_bor'>

                    </div>
                    <button  className='continue2'  onClick={()=>setWhat('login')} style={{
                        marginTop:'2rem'
                    }}>
                        <span>Already Register? Login </span>
                    </button>
                </div>
            )
        }
        if(what==='email'){
            arr.push('email')
            return (
                
                <form className='login_option' onSubmit={submit1}>
                    <h6>Continue using an Email</h6>
                    <span style={{
                        color:'#f15151',
                        fontSize:'12px'
                    }} >This will be set as you Username</span>
                    <input type="email" name="" id="" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' className='email_input' required/>
                    <button type='submit' className='continue2' >
                        <span>continue <ArrowForwardIosRoundedIcon style={{ fontSize: 20 }}/> </span>
                    </button>
                </form>
            )
        }


        if(what==='number'){
            arr.push('number')
            return (
                
                <form className='login_option' onSubmit={submit2}>
                    <h6>Continue using Phone</h6>
                    <span style={{
                        color:'#f15151',
                        fontSize:'12px'
                    }} >This will be set as you Username</span>
                    <div className='mob' id='mob' style={{
                        marginTop:'4rem'
                    }}
                    // onSubmit={submit2}
                    >
                        <span style={{borderRight:' 1px solid #1f80e0',padding:'0',paddingRight:'.7rem'}} >+91</span> 
                        <div style={{paddingLeft:'.8rem'}} >
                            <input type="text" placeholder='Enter your mobile number' value={number} onChange={(e)=>handleInput(e.target.value)} autoFocus={true}/>
                        </div>
                    </div>
                    <div id='bottom_bor' style={{
                        borderBottom:valid?'2px solid #f15151':'2px solid #1f80e0'
                    }}>

                    </div>
                    <span style={{
                        visibility:valid?'visible':'hidden',
                        color:'#f15151',
                        fontSize:'12px'
                    }} >Please enter valid mobile Number</span>
                    <button type='submit' className='continue2' style={{
                        marginTop:'2rem'
                    }}>
                        <span>continue <ArrowForwardIosRoundedIcon style={{ fontSize: 20 }}/></span>
                    </button>

                </form>
            )
        }

        
        if(what==='pass'){
            arr.push('pass')
            return (
                
                <form className='login_option' onSubmit={register}>
                    <h6>Password</h6>
                    <input type="password" name="" id="" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' className='email_input' required/>
                    <button type='submit' className='continue2' >
                        <span>
                        {
                            show?<CircularColor />:'Register'
                        }
                        
                        </span>
                    </button>
                </form>

            )
        }

        if(what==='login'){
            arr.push('login')
            return (
                
                <form className='login_option' onSubmit={login}>
                    <h6>Login</h6>
                    <input type="text" name="" id="" value={user} onChange={(e)=>setUser(e.target.value)} placeholder='Username' className='email_input' required/>
                    <input type="password" name="" id="" value={lPassword} onChange={(e)=>setLPassword(e.target.value)} placeholder='Password' className='email_input' required/>
                    <button type='submit' className='continue2' >
                        <span>
                        {
                            show?<CircularColor />:'Login'
                        }
                        
                        </span>
                    </button>
                </form>

            )
        }


    }

    const go = () =>{
        
        arr.pop();
        if(arr.length === 0){
            setNumber('')
            setEmail('')
            setPassword('')
            setWhat('option')
        }else{
            // setNumber(number)
            setWhat(arr[arr.length-1])
        }
    }

  return (
    <div>
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{
            display:'flex',
            justifyContent:'space-between',
        }}>
            <IconButton style={{
                visibility:what==='option'?'hidden':'visible'
            }}
            onClick={go}
            >
                <ArrowBackRoundedIcon />
            </IconButton>
            <IconButton onClick={()=>setOpen(false)}>
                <CloseRoundedIcon />
            </IconButton>
            
        </DialogTitle>
        {
            whatToShow()
        }
      </Dialog>
    </div>
  );
}
