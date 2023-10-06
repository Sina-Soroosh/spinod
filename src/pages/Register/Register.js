import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-register">
              <h3>Register</h3>
            </div>
          </div>
          <div className="col-12">
            <form className="form-register">
              <div className="row">
                <div className="col-12">
                  <label htmlFor="username">
                    Username <span>*</span>
                  </label>
                  <input type="text" id="username" />
                </div>
                <div className="col-12">
                  <label htmlFor="name">
                    Name <span>*</span>
                  </label>
                  <input type="text" id="name" />
                </div>
                <div className="col-12">
                  <label htmlFor="email">
                    Email <span>*</span>
                  </label>
                  <input type="email" id="email" />
                </div>
                <div className="col-12">
                  <label htmlFor="phone">
                    Phone <span>*</span>
                  </label>
                  <input type="text" id="phone" />
                </div>
                <div className="col-12">
                  <label htmlFor="password">
                    Password <span>*</span>
                  </label>
                  <input type="password" id="password" />
                </div>
              </div>
              <Link className="login-link" to="/login">
                You have a account?
              </Link>
              <button className="register-btn">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
