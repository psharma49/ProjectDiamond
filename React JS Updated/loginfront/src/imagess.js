import React, { Component } from "react";

class imagess extends Component {
  render() {
    return (
      <div className="Images">
        <div className="commercialImage">
          <img
            className="commImage"
            src={process.env.PUBLIC_URL + "/Commercial.png"}
            alt="optum"
            width="50px"
          />
        </div>
        <div className="marketImage">
          <img
            className="markImage"
            src={process.env.PUBLIC_URL + "Market/.png"}
            alt="optum"
            width="50px"
          />
        </div>
        <div className="efficiencyImage">
          <img
            className="effImage"
            src={process.env.PUBLIC_URL + "/Efficiency.png"}
            alt="optum"
            width="50px"
          />
        </div>
        <div className="customerImage">
          <img
            className="custImage"
            src={process.env.PUBLIC_URL + "/Customer.png"}
            alt="optum"
            width="50px"
          />
        </div>
        <div className="commercialImage">
          <img
            className="commImage"
            src={process.env.PUBLIC_URL + "/Future.png"}
            alt="optum"
            width="50px"
          />
        </div>
      </div>
    );
  }
}

export default imagess;
