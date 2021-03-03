import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addJob } from "../../actions/jobActions";

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
    };

    this.onChange = this.onChange.bind(this); //to link each attribute and take its vakue when change
    this.onSubmit = this.onSubmit.bind(this);
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
                      className="form-control form-control-lg "
                      placeholder="Job Name"
                      name="title"
                      value={this.state.title}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Unique Job ID"
                      name="jobIdentifier"
                      value={this.state.jobIdentifier}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      placeholder="Job Description"
                      name="description"
                      value={this.state.description}
                      onChange={this.onChange}
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="location"
                      name="location"
                      value={this.state.location}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Job Type"
                      name="type"
                      value={this.state.type}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Salary"
                      name="salary"
                      value={this.state.salary}
                      onChange={this.onChange}
                    />
                  </div>
                  <h6>Deadline Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="start_date"
                      name="endDate"
                      value={this.state.endDate}
                      onChange={this.onChange}
                    />
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
  addJob: PropTypes.func.isRequired
}

export default connect(null, { addJob })(AddJob);
