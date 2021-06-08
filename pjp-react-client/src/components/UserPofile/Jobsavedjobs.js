import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {Modal} from 'react-bootstrap';


import Malak from "../../picture/mlk.jpg";
import Malak1 from "../../picture/axsos-logo.png";



const jobAlert=[
	{ title: 'FrontEnd React.js Developer', date:'May 15,2021', },
		
]

class Jobsavedjobs extends Component{
	state = {
		// initial state
		show: false,
	}

	handleClose = () => {
		this.setState({ show: false });
	};
	handleShow = () => {
		this.setState({ show: true });
	};
	
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
															<h4 className="m-b5"><Link to={""}>Malak Ibrahim </Link></h4>
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
														<li><Link to="/Jobsavedjobs" className="active">
															<i className="fa fa-heart-o" aria-hidden="true"></i> 
															<span>Saved Jobs</span></Link></li>
														<li><Link to={"/jobs-applied-job"}>
															<i className="fa fa-briefcase" aria-hidden="true"></i> 
															<span>Applied Jobs</span></Link></li>
														<li><Link to="/Jobsalert">
															<i className="fa fa-bell-o" aria-hidden="true"></i> 
															<span>Job Alerts</span></Link></li>
														<li><Link to="/Jobcvmanager">
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
										<div className="job-bx save-job browse-job table-job-bx clearfix">
											<div className="job-bx-title clearfix">
												<h5 className="font-weight-700 pull-left text-uppercase">1 Saved Jobs</h5>
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
											<table>
												<thead>
													<tr>
														<th></th>
														<th>Premium jobs</th>
														<th>Company</th>
														<th>Date</th>
														<th></th>
													</tr>
												</thead>
												<tbody>
													{jobAlert.map((item,index)=>(
														<tr key={index}>
															<td className="job-post-company">
																<Link to={""}><span>
																	<img alt="" src={Malak1} />
																</span></Link>
															</td>
															<td className="job-name"><Link to={"/job-detail"}>{item.title}</Link></td>
															<td className="criterias text-primary"><Link to={"/company-profile"}>www.axsos.me</Link></td>
															<td className="date">{item.date}</td>
															<td className="job-links">
																<Link to={"#"} data-toggle="modal" data-target="#exampleModalLong" onClick={this.handleShow}>
																<i className="fa fa-eye"></i></Link>
																<Link to={""}><i className="ti-trash"></i></Link>
															</td>
														</tr>
													))}
													
												</tbody>
											</table>
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
										
										<Modal show={this.state.show} onHide={this.handleClose} className=" modal fade modal-bx-info" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
											<div className="modal-dialog  my-0" role="document">
												<div className="modal-content">
													<div className="modal-header">
														<div className="logo-img">
															<img alt="" src={Malak1} />
														</div>
														<h5 className="modal-title">Axsos AG</h5>
														<button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.handleClose}>
															<span aria-hidden="true">&times;</span>
														</button>
													</div>
													<div className="modal-body">
														<ul>
															<li><strong>Job Title :</strong><p> FrontEnd React.js Developer</p></li>
															<li><strong>Experience :</strong><p>3 Year </p></li>
															<li><strong>Your responsibilities:</strong>
																<p>Developing new user-facing features using React.js</p>
																<p>Building reusable components and front-end libraries for future use</p>
																<p>Translating designs and wireframes into high-quality code</p>
																<p>Optimizing components for maximum performance across a vast array of web-capable devices and browsers</p>
																<p>Testing the developed features to assure compliance and consistency</p>
																<p>Making suggestions for better solutions to problems</p>

																
																</li>

																<li><strong>Your profile</strong>
																<p>BA degree in Computer Engineering, IT, Computer Science or related field</p>
																<p>Excellent written / spoken English is a must, German is a plus</p>
																<p>Personal commitment to success - making it happen whatever it takes</p>
																<p>Prepared to dive into unknown challenges</p>
																<p>Committed to deliver high quality work daily</p>
																<p>Proficiency in JavaScript, including DOM manipulation</p>
																<p>Minimum of 3 years of experience as frontend developer</p>
																<p>Thorough understanding of React.js and its core principles</p>
																<p>Experience with popular React.js workflows (Redux)</p>
																<p>Familiarity with newer specifications of EcmaScript</p>
																<p>Experience with data structure libraries (e.g., Immutable.js)</p>
																<p>Familiarity with modern front-end build pipelines and tools</p>
																<p>Experience with common front-end tools such as Babel, Webpack, NPM, etc.</p>
																<p>Familiarity with code versioning tools such as Git</p>
																<p>Knowledge of React Native is a plus</p>



																
																</li>
														</ul>
													</div>
													<div className="modal-footer">
														<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleClose}>Close</button>
													</div>
												</div>
											</div>
										</Modal>
										
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

export default Jobsavedjobs;