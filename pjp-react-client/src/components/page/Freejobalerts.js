import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Form} from 'react-bootstrap';


var bnr = require('./../../images/banner/bnr1.jpg').default;
var bnr2 = require('./../../picture/mlk.jpg').default;

class Freejobalerts extends Component{
	render(){
		return(
			<>
				
				<div className="page-content">
					
					<div className="dez-bnr-inr overlay-black-middle" style={{backgroundImage:"url(" + bnr + ")" }}>
						<div className="container">
							<div className="dez-bnr-inr-entry">
								<h1 className="text-white">Free Job Alerts</h1>
								
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to={"/"}>Home</Link></li>
										<li>Free Job Alerts</li>
									</ul>
								</div>
								
							</div>
						</div>
					</div>
					
					<div className="content-block">
						
						<div className="section-full browse-job content-inner-2">
							<div className="container">
								<div className="job-bx bg-light">
									<div className="row">
										<div className="col-lg-8">
											<form className="job-alert-bx">
												<div className="row">
													<div className="col-lg-12">
														<div className="form-group">
															<label><b>Keywords</b></label>
															<input className="form-control" placeholder="Skills, Designations, Roles, Companies" type="text" />
														</div>
													</div>
													<div className="col-lg-12">
														<div className="form-group">
															<label><b>Location</b></label>
															<input className="form-control" placeholder="Enter the cities you want to work in" type="text" />
														</div>
													</div>
													<div className="col-lg-6">
														<div className="form-group">
															<label><b>Work Experience</b></label>
															<Form.Control as="select" custom className="btn dropdown-toggle text-left btn-default">
																<option>0 years</option>
																<option>1 years</option>
																<option>2 years</option>
																<option>5 years</option>
																<option>4 years</option>
																<option>5 years</option>
															</Form.Control>
														</div>
													</div>
													<div className="col-lg-6">
														<div className="form-group">
															<label><b>Expected Salary</b></label>
															<Form.Control as="select" custom className="btn dropdown-toggle text-left btn-default">
																<option>0$</option>
																<option>500$</option>
																<option>700$</option>
																<option>900$</option>
																<option>1000$</option>
																<option>1200$</option>
															</Form.Control>
														</div>
													</div>
													<div className="col-lg-12">
														<div className="form-group">
															<label><b>Industry</b></label>
															<input className="form-control" placeholder="Type or Select the desired industry" type="text" />
														</div>
													</div>
													<div className="col-lg-12">
														<div className="form-group">
															<label><b>Job Category</b></label>
															<input className="form-control" placeholder="Type or Select the desired category" type="text" />
														</div>
													</div>
													<div className="col-lg-12">
														<div className="form-group">
															<label><b>Role</b></label>
															<input className="form-control" placeholder="Type or Select the desired role" type="text" />
														</div>
													</div>
													<div className="col-lg-12">
														<div className="form-group">
															<label><b>Name your Job Alert</b></label>
															<input className="form-control" placeholder="Enter a name that will help you recognize this Job Alert" type="text" />
														</div>
													</div>
													<div className="col-lg-12">
														<div className="form-group">
															<div className="custom-control custom-checkbox">
																<input type="checkbox" className="custom-control-input" id="job-alert-check" name="job-alert-check" />
																<label className="custom-control-label" htmlFor="job-alert-check"><b>Also send me jobs closely related to my search terms</b> </label>
															</div>
														</div>
													</div>
													<div className="col-lg-12 text-center">
														<button className="site-button">Create Job Alert</button>
													</div>
												</div>
											</form>
										</div>
										<div className="col-lg-4 bg-gray">
											<div className="p-a25">
												<h6>Why should you create a job alert</h6>
												<ul className="list-check primary">
													<li>Get relevant jobs directly in your inbox</li>
													<li>Stay updated with latest opportunities</li>
													<li>Be the first one to apply</li>
													<li>Create up to 5 personalized job alerts</li>
												</ul>
												<div className="dez-divider bg-gray-dark"></div>
												<h6 className="font-14">Why info@example.com</h6>
												<p className="m-b10"><strong className="text-black m-r10">12+ </strong> Jobs</p>
												<p className="m-b10"><strong className="text-black m-r10">10+</strong> CV searches daily</p>
												<p>You can create job alerts on Access Jobs  to stay updated with new job postings that match your preferences. You can choose whether you want to receive these alerts on a daily or weekly basis through email, app notifications, or both.</p>
											</div>
										</div>
									</div>
								</div>
							</div>	
						</div>
						
					</div>
					<div className="modal fade lead-form-modal" id="car-details" tabIndex="-1" role="dialog" >
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
								<div className="modal-body row m-a0 clearfix">
									<div className="col-lg-6 col-md-6 overlay-primary-dark d-flex p-a0" style={{backgroundImage: "url(" + bnr2 + ")",  backgroundPosition:"center", backgroundSize:"cover" }}>
										<div className="form-info text-white align-self-center">
											<h3 className="m-b15">Login To You Now</h3>
											<p className="m-b15">Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry.</p>
											<ul className="list-inline m-a0">
												<li><Link to={""} className="m-r10 text-white"><i className="fa fa-facebook"></i></Link></li>
												<li><Link to={""} className="m-r10 text-white"><i className="fa fa-google-plus"></i></Link></li>
												<li><Link to={""} className="m-r10 text-white"><i className="fa fa-linkedin"></i></Link></li>
												<li><Link to={""} className="m-r10 text-white"><i className="fa fa-instagram"></i></Link></li>
												<li><Link to={""} className="m-r10 text-white"><i className="fa fa-twitter"></i></Link></li>
											</ul>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 p-a0">
										<div className="lead-form browse-job text-left">
											<form>
												<h3 className="m-t0">Personal Details</h3>
												<div className="form-group">
													<input  className="form-control" placeholder="Name"/>
												</div>	
												<div className="form-group">
													<input  className="form-control" placeholder="Mobile Number"/>
												</div>
												<div className="clearfix">
													<button type="button" className="btn-primary site-button btn-block">Submit </button>
												</div>
											</form>
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
export default Freejobalerts;