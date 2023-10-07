import React, { useContext, useEffect, useRef } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import regexPatterns from "../../regex";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Register() {
  const usernameRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const { isLogin, setUser } = useContext(Context);
  const navigate = useNavigate();
  const swal = withReactContent(Swal);

  useEffect(() => {
    if (isLogin) {
      navigate("/my-account");
    }
  }, [isLogin]);

  const registerUser = (e) => {
    e.preventDefault();

    let isValidUsername = usernameRef.current.value.length > 2;
    let isValidName = nameRef.current.value.length ? true : false;
    let isValidEmail = regexPatterns.email.test(emailRef.current.value);
    let isValidPhone =
      phoneRef.current.value.length > 9 && !isNaN(phoneRef.current.value);
    let isValidPassword = passwordRef.current.value.length > 7;

    if (!isValidUsername) {
      swal.fire({
        icon: "error",
        title: "Please enter username valid",
        confirmButtonColor: "#f9d452",
      });
    } else if (!isValidName) {
      swal.fire({
        icon: "error",
        title: "Please enter name valid",
        confirmButtonColor: "#f9d452",
      });
    } else if (!isValidEmail) {
      swal.fire({
        icon: "error",
        title: "Please enter email valid",
        confirmButtonColor: "#f9d452",
      });
    } else if (!isValidPhone) {
      swal.fire({
        icon: "error",
        title: "Please enter phone valid",
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
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        password: passwordRef.current.value,
      };

      setUser(user);
      navigate("/my-account");
    }
  };

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
            <form className="form-register" onSubmit={registerUser}>
              <div className="row">
                <div className="col-12">
                  <label htmlFor="username">
                    Username <span>*</span>
                  </label>
                  <input type="text" id="username" ref={usernameRef} />
                </div>
                <div className="col-12">
                  <label htmlFor="name">
                    Name <span>*</span>
                  </label>
                  <input type="text" id="name" ref={nameRef} />
                </div>
                <div className="col-12">
                  <label htmlFor="email">
                    Email <span>*</span>
                  </label>
                  <input type="email" id="email" ref={emailRef} />
                </div>
                <div className="col-12">
                  <label htmlFor="phone">
                    Phone <span>*</span>
                  </label>
                  <input type="text" id="phone" ref={phoneRef} />
                </div>
                <div className="col-12">
                  <label htmlFor="password">
                    Password <span>*</span>
                  </label>
                  <input type="password" id="password" ref={passwordRef} />
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
