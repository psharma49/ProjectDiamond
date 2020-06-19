import React, { Component } from "react";
import AuthenticationService from './AuthenticationService';
import {Link} from 'react-router-dom'

class HeaderComponent extends Component {
  
  doLogout(){
    AuthenticationService.logout();
  }

  render() {
    const isUserLoggedin = AuthenticationService.isUserLoggedin();
    const UserId = AuthenticationService.getLoggedinUser();
    return (
      <div>
      {isUserLoggedin && 
      <div className="app">
        <div className="container">
          <div className="HeaderComponent">
            <label className="Welcome">Welcome</label>
            <label className="UserID">{UserId}!</label>
            <Link to='/login'>
            <button className="logoutbutton" onClick={() => this.doLogout()}>
              Log out
            </button>
            </Link>
          </div>
        </div>
      </div>
  }
      </div>
    );
  }
}
export default HeaderComponent;
