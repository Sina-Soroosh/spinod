import React from "react";
import ProductBox from "../ProductBox/ProductBox";
import "./ListProducts.css";

function ListProducts({ title }) {
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
        </div>
      </div>
    </div>
  );
}

export default ListProducts;
