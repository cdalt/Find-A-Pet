import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Picture from "../assets/pets3.jpg"

import Login from "../components/Login/login.component";

function login() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Link className="navbar-brand" to={"/sign-in"}>
          Find A Pet
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-in"}>
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-up"}>
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </Navbar>

      <div className="container">
        <div className="row">
          <div className="col-6"><img src={Picture}/></div>
          <div className="col-6 pt-5">
            <div className="auth-wrapper">
              <div className="auth-inner">
                <Login />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default login;
