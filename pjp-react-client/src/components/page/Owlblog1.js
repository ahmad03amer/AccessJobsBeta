import React, {Component} from 'react';
import Slider from "react-slick";



const postBlog= 
[
	{
		image: require('./../../picture/laaaaa.jpg').default,
		name:'Layth Abufarhah',
		commant:'In the past, it was difficult to search for a job,after using this site, it became easy to do so by collecting as many jobs as possible in one place and searching according to interests',
		type:'Back-End Developer',
	},
	{
		image: require('./../../picture/SARI.jpeg').default,
		name:'Sari Alhaj',
		commant:'I got to know the site through a friend. I advise everyone to visit it and enroll in it, it has a large number of jobs and courses, and many blogs.I also got my first job from this site',
		type:'Back-End Developer',


	},
	{
		image: require('./../../picture/teeee.jpg').default,
		name:'Mohammad Gabin',
		commant:'Caught my attention the most is that the people in charge of this site are university students, who have great motivation and energy to work and follow up on everything related to this field.',
	  
		type:'DevOps',

	},
	{
		image: require('./../../picture/arkan.jpg').default,
		name:'Arkan Saleh',
		commant:'I just got a job that I applied for via Access Jobs, I used the site all the time during my job hunt,I am also aware of everything through my subscription to the message alert service.',
		type:'Job Seekers',

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
								<p>{item.commant}</p>
							</div>
							<div className="testimonial-detail clearfix">
								<div className="testimonial-pic radius shadow">
									<img src={item.image} width="100" height="100" alt="" />
								</div>
								<strong className="testimonial-name">{item.name}</strong> 
								<span className="testimonial-position">{item.type}</span> 
							</div>
						</div>
					</div>	
				))}
				
			</Slider>
					
				
		)
		
	}
	
}

export default owltestimonial;