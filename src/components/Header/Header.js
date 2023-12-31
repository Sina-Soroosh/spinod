import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import SearchModal from "../SearchModal/SearchModal";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";

export default function App() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowSearchModal, setIsShowSearchModal] = useState(false);
  const [render, setRender] = useState(false);
  const [countCart, setCountCart] = useState(0);
  const navigate = useNavigate();
  const { cart, isLogin } = useContext(Context);

  useEffect(() => {
    let count = 0;

    cart.forEach((product) => {
      count += product.count;
    });

    setCountCart(count);
  }, [cart]);

  useEffect(() => {
    setRender((prevRender) => !prevRender);
  }, [isLogin]);

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

  const goToBasket = () => {
    navigate("/cart");
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
                      <Link to={isLogin ? "/my-account" : `/login`}>
                        <i className="fa-solid fa-user"></i>
                      </Link>
                    </li>
                    <li className="icon" onClick={goToBasket}>
                      <i className="fa-solid fa-bag-shopping"></i>
                      <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {countCart}
                      </div>
                    </li>
                    <li className="icon" onClick={showSearchModal}>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/products">Products</Link>
                    </li>
                    <li>
                      <Link to="/about">About us</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact us</Link>
                    </li>
                    <li className="icon">
                      <Link to={isLogin ? "/my-account" : `/login`}>
                        <i className="fa-solid fa-user"></i>
                      </Link>
                    </li>
                    <li className="icon" onClick={goToBasket}>
                      <i className="fa-solid fa-bag-shopping"></i>
                      <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {countCart}
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
