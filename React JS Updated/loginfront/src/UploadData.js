import React, { Component } from "react";
import UserStore from "./stores/UserStore";

class UploadData extends Component {

  OntoPLDV() {
    this.props.history.push('/PLDV');
  }
  render() {
    if(UserStore.isLoggedIn)
    {
    return (
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
          <button className="btn" onClick={() => this.OntoPLDV()}>
            Dashboard Viewww
          </button>
        </div>
      </div>
      
    );
    }
  }
}

export default UploadData;
