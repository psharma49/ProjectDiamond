import React, { Component } from "react";
import UserStore from "./stores/UserStore";
import HeaderComponent from "./HeaderComponent";

class UploadData extends Component {
  OntoProductView1() {
    this.props.history.push("/ProductView1");
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
              <button className="btn">Upload KPI/Data</button>
            </div>
            <div className="dashboardbutton">
              <button className="btn" onClick={() => this.OntoProductView1()}>
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