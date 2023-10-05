import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import regexPatterns from "../../regex";
import "./Newsletters.css";

function Newsletters() {
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

  return (
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
                Our newsletter allows you to receive the latest products and the
                best discounts from Bafiyeh earlier, as well as exclusive
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
  );
}

export default Newsletters;
