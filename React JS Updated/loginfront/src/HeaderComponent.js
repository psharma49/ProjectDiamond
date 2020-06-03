import React, { Component } from "react";
import UserStore from "./stores/UserStore";
import { extendObservable } from 'mobx';

class HeaderComponent extends Component {

  render() {
    const isUserLoggedin = UserStore.isLoggedIn;
    console.log(isUserLoggedin);
      return (
     
        
          <div className="app">
            <div className="container">
              <div className="Welcome">Welcome!</div>
              <button className="logoutbutton" onClick={() => this.doLogout()}>
                Log out
              </button>
            </div>
          </div>
  
      );
    
  }
}
export default HeaderComponent;
