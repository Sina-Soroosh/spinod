import React from "react";
import ProductBox from "../ProductBox/ProductBox";
import "./ListProducts.css";
import { Link } from "react-router-dom";

function ListProducts({ title, linkBtn, titleBtn, products }) {
  return (
    <div className="list-products">
      <h2 className="title text-center">{title}</h2>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-6 col-lg-4" key={product.id}>
              <ProductBox {...product} />
            </div>
          ))}
          {titleBtn ? (
            <div className="col-12 justify-content-center d-flex">
              <Link className="btn" to={linkBtn}>
                {titleBtn}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default ListProducts;
