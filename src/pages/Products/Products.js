import React, { useEffect, useState } from "react";
import "./Products.css";
import data from "../../data";
import { useLocation } from "react-router-dom";
import regexPatterns from "../../regex";
import ProductBox from "../../components/ProductBox/ProductBox";
import { Pagination, Slider, Stack } from "@mui/material";
import ProductCategories from "../../components/ProductCategories/ProductCategories";
import FilterPrice from "../../components/FilterPrice/FilterPrice";

function Products() {
  const [products, setProducts] = useState([]);
  const [shownProducts, setShownProducts] = useState([]);
  const [pageActive, setPageActive] = useState(1);
  const [manyPages, setManyPages] = useState(1);
  const [manyShowItem, setManyShowItem] = useState(8);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const location = useLocation();

  useEffect(() => {
    let products = [];
    let minPrice = regexPatterns.minPrice.exec(location.search);
    let maxPrice = regexPatterns.maxPrice.exec(location.search);
    let maxPriceSlider = 0;

    for (const category in data.products) {
      data.products[category].forEach((product) => {
        if (maxPriceSlider < product.priceDiscount) {
          maxPriceSlider = product.priceDiscount;
        }

        if (!minPrice && !maxPrice) {
          products.push(product);
        } else if (minPrice && !maxPrice) {
          product.priceDiscount >= minPrice[0] && products.push(product);
        } else if (!minPrice && maxPrice) {
          product.priceDiscount <= maxPrice[0] && products.push(product);
        } else {
          if (
            product.priceDiscount <= maxPrice[0] &&
            product.priceDiscount >= minPrice[0]
          ) {
            products.push(product);
          }
        }
      });
    }

    setMaxValue(maxPriceSlider + 1);
    setPageActive(1);
    setManyPages(Math.ceil(products.length / manyShowItem));
    setProducts(products);
  }, [location]);

  useEffect(() => {
    let filterProducts = [...products];
    let firstIndex = pageActive * manyShowItem - manyShowItem;
    let lastIndex = pageActive * manyShowItem;

    filterProducts = filterProducts.slice(firstIndex, lastIndex);
    setShownProducts(filterProducts);
  }, [pageActive, products]);

  const changePage = (e, page) => {
    setPageActive(page);
  };

  return (
    <div className="products">
      <div className="container">
        <div className="row">
          <div className="col-12 title-products">
            <h2>Products</h2>
          </div>
          <div className="col-lg-9">
            <div className="content-products">
              <div className="row">
                {shownProducts.map((product) => (
                  <div className="col-md-6" key={product.id}>
                    <ProductBox {...product} />
                  </div>
                ))}
              </div>
              {shownProducts.length ? (
                <div className="pagination">
                  <Stack>
                    <Pagination
                      count={manyPages}
                      showFirstButton
                      showLastButton
                      onChange={changePage}
                    />
                  </Stack>
                </div>
              ) : (
                <div className="alert alert-danger fs-5">
                  Not found Product !
                </div>
              )}
            </div>
          </div>
          <div className="col-lg-3 mb-3">
            <ProductCategories />
            <FilterPrice
              minValue={minValue}
              maxValue={maxValue}
              url="/products"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
