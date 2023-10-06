import React from "react";
import "./ProductCart.css";

function ProductCart() {
  return (
    <tr className="product-cart">
      <td className="image-product-cart">
        <img
          src="https://freedemo.ir/tbe/wp-content/uploads/2020/07/store2-product-19.jpg"
          alt=""
        />
      </td>
      <td>
        <span>Lip stick</span>
      </td>
      <td className="price-product-cart">20 $</td>
      <td>
        <div className="count-product-cart">
          <span className="icon">
            <i className=" fa-solid fa-minus"></i>
          </span>
          <span className="number">0</span>
          <span className="icon">
            <i className="fa-solid fa-plus"></i>
          </span>
        </div>
      </td>
      <td className="price-product-cart">40 $</td>
      <td className="delete-product">
        <i className="fa-solid fa-xmark"></i>
      </td>
    </tr>
  );
}

export default ProductCart;
