import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-login">
              <h3>Login</h3>
            </div>
          </div>
          <div className="col-12">
            <form className="form-login">
              <div className="row">
                <div className="col-12">
                  <label htmlFor="username">
                    Username <span>*</span>
                  </label>
                  <input type="text" id="username" />
                </div>
                <div className="col-12">
                  <label htmlFor="password">
                    Password <span>*</span>
                  </label>
                  <input type="password" id="password" />
                </div>
              </div>
              <Link className="register-link" to="">
                You don't have a account?
              </Link>
              <button className="login-btn">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
