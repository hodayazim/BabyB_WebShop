import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import mountNode from "react-router-dom";
import Main from "./Main.js";
import Loginup from "./login_up.js";
import Search from "./Search.js";
import ShoppingCart from "./shoppingCart";
import ManagerForms from "./ManagerForms";
import "../css/search_1.css";
import "../css/Header&Footer.css";
import "../css/creativeLinkEffects.css";
import PinkLogo from "../Pictures/PinkLogo.svg";
// import { GetAllProducts } from "../FUNCTION/ProductFunction";

import "antd/dist/antd.css";
import { DownloadOutlined } from "@ant-design/icons";
import { BiHeart, BiShoppingBag } from "react-icons/bi";
import {
  AiOutlineForm,
  AiOutlineShopping,
  AiOutlineHeart,
} from "react-icons/ai";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function MyHeader() {
  const [name, setName] = useState(localStorage.getItem("EMail"));
  function onClickChangeColor() {
    var someElement = document.getElementsByClassName("btnmyheaderPink");
    someElement.className += " btnmyheaderBlue";
    //add "newclass" to element (space in front is important)
    // someElement.className -= "btnmyheaderPink";
    // const [btnmyheaderPink, setToggleClass] = useState(false);

    // $(".btnmyheaderPink").toggleClass("btnmyheaderBlue");
    // toggleClass ? "btnmyheaderPink" : "btnmyheadeBlue";
    // element.className.add("btnmyheaderBlue");
    // element.className.remove("btnmyheaderPink");
    // setcolor("blue");
  }

  // function GetProducts() {
  //   debugger;
  //   console.log("GetAll");
  //   GetAllProducts();
  // }

  useEffect(() => {
    if (localStorage.length == 0) localStorage.setItem("FirstNameUser", "אורח");
  });

  const handleClick = (event) => {
    debugger;
    //event.preventDefault();
    console.log("The link was clicked.");
  };

  return (
    <Router>
      <div className="bodyheader container-fluid">
        {/*-----Log-----*/}
        <div className="divbtnheader">
          <p className="helloUser">
            היי {localStorage.getItem("FirstNameUser")} אנחנו שמחים לראותך!
          </p>
          <Link to="/Loginup">
            <input
              type="submit"
              className="btn_login btnheader btnmyheaderPink btn-hover color-4"
              onClick
              btn-hover
              color-4
              // className={toggleClass ? "btnmyheaderPink" : "btnmyheaderBlue"}
              value="כניסה לחשבון קיים"
            />
          </Link>
          <Link to="/Loginup">
            <input
              type="submit"
              className="btn_signup btnheader btnmyheaderPink  btn-hover color-4"
              onClick=" "
              value="משתמש חדש הירשם כאן!"
            />
          </Link>
        </div>
        {/*-----Logo-----*/}
        <Link to="/" className="LogoPng" /*activeClassName="active"*/>
          <img src={PinkLogo} /*onClick={handleClick()}*/ />
        </Link>

        <div className="Search">
          <Search />
        </div>

        <Link to="/ManagerForms">
          <AiOutlineForm onClick=" " className="linkIcon a" />
        </Link>

        <Link to="/ShoppingCart">
          <AiOutlineShopping
            /*BiShoppingBag*/ onClick=" "
            className="linkIcon c"
          />
        </Link>
        {/* <Link>
          <AiOutlineHeart /*BiHeart*/
        /*onClick className="linkIcon b" />
        </Link> */}
        {/* <input type="button" onSubmit={GetProducts()} value="1" />
        <input type="submit" onSubmit={GetProducts()} value="2" />
        <button type="button" onSubmit={GetProducts()}>
          3
        </button>
        <button type="submit" onSubmit={GetProducts()}>
          4
        </button> */}
        <span className="spanCategory">
          <section className="color-10">
            <nav className="cl-effect-10">
              {/* <a data-hover="עגלות">
                <button>
                  <span>עגלות</span>
                </button>
              </a> */}
              <a href="#" data-hover="קטגוריה">
                <span>קטגוריה</span>
              </a>
              <a href="#" data-hover="קטגוריה">
                <span>קטגוריה</span>
              </a>
              <a href="#" data-hover="קטגוריה">
                <span>קטגוריה</span>
              </a>
              <a href="#" data-hover="קטגוריה">
                <span>קטגוריה</span>
              </a>
            </nav>
          </section>
        </span>
      </div>
    </Router>
  );
}
export default MyHeader;

// <div className="SearchInput">
//   <input
//     type="text"
//     name="term"
//     id="liveSearch"
//     className="form-control"
//     // placeholder="שם מוצר"
//     autoComplete="off"
//     data-provide="typeahead"
//   ></input>
//   <span className="SearchInput-btn">
//     <button className="btn btn-blue nontrans">
//       <span>חפש לי!</span>
//     </button>
//   </span>
// </div>
