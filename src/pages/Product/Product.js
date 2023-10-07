import React, { useContext, useEffect, useState } from "react";
import "./Product.css";
import { Link, useLocation, useParams } from "react-router-dom";
import data from "../../data";
import ProductCategories from "../../components/ProductCategories/ProductCategories";
import ProductBox from "../../components/ProductBox/ProductBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { Context } from "../../context/Context";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Product() {
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [category, setCategory] = useState("");
  const { productName } = useParams();
  const location = useLocation();
  const { cart, setCart } = useContext(Context);
  const swal = withReactContent(Swal);

  useEffect(() => {
    let productDetails = {};
    let relatedProducts = [];
    let categoryProduct = "";

    for (const category in data.products) {
      let findProduct = data.products[category].find(
        (product) => product.shortName === productName
      );

      if (findProduct) {
        productDetails = findProduct;
        relatedProducts = data.products[category].filter(
          (product) => product.shortName !== productName
        );
        categoryProduct = category;
        break;
      }
    }

    setProduct(productDetails);
    setRelatedProducts(relatedProducts.slice(0, 5));
    setCategory(categoryProduct);
  }, [location]);

  const addToCart = () => {
    let newCart = [...cart];
    let indexProductInCart = -1;
    indexProductInCart = cart.findIndex((product) => product.id === product.id);

    if (indexProductInCart === -1) {
      let productDetails = {};
      for (const category in data.products) {
        data.products[category].forEach((product) => {
          if (product.id === product.id) {
            productDetails = product;
          }
        });
      }

      productDetails.count = 1;
      console.log(productDetails);
      newCart.push(productDetails);
    } else {
      console.log("object");
      newCart[indexProductInCart].count++;
    }

    swal.fire({
      toast: true,
      icon: "success",
      title: "The product has been successfully added to the cart",
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
  };

  return (
    <div className="product">
      <div className="container">
        <div className="title-product">
          <h2>{product.title}</h2>
        </div>
        <div className="row">
          <div className="col-lg-9">
            <div className="content-product">
              <div className="top-product">
                <div className="row">
                  <div className="col-md-6">
                    <div className="image-product">
                      <img src={product.cover} alt={product.title} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-product">
                      <h3 className="name-product">{product.title}</h3>
                      <div className="price-product">
                        <span>{product.priceDiscount} $</span>
                        {product.priceDiscount !== product.price ? (
                          <span>
                            <del>{product.price} $</del>
                          </span>
                        ) : null}
                      </div>
                      <p className="desc-product">{product.desc}</p>
                      <div className="add-cart">
                        <button onClick={addToCart}>Add To Cart</button>
                      </div>
                      <div className="category-product">
                        <p>
                          Category :{" "}
                          <Link to={`/products-category/${category}`}>
                            {category}
                          </Link>
                        </p>
                      </div>
                    </div>
                    <div className="share-product">
                      <span>Share : </span>
                      <span className="icon facebook">
                        <a
                          href={`https://www.facebook.com/sharer/sharer.php?u=${document.location.href}`}
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </span>
                      <span className="icon linkedin">
                        <a
                          href={`https://www.linkedin.com/shareArticle?mini=true&url=${document.location.href}`}
                          target="_blank"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </span>
                      <span className="icon tweeter">
                        <a
                          href={`https://twitter.com/intent/tweet?text=${document.location.href}`}
                          target="_blank"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </span>
                      <span className="icon pinter">
                        <a
                          href={`https://pinterest.com/pin/find/?url=${document.location.href}`}
                          target="_blank"
                        >
                          <i className="fab fa-pinterest-p"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-product">
                <div className="details-product">
                  <ul className="list">
                    <li>Description</li>
                  </ul>
                  <p className="desc-product">{product.desc}</p>
                  <h4 className="options-title">Options</h4>
                  <ul className="options">
                    {product.options &&
                      product.options.map((option) => (
                        <li key={option}>{option}</li>
                      ))}
                  </ul>
                </div>
              </div>
              {relatedProducts.length ? (
                <div className="related-products">
                  <h2>Related Products</h2>
                  <Swiper
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                    }}
                  >
                    {relatedProducts.map((product) => (
                      <SwiperSlide key={product.id}>
                        <ProductBox {...product} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              ) : null}
            </div>
          </div>
          <div className="col-lg-3">
            <ProductCategories />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
