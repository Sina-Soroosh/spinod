import React, { useContext, useEffect, useState } from "react";
import "./ProductCart.css";
import { Context } from "../../context/Context";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";

function ProductCart(props) {
  const [sumPrice, setSumPrice] = useState(0);
  const { cart, setCart } = useContext(Context);
  const swal = withReactContent(Swal);

  useEffect(() => {
    setSumPrice(props.priceDiscount * props.count);
  }, [props.count]);

  const changeCount = (count) => {
    const newCart = [...cart];

    if (count) {
      let indexProduct = newCart.findIndex(
        (product) => product.id === props.id
      );

      newCart[indexProduct].count = count;
    } else {
      deleteProduct();
    }

    setCart(newCart);
  };

  const deleteProduct = () => {
    const copyCart = [...cart];

    swal
      .fire({
        title: "Are you sure ?",
        icon: "warning",
        confirmButtonText: "Yes , remove product",
        showCancelButton: true,
        cancelButtonText: "No , I regret",
      })
      .then((res) => {
        if (res.isConfirmed) {
          let productDetails = copyCart.find(
            (product) => product.id === props.id
          );

          let newCart = copyCart.filter(
            (product) => product.id !== productDetails.id
          );

          swal.fire({
            toast: true,
            icon: "success",
            title: "The product has been successfully removed to the cart",
            position: "bottom-left",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", swal.stopTimer);
              toast.addEventListener("mouseleave", swal.resumeTimer);
            },
          });

          setCart(newCart);
        }
      });
  };

  return (
    <tr className="product-cart">
      <td className="image-product-cart">
        <Link to={`/product/${props.shortName}`}>
          <img src={props.cover} alt={props.title} />
        </Link>
      </td>
      <td>
        <Link to={`/product/${props.shortName}`}>
          <span>{props.title}</span>
        </Link>
      </td>
      <td className="price-product-cart">{props.priceDiscount} $</td>
      <td>
        <div className="count-product-cart">
          <span className="icon" onClick={() => changeCount(props.count - 1)}>
            <i className=" fa-solid fa-minus"></i>
          </span>
          <span className="number">{props.count}</span>
          <span className="icon" onClick={() => changeCount(props.count + 1)}>
            <i className="fa-solid fa-plus"></i>
          </span>
        </div>
      </td>
      <td className="price-product-cart">{sumPrice.toFixed(1)} $</td>
      <td className="delete-product" onClick={deleteProduct}>
        <i className="fa-solid fa-xmark"></i>
      </td>
    </tr>
  );
}

export default ProductCart;
