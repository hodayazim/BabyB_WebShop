import axios from "axios";
import React, { useState } from "react";
import Products from "../components/Product";
import { useHistory } from "react-router-dom";
import DepleteState from "../components/addProduct";
//יש בעיה שאי אפשר לממש כאן את
// Use History כי זה שייך לספרייה של ריאקט ואין כאן קומפוננה

const baseURL = "http://localhost:21309/api/";

export const GetAllProducts = () =>
  axios
    .get(`${baseURL}Product/GetAllProducts/4`)
    .then((res) => {
      // console.log(res);
      // history.push("/");
      //history.push("/Products");
      console.log("then");
      // console.log(res.data[0].NameProduct);
      return res.data;
    })
    .catch(function (error) {
      console.log("catch");
      console.log(error);
    });

export const AddNewProduct = (product, images) => {
  debugger;
  //מביאה רשימה של תת קטגוריות
  axios
    // .get(`${baseURL}Category/GetIdSubCategory/8`)
    .get(`${baseURL}Category/GetIdSubCategory/${product.IdSubcategory}`)
    .then(function (response) {
      product.IdSubCategory = response.data;

      //מוסיפה מוצר לאתר
      axios
        .post(`${baseURL}Product/AddProducts`, product)

        .then(function (response) {
          const len = images["length"];
          images[len] = response.data;

          //הוספת תמונות

          axios
            .post(`${baseURL}ProductImage/Addimages`, images)
            .then(function (response) {
              console.log(response);
              DepleteState();
            })
            .catch(function (error) {
              console.log(error);
            })

            .then(function () {});
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {});
    })

    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
};
