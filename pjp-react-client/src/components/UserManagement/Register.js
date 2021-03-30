import React, { Component } from "react";
// 3 import the necessary components
import { createNewUser } from "../../actions/securityActions";
import PropTypes from "prop-types";
import { connect, Provider } from "react-redux";
import classnames from "classnames";
import store from "../../store";
import ImageUploader from "./ImageUploader";
import { CountryDropdown } from 'react-country-region-selector';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

class Register extends Component {

    //4 make a controll component using constructor
    constructor() {
        super();

        this.state = {
            email: '',
            fullName: '',
            gender: '',
            bod: '',
            country: '',
            city: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
            role: '',
            errors: {}
        };

        //7 add the on change to the constructor 
        this.onChange = this.onChange.bind(this);
        //13
        this.onSubmit = this.onSubmit.bind(this);

    }

    componentDidMount() {
        if (this.props.security.validToken) {
            this.props.history.push("/dashboard");
        }
    }

    //14 to handle errors
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }
    // 12 on submit 
    onSubmit(e) {
        e.preventDefault();
        const newUser = {
            email: this.state.email,
            fullName: this.state.fullName,
            gender: this.state.gender,
            bod: this.state.bod,
            country: this.state.country,
            city: this.state.city,
            phoneNumber: this.state.phoneNumber,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            role: this.state.role
        };

        this.props.createNewUser(newUser, this.props.history);
    }

    //6 on change 
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    selectCountry(val) {
        this.setState({ country: val });
    }


    render() {
        //15
        const { errors } = this.state;
        return (

            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your Account</p>
                            <form onSubmit={this.onSubmit}>
                                {/*
                                <Provider store={store}>
                                    <ImageUploader />
                                </Provider>
                            */}
                                <div className="form-group">
                                    <h6> Image</h6>

                                    <input type="file" name="file" id="customeFile    "></input>
                                    <label for="customeFile">Choose file</label>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        //16

                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.fullName
                                        })}
                                        placeholder="Name"
                                        name="fullName"
                                        //5 input fields 
                                        value={this.state.fullName}
                                        //8 bind onchange to the fields 
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.fullName && (
                                            <div className="invalid-feedback">{errors.fullName}</div>
                                        )
                                    }
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.email
                                        })}
                                        placeholder="Email Address"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.email && (
                                            <div className="invalid-feedback">{errors.email}</div>
                                        )
                                    }
                                </div>

                                <div className="form-group">
                                    <select name="gender" value={this.state.value} onChange={this.onChange}>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <h6> DOB</h6>
                                    <input
                                        name="bod"
                                        type="date"
                                        className={classnames("form-control form-control-lg ", {
                                            "is-invalid": errors.endDate
                                        })}
                                        value={this.state.bod}
                                        onChange={this.onChange}
                                    />
                                    {errors.endDate && (//expression like an if statement
                                        <div className="invalid-feedback">{errors.endDate}</div>
                                    )}
                                </div>

                                <div className="form-group">
                                    <CountryDropdown
                                        name="country"
                                        value={this.state.country}
                                        onChange={(val) => this.selectCountry(val)} />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="Enter city"
                                        value={this.state.city}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        placeholder="Enter phone number"
                                        value={this.state.phoneNumber}
                                        onChange={this.onChange} />
                                </div>
                                <div className="form-group">

                                    <input
                                        type="password"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.password
                                        })}
                                        placeholder="Password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.password && (
                                            <div className="invalid-feedback">{errors.password}</div>
                                        )
                                    }
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.confirmPassword
                                        })}
                                        placeholder="Confirm Password"
                                        name="confirmPassword"
                                        value={this.state.confirmPassword}
                                        onChange={this.onChange}
                                    />
                                    {
                                        errors.confirmPassword && (
                                            <div className="invalid-feedback">{errors.confirmPassword}</div>
                                        )
                                    }
                                </div>
                                <div className="form-group">
                                    <div onChange={this.onChange}>
                                        <input type="radio" value="Company" name="role" /> Company
        <input type="radio" value="Employee" name="role" /> Employee
      </div>
                                </div>
                                <div className="form-group">
                                    <h6> CV</h6>

                                    <input type="file" name="file" id="customeFile    "></input>
                                    <label for="customeFile">Choose file</label>
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

//11 proptypes
Register.propTypes = {
    createNewUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
};

//10 mapstate
const mapStateToProps = state => ({
    errors: state.errors,
    security: state.security
});

// 9 connect
export default connect(
    mapStateToProps,
    { createNewUser }
)(Register);