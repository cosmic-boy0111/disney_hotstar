import React,{useContext,useEffect,useState} from 'react'
import Card from './Card3'
import uuid from 'react-uuid'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { userContext } from '../App'
import CircularIndeterminate from './CircularProgress'



const SearchMore = () => {

    const {text} = useParams();
    const [data, setData] = useState()
    const [show, setShow] = useState(false)

    
  const getData = async () =>{


    try {
        setShow(false)
      const res = await fetch('/mainHeader',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })

      const Data = await res.json();

      const res2 = await fetch('/tvHeader',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })

      const data2 = await res2.json();


      const res3 = await fetch('/moviesHeader',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })

      const data3 = await res3.json();

      const res4 = await fetch('/disneyHeader',{
        method:'GET',
        headers:{
          'Content-Type' : 'application/json'
        }
      })

      const data4 = await res4.json();

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
      const arr = [...Data,...data2,...data3,...data4,...data5,...data6,...data7,...data8,...data9,...data10,...data11]
      const filteredArr = arr.filter((obj) => {
        const isPresentInSet = uniqueValuesSet.has(obj.name);
        uniqueValuesSet.add(obj.name);
        return !isPresentInSet;
      });


      setData(filteredArr.filter((e)=>{
        return (e.name.toLowerCase()).includes(text.toLowerCase());
    }))
        // console.log('hey');
        // console.log(data);
      setShow(true)

      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  },[text])

    return (
        <div className='body2' style={{
            padding:'.5rem 3.5rem'
        }}>
            <div style={{
                width:'100%',
                height:'100vh',
                display:show?'none':'flex',
                justifyContent:'center',
                alignItems:'center'
            }}>
                <CircularIndeterminate />
            </div>  
            <div style={{
                display:show?'block':'none'
            }}>
                <h5> <span style={{
                    opacity:'.7',
                    margin:'.5rem',
                }}>Showing all results for </span>{text} <span></span></h5>
                <div style={{
                    display:'flex',
                    flexWrap:'wrap',
                    marginTop:'2rem'
                }}>

                {
                    data===undefined?'':data.map((e)=>{
                        return <Card obj={e} idx={uuid()} mov={e.path==='tv'?false:true}/>
                    })
                }

                </div>
            </div>
        </div>
    )
}

export default SearchMore
