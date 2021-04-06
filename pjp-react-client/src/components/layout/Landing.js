import React, { Component } from "react";
import { Link } from "react-router-dom";
import weAreHiring from "../../imgs/we-are-hiring-5.jpg";
//when logged in prevent sign up
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Landing extends Component {
    componentDidMount() {
        if (this.props.security.validToken) {
            this.props.history.push("/dashboard");
        }
    }
    render() {
        return (
            <div className="landing">
                <div className="light-overlay landing-inner text-dark">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-12 text-center">

                                <div className="cover">


                                    <h1> This is the Home page </h1>


                                    {/*
                                    <h1 className="display-3 mb-4">
                                        Access Jobs
                </h1>
                                    <p className="lead">
                                        Create your account to explore and add jobs
                </p>
                                    <hr />
                                    <Link className="btn btn-lg btn-primary mr-2" to="/register">
                                        Sign Up
                </Link>
                                    <Link className="btn btn-lg btn-secondary mr-2" to="/login">
                                        Login
                </Link>
                                */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Landing.propTypes = {
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect(mapStateToProps)(Landing);