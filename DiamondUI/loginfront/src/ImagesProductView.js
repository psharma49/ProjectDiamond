import React, { Component } from "react";

class ImagesProductView extends Component {
  render() {
    return (
      <div className="Images">
        <img
          className="commImageProduct"
          src={process.env.PUBLIC_URL + "/Commercial.png"}
          alt="optum"
          width="50px"
        />

        <img
          className="markImageProduct"
          src={process.env.PUBLIC_URL + "/Market.png"}
          alt="optum"
          width="50px"
        />

        <img
          className="effImageProduct"
          src={process.env.PUBLIC_URL + "/Efficiency.png"}
          alt="optum"
          width="50px"
        />

        <img
          className="custImageProduct"
          src={process.env.PUBLIC_URL + "/Customer.png"}
          alt="optum"
          width="50px"
        />

        <img
          className="futImageProduct"
          src={process.env.PUBLIC_URL + "/Future.png"}
          alt="optum"
          width="50px"
        />
      </div>
    );
  }
}

export default ImagesProductView;
