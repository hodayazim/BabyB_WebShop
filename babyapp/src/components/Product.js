import React, { Component, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/product.css";
import Mios from "../Pictures/Product/MIOS_B2.jpg";

function Products() {
  const location = useLocation();
  const params = location.state;
  // let [Products, setProducts] = useState([]);
  // useEffect(() => {
  //   setProducts(props);
  // });
  debugger;
  // const [Products, setProducts] = useState([]);
  // const [NameProduct, setNameProduct] = useState(" ");

  // const useMountEffect = (fun) => useEffect(fun, []);

  // useMountEffect(() => {
  //   setProducts(GetAllProducts());
  //   console.log("back!" + GetAllProducts());
  // });

  // useEffect(() => {
  //   console.log(GetAllProducts());
  //   // setProducts(GetAllProducts());
  //  // console.log("Product: " + NameProduct);
  // }, []);

  return (
    <>
      <section>
        {/* {params.data.map((d) => {
        return (
          <>
            <div class="card">
              <img src={Mios} alt="myprofilepic" />
              ;
              <img
                class="card-img-top"
                src="{d.ProductImage[0].PathImage}"
                alt={d.NameProduct}
              />
              <div class="card-body ">
                <h5 class="card-title">{d.NameProduct}</h5>
                <p class="card-text">{d.DescriptionProduct}</p>
              </div>
            </div>
             <b>Name:</b> {d.NameProduct} 
          </>
        );
      })} */}
        {/* <img src="props.img" /> */}

        {/* <b>Price:</b> {props.NameProduct} */}
      </section>
      {params.data.map((d) => {
        return (
          <div className="row row-cols-1 row-cols-md-4 g-4 flex-xl-row-reverse">
            <div className="col">
              <div className="card">
                <img src={Mios} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{d.NameProduct}</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={Mios} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{d.NameProduct}</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={Mios} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{d.NameProduct}</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={Mios} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{d.NameProduct}</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Products;
