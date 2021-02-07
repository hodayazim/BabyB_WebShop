import React from "react";
import "../css/login.css";
import "../css/round.css";
import { useHistory } from "react-router";
import { withRouter } from "react-router-dom";
import { Label, Checkbox } from "@rebass/forms";
import checkLogin from "../FUNCTION/AppFunction";

import swal from "sweetalert";
import Swal from "sweetalert2";
// import login from "../FUNCTION/LoginFunction";
// import { Stack, Checkbox, CheckboxGroup } from "@chakra-ui/react";
import axios from "axios";
import { Route, Redirect } from "react-router-dom";
import GetIdUser from "../FUNCTION/LoginFunction";

class Loginup extends React.Component {
  state = {
    FirstNameUser: "",
    LastNameUser: "",
    UserPassword: "",
    UserwPassword: "",
    GetPostMail: "",
    EMail: "",
    IdUser: "",
    redirect: false,
  };

  constructor(props) {
    super(props);
  }

  /* הפונקציה עובדת */
  login = (event) => {
    debugger;
    console.log("login");

    // axios
    //   .get("http://localhost:21309/api/Category/GetAllCategories")
    //   .then((result) => {
    //     //setMyArray(result.data);
    //     console.log(result.data);
    //   });
    // const response =
    axios
      .get(
        "http://localhost:21309/api/User/Login/" +
          this.state.EMail +
          "/" +
          this.state.UserPassword
      )
      .then((res) => {
        this.setState({ IdUser: res.data });
        // sessionStorage.setItem("idUser", this.state.IdUser);
        this.setState({ redirect: true });

        localStorage.removeItem("IdUser");
        localStorage.removeItem("EMail");
        localStorage.removeItem("FirstNameUser");
        localStorage.setItem("IdUser", this.state.IdUser);
        localStorage.setItem("EMail", this.state.EMail);
        localStorage.setItem("FirstNameUser", this.state.FirstNameUser);
        this.props.history.push("/");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  //    axios
  //     .get(
  //       `http://localhost:21309/api/User/Login/hodayazim.m@gmail.com/1055`
  //       // this.state.EMail +
  //       // "/" +
  //       // this.state.UserPassword
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     });

  /* הפונקציה עובדת */
  newUserHadler = (event) => {
    var scope = this;
    axios
      .post(`http://localhost:21309/api/Users/Register`, this.state)
      // , {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // }
      .then(function (response) {
        // handle success
        console.log(response);
        // swal({
        //   icon: "success",
        //   position: "top-end",
        //   type: "success",
        //   title: "Your work has been saved",
        //   showConfirmButton: false,
        //   timer: 800000,
        // });
        swal({
          icon: "success",
          title: "נרשמת בהצלחה",
          text: " BabyB ברוכים הבאים לאתר",
          type: "success",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "מחק שיעור קבוע",
          cancelButtonText: "מחק שיעור חד פעמי",
        }).then((result) => {
          console.log(result);
          localStorage.setItem("IdUser", response.data);
          localStorage.setItem(
            "EMail",
            JSON.parse(response.config.data)["EMail"]
          );
          localStorage.setItem(
            "FirstNameUser",
            JSON.parse(response.config.data)["FirstNameUser"]
          );
          //event.preventDefault();
          scope.props.history.push("/");
          window.location.reload();
        });
        // setTimeout(function () {
        //   swal(
        //     {
        //       icon: "success",
        //       title: "Hello!",
        //       text: "Message!",
        //       type: "success",
        //     }.then(window.location.reload())
        //   );
        // }, 10000);
        if (localStorage.length > 0) {
          localStorage.removeItem("IdUser");
          localStorage.removeItem("EMail");
          localStorage.removeItem("FirstNameUser");
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    event.preventDefault();
  };

  // state = { IdUser: " " };

  // async function login() {
  //   debugger;
  //   //axios... return id

  //   // this.setState({
  //      const IdUser = await GetIdUser({
  //       EMail: this.state.EMail,
  //       UserPassword: this.state.UserPassword,
  //     })
  //   // });

  //   localStorage.setItem("IdUser", this.state.IdUser);
  // };

  // async login() {
  //   try {
  //     axios.post( `http://localhost:21309/api/ShoppingCart/Login`,this.state);

  //     this.setState({ IdUser:  });
  // }

  /*זה עבד אתמול עם שולמית */

  // async login() {
  //   try {
  //     const res = await axios.post(
  //       `http://localhost:21309/api/User/Login/`,
  //       this.state
  //     );
  //     User / Login / this.setState({ IdUser: res.data });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // async login() {
  //   debugger;
  //   console.log("login");
  //   const postRes = await axios.post(
  //     `http://localhost:21309/api/ShoppingCart/Login`,
  //     this.state
  //   );
  //   if (postRes) {
  //     console.log(postRes);
  //     const delivery = postRes.data;
  //     this.setState({ IdUser: postRes.data });
  //   } else {
  //     console.log("error!");
  //   }
  // .then(function (response) {
  //   this.setState({ IdUser: response.data });
  //   console.log(response);
  // })

  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // .then(function () {
  //   // always executed
  // });

  //axios... return id

  // const a = "ריק";
  // a = GetIdUser({
  //   EMail: this.state.EMail,
  //   UserPassword: this.state.UserPassword,
  // });

  // this.setState({
  //   IdUser: GetIdUser({
  //     EMail: this.state.EMail,
  //     UserPassword: this.state.UserPassword,
  //   }),
  // });
  //   localStorage.setItem("IdUser", this.state.IdUser);
  // }

  checkPassword = (event) => {
    const { UserPassword, UserwPassword } = this.state;
    // perform all neccassary validations
    if (UserPassword !== UserwPassword) {
      alert("Passwords don't match");
    } else {
      alert("good password"); // make API call
      this.newUserHadler(event);
    }
  };

  checkGet = (e) => {
    axios.get("user/CheckGet", this.state).then((x) => {
      console.log("sucses!" + x);
    });
  };

  changeFirstName = (e) => {
    this.setState({ FirstNameUser: e.target.value });
  };

  changeLastName = (e) => {
    this.setState({ LastNameUser: e.target.value });
  };

  changeEmail = (e) => {
    this.setState({ EMail: e.target.value });
  };

  changepassword = (e) => {
    this.setState({ UserPassword: e.target.value });
  };

  changeWpassword = (e) => {
    this.setState({ UserwPassword: e.target.value });
  };

  changeGetMail = (e) => {
    this.setState({ GetPostMail: e.target.value });
  };

  // render() {
  //   return (
  //     <div>
  //       <div className="container">
  //         <div className="row">
  //           <div className="col">1 of 3</div>
  //           <div className="col-6">2 of 3 (wider)</div>
  //           <div className="col">3 of 3</div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div className="loginUp">
        {/*LOG-IN*/}
        <div className="Login">
          <form onSubmit={this.checkPassword}>
            <article>
              <input
                type="text"
                id="Firstname"
                placeholde="שם פרטי"
                className="input"
                value={this.state.FirstName}
                onChange={this.changeFirstName}
              />
              <label htmlFor="Firstname">שם פרטי</label>
              <input
                type="text"
                id="Lastname"
                className="input"
                value={this.state.lastName}
                onChange={this.changeLastName}
              />
              <label htmlFor="Lastname">שם משפחה</label>
              <label htmlFor="email">כתובת מייל</label>
              <input
                type="mail"
                id="email"
                className="input"
                value={this.state.email}
                onChange={this.changeEmail}
              />
              <label htmlFor="password">סיסמה</label>
              <input
                type="password"
                id="password"
                className="input"
                value={this.state.UserPassword}
                onChange={this.changepassword}
              />
              <label htmlFor="Wpassword">אימות סיסמה</label>
              <input
                type="password"
                id="Wpassword"
                className="input"
                value={this.state.UserwPassword}
                onChange={this.changeWpassword}
              />
              {/* <div className="round">
                <input
                  type="checkbox"
                  id="GetPostMail"
                  value={this.state.GetPostMail}
                  onChange={this.changeGetMail}
                />
                <label htmlFor="GetPostMail"></label>
              </div> */}
              {/* <div className="checkbox">
                <input type="checkbox" id="checkbox" value="" />
                <label for="checkbox">
                  <span>Checkbox</span>
                </label>
              </div> */}
              <input
                type="button"
                placeholder="הרשמה"
                className="input SubmiSignup"
                onClick={(e) => {
                  this.checkPassword(e);
                }}
              />
              <Label>
                <Checkbox id="remember" name="remember" />
                אשר קבלת מיילים
              </Label>
            </article>
          </form>
        </div>

        {/*SIGN-UP*/}
        <div className="signup">
          {/** <form className="FormContent">
            {/* <article>
              <div className="row">
                <div className="col">
            <input
              type="mail"
              className="form-control input"
              id="email"
              placeholder="כתובת מייל"
              name="email"
            ></input>
             </div>
            <div className="col">
              <input
                type="password"
                className="form-control input"
                id="account"
                placeholder="סיסמה"
                name="pswd"
              ></input>
            </div>
            </div>
            <button
              type="submit"
              className="input SubmiSignup btn btn-primary mt-3"
              onClick={() => this.newUserHadler(this.state.name)}
            >
              כניסה
            </button>
            <h1>{this.state.IdUser}</h1>
            <button>click</button>

             </article>
          </form> */}
          <form onSubmit={this.login}>
            <input
              type="text"
              className="input"
              id="email"
              placeholder="Enter email"
              onChange={this.changeEmail}
            ></input>
            <input
              type="password"
              className="input"
              id="password"
              placeholder="Enter password"
              onChange={this.changepassword}
            ></input>
            <input
              type="button"
              className="input SubmiSignup btn btn-primary mt-3"
              // onClick={(e) => {
              //   login({
              //     EMail: this.state.EMail,
              //     UserPassword: this.state.UserPassword,
              //   });
              // }}
              onClick={(e) => {
                this.login(e);
              }}
            />
            <p>{this.IdUser}</p>
            <p>{this.a}</p>
          </form>
        </div>
        <div className="left"></div>
      </div>
    );
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/ManagerForms/addProduct" />;
    }

    return <Loginup />;
  }
}
export default withRouter(Loginup);

{
  // function Loginup(props) {
  //     const [name, setname] = useState('');
  //     const [family, setfamily] = useState('');
  //     const [email, setemail] = useState('');
  //     const [age, setage] = useState('');
  //        const newUserHadler = (enent) => {
  //            event.preventDefault()
  //             debugger;
  //             axios.post('user/register', user).then(x => {
  //                 console.log("sucses!" + x);
  //             })
  //     }
  //     return (
  //         <div className="loginUp">
  //             <div className="Login">
  //                 <form onSubmit={newUserHadler}>
  //                     <label >שם פרטי</label>
  //                     <input type="text" className="input" />
  //                     <label>שם משפחה</label>
  //                      <input type="text" className="input" />
  //                     <label>שם משתמש</label>
  //                     <input type="text" className="input" />
  //                     <label>כתובת מייל</label>
  //                     <input type="mail" className="input" />
  //                     <label>סיסמה</label>
  //                     <input type="char" className="input" />
  //                     <label>אימות סיסמה</label>
  //                     <input type="char" className="input" />
  //                     <button
  //                         type="submit"
  //                         className="input SubmiSignup">
  //                             לביצוע הרשמה
  //                     </button>
  //                 </form>
  //             </div>
  //             <div className="signup">
  //                 <form>
  //                     <label for="firstname">שם פרטי</label>
  //                     <input type="text" id="firstname" className="input" />
  //                     <label for="mail" >כתובת מייל</label>
  //                     <input type="mail" id="mail" className="input" />
  //                     <input type="submit" className="input SubmiSignup" onClick={() =>newUserHadler(this.state.name)} value="ביצוע הרשמה" />
  //                 </form>
  //             </div>
  //         </div>
  //     )
  // }export default Loginup;
}

{
  /*old form*/
  /* <form>
<article>
  <label htmlFor="mail">כתובת מייל</label>
  <input type="mail" id="mail" className="input" />

  <label htmlFor="account">סיסמה</label>
  <input type="password" className="input" id="account" />
  <button
    type="submit"
    className="input SubmiSignup"
    onClick={() => this.newUserHadler(this.state.name)}
  >
    כניסה
  </button>
  <button onClick={this.checkGet}>click</button>
</article>
</form> */
}
