import React, { useContext, useEffect, useRef } from "react";
import "./MyAccount.css";
import { Context } from "../../context/Context";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import regexPatterns from "../../regex";

function MyAccount() {
  const usernameRef = useRef();
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const swal = withReactContent(Swal);
  const { user, setUser, setCart, isLogin } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, []);

  const submitChange = () => {
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
      let updateUser = {
        ...user,
        username: usernameRef.current.value,
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        password: passwordRef.current.value,
      };

      setUser(updateUser);
      swal.fire({
        title: "Changes applied successfully",
        icon: "success",
      });
    }
  };

  const logout = () => {
    swal
      .fire({
        title: "Are you sure?",
        showCancelButton: true,
        cancelButtonText: "No",
        confirmButtonText: "Yes , logout",
      })
      .then((res) => {
        if (res.isConfirmed) {
          setUser({});
          setCart([]);
          navigate("/login");
        }
      });
  };

  return (
    <div className="my-account">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-my-account">
              <h3>{user.username}</h3>
            </div>
          </div>
          <div className="col-12">
            <div className="content-my-account">
              <div className="form-my-account">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        id="username"
                        defaultValue={user.username}
                        ref={usernameRef}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        defaultValue={user.name}
                        ref={nameRef}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        id="phone"
                        defaultValue={user.phone}
                        ref={phoneRef}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        id="email"
                        defaultValue={user.email}
                        ref={emailRef}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="new-password">New Password</label>
                      <input
                        type="text"
                        id="new-password"
                        defaultValue={user.password}
                        ref={passwordRef}
                      />
                    </div>
                    <div className="btns col-12">
                      <button onClick={submitChange}>Change information</button>
                      <button onClick={logout}>
                        Sign out of the user account
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
