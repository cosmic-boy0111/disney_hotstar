import React,{useEffect} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Banner from './Banner';

const Carousal2 = ({data}) => {


    return (
        <Carousel 
        autoPlay={true}
        autoFocus={true}
        interval={4000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        centerMode={true}
        centerSlidePercentage={93}
        stopOnHover={false}
        >
            {
                    data.map((e)=>{
                            return <Banner obj={e}/>  
                    })
                }
        </Carousel>
    )
}

export default Carousal2
