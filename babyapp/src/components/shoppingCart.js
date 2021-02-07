import Axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/shoppingcart.css";
import GetShopping from "../FUNCTION/ShoppingCartFunction";

function ShoppingCart() {
  const [arrayofbuy, setarray] = useState([]);
  // const [id, setId] = useState(localStorage.getItem("iduser"));
  const [ProductsCart, setProductsCart] = useState([""]);

  useEffect(() => {
    setProductsCart(GetShopping());
  }, []);

  return (
    <div className="ShoppingCart Right_part_page col-sm-8">
      <div className="ShoppingCart_body">
        <div className="ShoppingCart_table_title">
          <h2 className="ShoppingCart_title"> סל הקניות שלי </h2>
          <p>המחירים ניתנים לשינוי בהתאם למחיר המעשי ביום ההזמנה.</p>
        </div>
        <table className="c-bag-table j-expose__cart-list">
          <thead>
            <tr>
              <th className="col-xs-6">פריט</th>
              <th className="col-xs-2">מחיר</th>
              <th className="col-xs-2">כמות</th>
              <th className="col-xs-2 good-total">סך הכול</th>
            </tr>
          </thead>
          <div>סל הקניות שלך ריק</div>
          <div>
            {ProductsCart && ProductsCart[0] && ProductsCart[0].NameProduct}
          </div>
        </table>
      </div>
    </div>
  );
}
export default ShoppingCart;

function FullShoppingCart() {
  return (
    <tbody>
      <tr>
        <td>
          <img
            src="//img.ltwebstatic.com/images3_pi/2020/10/15/1602745715b21e9079db9f866468a4b4e72a781589_thumbnail_405x552.webp"
            alt=""
          ></img>

          <div className="gd-des">
            <div className="j-product-des product-des she-show">
              <a
                href="https://il.shein.com/Solid-Tie-Cuff-Top-p-1653334-cat-1733.html"
                target="_blank"
                rel="noreferrer"
                className="Limk_name"
              >
                <span className="goods-brand">SHEIN</span>
                {/* {ProductsCart[0] && ProductsCart[0].NameProduct} */}
              </a>

              <div className="gd-operate">
                <div
                  className="S-popover cart-item__deleteHandler guOAVM"
                  placemen="bottom"
                  title="אהאם אתה בטוח שברצונך למחוק פריט זה?"
                  visible-button="true"
                >
                  <span>
                    <span onClick=" " className="cart-item__deleteHandler-text">
                      מחק
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  );
}
