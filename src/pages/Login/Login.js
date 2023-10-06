import React, { useContext, useEffect, useRef } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const { isLogin, setUser } = useContext(Context);
  const navigate = useNavigate();
  const swal = withReactContent(Swal);

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, []);

  const loginUser = (e) => {
    e.preventDefault();

    let isValidUsername = usernameRef.current.value.length > 2;
    let isValidPassword = passwordRef.current.value.length > 7;

    if (!isValidUsername) {
      swal.fire({
        icon: "error",
        title: "Please enter username valid",
        confirmButtonColor: "#f9d452",
      });
    } else if (!isValidPassword) {
      swal.fire({
        icon: "error",
        title: "Password must be more than 8 characters",
        confirmButtonColor: "#f9d452",
      });
    } else {
      let user = {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      };

      setUser(user);
      navigate("/");
    }
  };

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
            <form className="form-login" onSubmit={loginUser}>
              <div className="row">
                <div className="col-12">
                  <label htmlFor="username">
                    Username <span>*</span>
                  </label>
                  <input type="text" id="username" ref={usernameRef} />
                </div>
                <div className="col-12">
                  <label htmlFor="password">
                    Password <span>*</span>
                  </label>
                  <input type="password" id="password" ref={passwordRef} />
                </div>
              </div>
              <Link className="register-link" to="/register">
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
