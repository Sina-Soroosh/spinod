import React, { useContext, useEffect, useRef, useState } from "react";
import "./Checkout.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import regexPatterns from "../../regex";

function Checkout() {
  const [totalPrice, setTotalPrice] = useState(0);
  const nameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const swal = withReactContent(Swal);
  const { cart, user, setUser, setCart } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cart.length) {
      navigate("/cart");
    } else {
      let sum = 0;

      cart.forEach((product) => {
        sum += product.priceDiscount * product.count;
      });

      setTotalPrice(sum);
    }

    if (!user.username) {
      swal
        .fire({
          title: "Please login to your account",
          icon: "warning",
        })
        .then(() => {
          navigate("/login");
        });
    }
  }, []);

  const submitOrder = () => {
    let isValidName = nameRef.current.value.length ? true : false;
    let isValidAddress = addressRef.current.value.length > 6 ? true : false;
    let isValidEmail = regexPatterns.email.test(emailRef.current.value);
    let isValidPhone =
      phoneRef.current.value.length > 9 && !isNaN(phoneRef.current.value);

    if (!isValidName) {
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
    } else if (!isValidAddress) {
      swal.fire({
        icon: "error",
        title: "Please enter address valid",
        confirmButtonColor: "#f9d452",
      });
    } else if (!isValidPhone) {
      swal.fire({
        icon: "error",
        title: "Please enter phone valid",
        confirmButtonColor: "#f9d452",
      });
    } else {
      let updateUser = {
        ...user,
        name: nameRef.current.value,
        address: addressRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
      };

      swal
        .fire({
          title: "Your order has been successfully placed",
          icon: "success",
        })
        .then(() => {
          setUser(updateUser);
          setCart([]);
          navigate("/");
        });
    }
  };

  return (
    <div className="checkout">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="title-checkout">
              <h2>Payment</h2>
            </div>
          </div>
          <div className="col-12">
            <div className="content-checkout">
              <div className="row">
                <div className="col-lg-7">
                  <div className="title-form-checkout">
                    <h3>Billing details</h3>
                    <form
                      className="form-checkout"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div className="input-form-checkout">
                        <label htmlFor="name">
                          Name <span>*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          ref={nameRef}
                          defaultValue={user.name}
                        />
                      </div>
                      <div className="input-form-checkout">
                        <label htmlFor="address">
                          Address <span>*</span>
                        </label>
                        <input
                          type="text"
                          id="address"
                          ref={addressRef}
                          defaultValue={user.address}
                        />
                      </div>
                      <div className="input-form-checkout">
                        <label htmlFor="phone">
                          Phone <span>*</span>
                        </label>
                        <input
                          type="text"
                          id="phone"
                          ref={phoneRef}
                          defaultValue={user.phone}
                        />
                      </div>
                      <div className="input-form-checkout">
                        <label htmlFor="email">
                          Email <span>*</span>
                        </label>
                        <input
                          type="text"
                          id="email"
                          ref={emailRef}
                          defaultValue={user.email}
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="order-review">
                    <div className="title-order-review">
                      <h4>Your order</h4>
                    </div>
                    <div className="table-order-review">
                      <table>
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Collection part</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.map((product) => (
                            <tr className="cart-item" key={product.id}>
                              <td>
                                <span className="name-cart-item">
                                  {product.title}
                                </span>
                                <span className="count-cart-item">
                                  {product.count}
                                </span>
                              </td>
                              <td>
                                {(
                                  product.priceDiscount * product.count
                                ).toFixed(1)}{" "}
                                $
                              </td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr>
                            <td>
                              <span className="total">Total</span>{" "}
                            </td>
                            <td>
                              <span className="total-cart">
                                {totalPrice.toFixed(1)} $
                              </span>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    <div className="btns">
                      <button className="submit-shop" onClick={submitOrder}>
                        Order
                      </button>
                      <Link to="/cart">Return to cart</Link>
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

export default Checkout;
