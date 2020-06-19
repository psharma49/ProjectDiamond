import React, { Component } from "react";

class FeatureImages extends Component {
  render() {
    return (
      <div className="Images">
        <img
          className="commImageFeature"
          src={process.env.PUBLIC_URL + "/Commercial.png"}
          alt="optum"
          width="50px"
        />

        <img
          className="markImageFeature"
          src={process.env.PUBLIC_URL + "/Market.png"}
          alt="optum"
          width="50px"
        />

        <img
          className="effImageFeature"
          src={process.env.PUBLIC_URL + "/Efficiency.png"}
          alt="optum"
          width="50px"
        />

        <img
          className="custImageFeature"
          src={process.env.PUBLIC_URL + "/Customer.png"}
          alt="optum"
          width="50px"
        />

        <img
          className="futImageFeature"
          src={process.env.PUBLIC_URL + "/Future.png"}
          alt="optum"
          width="50px"
        />
      </div>
    );
  }
}

export default FeatureImages;
