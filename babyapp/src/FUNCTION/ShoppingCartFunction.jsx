import useState from "react"
import axios from "axios";

const baseURL = "http://localhost:21309/api/";

//  class User {
//     id: int;
//     firstName: string;
// }
// export default function Login(product) {
//   debugger;
//   axios
//     .get(`${baseURL}ShoppingCart/Login${shoppingCart.idUser}`)
//     .then(function (response) {
//       shoppingCart.idUser = response.data;
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//     .then(function () {
//       // always executed
//     });
// }

export default function GetShopping() {
  axios
    .get(
      `http://localhost:21309/api/ShoppingCart/GetShopping/${localStorage.getItem(
        "IdUser"
      )}`
    )
    .then((res) => {
      console.log(res);
      return res; 
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    // .then(function () {
    //   // always executed
    // });
}
