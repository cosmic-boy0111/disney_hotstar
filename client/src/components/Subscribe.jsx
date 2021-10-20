import React,{useState,useEffect,useContext} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../Style/Subscribe.css'
import img from '../Images/back.png'
import Footer from './Footer'
import logo from '../Images/disney-hotstar-logo-dark.svg'
import PackContainer from './PackContainer';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useHistory } from 'react-router-dom'
import CircularIndeterminate from './CircularProgress'
import BasicMenu from './Menu'
import { userContext } from '../App'
import CustomizedDialogs from './LoginContainer';


const Subscribe = () => {

    const history = useHistory();
    const { isLogin,setOpen,setIsLogin,setRootUser } = useContext(userContext)
    const [show, setShow] = useState(false)

    const getData = async() =>{
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
        } catch (error) {
            console.log('err');
        }
    }

    useEffect(() => {
        getData()
       setTimeout(() => {
           setShow(true)
       }, 500);
    },[])


    return (
        <>
        <CustomizedDialogs />
        <div className='load' display={{
            display:!show?'flex':'none'
        }}>
            <img src={logo} alt="" style={{width:'150px',marginBottom:'1rem'}}/>
            <CircularIndeterminate />
        </div>
        <div style={{
            display:show?'block':'none'
        }}>
        <div className='new_nav' id='new_nav' >
                <div  style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    cursor:'pointer'
                }}
                    onClick={()=>history.push('/')}
                >
                    <ArrowBackRoundedIcon /> <img src={logo} alt="" style={{marginLeft:'1rem'}}/>
                </div>
                <div style={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
                }}> 
                {
                    isLogin?<BasicMenu />:<button className='sub_login' onClick={()=>setOpen(true)}>Log in</button>

                }
                </div>
            </div>
        <div className='sub_container' id='sub_container'>
            
            <div className='sub2'>
                <img src={img} alt="" className='sub_img'/>
                <div className='aise-hi'>

                </div>
                <div className='extra'>

                </div>
                <div className='aisa-vaisa'>

                </div>
                
                <div className='container2' id='container2'>
                    <img src={JSON.parse(localStorage.getItem('movie_selected'))===null?"":JSON.parse(localStorage.getItem('movie_selected'))} alt="" className='muze-ni-pta'/>
                    <h4>Subscribe to watch </h4>
                    <PackContainer />
                </div>
            </div>
            <div style={{
                backgroundColor:'#0b0f18',
                display:JSON.parse(localStorage.getItem('movie_selected'))===null?'block':'none'
            }}>

            <Footer />
            </div>
        </div>
        </div>
        </>
    )
}

export default Subscribe
