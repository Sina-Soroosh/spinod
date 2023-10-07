import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import ProductCart from "../../components/ProductCart/ProductCart";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart, setCart } = useContext(Context);

  useEffect(() => {
    let sum = 0;

    cart.forEach((product) => {
      sum += product.price * product.count;
    });

    setTotalCart(sum);
  }, [cart]);

  const emptyCart = () => {
    setCart([]);
  };

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
              {cart.length ? (
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
                          {cart.map((product) => (
                            <ProductCart key={product.id} {...product} />
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="btns-cart">
                      <div className="empty-cart">
                        <button onClick={emptyCart}>Empty Cart</button>
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
                        <span className="total">{totalCart.toFixed(1)} $</span>
                      </div>
                      <div className="checkout-btn">
                        <Link to="/checkout">
                          Continue to settle the account
                        </Link>
                      </div>
                      <div className="continue-shopping">
                        <Link to="/products">Continue shopping</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="alert alert-danger text-center fs-5">
                    Your shopping cart is currently empty.
                  </div>
                  <div className="empty-link">
                    <Link to="/products">Return to the store</Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
