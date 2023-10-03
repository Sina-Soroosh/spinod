import React from "react";
import "./SearchModal.css";

export default function KeepMountedModal({ handleClose, open }) {
  return (
    <div className={`search-modal ${open ? "active" : ""}`}>
      <form>
        <button className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <input placeholder="search" />
        <div className="close" onClick={handleClose}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </form>
    </div>
  );
}
