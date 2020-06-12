import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";

class BVUpload extends Component {

   OntoBulkUpload(){
    this.props.history.push("/BulkUpload");
   } 

  render() {
    return (
      <div>
        <HeaderComponent />
        <div className="app">
          <div className="container">
            <div>
              <img
                className="optummm"
                src={process.env.PUBLIC_URL + "/optummm.png"}
                alt="optum"
                width="200px"
              />
              <div className="screentext"><strong>Upload Business Value</strong></div>
              <div className="upload">
                <button className="btn" onClick={() => this.OntoBulkUpload()}>Bulk Upload</button>
              </div>
              <div className="dashboardbutton">
                <button className="btn">
                  Manual Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BVUpload;
