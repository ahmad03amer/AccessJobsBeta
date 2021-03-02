import React, { Component } from "react";
import AddJobButton from "./job/AddJobButton";
import JobItem from "./job/JobItem";

class Dashboard extends Component {
  render() {
    return (
      <div className="jobs">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Jobs</h1>
              <br />
              <AddJobButton />
              <br />
              <hr />
            </div>
          </div>
        </div>

        <JobItem />
      </div>
    );
  }
}

export default Dashboard;
