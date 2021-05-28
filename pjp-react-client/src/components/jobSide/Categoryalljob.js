import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import './../../css/style.css'
// import './../../css/style.min.css'
// import './../../css/templete.css'
// import './../../css/templete.min.css'

import logo1 from './../../picture/asal.png'
import logo2 from './../../picture/exalt.svg'
import logo3 from './../../picture/cato.svg'
import logo4 from './../../picture/freightos.svg'
import logo5 from './../../picture/Iconnec.png'
import logo6 from './../../picture/bop.png'
import logo7 from './../../picture/Capture.PNG'
import logo8 from './../../picture/jawwal.png'
import logo9 from './../../picture/cairobank.png'
import logo10 from './../../picture/ooredoo.jpg'


import ramallah from './../../images/city/ramallah.jpg'
import jer from './../../images/city/jer.jpg'
import Nablus from './../../images/city/nablus.jpg'
 import jenin from './../../images/city/jenin.jpg'
 import salfit from './../../images/city/sals.jpg'
 
 import Hebron from './../../images/city/Hebron.jpg'
 import gaza from './../../images/city/gaza.jpg'
 import betlahem from './../../images/city/betlahem.jpg'
import Jobsearchform from './../Element/Jobsearchform';
import logo from "../../picture/logo.svg";
import bnr from  './../../images/banner/bnr1.jpg';

const cityBox = [
	{
		image : ramallah,
		title : 'Ramallah',
	},
	{
		
		image : jer,
		title : 'Jerusalem',
	},
	{
		image : Nablus,
		title : 'Nablus',
	},
	{
		image : jenin,
		title : 'Jenin',
	},
	{
		image : salfit,
		title : 'Salfit',
	},
	{
		image : Hebron,
		title : 'Hebron',
	},
	{
		image : betlahem,
		title : 'Betlahem',
	},
	{
		image : gaza,
		title : 'Gaza',
	},
] 
const companyLogo= [
	{ image: logo1},
	{ image: logo2,},
	{ image: logo3,},
	{ image: logo4,},
	{ image: logo5,},
	{ image: logo6,},
	{ image: logo7,},
	{ image: logo8,},
	{ image: logo9,},
	{ image: logo10,}
]

class Categoryalljob extends Component{
	render(){
		return(
			<div className="page-wraper">
				
				
				<div className="page-content">
				

					
					<div className="dez-bnr-inr jobs-category overlay-black-middle" style={{ backgroundImage: `url(${bnr})` }}>
						<div className="container">
							<div className="dez-bnr-inr-entry">
								
								<Jobsearchform />
								
								<div className="category-jobs-info">
									<div className="nav">
										<ul>
											<li className="active"><Link to={"/category-all-jobs"}>All Jobs</Link></li>
											<li><Link to ={"/category-company-jobs"}>Jobs by Company</Link></li>
											<li><Link to ={"/category-jobs"}>Jobs by Category</Link></li>
											<li><Link to ={"/category-location-jobs"}>Jobs by Location</Link></li>
											<li><Link to ={"/category-designations-jobs"}>Jobs by Designation</Link></li>
											<li><Link to ={"/category-skill-jobs"}>Jobs by Skill</Link></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="content-block">
						<div className="section-full content-inner jobs-category-bx">
							<div className="container">
								<div className="row">
									<div className="col-lg-12 m-b30">
										<div className="job-bx bg-white">
											<div className="job-bx-title clearfix">
												<h6 className="text-uppercase">Browse Jobs by Locations
												<Link to ={"#"} className="float-right font-12 text-primary">View All</Link></h6>
											</div>
											<div className="row">
												{cityBox.map((item,index) => (
													<div className="col-lg-3 col-sm-6 col-md-6 m-b30" key={index}>
														<Link to ={"#"}>
															<div className="city-bx align-items-end d-flex" style={{ backgroundImage: `url(${item.image})` }}>
																<div className="city-info">
																	<h5>{item.title}</h5>
																</div>
															</div>
														</Link>
													</div>
												))}	
												
											</div>   
										</div>    
									</div>
									<div className="col-lg-6 m-b30">
										<div className="job-bx bg-white">
											<div className="job-bx-title clearfix">
												<h6 className="text-uppercase">Browse Jobs by Industries
												<Link to ={"#"} className="float-right font-12 text-primary">View All</Link></h6>
											</div>
											<div className="row">
												<div className="col-lg-6 col-sm-6">
													<ul className="category-list">
														<li><Link to ={"#"}>Android Jobs</Link></li>
														<li><Link to ={"#"}>WordPress Jobs</Link></li>
														<li><Link to ={"#"}>eCommerce Jobs</Link></li>
														<li><Link to ={"#"}>Design Jobs</Link></li>
														<li><Link to ={"#"}>Mobile Jobs</Link></li>
														<li><Link to ={"#"}>MySQL Jobs</Link></li>
														<li><Link to ={"#"}>SEO Jobs</Link></li>
													</ul>
												</div>    
												<div className="col-lg-6 col-sm-6">
													<ul className="category-list">
														<li><Link to ={"#"}>Website Design</Link></li>
														<li><Link to ={"#"}>Web Development</Link></li>
														<li><Link to ={"#"}>Web Design</Link></li>
														<li><Link to ={"#"}>Programming Jobs</Link></li>
														<li><Link to ={"#"}>JavaScript Jobs</Link></li>
														<li><Link to ={"#"}>Developer Jobs</Link></li>
														<li><Link to ={"#"}>Software Jobs</Link></li>
													</ul>
												</div>     
											</div>    
										</div>    
									</div>
									<div className="col-lg-6 m-b30">
										<div className="job-bx bg-white">
											<div className="job-bx-title clearfix">
												<h6 className="text-uppercase">Browse Jobs by Functional Areas
												<Link to ={"#"} className="float-right font-12 text-primary">View All</Link></h6>
											</div>
											<div className="row">
												<div className="col-lg-6 col-sm-6">
													<ul className="category-list">
														<li><Link to ={"#"}>Email Marketing</Link></li>
														<li><Link to ={"#"}>Lead Generation</Link></li>
														<li><Link to ={"#"}>Public Relations</Link></li>
														<li><Link to ={"#"}>Telemarketing Jobs</Link></li>
														<li><Link to ={"#"}>Display Advertising</Link></li>
														<li><Link to ={"#"}>Marketing Strategy</Link></li>
														<li><Link to ={"#"}>Search Engine Marketing</Link></li>
													</ul>
												</div>    
												<div className="col-lg-6 col-sm-6">
													<ul className="category-list">
														<li><Link to ={"#"}>Other - Sales & Marketing</Link></li>
														<li><Link to ={"#"}>Display Advertising</Link></li>
														<li><Link to ={"#"}>Market & Customer</Link></li>
														<li><Link to ={"#"}>Search Engine Optimization</Link></li>
														<li><Link to ={"#"}>Social Media Marketing</Link></li>
														<li><Link to ={"#"}>Search Engine Marketing</Link></li>
														<li><Link to ={"#"}>Marketing Strategy</Link></li>
													</ul>
												</div>
											</div>   
										</div>    
									</div>
									<div className="col-lg-12 m-b30">
										<div className="job-bx clearfix bg-white">
											<div className="job-bx-title clearfix">
												<h6 className="text-uppercase">Browse Jobs by Companies
												<Link to ={"#"} className="float-right font-12 text-primary">View All</Link></h6>
											</div>
											<ul className="company-logo-wg clearfix">
												{companyLogo.map((item,index)=>(
													<li className="brand-logo" key={index}>
														<Link to ={"#"}><img src={item.image} alt="" /></Link>
													</li>
												))}
												
											</ul>
										</div>
									</div>
									<div className="col-lg-6 m-b30">
										<div className="job-bx bg-white">
											<div className="job-bx-title clearfix">
												<h6 className="text-uppercase">Browse Jobs by Designations
												<Link to ={"#"} className="float-right font-12 text-primary">View All</Link></h6>
											</div>
											<div className="row">
												<div className="col-lg-6 col-sm-6">
													<ul className="category-list">
														<li><Link to ={""}>Email Marketing</Link></li>
														<li><Link to ={""} >Lead Generation</Link></li>
														<li><Link to ={"#"}>Public Relations</Link></li>
														<li><Link to ={"#"}>Telemarketing Jobs</Link></li>
														<li><Link to ={"#"}>Display Advertising</Link></li>
														<li><Link to ={"#"}>Marketing Strategy</Link></li>
														<li><Link to ={"#"}>Search Engine Marketing</Link></li>
													</ul>
												</div>    
												<div className="col-lg-6 col-sm-6">
													<ul className="category-list">
														<li><Link to ={"#"}>Other - Sales & Marketing</Link></li>
														<li><Link to ={"#"}>Display Advertising</Link></li>
														<li><Link to ={"#"}>Market & Customer</Link></li>
														<li><Link to ={"#"}>Search Engine Optimization</Link></li>
														<li><Link to ={"#"}>Social Media Marketing</Link></li>
														<li><Link to ={"#"}>Search Engine Marketing</Link></li>
														<li><Link to ={"#"}>Marketing Strategy</Link></li>
													</ul>
												</div>  									
											</div>    
										</div>    
									</div>
									<div className="col-lg-6 m-b30">
										<div className="job-bx bg-white">
											<div className="job-bx-title clearfix">
												<h6 className="text-uppercase">Browse Jobs by Skills
												<Link to ={"#"} className="float-right font-12 text-primary">View All</Link></h6>
											</div>
											<div className="row">
												<div className="col-lg-6 col-sm-6">
													<ul className="category-list">
														<li><Link to ={"#"}>Android Jobs</Link></li>
														<li><Link to ={"#"}>WordPress Jobs</Link></li>
														<li><Link to ={"#"}>eCommerce Jobs</Link></li>
														<li><Link to ={"#"}>Design Jobs</Link></li>
														<li><Link to ={"#"}>Mobile Jobs</Link></li>
														<li><Link to ={"#"}>MySQL Jobs</Link></li>
														<li><Link to ={"#"}>SEO Jobs</Link></li>
													</ul>
												</div>    
												<div className="col-lg-6 col-sm-6">
													<ul className="category-list">
														<li><Link to ={"#"}>Website Design Jobs</Link></li>
														<li><Link to ={"#"}>Web Development Jobs</Link></li>
														<li><Link to ={"#"}>Web Design Jobs</Link></li>
														<li><Link to ={"#"}>Programming Jobs</Link></li>
														<li><Link to ={"#"}>JavaScript Jobs</Link></li>
														<li><Link to ={"#"}>Developer Jobs</Link></li>
														<li><Link to ={"#"}>Software Jobs</Link></li>
													</ul>
												</div>
											</div>   
										</div>    
									</div>
						
								</div>
							</div>
						</div>
					</div>		
					
				</div>					
			
			</div>
		)
	}
}
export default Categoryalljob;