import React, { useRef } from "react";
import "./Contact.css";
import GoogleMapReact from "google-map-react";
import { SwiperSlide, Swiper } from "swiper/react";
import regexPatterns from "../../regex";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const titleRef = useRef();
  const swal = withReactContent(Swal);

  const defaultProps = {
    center: {
      lat: 35.99835602,
      lng: -90.01502627,
    },
    zoom: 5,
  };

  const submitForm = (e) => {
    e.preventDefault();

    let isValidEmail = regexPatterns.email.test(emailRef.current.value);
    let isValidName = nameRef.current.value.length ? true : false;
    let isValidTitle = titleRef.current.value.length ? true : false;
    let isValidMessage = messageRef.current.value.length ? true : false;

    if (isValidEmail && isValidMessage && isValidName && isValidTitle) {
      swal.fire({
        title: "Message sent successfully",
        icon: "success",
        confirmButtonColor: "#f9d452",
      });

      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
      titleRef.current.value = "";
    } else {
      swal.fire({
        icon: "error",
        title: "Please enter correct values",
        confirmButtonColor: "#f9d452",
      });
    }
  };

  return (
    <div className="contact">
      <div className="title-contact">
        <h3>Contact us</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="phone-email-contact">
              <div className="row">
                <div className="col-md-6">
                  <div className="box box-phone">
                    <div className="icon-box">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <p className="text-box">026193000</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="box box-email">
                    <div className="icon-box">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <p className="text-box">sinasoroosh07@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        ></GoogleMapReact>
      </div>
      <div className="content-contact">
        <div className="container">
          <div className="row">
            <div className="title-form">
              <h4>Contact with spinod</h4>
            </div>
            <form className="col-12" onSubmit={submitForm}>
              <div className="row">
                <div className="col-12">
                  <input type="text" placeholder="Name" ref={nameRef} />
                </div>
                <div className="col-md-6">
                  <input type="email" placeholder="Email" ref={emailRef} />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="Title" ref={titleRef} />
                </div>

                <div className="col-12">
                  <textarea placeholder="Message" ref={messageRef}></textarea>
                </div>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
        <div className="slider-contact">
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
      </div>
    </div>
  );
}

export default Contact;
