import React from "react";
import "./About.css";
import GuaranteeBox from "../../components/GuaranteeBox/GuaranteeBox";
import Newsletters from "../../components/Newsletters/Newsletters";

function About() {
  return (
    <div className="about">
      <div className="image-about">
        <img src="/images/about/store2-about-top-bg-1536x800.jpg" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="desc-about">
              The development of the Internet has completely changed our
              shopping methods. The benefits of online shopping are encouraging
              more and more people to experience it every day and change their
              usual shopping patterns. After the Digikala experience, internet
              shopping became more synchronized with the pace of modern life and
              was able to align itself with the growing moods and needs of
              customers.
            </p>
          </div>
          <div className="col-12">
            <div className="grantee-about">
              <div className="row">
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
          </div>
          <div className="col-12">
            <p className="desc-about">
              The various solutions that the modern world offers to people to
              meet their daily needs, including choosing and buying goods,
              increase the speed and accuracy in doing these things. With these
              new conditions, hardly anyone buys a product without research
            </p>
          </div>
        </div>
      </div>
      <div className="content-about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="image-about">
                <img src="/images/about/store2-about-bg1.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-about">
                <div className="content-text-about">
                  <h4>Special services</h4>
                  <p>
                    Customers are faced with a wide range of choices before
                    buying any of the goods they need, and in return, they need
                    more detailed information. Accuracy in the characteristics
                    of each product and access to correct information is the
                    basic need of customers. Today, new and smart shopping
                    methods can meet the needs of customers well, and this has
                    caused more people to join the group of internet service
                    users every day.
                  </p>
                  <a href="">Contact</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-about">
                <div className="content-text-about">
                  <h4>Loyal customers</h4>
                  <p>
                    Customers are faced with a wide range of choices before
                    buying any of the goods they need, and in return, they need
                    more detailed information. Accuracy in the characteristics
                    of each product and access to correct information is the
                    basic need of customers. Today, new and smart shopping
                    methods can meet the needs of customers well, and this has
                    caused more people to join the group of internet service
                    users every day.
                  </p>
                  <a href="">discount code</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image-about">
                <img src="/images/about/store2-about-bg2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletters />
    </div>
  );
}

export default About;
