import React, { useRef } from "react";
import "./SearchModal.css";
import { useNavigate } from "react-router-dom";

export default function KeepMountedModal({ handleClose, open }) {
  const searchInput = useRef();
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();

    navigate(`/search/${searchInput.current.value}`);
    handleClose();
    searchInput.current.value = "";
  };

  return (
    <div className={`search-modal ${open ? "active" : ""}`}>
      <form onSubmit={search}>
        <button className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <input placeholder="search" ref={searchInput} />
        <div
          className="close"
          onClick={() => {
            searchInput.current.value = "";
            handleClose();
          }}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
      </form>
    </div>
  );
}
