import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addJob } from "../../actions/jobActions";
import classnames from "classnames";


class AddJob extends Component {
  //set up the initial state
  constructor() {
    super();

    //set an initial states for the inputs , blank object and use them in value={this.state.attr}
    this.state = {
      title: "",
      jobIdentifier: "",
      description: "",
      email: "",
      location: "",
      type: "",
      endDate: "",
      salary: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this); //to link each attribute and take its vakue when change
    this.onSubmit = this.onSubmit.bind(this);
  }

  //life cycle hook
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    //take whatever value in the target jobIdentifier and set it to the state
    //but before that we must bind the on change functio onChange={this.onChange.bind(this)}
    //[e.target.name] whatever name it take it vakue
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    //to prevent clear info in the input after submit , when reloading
    e.preventDefault();
    //this new job we will submit it to the server
    const newJob = {
      title: this.state.title,
      jobIdentifier: this.state.jobIdentifier,
      description: this.state.description,
      email: this.state.email,
      location: this.state.location,
      type: this.state.type,
      endDate: this.state.endDate,
      salary: this.state.salary,
    };
    this.props.addJob(newJob, this.props.history)

    console.log(newJob);
  }

  render() {
    //to get the errors 
    const { errors } = this.state;
    return (
      <div>
        {
          //check name attribute of input fields
          //create constructors
          //set state
          //set value on input fields
          //create onChange function
          //set onChange on eachinput file
          //bind on constructor
          //check state change in the react extension
        }
        <div className="job">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Add job form</h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {//change the class css when error occur in the property
                        "is-invalid": errors.title
                      })}
                      placeholder="Job Title"
                      name="title"
                      value={this.state.title}
                      onChange={this.onChange}
                    />
                    {errors.title && (//expression like an if statement
                      <div className="invalid-feedback">{errors.title}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.jobIdentifier
                      })}
                      placeholder="Unique Job ID"
                      name="jobIdentifier"
                      value={this.state.jobIdentifier}
                      onChange={this.onChange}
                    />
                    {errors.jobIdentifier && (//expression like an if statement
                      <div className="invalid-feedback">{errors.jobIdentifier}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <textarea
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.description
                      })}
                      placeholder="Job Description"
                      name="description"
                      value={this.state.description}
                      onChange={this.onChange}
                    ></textarea>
                    {errors.description && (//expression like an if statement
                      <div className="invalid-feedback">{errors.description}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.email
                      })}
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                    {errors.email && (//expression like an if statement
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.location
                      })}
                      placeholder="location"
                      name="location"
                      value={this.state.location}
                      onChange={this.onChange}
                    />
                    {errors.location && (//expression like an if statement
                      <div className="invalid-feedback">{errors.location}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.type
                      })}
                      placeholder="Job Type"
                      name="type"
                      value={this.state.type}
                      onChange={this.onChange}
                    />
                    {errors.type && (//expression like an if statement
                      <div className="invalid-feedback">{errors.type}</div>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.salary
                      })}
                      placeholder="Salary"
                      name="salary"
                      value={this.state.salary}
                      onChange={this.onChange}
                    />
                    {errors.salary && (//expression like an if statement
                      <div className="invalid-feedback">{errors.salary}</div>
                    )}
                  </div>

                  <h6>Deadline Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className={classnames("form-control form-control-lg ", {
                        "is-invalid": errors.endDate
                      })}
                      name="start_date"
                      name="endDate"
                      value={this.state.endDate}
                      onChange={this.onChange}
                    />
                    {errors.endDate && (//expression like an if statement
                      <div className="invalid-feedback">{errors.endDate}</div>
                    )}
                  </div>

                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//tell react that the add job function is a required prop to work corectly
AddJob.propTypes = {
  addJob: PropTypes.func.isRequired,
  //make sure that we have the righ type
  errors: PropTypes.object.isRequired
};


const maoStateToProps = state => ({
  //errors come from state in the inspect element in redux extension
  errors: state.errors
})

//should pass errors as a parameter when connect
export default connect(maoStateToProps, { addJob })(AddJob);
