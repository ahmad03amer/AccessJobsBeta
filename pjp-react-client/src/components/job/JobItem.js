import React, { Component } from "react";
import { Link } from "react-router-dom";

class JobItem extends Component {
  render() {

    const { job } = this.props;
    return (
      <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto">{job.id}</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{job.title}</h3>
              <p>{job.description}</p>
            </div>
            <div className="col-md-4 d-none d-lg-block">
              <ul className="list-group">
                <a href="#">
                  <li className="list-group-item board">
                    <i className="fa fa-flag-checkered pr-1">Job Board </i>
                  </li>
                </a>
                {
                  //this is the way to get an id in the components elements
                }
                <Link to={`/updateJob/${job.jobIdentifier}`}>
                  <li className="list-group-item update">
                    <i className="fa fa-edit pr-1">Update Job Info</i>
                  </li>
                </Link>
                <a href="">
                  <li className="list-group-item delete">
                    <i className="fa fa-minus-circle pr-1">Delete Job</i>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobItem;
