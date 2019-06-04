import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './App.css';

const Jobs = props => (
    <tr>
        {/* <td>{props.job._id}</td> */}
        <td>{props.job.job_title}</td>
        <td>{props.job.job_type}</td>
        {/*<td>{props.job.category}</td> */}
        <td>{props.job.city}</td>
        <td>{props.job.company_name}</td>
        {/* <td>{props.job.geo}</td>
        <td>{props.job.job_board}</td> */}
        <td>{props.job.job_description}</td>
        <td>{props.job.skills[0].skill1 + ', ' + props.job.skills[0].skill2 +  ', ' + props.job.skills[0].skill3 +
       ', ' + props.job.skills[0].skill4 +', '+ props.job.skills[0].skill5}</td>
        {/*  <td>{props.job.post_date}</td>*/}
        <td>{props.job.salary_offered}</td>
      {/*   <td>{props.job.state}</td> */}
        {/* <td>{props.job.url}</td> */}
                  {/*<td>
  <Link to={"/edit/" + props.job._id}>Edit</Link>
        </td>*/}
    </tr>
)

class EmployeeHome extends Component {

  constructor(props) {
      super(props);
      this.state = { jobs: [] };
  }

  componentDidMount() {
      axios.get('http://35.212.88.235/jobs/')
          .then(response => {
              console.log(response.data);
              this.setState({ jobs: response.data });
              console.log(this.state.jobs);
              localStorage.setItem('jobs_list', JSON.stringify(response.data));
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

  createUserSkillArray(user_skills) {
    var array = new Array(4);
    if (user_skills.hasOwnProperty('skill1'))
    {
      array[0] = user_skills.skill1;
    }
    if (user_skills.hasOwnProperty('skill2'))
    {
      array[1] = user_skills.skill2;
    }
    if (user_skills.hasOwnProperty('skill3'))
    {
      array[2] = user_skills.skill3;
    }
    if (user_skills.hasOwnProperty('skill4'))
    {
      array[3] = user_skills.skill4;
    }
    if (user_skills.hasOwnProperty('skill5'))
    {
      array[4] = user_skills.skill5;
    }
    return array;
  }

  createUserSkillRatingArray(user_skills) {
    var array = new Array(4);
    if (user_skills.hasOwnProperty('skill1'))
    {
      array[0] = user_skills.rating1;
    }
    if (user_skills.hasOwnProperty('skill2'))
    {
      array[1] = user_skills.rating2;
    }
    if (user_skills.hasOwnProperty('skill3'))
    {
      array[2] = user_skills.rating3;
    }
    if (user_skills.hasOwnProperty('skill4'))
    {
      array[3] = user_skills.rating4;
    }
    if (user_skills.hasOwnProperty('skill5'))
    {
      array[4] = user_skills.rating5;
    }
    return array;
  }

  createJobSkillRatingArray(user_skills, job_skills, job_data_set, job_set_id){
    // if (job_skills.hasOwnProperty(user.skills[0] || user.skills[1] || user.skills[]))v{
    //   array[0] = job_skills.rating1;
    // }
    // else {
    //   array[0] = 0;
    // }

    //get very first value as object id, use that to identify in jobs to create new object which is returned


    var array = new Array(4);
    var array2 = new Array(5);
    array2[0] = job_skills._id;
    if (Object.values(job_skills.skills[0]).indexOf(user_skills.skill1) > -1) {
      array[0] = Object.values(job_skills.skills[0])[Object.values(job_skills.skills[0]).indexOf(user_skills.skill1)+1];
      array2[1] = array[0];
        //job_skills[Object.indexOf(user_skills.skill1)].rating1;
    }
    else {
      array[0] = 0;
      array2[1] = 0;
    }

    if (Object.values(job_skills.skills[0]).indexOf(user_skills.skill2) > -1) {
      array[1] = Object.values(job_skills.skills[0])[Object.values(job_skills.skills[0]).indexOf(user_skills.skill2)+1];
      array2[2] = array[1];
        //job_skills[Object.indexOf(user_skills.skill1)].rating1;
    }
    else {
      array[1] = 0;
      array2[2] = 0;
    }
    if (Object.values(job_skills.skills[0]).indexOf(user_skills.skill3) > -1) {
      array[2] = Object.values(job_skills.skills[0])[Object.values(job_skills.skills[0]).indexOf(user_skills.skill3)+1];
      array2[3] = array[2];
        //job_skills[Object.indexOf(user_skills.skill1)].rating1;
    }
    else {
      array[2] = 0;
      array2[3] = 0;
    }
    if (Object.values(job_skills.skills[0]).indexOf(user_skills.skill4) > -1) {
      array[3] = Object.values(job_skills.skills[0])[Object.values(job_skills.skills[0]).indexOf(user_skills.skill4)+1];
      array2[4] = array[3];
        //job_skills[Object.indexOf(user_skills.skill1)].rating1;
    }
    else {
      array[3] = 0;
      array2[4] = 0;
    }
    if (Object.values(job_skills.skills[0]).indexOf(user_skills.skill5) > -1) {
      array[4] = Object.values(job_skills.skills[0])[Object.values(job_skills.skills[0]).indexOf(user_skills.skill5)+1];
      array2[5] = array[4];
        //job_skills[Object.indexOf(user_skills.skill1)].rating1;
    }
    else {
      array[4] = 0;
      array2[5] = 0;
    }
    console.log("array below");
    console.log(array2);
    job_data_set.push(array);
    job_set_id.push(array2);
    console.log(job_data_set);
  }

  customJobsList(knn_jobs_skill, jobs, job_set_id, custom_list) {
  //  array of numbers
    var id;
    console.log("jobs list below")
    console.log(knn_jobs_skill);
    console.log(job_set_id);
  //  console.log (knn_jobs.length - 1);
    // length is 6
    for (var k = 0; k < job_set_id.length; k++) {
      // length is 5
      if ((knn_jobs_skill[0] == job_set_id[k][1]) &&
        (knn_jobs_skill[1] == job_set_id[k][2]) &&
        (knn_jobs_skill[2] == job_set_id[k][3]) &&
        (knn_jobs_skill[3] == job_set_id[k][4]) &&
        (knn_jobs_skill[4] == job_set_id[k][5])) {
          id = job_set_id[k][0];
        }
      }



      // for (var l = 0; l < knn_jobs_skill.length; l++) {
      //   // would be like 1 == 1
      //   // and then would be 0 == 1
      //   if (knn_jobs_skill[l] == job_set_id[k][l + 1]) {
      //     console.log("l and k values");
      //     console.log(l);
      //     if (l < knn_jobs_skill.length - 1) {
      //
      //       continue;
      //     }
      //     else if (l == 4) {
      //       console.log("SUCCESSSSSSS");
      //       console.log(l)
      //       id = job_set_id[k][0];
      //       console.log(id);
      //       break;
      //     }
      //     else {
      //       break;
      //     }
      //   }
    //   }
    // }
    var desired_job = jobs.filter(obj => {
      return obj._id === id;
    });
    console.log("desired job below");
    console.log(desired_job[0]);
    custom_list.push(desired_job[0]);
    //custom_list[0] = desired_job;

    // for (var k = 0; k < jobs.length; k++) {
    //   for (var l = 0; l < knn_job_set_id.length; l++){
    //
    //   }
    // }
    //var custom_jobs = Object.values().filter()



    // return custom_jobs.map(function (currentJob, i) {
    //     return <Jobs job={currentJob} key={i} />;
    // });
  }


  returnCustomList(custom_list) {
    return custom_list.map(function (currentJob, i) {
         return <Jobs job={currentJob} key={i} />;
    });
  }


    render() {

      var user_details = JSON.parse(localStorage.getItem('user'));
      var user_skills = this.createUserSkillArray(user_details.skills[0]);
      var user_skill_ratings = this.createUserSkillRatingArray(user_details.skills[0]);
      var jobs_details = JSON.parse(localStorage.getItem('jobs_list'));
      var job_data_set = [];
      var job_set_with_id = [];
      var custom_list = [];
      //console.log(job_data_set);
      console.log(localStorage.getItem('user'));
      console.log(jobs_details);
      for (var i = 0; i < jobs_details.length; i++){
        this.createJobSkillRatingArray(user_details.skills[0], jobs_details[i], job_data_set, job_set_with_id);
      }

      console.log(jobs_details.length);
      console.log("job data set ");
      console.log(job_data_set);

      var neighbour = require('nearestneighbour')({
          objects : job_data_set,
          number : 10
        })
        console.log("knn");
        console.log(neighbour.nearest(user_skill_ratings));
      var knn_jobs = neighbour.nearest(user_skill_ratings);
      //var jobslist = this.state.jobs;
      console.log("job details below");
      console.log(jobs_details);
      console.log(user_details)
      //console.log("jobs list below")
      //console.log(Object.values(jobs_details)[0]['name']);

      for (var j = 0; j < knn_jobs.length; j++){
          this.customJobsList(knn_jobs[j], jobs_details, job_set_with_id, custom_list);
      }

      console.log(custom_list);
      console.log(this.state.jobs);


        return (
            <div className="content">
                <Header />
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Article 1</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Article 2</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <table className="table table-striped" style={{ marginTop: 20 }} >
                        <thead className="thead-dark">
                            <tr>
                                {/* <th>id</th> */}
                                <th>Job Title</th>
                                <th>Job Type</th>
                                {/*<th>Category</th>*/}
                                <th>City</th>
                                <th>Company Name</th>
                                {/* <th>geo</th>
                            <th>job_board</th> */}
                                {/* <th>job_description</th> */}

                                <th>Job Description</th>
                                <th>Skills</th>
                                <th>Salary</th>
                              {/*  <th>url</th> */}
                              {/*  <th>Edit</th>*/}
                            </tr>
                        </thead>
                        <tbody>
                            {this.returnCustomList(custom_list)}
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

export default EmployeeHome;
