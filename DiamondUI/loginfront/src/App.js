import React from "react";
import UserStore from "./stores/UserStore";
import { observer } from "mobx-react";
import LoginForm from "./LoginForm";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UploadData from "./UploadData";
import Dashboard from "./Dashboard";
import imagess from "./imagess"; 
import BVUpload from "./BVUpload";
import BulkUpload from "./BulkUpload";
import UploadSuccessful from "./UploadSuccessful";
import AuthenticatedRoute from './AuthenticatedRoute';
import HeaderComponent from "./HeaderComponent";

class App extends React.Component {
  // async componentDidMount() {
  //   try {
  //     let res = await fetch(
  //       `http://localhost:8083/users/${this.state.username}/${this.state.password}`,
  //       {
  //         method: "post",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     let results = await res.json();

  //     if (results.success===200) {
  //       UserStore.loading = false;
  //       UserStore.isLoggedIn = true;
  //       UserStore.username = results.username;
  //     } else {
  //       UserStore.loading = false;
  //       UserStore.isLoggedIn = false;
  //     }
  //   } catch (e) {
  //     //If an error is called from API this will be called
  //     // cc
  //     UserStore.loading = false;
  //   }
  // }

  // async doLogout() {
  //   try {
  //     let res = await fetch("/logout", {
  //       method: "post",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     let results = await res.json();

  //     if (results && results.user_id.length===0) {
  //       UserStore.isLoggedIn = false;
  //       UserStore.username = "";
  //     }
  //   } catch (e) {
  //     //If an error is called from API this will be called
  //     console.log(e);
  //   }
  // }
  render() {   
        return (
              <Router>
                <>
                <Switch>
               <Route path="/" exact component = {LoginForm}/>
                 <Route path="/login" exact component = {LoginForm}/>
                 <AuthenticatedRoute exact path="/Dashboard" component={Dashboard}/>
                 <AuthenticatedRoute exact path="/UploadData" component={UploadData}/>
                 <AuthenticatedRoute exact path="/imagess" component={imagess}/>
                 <AuthenticatedRoute exact path="/HeaderComponent" component={HeaderComponent}/>
                 <AuthenticatedRoute exact path="/BVUpload" component={BVUpload}/>
                 <AuthenticatedRoute exact path="/BulkUpload" component={BulkUpload}/>
                 <AuthenticatedRoute exact path="/UploadSuccessful" component={UploadSuccessful}/>
                </Switch>
                </>
              </Router>
        );
    }
  }


export default observer(App);
