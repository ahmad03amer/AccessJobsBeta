import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Modal} from 'react-bootstrap';

import Malak from "../../picture/mlk.jpg";


const jobAlert= [
	{ title:'Social Media Expert',	date:'December 15,2018',},
	{ title:'Web Designer',	date:'November 10,2018',},
	{ title:'Finance Accountant',	date:'October 5,2018',},
	{ title:'Social Media Expert',	date:'December 15,2018',},
	{ title:'Web Designer',	date:'November 10,2018',},
	{ title:'Finance Accountant',	date:'October 5,2018',},
	{ title:'Social Media Expert',	date:'December 15,2018',},
	{ title:'Web Designer',	date:'November 10,2018',},
	{ title:'Finance Accountant',	date:'October 5,2018',},
	{ title:'Social Media Expert',	date:'December 15,2018',},
]

class Jobsalert extends Component{
	
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
														<li><Link to="/Jobsalert" className="active">
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
											<div className="job-bx table-job-bx browse-job clearfix">
												<div className="job-bx-title clearfix">
													<h5 className="font-weight-700 pull-left text-uppercase">Job Alerts</h5>
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
															<th>Premium jobs</th>
															<th>Criterias</th>
															<th>Date</th>
															<th></th>
														</tr>
													</thead>
													<tbody>
														{jobAlert.map((item,index)=>(
															<tr key={index}>
																<td className="job-name"><Link to={"/job-detail"}>{item.title}</Link></td>
																<td className="criterias">Lorem Ipsum is simply dummy text.</td>
																<td className="date">{item.date}</td>
																<td className="job-links">
																	<Link to={'#'}data-toggle="modal" data-target="#exampleModalLong" onClick={this.handleShow}>
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
											
											<Modal show={this.state.show} onHide={this.handleClose} className="modal fade modal-bx-info" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
												<div className="modal-dialog" role="document">
													<div className="modal-content">
														<div className="modal-header">
															<div className="logo-img">
																<img alt="" src={Malak} />
															</div>
															<h5 className="modal-title">Company Name</h5>
															<button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.handleClose}>
																<span aria-hidden="true">&times;</span>
															</button>
														</div>
														<div className="modal-body">
															<ul>
																<li><strong>Job Title :</strong><p> Web Developer – PHP, HTML, CSS </p></li>
																<li><strong>Experience :</strong><p>5 Year 3 Months</p></li>
																<li><strong>Deseription :</strong>
																	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since.</p>
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
export default Jobsalert;