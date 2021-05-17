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
          <li className="nav-item">
            <Link className="nav-link text-white" to="/dashboard">
              <i className="fas fa-user-circle mr-1" />
              {user.fullName}
            </Link>
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
                    <Link className="nav-link text-white" to="/pricing"><i class="fas fa-dollar-sign"></i>Pricing</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/blogs"><i class="fas fa-blog"></i>Blogs</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link1 text-info" to="/contactUs"><i class="fas fa-address-card"></i>Contact Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link1 text-info" to="/aboutUs"><i class="fas fa-info-circle"></i>About Us</Link>
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