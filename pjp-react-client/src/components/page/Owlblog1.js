import React, {Component} from 'react';
import Slider from "react-slick";


import Malak from "./../../picture/mlk.jpg";

const postBlog= [
	{
		image: require('./../../picture/mlk.jpg'),
	},
	{
		image: require('./../../picture/c12.png'),
	},
	{
		image: require('./../../picture/c12.png'),
	},
	{
		image: require('./../../picture/c12.png'),
	},
]


class owltestimonial extends Component{
	render(){
		var settings = {
            slidesToShow: 3,
			arrows : false,
            infinite: true,
			autoplay: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 576,
				  settings: {
					slidesToShow: 1,
				  }
				}
			]
        };
		return(
				
			 <Slider className="blog-carousel-center owl-carousel owl-none " {...settings}>
				{postBlog.map((item, index) => (
					<div className="item p-3" key={index}>
						<div className="testimonial-5">
							<div className="testimonial-text">
								<p>We are proud of our customers, a sample of their statements about the jobs they got through our website.</p>
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<img src={Malak} width="100" height="100" alt="" />
								</div>
								<strong className="testimonial-name">Malak Ibrahim</strong> 
								<span className="testimonial-position">job seek</span> 
							</div>
						</div>
					</div>	
				))}
				
			</Slider>
					
				
		)
		
	}
	
}

export default owltestimonial;