import React, { Component } from "react";
// 3 import the necessary components
import { createNewUser } from "../../actions/securityActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import "../../css/register.css";
class Register extends Component {
  //4 make a controll component using constructor
  constructor() {
    super();

    this.state = {
      email: "",
      fullName: "",
      password: "",
      confirmPassword: "",
      errors: {},
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
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };

    this.props.createNewUser(newUser, this.props.history);
  }

  //6 on change
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    //15
    const { errors } = this.state;
    return (
      <div className="register">
        <div className="container-reg">
         <div className="reg-forms-container">
            <div className="reg-signin-signup">
                <form className="reg-sign-up-form" onSubmit={this.onSubmit}>
                    <h2 className="reg-title">Sign Up</h2>
                    <p className="lead text-center">Create your Account</p>
                    <div className="reg-input-filed">
                        <i className="fas fa-user"></i>
                        <input
                            type="text"
                                //16

                            className={classnames({
                                 "is-invalid": errors.fullName,
                             })}
                             placeholder="User Name"
                             name="fullName"
                             //5 input fields
                            value={this.state.fullName}
                           //8 bind onchange to the fields
                           onChange={this.onChange}
                           />
                             {errors.fullName && (
                             <div className="invalid-feedback">{errors.fullName}</div>
                                 )}
                    </div>

                    <div className="reg-input-filed">
                        <i className="fas fa-envelope"></i>
                        <input
                    type="email"
                    className={classnames({
                      "is-invalid": errors.email,
                    })}
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                    </div>
                    <div className="reg-input-filed">
                        <i className="fas fa-lock"></i>
                        <input
                            type="password"
                            className={classnames({
                            "is-invalid": errors.password,
                    })}
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="reg-input-filed">
                <i className="fas fa-lock"></i>
                <input
                    type="password"
                    className={classnames({
                      "is-invalid": errors.confirmPassword,
                    })}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.onChange}
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">{errors.confirmPassword}</div>      
                    )}
                </div>

                   <input type="submit" value="Sign Up" className="btn-reg solid" onClick={this.onSubmit}/> 
                   <p className="reg-social-text">Or Sign Up with social platforms</p>
                    <div className="reg-social-media">
                     <a href="https://www.facebook.com/" className="reg-social-icon">
                      <i class="fab fa-facebook-f"></i>
                     </a>
                     <a href="https://www.twitter.com/" className="reg-social-icon">
                      <i class="fab fa-twitter"></i>
                     </a>
                    <a href="https://www.gmail.com/" className="reg-social-icon">
                      <i class="fab fa-google"></i>
                    </a>
                    <a href="https://www.linkedin.com/" className="reg-social-icon">
                     <i className="fab fa-linkedin-in"></i>
                    </a>
                    </div>
                  

                </form>

            </div>

         </div>
            
            </div>
          </div>
       
      
    );
  }
}

//11 proptypes
Register.propTypes = {
  createNewUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  security: PropTypes.object.isRequired,
};

//10 mapstate
const mapStateToProps = (state) => ({
  errors: state.errors,
  security: state.security,
});

// 9 connect
export default connect(mapStateToProps, { createNewUser })(Register);
