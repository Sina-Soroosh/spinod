import React from "react";
import "./ProductBox.css";
import { useNavigate } from "react-router-dom";

function ProductBox(props) {
  const navigate = useNavigate();

  const productDetails = () => {
    navigate(`/product/${props.shortName}`);
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
                  <button>ADD TO CART</button>
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
