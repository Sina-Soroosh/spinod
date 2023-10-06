/* eslint-disable no-loop-func */
import React, { useContext, useEffect } from "react";
import "./ProductBox.css";
import { useNavigate } from "react-router-dom";
import data from "../../data";
import { CartContext } from "../../context/CartContext";

function ProductBox(props) {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);

  const productDetails = () => {
    navigate(`/product/${props.shortName}`);
  };

  const addToCart = () => {
    let newCart = [...cart];
    let indexProductInCart = -1;
    indexProductInCart = cart.findIndex((product) => product.id === props.id);

    if (indexProductInCart === -1) {
      let productDetails = {};
      for (const category in data.products) {
        data.products[category].forEach((product) => {
          if (product.id === props.id) {
            productDetails = product;
          }
        });
      }

      productDetails.count = 1;
      console.log(productDetails);
      newCart.push(productDetails);
    } else {
      console.log("object");
      newCart[indexProductInCart].count++;
    }

    setCart(newCart);
  };

  return (
    <>
      <div className="card">
        {props.price !== props.priceDiscount ? (
          <div className="off">
            <p>OFF</p>
          </div>
        ) : null}
        <div className="content-card">
          <div className="row">
            <div className="col-6">
              <div className="image-card" onClick={productDetails}>
                <img src={props.cover} alt={props.title} />
              </div>
            </div>
            <div className="col-6">
              <div className="info">
                <h3 onClick={productDetails}>
                  {props.title.toLocaleUpperCase()}
                </h3>
                <p className="price-card" onClick={productDetails}>
                  <p className="price-main-card">{props.priceDiscount} $</p>
                  {props.price !== props.priceDiscount ? (
                    <p className="price-off-card">
                      <del>{props.price} $</del>
                    </p>
                  ) : null}
                </p>
                <p className="details">{props.desc}</p>
                <div className="btns">
                  <button onClick={addToCart}>ADD TO CART</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductBox;
