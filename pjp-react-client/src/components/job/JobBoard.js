import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getJob, addJob } from '../../actions/jobActions';// 1 first thing after get data from api in the actions
import PropTypes from 'prop-types';//2
import { connect } from 'react-redux';//3
import classnames from 'classnames';//4
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class JobBoard extends Component {

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


    render() {
        const { id } = this.props.match.params;
        const { errors } = this.state;

        return (
            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <Card className="text-center">
                            <Card.Header>{this.state.title}</Card.Header>
                            <Card.Body>
                                <Card.Title>{this.state.title}</Card.Title>
                                <Card.Text>
                                    {this.state.description}
                                </Card.Text>
                                <Card.Text>
                                    {this.state.email}
                                </Card.Text>
                                <Card.Text>
                                    {this.state.location}
                                </Card.Text>
                                <Button variant="primary">Malak </Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">{this.state.date}</Card.Footer>
                        </Card>
                    </div>
                </div>
            </div>

        );
    }
}

JobBoard.propTypes = {
    getJob: PropTypes.func.isRequired,
    job: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    job: state.job.job,
    errors: state.errors
})
export default connect(mapStateToProps, { getJob })(JobBoard);