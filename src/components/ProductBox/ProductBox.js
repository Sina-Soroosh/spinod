import React from "react";
import "./ProductBox.css";

function ProductBox() {
  return (
    <>
      <div className="card">
        <div className="off">
          <p>20%</p>
        </div>
        <div className="content-card">
          <div className="row">
            <div className="col-6">
              <div className="image-card">
                <img
                  src="https://freedemo.ir/tbe/wp-content/uploads/2020/07/store2-product-12-800x800.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-6">
              <div className="info">
                <p className="category-card">clothing</p>
                <h3>JACKET</h3>
                <p className="price-card">
                  <p className="price-main-card">150 $</p>
                  <p className="price-off-card">
                    <del>200 $</del>
                  </p>
                </p>
                <p className="details">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Architecto, magni.
                </p>
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
