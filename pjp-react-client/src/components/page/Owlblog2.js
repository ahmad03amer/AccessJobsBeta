import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";



const latestBlog = [
	{
		image: require('./../../picture/bg2.jpg').default,
		title : 'Building Trust with Your Remote Workers',
		describe:'Many companies have identified remote working as a viable option to hire the best staff. Tech companies, have been doing this for years....',
		date:'May 18, 2021',
		views:'1k',
	},
	{
		image: require('./../../picture/bg3.jpg').default,
		title : 'Using the Internet in Your Job Search',
		describe:'Employers increasingly use the Internet as a recruiting tool. Many job search services and resources on the Internet are free to job seekers..',
		date:'May 10, 2021',
		views:'30',
	},
	{
		image: require('./../../picture/bg5.jpg').default,
		title : '4 ways remote work could dramatically reshape your options',
		describe:'Sometimes that’s great, as when you sit with your laptop sipping homemade cold brew on your porch, enjoying the morning breeze. Sometimes that’s more challenging..',
		date:'May 6, 2021',
		views:'16',
	},
	{
		image: require('./../../picture/bg4.jpg').default,
		title : 'Interviewing for a job with a criminal record',
		describe:'ob interviews can be intimidating for anyone, especially if you have a criminal record. You have to deal with the feeling of being judged, the possibility of your record...',
		date:'May 3, 2021',
		views:'12',
	},
]
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
  	<div className="owl-nav">
		<div className="owl-next la la-angle-right "  onClick={onClick}/>
	</div>	
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
	<div className="owl-nav">
		<div className=" owl-prev la la-angle-left " onClick={onClick}/>
	</div>
  );
}

class Latestblogowl extends Component{
	render(){
		var settings = {		
			arrows: true,
            slidesToShow: 3,			
            infinite: true,
			autoplay: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
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
				
			<Slider className="blog-carousel owl-carousel owl-btn-center-lr owl-btn-3 owl-theme owl-btn-center-lr owl-btn-1 " {...settings}>
				{latestBlog.map((item, index) => (
					<div className="item p-3" key={index}>
						<div className="blog-post blog-grid blog-style-1">
							<div className="dez-post-media dez-img-effect radius-sm"> <Link to={"/Blogdetail"}><img src={item.image} alt="" /></Link> </div>
							<div className="dez-info">
								 <div className="dez-post-meta">
									<ul className="d-flex align-items-center">
										<li className="post-date"><i className="fa fa-calendar"></i>{item.date}</li>
										<li className="post-comment"><i className="fa fa-comments-o"></i><Link to={""}>{item.views}</Link> </li>
									</ul>
								</div>
								<div className="dez-post-title ">
									<h5 className="post-title font-25"><Link to="/blogs">{item.title}</Link></h5>
								</div>
								<div className="dez-post-text">
									<p>
										{item.describe}
									</p>
								</div>
								<div className="dez-post-readmore blog-share"> 
									<Link to="/blogs" title="READ MORE" rel="bookmark" className="site-button-link"><span className="fw6">READ MORE</span></Link>
								</div>
							</div>
						</div>
					</div>
				))}
				
			</Slider>
					
				
		)
		
	}
	
}

export default Latestblogowl;