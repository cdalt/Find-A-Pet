import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
  constructor(props) {
<<<<<<< HEAD
    super(props)
=======
    super(props);
>>>>>>> 99209dae0861f814b95662a28597d4675d0603a3
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
<<<<<<< HEAD
  };
=======
  }
>>>>>>> 99209dae0861f814b95662a28597d4675d0603a3
  handleInputChange(event) {
    const target = event.target.name;
    console.log(event.target.value);
    this.setState({
      [target]: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("clicked");

    fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: this.state.firstname,
        lastName: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((resp) => resp.json())
      .then((respJSON) => {
        console.log(respJSON);
        // redirect to the homepage once signup is complete
      });
  }
  render() {
    return (
      <form>
        <h3>Sign Up</h3>
        <div className="form-group">
          <label>First name</label>
<<<<<<< HEAD
          <input type="text" className="form-control" placeholder="First name" value={this.state.firstname} onChange={this.handleInputChange} type="firstname" name="firstname" />
=======
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            value={this.state.firstname}
            onChange={this.handleInputChange}
            type="firstname"
            name="firstname"
          />
>>>>>>> 99209dae0861f814b95662a28597d4675d0603a3
        </div>

        <div className="form-group">
          <label>Last name</label>
<<<<<<< HEAD
          <input type="text" className="form-control" placeholder="Last name" value={this.state.lastname} onChange={this.handleInputChange} type="lastname" name="lastname" />
=======
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            value={this.state.lastname}
            onChange={this.handleInputChange}
            type="lastname"
            name="lastname"
          />
>>>>>>> 99209dae0861f814b95662a28597d4675d0603a3
        </div>

        <div className="form-group">
          <label>Email address</label>
<<<<<<< HEAD
          <input type="email" className="form-control" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange} type="email" name="email" />
=======
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleInputChange}
            type="email"
            name="email"
          />
>>>>>>> 99209dae0861f814b95662a28597d4675d0603a3
        </div>

        <div className="form-group">
          <label>Password</label>
<<<<<<< HEAD
          <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.handleInputChange} type="password" name="password" />
=======
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={this.state.password}
            onChange={this.handleInputChange}
            type="password"
            name="password"
          />
>>>>>>> 99209dae0861f814b95662a28597d4675d0603a3
        </div>

        <div className="form-group">
          <a
            href="http://localhost:8080/auth/google"
            type="google"
            className="btn btn-success btn-block"
          >
            Sign up with Google
          </a>
        </div>

        <div className="form-group">
          <button
            onClick={this.handleSubmit}
            type="submit"
            className="btn btn-primary btn-block"
          >
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <a href="">Login?</a>
          </p>
        </div>
      </form>
    );
  }
}
