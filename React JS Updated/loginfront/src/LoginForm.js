import React, { Component } from "react";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import UserStore from "./stores/UserStore";
import UploadData from "./UploadData";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      acusername: "",
      acpassword: "",
      buttonDisabled: false,
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
  }

  async doLogin() {
    if (!this.state.username) {
      alert("You forgot to type your username");
      return;
    }
    if (!this.state.password) {
      alert("You forgot to type your password");
      return;
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
      console.log(res);
      console.log(res);
      if (res.status===200) {
        UserStore.isLoggedIn = true;
        // UserStore.username = res.data.user_id;
        this.props.history.push("/UploadData");
      } else{
        this.resetForm();
        alert("Invalid username or password");
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
        </div>
      </div>
    );
  }
}

export default LoginForm;
