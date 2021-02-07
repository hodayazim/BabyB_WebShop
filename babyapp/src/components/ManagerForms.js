import React, { useState, useEffect } from "react";

import { useForm } from "react-hook-form";
import axios from "../axios";
// import Select from 'react-select';

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import AddProduct from "./addProduct";
import "../css/ManagerForms.css";
import { DatePicker } from "antd";

function ManagerForms(props) {
  const [color, setColor] = useState("pink");

  let colorStyle = {
    backgroundColor: { color },
  };

  function ChangeColor() {
    if (color === "pink") {
      setColor("green");
    } else {
      setColor("pink");
    }
  }

  return (
    <div>
      <div style={colorStyle.backgroundColor} className="main">
        <button className="ChangeColor" onClick={() => ChangeColor()}>
          ChangeColor
        </button>
      </div>
      <Router>
        <div>
          <MenuForms />
          <Switch>
            <Route path="/ManagerForms/AddProduct">
              <AddProduct />
            </Route>
            <Route path="/ManagerForms/DeleteProduct">
              <DeleteProduct />
            </Route>
            <Route path="/ManagerForms/OtherForm">
              <OtherForm />
            </Route>
            <Route path="/ManagerForms/OtherForm">
              <OtherForm />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default ManagerForms;

function MenuForms() {
  return (
    <div>
      <ul className="ListbtnForm">
        <li>
          <Link to="/ManagerForms/AddProduct" className="ListbtnForm">
            הוספת מוצר
          </Link>
        </li>
        <li>
          <Link to="/ManagerForms/DeleteProduct" className="ListbtnForm">
            מחיקת מוצר
          </Link>
        </li>
        <li>
          <Link to="/ManagerForms/OtherForm" className="ListbtnForm">
            נתינת הרשאה
          </Link>
        </li>
        <li>
          <Link to="/OtherForm" className="ListbtnForm">
            מחיקת הרשאה
          </Link>
        </li>
      </ul>
    </div>
  );
}

/* Delete Product Form */
export function DeleteProduct() {
  return (
    <div className="DeleteProductDiv ManagerForms">
      <form className="DeleteProductForm FormContent">
        <label>קטגוריה</label>
        <input type="text" className="input" />
        <label>תת קטגוריה</label>
        <input type="text" className="input" />
        <label>שם מוצר</label>
        <input type="text" className="input" />
      </form>
    </div>
  );
}

export function OtherForm() {
  return (
    <div className="DeleteProductDiv ManagerForms">
      <form className="OtherForm FormContent">
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control input"
              autoFocus
              placeholder="שם מוצר"
            ></input>
          </div>

          <div className="col">
            <input
              type="color"
              className="form-control input"
              placeholder="צבע"
            ></input>
          </div>
          <div className="col">
            <select type="select" className="form-control input">
              <option>להכניס קטגוריות</option>
            </select>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control input"
              placeholder="מידה"
            ></input>
          </div>
          <div className="col">
            <select type="select" className="form-control input">
              <option>להכניס תת קטגוריות</option>
            </select>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control input"
              placeholder="חברה"
            ></input>
          </div>

          <div className="col">
            <input
              type="number"
              className="form-control input"
              placeholder="כמות"
            ></input>
          </div>

          <div className="col">
            <input
              type="money"
              className="form-control input"
              placeholder="מחיר"
            ></input>
          </div>
          <div className="col">
            <input
              type="file"
              className="form-control input"
              placeholder="הכנס תמונה"
              name="picture"
            />
          </div>
          <div className="col">
            <textarea
              type="text"
              className="form-control input form-control-file"
              placeholder="תיאור מוצר"
              rows="3"
              cols="34"
            ></textarea>
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}
