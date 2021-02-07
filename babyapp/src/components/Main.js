import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import "antd/dist/antd.css";
//import { Button } from "antd";

import "../css/Main.css";
import Products from "./Product";
import Carousel from "./carousel";
import hand from "../Pictures/hand.png";
import track from "../Pictures/track.png";
//import ShoppingCart from "./shoppingCart";
import credit from "../Pictures/credit.png";
import unnamed from "../Pictures/unnamed.png";
import fooding_2 from "../Pictures/fooding_2.jpg";
import baby_booster from "../Pictures/baby_booster.jpg";
import Baby_carriage from "../Pictures/Baby_carriage.jpg";
import { GetAllProducts } from "../FUNCTION/ProductFunction";

function Main() {
  let history = useHistory();
  const [ListProducts, setListProducts] = useState([]);
  const [NameProduct, setNameProduct] = useState("");
  function LoadProductByCategory(id) {
    debugger;
    sessionStorage.setItem("IdCategory", 2);
    GetAllProducts().then((res) => {
      console.log(res);
      history.push("/Products", { data: res });
      // Path(res);
    });

    // Path(GetAllProducts());
  }

  function Path(val) {
    // history.pushState({ val }, "", "/Products");
    // history.push(`/Products:${val}`);
    // history.push({
    //   pathname: "/Products",
    //   state: { props: { val } },
    // });
    history.push("/Products", val);
  }

  return (
    <Router>
      {/* <Link to="/shoppingCart">
        <button className="btn btn-1 btn-1a" value="Button" />
      </Link> */}
      <article className="conteiner_imgCategory">
        <img className="imgCategory" src={baby_booster} />
        <input
          type="submit"
          onClick={(e) => {
            LoadProductByCategory(e);
          }}
          className="btm_img booster_button"
          value="כסאות בטיחות"
        />
        <img className="imgCategory" src={fooding_2} />
        <input
          type="submit"
          onClick={(e) => {
            LoadProductByCategory(e);
          }}
          className="btm_img fooding_button"
          value="מוצרי האכלה"
        />
        <img className="imgCategory" src={Baby_carriage} />
        <input
          type="submit"
          onClick={(e) => {
            LoadProductByCategory(e);
          }}
          className="btm_img carriage_button"
          value="עגלות"
        />
      </article>

      <article className="about">
        <h2 className="title"> מי אנחנו? </h2>
        <span>
          מאז שנת 2000, <strong>Baby B</strong> היא חנות ידועה בישראל. <br /> מה
          שהתחיל כתחביב, הפך לתשוקה שלנו ואנחנו שמחים לחלוק אותו איתך. <br />
          אנו גאים שהצלחנו לאורך השנים לצרף לחברתנו מספר רב של לקוחות מאושרים{" "}
          <br />
          ומצפים להמשיך בעבודתנו ולהגיע לעוד רבים נוספים! <br />
          למה אתה מחכה? הירשם עוד היום לאתר שלנו כדי ליהנות מחוויית קניות יוצאת
          דופן.
        </span>
      </article>
      <article className="CompenyCarousel">
        <Carousel />
      </article>
      <article className="WhyOur">
        <h2 className="title"> למה BABY B? </h2>
        <table className="tableIcon">
          <tbody>
            <tr className="tableIcon_tr">
              <td>
                <img className="iconImg" src={unnamed} />
                <div className="iconDiv">מגוון חברות</div>
              </td>
            </tr>
            <tr className="tableIcon_tr">
              <td>
                <img className="iconImg" src={credit} />
                <div className="iconDiv">תשלום מאובטח באשראי</div>
              </td>
            </tr>
            <tr className="tableIcon_tr">
              <td>
                <img className="iconImg" src={hand} />
                <div className="iconDiv"> מחירים נוחים</div>
              </td>
            </tr>
            <tr className="tableIcon_tr">
              <td>
                <img className="iconImg" src={track} />
                <div className="iconDiv"> משלוחים לכל הארץ</div>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </Router>
  );
}
{
  /* <Switch>
  <Route exact path="/ShoppingCart">
    <ShoppingCart />
  </Route>
</Switch>; */
}

export default Main;
