import React, {Component} from 'react';
import {Link} from 'react-router-dom';


import Malak from "../../picture/mlk.jpg";

class Profilesidebar extends Component{
	render(){
		return(
			<div className="col-xl-3 col-lg-4 m-b30">
				
					<div className="candidate-info">
						<div className="candidate-detail text-center">
							<div className="canditate-des">
								<Link to={''}>
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
														<li><Link to="/Jobprofile"  className="active">
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
														<li><Link to="/Jobcvmanager">
															<i className="fa fa-id-card-o" aria-hidden="true"></i> 
															<span>CV Manager</span></Link></li>
														<li><Link to="/Changepasswordpage"  aria-hidden="true">
															<i className="fa fa-key" aria-hidden="true"></i> 
														 
															<span>Change Password</span></Link></li>
															<li><Link to={"./"}>
														<i className="fa fa-sign-out" aria-hidden="true"></i> 
														<span>Log Out</span></Link>
														</li>
													</ul>
												</div>
											
										</div>
		)
	}
}
export default Profilesidebar;