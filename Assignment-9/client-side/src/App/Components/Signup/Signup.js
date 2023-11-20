import React, { Component } from "react";
import'../Signup/Signup.css'

export class Signup extends Component {

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
    const { fullName, email, password } = this.state;
    console.log(fullName, email, password);

    //to fetch post api
    fetch("http://localhost:8080/user/create", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fullName,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
        alert("Logged in successfully");
        window.location.href = "/Login"
      });
  }
  
  render() {
    return (
      <div>
        <div className="loginMain">
        <h1 className='mainHeading'>Company Name</h1>
          <form className="loginForm" onSubmit={this.handlesubmit}>
          <h1 className='heading'>Register Here</h1>
            <div className="inputField">
              <label>Name: </label>
              <input type="name" placeholder="Fullname" onChange={e=>this.setState({fullName:e.target.value})} required/>
            </div>
            <div className="inputField" style={{ marginTop: "1rem" }}>
              <label>Email: </label>
              <input type="email" placeholder="Email ID" onChange={e=>this.setState({email:e.target.value})} required/>
            </div>
            <div className="inputField" style={{ marginTop: "1rem" }}>
              <label>Password: </label>
              <input type="password" placeholder="Password" onChange={e=>this.setState({password:e.target.value})} required/>
            </div>
            <button type="submit" className="btn">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
