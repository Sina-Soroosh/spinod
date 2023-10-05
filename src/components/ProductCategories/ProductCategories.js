import React, { useEffect, useState } from "react";
import "./ProductCategories.css";
import data from "../../data";
import { Link } from "react-router-dom";

function ProductCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let categories = [];

    for (const category in data.products) {
      categories.push(category);
    }

    setCategories(categories);
  }, []);

  return (
    <div className="product-categories">
      <div className="content-product-categories">
        <h3>Product categories</h3>
        <ul className="list">
          {categories.map((category) => (
            <li className="category" key={category}>
              <Link to={`/products-category/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductCategories;
