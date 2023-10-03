import React from "react";
import "./Header.css";

export default function App() {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="content-header">
              <div className="logo">
                <img src="/images/logo/svg/logo-no-background.svg" alt="" />
              </div>

              <div className="menu">
                <ul>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Products</a>
                  </li>
                  <li>
                    <a href="">About us</a>
                  </li>
                  <li>
                    <a href="">Blogs</a>
                  </li>
                  <li>
                    <a href="">Contact us</a>
                  </li>
                  <li className="icon">
                    <i className="fa-solid fa-user"></i>
                  </li>
                  <li className="icon">
                    <i className="fa-solid fa-bag-shopping"></i>
                    <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      0
                    </div>
                  </li>
                  <li className="icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
