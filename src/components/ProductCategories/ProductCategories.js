import React, { useEffect, useState } from "react";
import "./ProductCategories.css";
import data from "../../data";

function ProductCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let categoies = [];

    for (const category in data.products) {
      categoies.push(category);
    }

    setCategories(categoies);
  }, []);

  return (
    <div className="product-categories">
      <div className="content-product-categories">
        <h3>Product categories</h3>
        <ul className="list">
          {categories.map((category) => (
            <li className="category" key={category}>
              <a href="">{category}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductCategories;
