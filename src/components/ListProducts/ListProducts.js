import React from "react";
import ProductBox from "../ProductBox/ProductBox";
import "./ListProducts.css";

function ListProducts({ title, linkBtn, titleBtn }) {
  return (
    <div className="list-products">
      <h2 className="title text-center">{title}</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <ProductBox />
          </div>
          <div className="col-md-6 col-lg-4">
            <ProductBox />
          </div>
          <div className="col-md-6 col-lg-4">
            <ProductBox />
          </div>
          <div className="col-md-6 col-lg-4">
            <ProductBox />
          </div>
          <div className="col-md-6 col-lg-4">
            <ProductBox />
          </div>
          {titleBtn ? (
            <div className="col-12 justify-content-center d-flex">
              <a className="btn" href={linkBtn}>
                {titleBtn}
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ListProducts;
