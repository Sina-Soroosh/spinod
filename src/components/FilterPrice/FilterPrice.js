import { Slider } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./FilterPrice.css";
import { useLocation, useNavigate } from "react-router-dom";
import regexPatterns from "../../regex";

function FilterPrice({ maxValue, url }) {
  const [valueSlider, setValueSlider] = useState([0, maxValue]);
  const [activeJSX, setActiveJSX] = useState(<></>);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let minPrice = regexPatterns.minPrice.exec(location.search);
    let maxPrice = regexPatterns.maxPrice.exec(location.search);

    if (minPrice && !maxPrice) {
      setActiveJSX(
        <p>
          Active filter :{" "}
          <span onClick={() => deleteFilter("min")}>Min : {minPrice[0]} $</span>
        </p>
      );
    } else if (!minPrice && maxPrice) {
      setActiveJSX(
        <p>
          Active filter :{" "}
          <span onClick={() => deleteFilter("max")}>Max : {maxPrice[0]} $</span>
        </p>
      );
    } else if (minPrice && maxPrice) {
      setActiveJSX(
        <p>
          Active filter :{" "}
          <span onClick={() => deleteFilter("min")}>{minPrice[0]} $</span> --{" "}
          <span onClick={() => deleteFilter("max")}>{maxPrice[0]} $</span>
        </p>
      );
    } else {
      setActiveJSX(<></>);
    }
  }, [location]);

  const deleteFilter = (type) => {
    let search;
    if (type === "min") {
      search = location.search.replace(regexPatterns.minPriceText, "");
    } else {
      search = location.search.replace(regexPatterns.maxPriceText, "");
    }

    navigate(`${url}${search}`);
  };

  const changeSlider = (e, value) => {
    setValueSlider(value);
  };

  const submitFilter = () => {
    navigate(`${url}?min_price=${valueSlider[0]}&max_price=${valueSlider[1]}`);
  };

  return (
    <div className="filter-price">
      <h3>Filter by price: </h3>
      {activeJSX}
      <div className="slider">
        <Slider
          getAriaLabel={() => "Temperature range"}
          max={maxValue}
          value={valueSlider}
          onChange={changeSlider}
        />
      </div>
      <p>
        Price : <span>{valueSlider[0]} $</span> --{" "}
        <span>{valueSlider[1]} $ </span>
      </p>
      <button onClick={submitFilter}>Filter</button>
    </div>
  );
}

export default FilterPrice;
