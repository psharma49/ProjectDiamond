import React, { Component } from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import AuthenticationService from "./AuthenticationService"

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      acusername: "",
      acpassword: "",
      buttonDisabled: false,
      errorMsgLogin: "",
      errorMsgLogin1: "",
      errorMsgLogin2: "",
      isClicked: false
    };
  }

  setInputValue(property, val) {
    val = val.trim();
    this.setState({
      [property]: val,
    });
  }

  resetForm() {
    this.setState({
      username: "",
      password: "",
      buttonDisabled: false,
    });
    this.loadLoginError = this.loadLoginError.bind(this);
  }
  loadLoginError(){
    if(this.state.errorMsgLogin!=="" && this.state.isClicked===true)
    {
      return(<label className="errorMsgLogin">{this.state.errorMsgLogin}</label>);
    }
    if(this.state.username==="" &&  this.state.isClicked===true)
    {
    return(<label className="errorMsgLogin1">{this.state.errorMsgLogin1}</label>)
    }
    if(this.state.password==="" && this.state.isClicked===true)
    {
    return(<label className="errorMsgLogin2">{this.state.errorMsgLogin2}</label>)
    }
  
  }

  async doLogin() {
    this.setState({isClicked: true});
    if (!this.state.username) {
      this.setState({errorMsgLogin1: 'Please enter username',
    errorMsgLogin:""});
    }
    if (!this.state.password) {
      this.setState({errorMsgLogin2: 'Please enter password',
    errorMsgLogin:""});
    }
    this.setState({
      buttonDisabled: true,
    });

    try {
      let res = await fetch(
        `http://localhost:8083/users/${this.state.username}/${this.state.password}`,
        {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password,
          }),
        }
      );
      if (res.status===200) {
        AuthenticationService.registerSuccessfulLogin(this.state.username);
        this.setState({errorMsgLogin: ""});
        this.props.history.push("/UploadData");
      } else{
        this.resetForm();
        this.setState({errorMsgLogin: "Invalid username or password"});
        
      }
    } catch (e) {
      console.log(e);
      this.resetForm();
    }
  }
  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="loginForm">
            {/* //Actual UI for the a login form  */}
            <div>
              <img
                className="optummmlogin"
                src={process.env.PUBLIC_URL + "/optummm.png"}
                alt="optum"
                width="200px"
              />
            </div>
            Log in
            <InputField
              type="text"
              placeholder="Username"
              value={this.state.username ? this.state.username : ""}
              onChange={(val) => this.setInputValue("username", val)}
            />
            <InputField
              type="Password"
              placeholder="Password"
              value={this.state.password ? this.state.password : ""}
              onChange={(val) => this.setInputValue("password", val)}
            />
            <SubmitButton
              text="Login"
              disabled={this.state.buttonDisabled}
              onClick={() => this.doLogin()}
            />
          </div>
          {this.loadLoginError()}
        </div>
      </div>
    );
  }
}

export default LoginForm;
