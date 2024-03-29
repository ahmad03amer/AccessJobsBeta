import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Malak from "../../picture/mlk.jpg";


const managerBlog = [
	{ image: require('../../picture/mlk.jpg').default, title:'Malak Ibrahim', location:'Palestine,Slafit, Bedaya', typeJob:'Full-Time', TimePost:'1 days', },
	{ image: require('../../picture/ahmad1.jpg').default, title:'Ahmad Amr', location:'Palestine,Slafit, Masha', typeJob:'Full-Time,Part-Time', TimePost:'2 days', },
	{ image: require('../../picture/mohy.jpg').default, title:'Mohye Ahmad', location:'Palestine,Ramallah, Der-Alsodan', typeJob:'By-Contract', TimePost:'5 days', },
	{ image: require('../../picture/arkan.jpg').default, title:'Ayman Salman', location:'Palestine,Ramallah, Der-Alsodan', typeJob:'Full-Time, By-Contract', TimePost:'10 days', },
	{ image: require('../../picture/T.jpeg').default, title:'Mohammad Gabin', location:'Palestine,Ramallah, Abo-Fallah', typeJob:'Part-Time', TimePost:'12 days', },
	{ image: require('../../picture/arkan.jpg').default, title:'Arkan Saleh', location:'Palestine,Qalqilya, Jayyous', typeJob:'Full-Time', TimePost:'14 days', },
]

class Jobcvmanager extends Component{
	render(){
		return(
			<>
				
					<div className="page-content bg-white">
						
						<div className="content-block">
							
							<div className="section-full bg-white p-t50 p-b20">
								<div className="container">
									<div className="row">
										<div className="col-xl-3 col-lg-4 m-b30">
											
												<div className="candidate-info">
													<div className="candidate-detail text-center">
														<div className="canditate-des">
															<Link to={""}>
																<img alt="" src={Malak} />
															</Link>
															<div className="upload-link" title="update" data-toggle="tooltip" data-placement="right">
																<input type="file" className="update-flie" />
																<i className="fa fa-camera"></i>
															</div>
														</div>
														<div className="candidate-title">
															<div className="">
																<h4 className="m-b5"><Link to={""}>Malak Ibrahim</Link></h4>
																<p className="m-b0"><Link to={""}>Web developer</Link></p>
															</div>
														</div>
													</div>
													<ul>
														<li><Link to="/Jobprofile">
															<i className="fa fa-user-o" aria-hidden="true"></i> 
															<span>Profile</span></Link></li>
														<li><Link to="/Jobmyresume">
															<i className="fa fa-file-text-o" aria-hidden="true"></i> 
															<span>My Resume</span></Link></li>
														<li><Link to="/Jobsavedjobs">
															<i className="fa fa-heart-o" aria-hidden="true"></i> 
															<span>Saved Jobs</span></Link></li>
														<li><Link to={"/jobs-applied-job"}>
															<i className="fa fa-briefcase" aria-hidden="true"></i> 
															<span>Applied Jobs</span></Link></li>
														<li><Link to="/Jobsalert">
															<i className="fa fa-bell-o" aria-hidden="true"></i> 
															<span>Job Alerts</span></Link></li>
														<li><Link to="/Jobcvmanager"  className="active">
															<i className="fa fa-id-card-o" aria-hidden="true"></i> 
															<span>CV Manager</span></Link></li>
														<li><Link to="/Changepasswordpage">
															<i className="fa fa-key" aria-hidden="true"></i> 
															<span>Change Password</span></Link></li>
														<li><Link to={"./"}>
															<i className="fa fa-sign-out" aria-hidden="true"></i> 
															<span>Log Out</span></Link></li>
													</ul>
												</div>
											
										</div>
										<div className="col-xl-9 col-lg-8 m-b30">
											<div className="job-bx browse-job clearfix">
												<div className="job-bx-title clearfix">
													<h5 className="font-weight-700 pull-left text-uppercase">CV Manager</h5>
													<div className="float-right">
														<span className="select-title">Sort by freshness</span>
														<select className="custom-btn">
															<option>Last 2 Months</option>
															<option>Last Months</option>
															<option>Last Weeks</option>
															<option>Last 3 Days</option>
														</select>
													</div>
												</div>
												<ul className="cv-manager">
													{managerBlog.map((item,index)=>(
														<li key={index}>
															<div className="d-flex float-left">
																<div className="job-post-company">
																	<Link to={""}><span>
																		<img alt="" src={item.image} />
																	</span></Link>
																</div>
																<div className="job-post-info">
																	<h6><Link to={""}>{item.title}</Link></h6>
																	<ul>
																		<li><i className="fa fa-map-marker"></i>{item.location}</li>
																		<li><i className="fa fa-bookmark-o"></i>{item.typeJob}</li>
																		<li><i className="fa fa-clock-o"></i>{item.TimePost}</li>
																	</ul>
																</div>
															</div>
															<div className="job-links action-bx">
																<Link to={"/files/pdf-sample.pdf"} target="blank"><i className="fa fa-download"></i></Link>
																<Link to={""}><i className="ti-trash"></i></Link>
															</div>
														</li>
													))}	
													
												</ul>
												<div className="pagination-bx float-right">
													<ul className="pagination">
														<li className="previous"><Link to={""}><i className="ti-arrow-left"></i> Prev</Link></li>
														<li className="active"><Link to={""}>1</Link></li>
														<li><Link to={""}>2</Link></li>
														<li><Link to={""}>3</Link></li>
														<li className="next"><Link to={""}>Next <i className="ti-arrow-right"></i></Link></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				
				
			</>
		)
	}
}
export default Jobcvmanager;