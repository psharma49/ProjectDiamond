import React, { Component } from "react";
import UploadData from "./UploadData";

class HomeButton extends Component {
  //   imageClick() {
  //     console.log("hey");
  //     this.props.history.push("/UploadData");
  //   }
  render() {
    return (
      <div className="homebutton">
        <div>
          <a href="http://localhost:3002/UploadData">
            <img
              className="HomeButtonIcon"
              src={process.env.PUBLIC_URL + "/home1.png"}
              alt="optum"
              width="20px"
              // onClick={() => this.imageClick()}
            />
          </a>
        </div>
      </div>
    );
  }
}

export default HomeButton;
