import React, { Component } from 'react'
import { getJob, addJob } from '../../actions/jobActions';// 1 first thing after get data from api in the actions
import PropTypes from 'prop-types';//2
import { connect } from 'react-redux';//3
import classnames from 'classnames';//4

class UpdateJob extends Component {

    constructor() {
        super();
        this.state = {
            id: "",
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

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) { //if there are any errors
            this.setState({ errors: nextProps.errors })
        }
        const {
            id,
            title,
            jobIdentifier,
            description,
            email,
            location,
            type,
            endDate,
            salary
        } = nextProps.job;

        this.setState({
            id,
            title,
            jobIdentifier,
            description,
            email,
            location,
            type,
            endDate,
            salary
        });
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getJob(id, this.props.history);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit(event) {
        event.preventDefault();

        const updateJob = {
            id: this.state.id,
            title: this.state.title,
            jobIdentifier: this.state.jobIdentifier,
            description: this.state.description,
            email: this.state.email,
            location: this.state.location,
            type: this.state.type,
            endDate: this.state.endDate,
            salary: this.state.salary
        };

        this.props.addJob(updateJob, this.props.history);
    }

    render() {
        const { errors } = this.state;
        return (
            <div>

                <div className="job">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                                <h5 className="display-4 text-center">Update / Edit job form</h5>
                                <hr />
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input type="text" className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.title
                                        })}
                                            placeholder="Job Title"
                                            name="title" value={this.state.title}
                                            onChange={this.onChange}
                                        />
                                        {
                                            errors.title && (
                                                <div className="invalid-feedback">{errors.title}</div>
                                            )
                                        }
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.jobIdentifier
                                        })}
                                            placeholder="Unique Job ID"
                                            name="jobIdentifier" value={this.state.jobIdentifier} disabled
                                            onChange={this.onChange}
                                        />
                                        {
                                            errors.jobIdentifier && (
                                                <div className="invalid-feedback">{errors.jobIdentifier}</div>
                                            )
                                        }
                                    </div>
                                    <div className="form-group">
                                        <textarea className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.description
                                        })}
                                            placeholder="Job Description"
                                            name="description" value={this.state.description}
                                            onChange={this.onChange}
                                        ></textarea>
                                        {
                                            errors.description && (
                                                <div className="invalid-feedback">{errors.description}</div>
                                            )
                                        }
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.email
                                        })}
                                            placeholder="Company email"
                                            name="email" value={this.state.email}
                                            onChange={this.onChange}
                                        />
                                        {
                                            errors.email && (
                                                <div className="invalid-feedback">{errors.email}</div>
                                            )
                                        }
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.location
                                        })}
                                            placeholder="Location"
                                            name="location" value={this.state.location}
                                            onChange={this.onChange}
                                        />
                                        {
                                            errors.location && (
                                                <div className="invalid-feedback">{errors.location}</div>
                                            )
                                        }
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.type
                                        })}
                                            placeholder="Job type"
                                            name="type" value={this.state.type}
                                            onChange={this.onChange}
                                        />
                                        {
                                            errors.type && (
                                                <div className="invalid-feedback">{errors.type}</div>
                                            )
                                        }
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.salary
                                        })}
                                            placeholder="Salary"
                                            name="salary" value={this.state.salary}
                                            onChange={this.onChange}
                                        />
                                        {
                                            errors.salary && (
                                                <div className="invalid-feedback">{errors.salary}</div>
                                            )
                                        }
                                    </div>
                                    <h6> Deadline Date</h6>
                                    <div className="form-group">
                                        <input type="date" className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.endDate
                                        })}
                                            name="endDate"
                                            value={this.state.endDate}
                                            onChange={this.onChange}
                                        />
                                        {
                                            errors.endDate && (
                                                <div className="invalid-feedback">{errors.endDate}</div>
                                            )
                                        }
                                    </div>

                                    <input type="submit" className="btn btn-primary btn-block mt-4" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

UpdateJob.propTypes = {
    getJob: PropTypes.func.isRequired,
    job: PropTypes.object.isRequired,
    addJob: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    job: state.job.job,
    errors: state.errors
})
export default connect(mapStateToProps, { getJob, addJob })(UpdateJob);