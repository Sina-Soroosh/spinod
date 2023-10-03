import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="mg-footer-section">
        <div className="container">
          <div className="mg-footer-section-inner">
            <div className="row">
              <div className="col-md-5">
                <div className="mg-footer-bio">
                  <a className="mg-footer-logo" href="#">
                    SPINOD
                  </a>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-4">
                    <div className="mg-footer-link">
                      <div className="mg-footer-link-heading">
                        <span>Safe Payment</span>
                      </div>
                      <ul className="list-group">
                        <li>
                          <a href="">In-Store Shop</a>
                        </li>
                        <li>
                          <a href="">Brands</a>
                        </li>
                        <li>
                          <a href="">Gift Cards</a>
                        </li>
                        <li>
                          <a href="">Careers</a>
                        </li>
                        <li>
                          <a href="">About Us</a>
                        </li>
                        <li>
                          <a href="">Shipping</a>
                        </li>
                        <li>
                          <a href="">Return</a>
                        </li>
                        <li>
                          <a href="">My Account</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mg-footer-link">
                      <div className="mg-footer-link-heading">
                        <span>Information</span>
                      </div>
                      <ul className="list-group">
                        <li>
                          <a href="">Live Chat</a>
                        </li>
                        <li>
                          <a href="">Product Guide</a>
                        </li>
                        <li>
                          <a href="">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="">Delivery Information</a>
                        </li>
                        <li>
                          <a href="">Sales</a>
                        </li>
                        <li>
                          <a href="">Term and Conditions</a>
                        </li>
                        <li>
                          <a href="">Shopping policy</a>
                        </li>
                        <li>
                          <a href="">EMI Payment</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mg-footer-link">
                      <div className="mg-footer-link-heading">
                        <span>Store</span>
                      </div>
                      <ul className="list-group">
                        <li>
                          <a href="">Affiliate</a>
                        </li>
                        <li>
                          <a href="">Bestseller</a>
                        </li>
                        <li>
                          <a href="">Discount</a>
                        </li>
                        <li>
                          <a href="">Latest Products</a>
                        </li>
                        <li>
                          <a href="">Sales</a>
                        </li>
                        <li>
                          <a href="shop.html">All Collection</a>
                        </li>
                        <li>
                          <a href="">Wishlist</a>
                        </li>
                        <li>
                          <a href="">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mg-copy-right-section">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-12">
                <div className="mg-copy-right-text">
                  <span>
                    Developed <i className="fa-solid fa-heart"></i> BY{" "}
                    <a href="https://github.com/sina-soroosh">
                      Sina Sorooshfar
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12">
                <div className="mg-payment-option-img">
                  <img src="/images/download.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
