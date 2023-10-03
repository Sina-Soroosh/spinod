import React from "react";
import "./ProductBox.css";

function ProductBox(props) {
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
              <div className="image-card">
                <img src={props.cover} alt={props.title} />
              </div>
            </div>
            <div className="col-6">
              <div className="info">
                <h3>{props.title.toLocaleUpperCase()}</h3>
                <p className="price-card">
                  <p className="price-main-card">
                    {props.price !== props.priceDiscount
                      ? props.priceDiscount
                      : props.price}{" "}
                    $
                  </p>
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
