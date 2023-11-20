import React, { Component } from 'react';
import "../Login/Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      password: "",
    };
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handlesubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);

    if (email === "") {
      document.getElementById("emailerr").innerHTML = "Email required";
    } else if (email !== "") {
      const pattern =
        /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/;
      const result = pattern.test(email);
      if (result !== true) {
        document.getElementById("emailerr").innerHTML="Invalid email format";
      }
    }
    if (password === "") {
      document.getElementById("passerr").innerHTML="Password required";
    } else {
      //to fetch post api
      fetch("http://localhost:8080/user/login", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "data");
          if (data.message !== "Invalid email or password") {
            window.location.href = "/Home";
          }else{
          alert(data.message);
          }
        });
    }
  }

  render() {
    return (
      <div className="loginMain">
        <h1 className="mainHeading1" style={{position:'fixed'}}>Company Name</h1>
        <form className="loginForm">
          <h1 className="heading">Login Form</h1>
          <div className="inputField">
            <label>Email: </label>
            <input
              type="email"
              placeholder="Email ID"
              onChange={(e) => this.setState({ email: e.target.value })}
              required
            />
            <p id="emailerr" className='p'></p>
          </div>
          <div className="inputField" style={{ marginTop: "1rem" }}>
            <label>Password: </label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => this.setState({ password: e.target.value })}
              required
            />
            <p id="passerr" className='p'></p>
          </div>
          <button type="submit" className="btn" onClick={this.handlesubmit}>
            Login
          </button>
        </form>
      </div>
    );
  }
}
