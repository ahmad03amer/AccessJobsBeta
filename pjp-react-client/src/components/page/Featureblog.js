import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Ramallah from "./../../picture/Ramallah.jpg";
import Salfit from "./../../picture/salfit.jpg";
import Bethlehem  from "./../../picture/Bethlehem.jpg";
import hebron from "./../../picture/hebron.jpg";
import Nablus from "./../../picture/Nablus.jpg";
import Jerusalem from "./../../picture/Jerusalem-1.jpg";



class Featureblog extends Component{
	render(){
		return(
			<div className="section-full content-inner bg-gray">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 section-head text-center">
							<h2 className="m-b5">Featured Cities</h2>
							<h6 className="fw4 m-b0">20+ Featured Cities Added Jobs</h6>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 col-sm-6 col-md-6 m-b30" >
							<Link to={''}>
								<div className="city-bx align-items-end d-flex" style={{backgroundImage: `url(${Ramallah})` }}>
									<div className="city-info">
										<h5>Ramallah</h5>
										<span>0 Jobs</span>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-sm-6 col-md-6 m-b30">
							<Link to={''}>
								<div className="city-bx align-items-end  d-flex" style={{backgroundImage:`url(${Salfit})` }}>
									<div className="city-info">
										<h5>Salfit</h5>
										<span>0 Jobs</span>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-sm-6 col-md-6 m-b30">
							<Link to={''}>
								<div className="city-bx align-items-end  d-flex" style={{backgroundImage:`url(${Nablus})` }}>
									<div className="city-info">
										<h5>Nablus</h5>
										<span>0 Jobs</span>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-sm-6 col-md-6 m-b30">
							<Link to={''}>
								<div className="city-bx align-items-end  d-flex" style={{backgroundImage:`url(${Bethlehem})` }}>
									<div className="city-info">
										<h5>Bethlehem</h5>
										<span>0 Jobs</span>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-sm-6 col-md-6 m-b30">
							<Link to={''}>
								<div className="city-bx align-items-end  d-flex" style={{backgroundImage:`url(${hebron})` }}>
									<div className="city-info">
										<h5>Hebron</h5>
										<span>0 Jobs</span>
									</div>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-sm-6 col-md-6 m-b30">
							<Link to={''}>
								<div className="city-bx align-items-end  d-flex" style={{backgroundImage:`url(${Jerusalem})` }}>
									<div className="city-info">
										<h5>Jerusalem</h5>
										<span>0 Jobs</span>
									</div>
								</div>
							</Link>
						</div>
						
					</div>
				</div>
			</div>
		)
	}
}
export default Featureblog;