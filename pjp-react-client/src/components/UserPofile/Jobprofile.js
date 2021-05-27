import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Profilesidebar from './Profilesidebar';
 
class Jobprofile extends Component{
	render(){
		return(
			<div className="page-wraper">
				
				
				<div className="page-content bg-white">
					<div className="content-block">
						<div className="section-full bg-white browse-job p-t50 p-b20">
							<div className="container">
								<div className="row">
									<Profilesidebar /> 
									<div className="col-xl-9 col-lg-8 m-b30">
										<div className="job-bx job-profile">
											<div className="job-bx-title clearfix">
												<h5 className="font-weight-700 pull-left text-uppercase">Basic Information</h5>
												<Link to={"./"} className="site-button right-arrow button-sm float-right">Back</Link>
											</div>
											<form>
												<div className="row m-b30">
													<div className="col-lg-6 col-md-6">
														<div className="form-group">
															<label>Your Name:</label>
															<input type="text" className="form-control" placeholder="Malak Ibrahim" /> 
														</div>
													</div>
													<div className="col-lg-6 col-md-6">
														<div className="form-group">
															<label>Professional title:</label>
															<input type="text" className="form-control" placeholder="Web Designer" />
														</div>
													</div>
													<div className="col-lg-6 col-md-6">
														<div className="form-group">
															<label>Languages:</label>
															<input type="text" className="form-control" placeholder="English" />
														</div>
													</div>
													<div className="col-lg-6 col-md-6">
														<div className="form-group">
															<label>Age:</label>
															<input type="text" className="form-control" placeholder="23 Year" />
														</div>
													</div>
													<div className="col-lg-6 col-md-6">
														<div className="form-group">
															<label>Current Salary($):</label>
															<input type="text" className="form-control" placeholder="1000$" />
														</div>
													</div>
													<div className="col-lg-6 col-md-6">
														<div className="form-group">
															<label>Expected Salary:</label>
															<input type="text" className="form-control" placeholder="1200$" />
														</div>
													</div>
													<div className="col-lg-12 col-md-12">
														<div className="form-group">
															<label>Description:</label>
															<textarea  className="form-control">
															</textarea>
														</div>
													</div>
												</div>
												<div className="job-bx-title clearfix">
													<h5 className="font-weight-700 pull-left text-uppercase">Contact Information</h5>
												</div>
												<div className="row">
													<div className="col-lg-6 col-md-6">
														<div className="form-group">
															<label>Phone:</label>
															<input type="text" className="form-control" placeholder="+972 595-453-052" />
														</div>
													</div>
													<div className="col-lg-6 col-md-6">
														<div className="form-group">
															<label>Email Address:</label>
															<input type="text" className="form-control" placeholder="info@example.com" />
														</div>
													</div>
													<div className="col-lg-6 col-md-6">
														<div className="form-group">
															<label>Country:</label>
															<input type="text" className="form-control" placeholder="Country Name" />
														</div>
													</div>
													<div className="col-lg-6 col-md-6">
														<div className="form-group">
															<label>Postcode:</label>
															<input type="text" className="form-control" placeholder="112233" />
														</div>
													</div>
													<div className="col-lg-6 col-md-6">
														<div className="form-group">
															<label>City:</label>
															<input type="text" className="form-control" placeholder="Biddya" />
														</div>
													</div>
													<div className="col-lg-6 col-md-6">
														<div className="form-group">
															<label>Full Address:</label>
															<input type="text" className="form-control" placeholder="Palestine" />
														</div>
													</div>
												</div>
												<button className="site-button m-b30">Save Setting</button>
											</form>
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
export default Jobprofile;