import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const widgetPost=[
	{ image: require('../../picture/search.jpg').default,
	  title : 'Using the Internet in Your Job Search',
	  date:'May 5, 2021',
	  views:'126',
	},
	{ image: require('../../picture/job.jpg').default,
	  title : '4 ways remote work could dramatically reshape your options',
	  date:'Jun 16, 2021',
	  views:'93',

	},
	{ image: require('../../picture/cio_career.png').default,
	  title : 'Interviewing for a job with a criminal record',
	  date:'May 26, 2021',
	  views:'100',

	},
]
const dzPost=[
	{ image: require('../../picture/cio_career.png').default },
	{ image: require('../../picture/flex.png').default },
	{ image: require('../../picture/women-work-home-353x177.png').default },
	{ image: require('../../picture/buzzel.jpg').default },
	{ image: require('../../picture/bridge-jobs.png').default },
	{ image: require('../../picture/company30.jpg').default },
]

class Sidebar extends Component{
	render(){
		return(
			<aside  className="side-bar">
				
				<div className="widget recent-posts-entry">
					<h6 className="widget-title style-1">Recent Posts</h6>
					<div className="widget-post-bx">
						{widgetPost.map((item,index)=>(	
							<div className="widget-post clearfix" key={index}>
								<div className="dez-post-media"> 
									<img src={item.image} width="200" height="143" alt="" /> 
								</div>
								<div className="dez-post-info">
									<div className="dez-post-header">
									<Link to={"/blogs"}><h6 className="post-title">{item.title}</h6></Link>
									</div>
									<div className="dez-post-meta">
										<ul className="d-flex align-items-center">
											<li className="post-date"><i className="fa fa-calendar"></i>{item.date}</li>
											<li className="post-comment"><Link to={"/blogs"}><i className="fa fa-comments-o"></i>{item.views}</Link> </li>
										</ul>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				
				<div className="widget widget_gallery gallery-grid-3">
					<h6 className="widget-title style-1">Our services</h6>
					<ul>
						{dzPost.map((item,index)=>(
							<li key={index}>
								<div className="dez-post-thum">
									<Link to={"/blogs"} className="dez-img-overlay1 dez-img-effect zoom-slow">
										<img src={item.image} alt="" />
									</Link>
								</div>
							</li>
						))}	
						
					</ul>
				</div>
				
				<div className="widget widget_archive">
					<h6 className="widget-title style-1">Categories List</h6>
					<ul>
						<li><Link to={"/blogs"}>Find Job </Link></li>
						<li><Link to={"/blogs"}>How to Post Jobs </Link></li>
						<li><Link to={"/blogs"}>Remote Workers</Link></li>
						<li><Link to={"/blogs"}>Interviewing</Link></li>
						
					</ul>
				</div>
				
				<div className="widget widget-newslatter">
					<h6 className="widget-title style-1">Newsletter</h6>
					<div className="news-box  mt-4 ">
						<p>Enter your e-mail and subscribe to our website.</p>
						<form className="dzSubscribe" action="" method="post">
							<div className="dzSubscribeMsg"></div>
							<div className="input-group">
								<input name="dzEmail" required="required" type="email" className="form-control" placeholder="Your Email" />
							<Link to="/contactUs">	<button name="submit" value="Submit" type="submit" className="site-button btn-block">Subscribe Now</button></Link>
							</div>
						</form>
					</div>
				</div>
			</aside>
		)
	}
}

export default Sidebar;