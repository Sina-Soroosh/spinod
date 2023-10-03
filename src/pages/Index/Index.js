import React from "react";
import "./Index.css";
import ListProducts from "../../components/ListProducts/ListProducts";

function Index() {
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
              <a href="" className="special-products">
                Special Products
              </a>
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
        <ListProducts title="Special Products" />
      </section>

      <section className="best-sellers">
        <ListProducts
          title="Best Sellers"
          linkBtn=""
          titleBtn="Other products"
        />
      </section>
    </>
  );
}

export default Index;
