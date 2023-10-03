import React from "react";
import "./GuaranteeBox.css";

function GuaranteeBox({ img, text, text2 }) {
  return (
    <div className="guarantee-box col-md col-sm-4 ">
      <img src={img} alt="" />
      <h4>
        {text} <p>{text2}</p>
      </h4>
    </div>
  );
}

export default GuaranteeBox;
