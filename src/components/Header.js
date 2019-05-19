import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

// const Button = withRouter(({ history }) => (
//   <button className="btn btn-primary my-2 my-sm-0" onClick={handleSignOut}>Sign Out</button>
// ))
// import Logo from '../logo.png';

const handleSignOut = (e) => {
  e.preventDefault();

  if(localStorage.getItem('isAdminLoggedIn') === 'true') {
    localStorage.setItem('isAdminLoggedIn', 'false');
    return <Redirect to='/adminlogin' />
  }
  if(localStorage.getItem('isEmployerLoggedIn') === 'true') {
    localStorage.setItem('isEmployerLoggedIn', 'false');
    return <Redirect to='/login' />
  }
  if(localStorage.getItem('isEmployeeLoggedIn') === 'true') {
    console.log("here")
    localStorage.setItem('isEmployeeLoggedIn', 'false');
    return <Redirect to='/login' />
  }

  console.log(localStorage);
}
class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">JobSage</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Jobs
        </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/jobs">Jobs List</a>
                <a className="dropdown-item" href="/add">Add Jobs</a>
              </div>
            </li>
          </ul>
          <button className="btn btn-primary my-2 my-sm-0" onClick={handleSignOut}>Sign Out</button>
        </div>
      </nav>
    );
  }
}

export default Header;