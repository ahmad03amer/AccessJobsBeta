import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Jobcategories extends Component{
	render(){
		return(
			<div className="row sp20">
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="icon-bx-wraper">
						<div className="icon-content">
							<div className="icon-md text-primary m-b20"><i className="ti-location-pin"></i></div>
							<Link to="/FindJobs" className="dez-tilte">Engineering Jobs </Link>
							<p className="m-a0">126 Open Positions</p>
							<div className="rotate-icon"><i className="ti-location-pin"></i></div> 
						</div>
					</div>				
				</div>
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="icon-bx-wraper">
						<div className="icon-content">
							<div className="icon-md text-primary m-b20"><i className="ti-wand"></i></div>
							<Link to="/FindJobs" className="dez-tilte">Education Training Jobs</Link>
							<p className="m-a0">15 Open Positions</p>
							<div className="rotate-icon"><i className="ti-wand"></i></div> 
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="icon-bx-wraper">
						<div className="icon-content">
							<div className="icon-md text-primary m-b20"><i className="ti-wallet"></i></div>
							<Link to="/FindJobs" className="dez-tilte">Accounting&Finance Jobs</Link>
							<p className="m-a0">76 Open Positions</p>
							<div className="rotate-icon"><i className="ti-wallet"></i></div> 
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="icon-bx-wraper">
						<div className="icon-content">
							<div className="icon-md text-primary m-b20"><i className="ti-cloud-up"></i></div>
							<Link to="/FindJobs" className="dez-tilte">Computer Engineer Jobs</Link>
							<p className="m-a0">150 Open Positions</p>
							<div className="rotate-icon"><i className="ti-cloud-up"></i></div> 
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="icon-bx-wraper">
						<div className="icon-content">
							<div className="icon-md text-primary m-b20"><i className="ti-bar-chart"></i></div>
							<Link to="/FindJobs" className="dez-tilte">Programming Jobs</Link>
							<p className="m-a0">67 Open Positions</p>
							<div className="rotate-icon"><i className="ti-bar-chart"></i></div> 
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="icon-bx-wraper">
						<div className="icon-content">
							<div className="icon-md text-primary m-b20"><i className="ti-tablet"></i></div>
							<Link to="/FindJobs" className="dez-tilte">Legal & Literature Jobs</Link>
							<p className="m-a0">12 Open Positions</p>
							<div className="rotate-icon"><i className="ti-tablet"></i></div> 
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="icon-bx-wraper">
						<div className="icon-content">
							<div className="icon-md text-primary m-b20"><i className="ti-camera"></i></div>
							<Link to="/FindJobs" className="dez-tilte">Art & Design Jobs</Link>
							<p className="m-a0">198 Open Positions</p>
							<div className="rotate-icon"><i className="ti-camera"></i></div> 
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="icon-bx-wraper">
						<div className="icon-content">
							<div className="icon-md text-primary m-b20"><i className="ti-panel"></i></div>
							<Link to="/FindJobs" className="dez-tilte">Translation Jobs</Link>
							<p className="m-a0">5 Open Positions</p>
							<div className="rotate-icon"><i className="ti-panel"></i></div> 
						</div>
					</div>
				</div>
				<div className="col-lg-12 text-center m-t30">
					<Link to="/FindJobs">
					<button className="site-button radius-xl">All Categories</button></Link>
				</div>
			</div>
		)
	}
}

export default Jobcategories;