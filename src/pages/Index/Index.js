import React, { useEffect, useRef, useState } from "react";
import "./Index.css";
import ListProducts from "../../components/ListProducts/ListProducts";
import GuaranteeBox from "../../components/GuaranteeBox/GuaranteeBox";
import regexPatterns from "../../regex";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import data from "../../data";
import { Link } from "react-router-dom";

function Index() {
  const [specialProducts, setSpecialProducts] = useState([]);
  const [bestSellersProducts, setBestSellersProducts] = useState([]);
  const nameRef = useRef();
  const emailRef = useRef();
  const swal = withReactContent(Swal);

  const membershipNewsletters = (e) => {
    e.preventDefault();

    let isValidEmail = regexPatterns.email.test(emailRef.current.value);
    let isValidName = nameRef.current.value.length ? true : false;

    if (isValidEmail && isValidName) {
      swal
        .fire({
          icon: "success",
          title: "You have successfully joined",
          confirmButtonColor: "#f9d452",
        })
        .then(() => {
          emailRef.current.value = "";
          nameRef.current.value = "";
        });
    } else {
      swal.fire({
        icon: "error",
        title: "Please enter correct values",
        confirmButtonColor: "#f9d452",
      });
    }
  };

  useEffect(() => {
    let specialProducts = [];
    let bestSellersProducts = [];

    for (const category in data.products) {
      data.products[category].forEach((product) => {
        product.price !== product.priceDiscount &&
          specialProducts.push(product);

        Math.floor(Math.random() * 2) && bestSellersProducts.push(product);
      });
    }

    setBestSellersProducts(bestSellersProducts.slice(0, 5));
    setSpecialProducts(specialProducts.splice(0, 5));
  }, []);

  return (
    <>
      <section className="offer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h1>The best products for autumn</h1>
              <p>
                The autumn collection of the best brands in the world is at your
                disposal with a discount and guarantee of authenticity
              </p>
              <Link to="/products" className="special-products">
                Special Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="categories-images">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <a href="" className="category">
                <img src="/images/index/store2-home-category-1.jpg" alt="" />
                <div className="details-category">
                  <h2>Clothing</h2>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href="" className="category">
                <img src="/images/index/store2-home-category-2-1.jpg" alt="" />
                <div className="details-category">
                  <h2>Jewellery</h2>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a href="" className="category">
                <img src="/images/index/store2-home-category-3.jpg" alt="" />
                <div className="details-category">
                  <h2>Cosmetic</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="special-products">
        <ListProducts title="Special Products" products={specialProducts} />
      </section>

      <section className="best-sellers">
        <ListProducts
          title="Best Sellers"
          linkBtn="/products"
          titleBtn="Other products"
          products={bestSellersProducts}
        />
      </section>

      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="image-about">
                <img
                  src="/images/index/store2-home-shopping-craze.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 text">
              <h2>Spinod fashion and clothing online store</h2>
              <p>
                Spinod, after years of success as an online store without goods,
                has specialized in the field of fashion, clothing and lifestyle,
                so that the same sweet experience can be repeated in a new way.
                In Digistyle, you can find everything related to fashion and
                clothing; Find everything from clothes, bags and shoes to
                cosmetics, home appliances and accessories like watches and
                sunglasses at special discounts at auctions.
              </p>
              <a href="">About us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="guarantee">
        <div className="container">
          <div className="row justify-content-center">
            <GuaranteeBox
              img="/images/index/store2-home-icon-1.png"
              text="Delivery"
              text2="immediate"
            />
            <GuaranteeBox
              img="/images/index/store2-home-icon-2.png"
              text="Warranty"
              text2="originality"
            />
            <GuaranteeBox
              img="/images/index/store2-home-icon-3.png"
              text="Support"
              text2="24 hour"
            />
            <GuaranteeBox
              img="/images/index/store2-home-icon-4.png"
              text="the payment"
              text2="in place"
            />
            <GuaranteeBox
              img="/images/index/store2-home-icon-5.png"
              text="A week"
              text2="Return guarantee"
            />
          </div>
        </div>
      </section>

      <section className="newsletters">
        <div className="image-newsletters">
          <img src="/images/index/store2-home-bags.png" alt="" />
        </div>
        <div className="content-newsletters">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>Find out about our discounts!</h2>
                <p>
                  Our newsletter allows you to receive the latest products and
                  the best discounts from Bafiyeh earlier, as well as exclusive
                  discount codes will be sent to you.
                </p>
              </div>

              <form className="row" onSubmit={membershipNewsletters}>
                <div className="col-md-2"></div>
                <div className="col-md-4">
                  <input type="text" placeholder="Name" ref={nameRef} />
                </div>
                <div className="col-md-4">
                  <input type="email" placeholder="Email" ref={emailRef} />
                </div>
                <div className="col-md-2"></div>
                <div className="btn-submit">
                  <button>Become a member!</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="slider-newsletters">
          <div className="content-slider">
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 3,
                },
                576: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 5,
                },
                1024: {
                  slidesPerView: 6,
                },
              }}
              loop
            >
              <SwiperSlide>
                <img src="/images/index/1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/index/2.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/index/3-3.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/index/4.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/index/6.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/index/7-2.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/index/1.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/index/2.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/index/3-3.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/index/4.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/index/6.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/index/7-2.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
