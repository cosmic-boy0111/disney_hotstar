

import React,{useState,useEffect} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card'
import Banner from "./Banner";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import uuid from 'react-uuid'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
    slidesToSlide: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
    slidesToSlide:1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};




const Slider = ({data,mov=false}) => {




  
  return (
    <>
      <div className='slider_div'>

      <Carousel
        // infinite={true}
        responsive={responsive}
        draggable={false}
        swipeable={false}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-0-px"
      >
          
          {
            data.map((e,index)=>{
              return <Card obj={e} idx={uuid()} mov={mov}/>
            })
          }
        </Carousel>
      </div>
    </>
  )
}

export default Slider

