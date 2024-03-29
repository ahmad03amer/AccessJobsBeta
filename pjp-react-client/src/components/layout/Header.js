import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../picture/Moh.svg";
//make a dynamic header
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/securityActions";

import '../Page_Css/Nav.css';


class Header extends Component {

  logout() {
    this.props.logout();
    window.location.href = "/";
  }

  render() {
    //when the user is authinticated
    const { validToken, user } = this.props.security;

    const userIsAuthenticated = (
      <div className="collapse navbar-collapse" id="mobile-nav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="getstarted scrollto" to="/dashboard">
              Dashboard
            </Link>
          </li>
        </ul>

        <ul className="navbar-nav ml-auto">
          <li className="dropdown text-white"><i className="fas fa-user-circle" />
              {user.fullName}<i class="fas fa-angle-down ml-1"></i>
            
            <ul>
                    <li className="nav-item"><Link to="/Jobprofile" className="nav-link text-white"><i class="fas fa-dollar-sign"></i>Profile</Link></li>
											<li className="nav-item"><Link to="/Jobmyresume" className="nav-link text-white"><i class="fas fa-dollar-sign"></i>My Resume</Link></li>
											<li className="nav-item"><Link to="/Jobsavedjobs" className="nav-link text-white"><i class="fas fa-dollar-sign"></i>Saved Jobs</Link></li>
											<li className="nav-item"><Link to="/Jobsalert" className="nav-link text-white"><i class="fas fa-dollar-sign"></i>Job Alerts</Link></li>
											<li className="nav-item"><Link to="/Jobcvmanager" className="nav-link text-white"><i class="fas fa-dollar-sign"></i>CV Manager</Link></li>
											<li className="nav-item"><Link to="/Changepasswordpage" className="nav-link text-white"><i class="fas fa-dollar-sign"></i>Change Password</Link></li>
                      <li className="nav-item"><Link to="/logout"  onClick={this.logout.bind(this)} className="nav-link text-white"><i class="fas fa-dollar-sign"></i>Log Out</Link></li>

                    </ul>
          </li>
          
          <li className="nav-item">
            <Link
              className="getstarted scrollto"
              to="/logout"
              onClick={this.logout.bind(this)}
            >
              Logout
            </Link>
          </li>
          
        </ul>
      </div>
    );

    const userIsNotAuthenticated = (
      <div className="collapse navbar-collapse" id="mobile-nav">

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="getstarted scrollto" to="/register">
              Sign Up
            </Link>
            
          </li>
          <li className="nav-item">
            <Link className="getstarted scrollto" to="/login">
              Login
            </Link>

          </li>
        </ul>
      </div>
    );

    let headerLinks;

    if (validToken && user) {
      headerLinks = userIsAuthenticated;
    } else {
      headerLinks = userIsNotAuthenticated;
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top " >
            <div className="container-fluid">
              <Link className="logo d-flex align-items-center"
                to="/">
                <img src={logo} alt="logo" style={{ width: '100px' }} />
              </Link>
    
              

              
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                
              >
                {/*this is for the navigation bar"berger" to have a white color */}
                <span>
                  
                  <i className="fas fa-bars" style={{ color: '#ffffff' }}></i>
                </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto mb-lg-0">
                  <li className="nav-item ">
    
                    <Link className="nav-link text-white" aria-current="page" to="/">
                      <i className="fas fa-home"></i>Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/findJobs"><i class="fas fa-search"></i>Find Jobs</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/employerPostJob"><i class="fas fa-briefcase"></i>Employer/Job Seekers</Link>
                  </li>
                 
                  <li className="nav-item">
                    <Link className="nav-link text-white" to={"/blogs"}><i class="fas fa-briefcase"></i>Blogs</Link>
                  </li>
                 
                 
                  <li className="dropdown text-white ml-2"><i class="fas fa-clone"></i>Pages<i class="fas fa-angle-down"></i>
                    <ul>
                      <li className="nav-item">
                      <Link className="nav-link text-white ml-1" to="/pricing"><i class="fas fa-dollar-sign"></i>Pricing</Link>

                      </li>
                      
                      <li className="nav-item">
                        <Link className="nav-link text-white" to="/TrnaingCourses"><i class="fas fa-book"></i>Training courses</Link>
                      </li>
                     
                     
                      <li className="nav-item">
                      <Link className="nav-link text-white" to={"/Freejobalerts"}><i class="fas fa-database"></i>Job Alert</Link>
                      </li>
                      <li className="dropdown text-danger ml-2">Terms Of Use<i class="fas fa-angle-double-left"></i>
                        <ul>
                          <li className="nav-item">
                          <Link className="nav-link text-white" to="/TermsOfUse"><i class="fas fa-balance-scale"></i>Terms Of Use</Link>
                          </li>
                          <li className="nav-item">
                          <Link className="nav-link text-white ml-1" to="/Privacy"><i class="fas fa-user-secret"></i>Privacy&Policy</Link>
                          </li>
                          <li className="nav-item">
                          <Link className="nav-link text-white" to="/Disclaimer"><i class="fas fa-people-arrows"></i>Disclaimer</Link>
                          </li>
                          
                        </ul>
                      </li>
                      <li className="dropdown text-primary ml-2">Job<i class="fas fa-angle-double-left"></i>
                        <ul>
                          <li className="nav-item">
                          <Link className="nav-link text-white" to="/category-all-jobs"><i class="fas fa-sitemap"></i> all jobs</Link>
                          </li>
                          <li className="nav-item">
                          <Link className="nav-link text-white ml-1" to="/category-company-jobs"><i class="fas fa-building"></i> company jobs</Link>
                          </li>
                          <li className="nav-item">
                          <Link className="nav-link text-white" to="/category-designations-jobs"> <i class="fas fa-user-plus"></i> designations jobs</Link>
                          </li>
                          <li className="nav-item">
                          <Link className="nav-link text-white" to="/category-jobs"> <i class="fas fa-award"></i> category jobs</Link>
                          </li> <li className="nav-item">
                          <Link className="nav-link text-white" to="/category-location-jobs"><i class="fas fa-location-arrow"></i> location jobs</Link>
                          </li> <li className="nav-item">
                          <Link className="nav-link text-white" to="/category-skill-jobs"> <i class="fas fa-futbol"></i> skill jobs</Link>
                          </li>
                          
                        </ul>
                      </li>
                    </ul>
                  </li>









                  <li className="nav-item">
                    <Link className="nav-link1 text-white" to="/contactUs"><i class="fas fa-address-card"></i>Contact Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link1 text-white" to="/aboutUs"><i class="fas fa-info-circle"></i>About Us</Link>
                  </li>
                  
                  
    
                </ul>
    
              </div>
            
          {headerLinks}

        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  security: state.security
});

//conncect to store
export default connect(
  mapStateToProps,
  { logout }
)(Header);