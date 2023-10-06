import React from "react";
import "./Cart.css";
import ProductCart from "../../components/ProductCart/ProductCart";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="cart">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-cart">
              <h2>Cart</h2>
            </div>
          </div>
          <div className="col-12">
            <div className="content-cart">
              <div className="row">
                <div className="col-lg-8">
                  <div className="table-products-cart">
                    <table>
                      <thead>
                        <tr>
                          <th></th>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Count</th>
                          <th>Collection part</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <ProductCart />
                        <ProductCart />
                        <ProductCart />
                      </tbody>
                    </table>
                  </div>
                  <div className="btns-cart">
                    <div className="empty-cart">
                      <button>Empty Cart</button>
                    </div>
                    <div className="continue-cart">
                      <Link to="/products">Continue shopping</Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="result-cart">
                    <h3 className="title-result-cart">
                      The total of the shopping cart
                    </h3>
                    <div className="total-result-cart">
                      <span>Total</span>
                      <span className="total">40 $</span>
                    </div>
                    <div className="checkout-btn">
                      <Link to="/">Continue to settle the account</Link>
                    </div>
                    <div className="continue-shopping">
                      <Link to="/products">Continue shopping</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
