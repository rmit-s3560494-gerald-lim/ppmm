import React, { Component } from 'react';
import axios from 'axios';
// var mongoose = require('mongoose');
// var id = mongoose.Types.ObjectId();
var date = new Date().getDate();
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year
var hours = new Date().getHours(); //Current Hours
var min = new Date().getMinutes(); //Current Minutes
var sec = new Date().getSeconds(); //Current Seconds
var newTime = year + '-' + month + '-' + date + 'T' + hours + ':' + min + ':' + sec + 'Z';

export default class CreateJobs extends Component {
    constructor(props) {
        super(props);
      
        // this.onChangeId = this.onChangeId.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        this.onChangeGeo = this.onChangeGeo.bind(this);
        this.onChangeJobBoard = this.onChangeJobBoard.bind(this);
        this.onChangeJobDescription = this.onChangeJobDescription.bind(this);
        this.onChangeJobTitle = this.onChangeJobTitle.bind(this);
        this.onChangeJobType = this.onChangeJobType.bind(this);
        this.onChangePostDate = this.onChangePostDate.bind(this);
        this.onChangeSalaryOffered = this.onChangeSalaryOffered.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onChangeUrl = this.onChangeUrl.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            // _id: '',
            category: '',
            city: '',
            company_name: '',
            geo: '',
            job_board: '',
            job_description: '',
            job_title: '',
            job_type: '',
            post_date: newTime,
            salary_offered: '',
            state: '',
            url: ''
        }

       
    }

    onChangeId(e) {
        this.setState({
            _id: e.target.value
        });
    }

    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        });
    }
    onChangeCity(e) {
        this.setState({
            city: e.target.value
        });
    }
    onChangeCompanyName(e) {
        this.setState({
            company_name: e.target.value
        });
    }
    onChangeGeo(e) {
        this.setState({
            geo: e.target.value
        });
    }
    onChangeJobBoard(e) {
        this.setState({
            job_board: e.target.value
        });
    }
    onChangeJobDescription(e) {
        this.setState({
            job_description: e.target.value
        });
    }

    onChangeJobTitle(e) {
        this.setState({
            job_title: e.target.value
        });
    }
    onChangeJobType(e) {
        this.setState({
            job_type: e.target.value
        });
    }
    onChangePostDate(e) {
        this.setState({
            post_date: e.target.value
        });
    }
    onChangeSalaryOffered(e) {
        this.setState({
            salary_offered: e.target.value
        });
    }
    onChangeState(e) {
        this.setState({
            state: e.target.value
        });
    }
    onChangeUrl(e) {
        this.setState({
            url: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        // console.log(`id: ${this.state._id}`);
        console.log(`category: ${this.state.category}`);
        console.log(`city: ${this.state.city}`);
        console.log(`company_name: ${this.state.company_name}`);
        console.log(`geo: ${this.state.geo}`);
        console.log(`job_board: ${this.state.job_board}`);
        console.log(`job_description: ${this.state.job_description}`);
        console.log(`job_title: ${this.state.job_title}`);
        console.log(`job_type: ${this.state.job_type}`);
        console.log(`post_date: ${this.state.post_date}`);
        console.log(`salary_offered: ${this.state.salary_offered}`);
        console.log(`state: ${this.state.state}`);
        console.log(`url: ${this.state.url}`);

        const newJob = {
            // _id: this.state.id,
            category: this.state.category,
            city: this.state.city,
            company_name: this.state.company_name,
            geo: this.state.geo,
            job_board: this.state.job_board,
            job_description: this.state.job_description,
            job_title: this.state.job_title,
            job_type: this.state.job_type,
            post_date: this.state.post_date,
            salary_offered: this.state.salary_offered,
            state: this.state.state,
            url: this.state.url
        }

        axios.post('http://localhost:4000/jobs/add', newJob)
            .then(res => console.log(res.data));
            alert("New Job added");

    }

    render() {
        return (
            <div style={{marginTop: 20}}>
            <div class="createjobs">
                <h3>Create New Job Posting</h3>
                <form onSubmit={this.onSubmit}>
                    {/* <div className="form-group">
                        <label>ID: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state._id}
                                onChange={this.onChangeId}
                                readonly
                                />
                    </div> */}
                    <div className="form-group">
                        <label>Category: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.category}
                                onChange={this.onChangeCategory}
                                />
                    </div>
                    <div className="form-group">
                        <label>City: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.city}
                                onChange={this.onChangeCity}
                                />
                    </div>
                    <div className="form-group">
                        <label>Company Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.company_name}
                                onChange={this.onChangeCompanyName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Geo: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.geo}
                                onChange={this.onChangeGeo}
                                />
                    </div>
                    <div className="form-group">
                        <label>Job Board: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.job_board}
                                onChange={this.onChangeJobBoard}
                                />
                    </div>
                    <div className="form-group">
                        <label>Job Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.job_description}
                                onChange={this.onChangeJobDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Job Title: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.job_title}
                                onChange={this.onChangeJobTitle}
                                />
                    </div>
                    <div className="form-group">
                        <label>Job Type: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.job_type}
                                onChange={this.onChangeJobType}
                                />
                    </div>
                    <div className="form-group">
                        <label>Post Date: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.post_date}
                                onChange={this.onChangePostDate}
                                readonly
                                />
                    </div>
                    <div className="form-group">
                        <label>Salary Offered: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.salary_offered}
                                onChange={this.onChangeSalaryOffered}
                                />
                    </div>
                    <div className="form-group">
                        <label>State: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.state}
                                onChange={this.onChangeState}
                                />
                    </div>
                    <div className="form-group">
                        <label>URL: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.url}
                                onChange={this.onChangeUrl}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Job" className="btn btn-primary" />
                    </div>
                </form>
                </div>
            </div>
        )
    }
}