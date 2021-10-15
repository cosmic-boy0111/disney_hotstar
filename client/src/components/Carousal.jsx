import React,{useEffect,useState} from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'
import Banner from './Banner'
import { Carousel } from 'react-bootstrap'

const Carousal = ({data}) => {


    return (
        <>

            <Carousel indicators={false} >
                {
                    data.map((e,index)=>{
                        if(index===0){
                            return <Carousel.Item interval={4000}>

                                        <Banner obj={e}/>  
                                    </Carousel.Item>
                        }else{
                            return <Carousel.Item interval={4000}>

                                        <Banner obj={e}/>  
                                    </Carousel.Item>
                        }
                    })
                }
                
            </Carousel>

            


        </>
    )
}

export default Carousal
