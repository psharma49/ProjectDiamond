import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import HomeButton from "./HomeButton";

class BVUpload extends Component {

   OntoBulkUpload(){
    this.props.history.push("/BulkUpload");
   } 

  render() {
    return (
      <div>
        <HeaderComponent/>
        <HomeButton/>
        <div className="app">
          <div className="container">
            <div className="BVUpload">
              <img
                className="optummmBV"
                src={process.env.PUBLIC_URL + "/optummm.png"}
                alt="optum"
                width="200px"
              />
              <div className="screentext">Upload/Modify Business Value</div>
              <div className="upload">
                <button className="btnBV" onClick={() => this.OntoBulkUpload()}>Bulk Upload</button>
              </div>
              <div className="dashboardbutton">
                <button className="btnBV">
                  Manual Upload
                </button>
              </div>
              <div className="dashboardbutton">
                <button className="btnBV">
                  Modify Business Values
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
