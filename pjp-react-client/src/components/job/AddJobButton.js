import React from "react";
import { Link } from "react-router-dom";

const AddJobButton = () => {
  return (
    <React.Fragment>
      <div>
        <Link to="addJob" className="btn btn-lg btn-info">
          Add Job
        </Link>
      </div>
    </React.Fragment>
  );
};

export default AddJobButton;
