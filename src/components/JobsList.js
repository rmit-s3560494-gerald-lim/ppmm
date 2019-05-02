import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Jobs = props => (
    <tr>
        {/* <td>{props.job._id}</td> */}
        <td>{props.job.job_title}</td>
        <td>{props.job.job_type}</td>
        <td>{props.job.category}</td>
        <td>{props.job.city}</td>
        <td>{props.job.company_name}</td>
        {/* <td>{props.job.geo}</td>
        <td>{props.job.job_board}</td> */}
        {/* <td>{props.job.job_description}</td> */}
        <td>{props.job.post_date}</td>
        <td>{props.job.salary_offered}</td>
        <td>{props.job.state}</td>
        {/* <td>{props.job.url}</td> */}
        <td>
            <Link to={"/edit/" + props.job._id}>Edit</Link>
        </td>
    </tr>
)

export default class JobsList extends Component {

    constructor(props) {
        super(props);
        this.state = { jobs: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/jobs/')
            .then(response => {
                this.setState({ jobs: response.data });
            })
            .catch(function (error) {
                console.log(error.response);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/jobs/')
            .then(response => {
                this.setState({ jobs: response.data });
            })
            .catch(function (error) {
                console.log(error.response);
            })
    }

    jobsList() {
        return this.state.jobs.map(function (currentJob, i) {
            return <Jobs job={currentJob} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3 id="jobsage">Jobs List</h3>
                <div className="card">
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead className="thead-dark">
                        <tr>
                            {/* <th>id</th> */}
                            <th>Job Title</th>
                            <th>Job Type</th>
                            <th>Category</th>
                            <th>City</th>
                            <th>Company Name</th>
                            {/* <th>geo</th>
                            <th>job_board</th> */}
                            {/* <th>job_description</th> */}
                            
                            <th>Post Date</th>
                            <th>Salary</th>
                            <th>State</th>
                            {/* <th>url</th> */}
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.jobsList()}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}