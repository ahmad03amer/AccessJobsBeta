import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Page_Css/IconSlider.css'; 

// icons 

import exalt from "../../picture/exalt.svg";
import cisco from "../../picture/cisco.svg";
import cato from "../../picture/cato.svg";
import iconnect from "../../picture/Iconnec.png";

import besan from "../../picture/besan.png";
import freigtos from "../../picture/freightos.svg";
import harri from "../../picture/harri.png";
import ppp from "../../picture/logo1-Custom.jpg";



 class IconSlider extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
          };
        return (
            <div>
              <div className=" center-text">
               <div className="section-title text-center">
                   <h2>Our <span>Partner</span></h2>
               </div>
            </div>
             
               <Slider className="  text-cener" {...settings}>
      
     
      <div className ="img-responsive">
      <img className='iconsize' src = {exalt}/>
      </div>
      <div className ="img-responsive">
      <img className='iconsize' src = {cisco}/>
      </div>
      <div className ="img-responsive">
      <img className='iconsize' src = {cato}/>
      </div>
      <div className ="img-responsive">
      <img className='iconsize' src = {iconnect}/>
      </div>
      <div className ="img-responsive">
      <img className='iconsize' src = {ppp}/>
      </div>

      <div className ="img-responsive">
      <img className='iconsize' src = {besan}/>
      </div>
      <div className ="img-responsive">
      <img  style ={{ height: '135px' , width :'135px'}} src = {freigtos}/>
      </div>

      <div className ="img-responsive">
      <img   style ={{ height: '115px' , width :'115px'}} src = {harri}/>
      </div>
    
     
     
    
   
    </Slider>
          

            </div>
        )
    }
}

export default IconSlider; 