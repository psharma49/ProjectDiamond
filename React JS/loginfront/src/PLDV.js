import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

class PLDV extends Component {
  constructor(props) {
    super(props);

    this.state = {
      years: [],
      LOBs: [],
      Portfolios: [],
      Products: [],
      errorMsg: "",
    };
  }

  Viewby() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ years: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving data" });
      });
  }

  LOB(selectedyear) {
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      console.log(response);
      this.setState({ LOBs: response.data });
    })
    .catch((error) => {
      console.log(error);
      this.setState({ errorMsg: "Error retrieving data" });
    });
  }

  Portfolio() {

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ Portfolios: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retrieving data" });
      });
  }

  Product() {
    axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      console.log(response);
      this.setState({ Products: response.data });
    })
    .catch((error) => {
      console.log(error);
      this.setState({ errorMsg: "Error retrieving data" });
    });
  }

  render() {
    return (
        <div className="dropdowns">

        <div className="years">
          <select name="SelectYear" onClick={() => this.Viewby()}>
          {this.state.years.map(item => (
              <option value={item.years}>
                {item.years}
              </option>
            ))}
            {console.log(this.state.years)}
          </select>
        </div>
          
        <div>
            
        </div>

        <div>
            
        </div>


        <div>
            
        </div>


        </div>


    );
  }
}

export default PLDV;
