import React, { Component } from "react";

class Imagess extends Component {
  render() {
    return (
      <div className="Images">
        <img
          className="commImage"
          src={process.env.PUBLIC_URL + "/Commercial.png"}
          alt="optum"
          width="50px"
        />

        <img
          className="markImage"
          src={process.env.PUBLIC_URL + "/Market.png"}
          alt="optum"
          width="50px"
        />

        <img
          className="effImage"
          src={process.env.PUBLIC_URL + "/Efficiency.png"}
          alt="optum"
          width="50px"
        />

        <img
          className="custImage"
          src={process.env.PUBLIC_URL + "/Customer.png"}
          alt="optum"
          width="50px"
        />

        <img
          className="futImage"
          src={process.env.PUBLIC_URL + "/Future.png"}
          alt="optum"
          width="50px"
        />
      </div>
    );
  }
}

export default Imagess;
