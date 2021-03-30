import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../picture/Moh.svg"; 
//make a dynamic header
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../actions/securityActions";


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
            <Link className="nav-link text-white" to="/dashboard">
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
              className="btn btn-outline-primary my-2 my-sm-0 ml-3"
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
            <Link className="btn btn-outline-primary my-2 my-sm-1 mr-1" to="/register">
              Sign Up
            </Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-outline-primary my-2 my-sm-1 ml-3" to="/login">
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
      <nav className="navbar navbar-expand-lg navbar-light bg-dark " >
        <div className="container-fluid">
          <Link className="navbar-brand ml-1 "
            href="#">
              <img src={logo} alt="logo" style={{ width: '100px'}} />
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
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item active">

                <Link className="nav-link text-white ml-1 " aria-current="page" to="/">
                  <i className="fas fa-home"></i>  Home&nbsp;<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white  ml-3" to="/remotjob">Find Jobs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white  ml-3" to="/jobseekers">Job Seekers</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white  ml-3" to="/postjobs">Employer? Post Jobs </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white  ml-3" to="/postjobs">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white  ml-3" to="/onlinecourses">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-primary ml-3" to="/contactus">Contact Us</Link>
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