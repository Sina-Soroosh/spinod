import React, { useState } from "react";
import "./Header.css";
import SearchModal from "../SearchModal/SearchModal";

export default function App() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowSearchModal, setIsShowSearchModal] = useState(false);

  const showMenu = () => {
    setIsShowMenu(true);
    setIsShowSearchModal(false);
  };

  const showSearchModal = () => {
    setIsShowSearchModal(true);
    setIsShowMenu(false);
  };

  const closeSearchModal = () => {
    setIsShowSearchModal(false);
  };

  return (
    <>
      <SearchModal handleClose={closeSearchModal} open={isShowSearchModal} />

      {isShowMenu ? (
        <div id="cover-page" onClick={() => setIsShowMenu(false)}></div>
      ) : null}
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="content-header">
                <div className="logo">
                  <img src="/images/logo/svg/logo-no-background.svg" alt="" />
                </div>

                <div className="icon-menu" onClick={showMenu}>
                  <i className="fa-solid fa-bars"></i>
                </div>

                <div className={`menu ${isShowMenu ? "active" : ""}`}>
                  <div
                    className="close-menu"
                    onClick={() => setIsShowMenu(false)}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                  <ul className="top-menu">
                    <li className="icon">
                      <i className="fa-solid fa-user"></i>
                    </li>
                    <li className="icon">
                      <i className="fa-solid fa-bag-shopping"></i>
                      <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        0
                      </div>
                    </li>
                    <li className="icon" onClick={showSearchModal}>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </li>
                  </ul>
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
                    <li className="icon" onClick={showSearchModal}>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
