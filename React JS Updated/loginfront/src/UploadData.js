import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";

class UploadData extends Component {
  OntoDashboard() {
    this.props.history.push("/Dashboard");
  }
  OntoBVUpload(){
    this.props.history.push("/BVUpload");
  }

  render() {
    return (
      <div><HeaderComponent/>
      <div className="app">
        <div className="container">
          <div>
            <img
              className="optummm"
              src={process.env.PUBLIC_URL + "/optummm.png"}
              alt="optum"
              width="200px"
            />
            <div className="upload">
              <button className="btn"  onClick={() => this.OntoBVUpload()}>Upload KPI/Data</button>
            </div>
            <div className="dashboardbutton">
              <button className="btn" onClick={() => this.OntoDashboard()}>
                Dashboard View
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default UploadData;
