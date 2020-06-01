import React from "react";
import UserStore from "./stores/UserStore";
import { observer } from "mobx-react";
import LoginForm from "./LoginForm";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import UploadData from "./UploadData";

class App extends React.Component {
  async componentDidMount() {
    try {
      let res = await fetch(
        `http://localhost:8080/users/${this.state.username}/${this.state.password}`,
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      let results = await res.json();

      if (results && results.success) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = results.username;
      } else {
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    } catch (e) {
      //If an error is called from API this will be called
      UserStore.loading = false;
    }
  }

  async doLogout() {
    try {
      let res = await fetch("/logout", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      let results = await res.json();

      if (results && results.success) {
        UserStore.isLoggedIn = false;
        UserStore.username = "";
      }
    } catch (e) {
      //If an error is called from API this will be called
      console.log(e);
    }
  }
  render() {
    if (UserStore.loading) {
      return (
        <div className="app">
          <div className="container">Loading, please wait....</div>
        </div>
      );
    } else {
      if (UserStore.isLoggedIn) {
        return (
          <div className="app">
            <div className="container">
              {/* <Router> */}
              <div className="Welcome">Welcome!</div>
              <button className="logoutbutton" onClick={() => this.doLogout()}>
                Log out
              </button>
              {/* <a href="http://localhost:3000/PLDV">Go to next view</a> */}
              {/* <div>
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
                  <div>
                    <button className="btn" onClick={() => this.OntoPDLV()}>
                      Dashboard View
                    </button>
                  </div>
                </div>
              </div> */}
              {/* <>
                */}
            </div>
          </div>
        );
      }
      else{
        return (
          <div className="app">
            <div className="container">
              <LoginForm />
            </div>
          </div>
        );
      }

    }
  }
}

export default observer(App);
