import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import UserStore from "./stores/UserStore";
import AuthenticationService from './AuthenticationService'
import { extendObservable } from "mobx";

class UploadSuccessful extends Component {
  OntoDashboard() {
    this.props.history.push("/Dashboard");
  }
  OntoBVUpload(){
    this.props.history.push("/BVUpload");
  }
  ontoLoginView(){
    this.props.history.push("/login");
  }
  render() {
    console.log(UserStore.isLoggedIn);
    const isUserLoggedin = AuthenticationService.isUserLoggedin();
      return (
          <div>
              {isUserLoggedin &&
        <div><HeaderComponent/>
        <div className="app">
          <div className="container">
            <div className="uploaddataview">
              <img
                className="optummm"
                src={process.env.PUBLIC_URL + "/optummm.png"}
                alt="optum"
                width="200px"
              />
              <label className="uploadsuccessful">File Uploaded Successfully!</label>
              <div className="upload">
                <button className="btnn"  onClick={() => this.OntoBVUpload()}>Upload KPI/Data</button>
              </div>
              <div className="dashboardbutton">
                <button className="btnn" onClick={() => this.OntoDashboard()}>
                  Dashboard View
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
  }
        </div>
      );
    
  }
}

export default UploadSuccessful;
