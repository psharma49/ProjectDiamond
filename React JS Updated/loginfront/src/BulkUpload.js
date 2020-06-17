import React, { Component } from "react";
import HeaderComponent from "./HeaderComponent";
import DataService from "./DataService";
import HomeButton from "./HomeButton";

class BulkUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null,
      errorMsg: "",
    };
    this.uploadBulkData = this.uploadBulkData.bind(this);
  }
  uploadBulkData() {
    const formData = new FormData();
    formData.append("file", this.state.selectedFile);
    if(this.state.selectedFile===null)
    {
      alert("You have not selected any file");
    }
    else
    {
      DataService.upload(formData)
        .then((res) => {
          console.log(res.data);
          alert("File uploaded successfully.");
          this.props.history.push("/UploadData");
        })
        .catch((error) => {
          console.log(error);
          this.setState({ errorMsg: "Error uploading data" });
          alert("Incorrect File Format. Only Excel files are allowed");
        });
    }
  }
  onFileChangeHandler = (e) => {
    e.preventDefault();
    this.setState({
      selectedFile: e.target.files[0],
    });
  };
  render() {
    return (
      <div>
        <HeaderComponent />
        <HomeButton/>
        <div className="uploadingForm">
        <img
              className="optummmBulk"
              src={process.env.PUBLIC_URL + "/optummm.png"}
              alt="optum"
              width="200px"
            />
        <div className="app">
          {/* <div className="uploadform" > */}
            <label className="uploadText"><strong>Bulk Upload for Business Value Data</strong></label>
            <label className="excelonly">File format: excel only</label>
            <input
              type="file"
              className="form-control"
              name="file"
              onChange={this.onFileChangeHandler}
            />
            <button className="uploadBulkDataButton"onClick={() => this.uploadBulkData()}>Upload</button>
          {/* </div> */}
        </div>
        </div>
      </div>
    );
  }
}
export default BulkUpload;
