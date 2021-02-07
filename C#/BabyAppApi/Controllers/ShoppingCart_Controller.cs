using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

using Dal;
using Dto;
using HttpGetAttribute = System.Web.Http.HttpGetAttribute;
using HttpPostAttribute = System.Web.Http.HttpPostAttribute;
using RouteAttribute = System.Web.Http.RouteAttribute;
namespace BabyAppApi.Controllers
{
    [EnableCors("*", "*", "*")]

    public class ShoppingCart_Controller : ApiController
    {
        // GET api/
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/

        //[HttpGet]
        //[Route("api/ShoppingCart/Login/{EMail}")]

        //public int Login( string EMail)
        //{
        //   int idUser= Bl.ShoppingCartBl.GetUser(EMail, "1055");
        //    if (idUser != 0)
        //        return idUser;
        //    return 0;

        //}


        //// Post api/
        //[HttpPost]
        //[Route("api/ShoppingCart/Login")]


        //public int Login([FromBody] Users user)
        //{
        //    int idUser = Bl.ShoppingCartBl.GetUser(user.EMail, "1055");
        //    if (idUser != 0)
        //        return idUser;
        //    return 0;
        //}



        // GET api/

        //[HttpGet]
        //[Route("api/ShoppingCart/GetShopping/{IdUser}")]

        //public List<Dto.ClassShoppingCart> GetShopping([FromUri] int IdUser)
        //{
        //        List<Dal.ShoppingCart> mylist = Bl.ShoppingCartBl.GetShopping(IdUser);
        //        if (mylist != null)
        //            return mylist;
        //        return null;
        //}


        [HttpGet]
        [Route("api/ShoppingCart/GetShopping/{IdUser}")]

        public List<shopping> GetShopping([FromUri] int IdUser)
        {
            try
            {
                List<shopping> mylist = Bl.ShoppingCartBl.GetShopping(IdUser);
                if (mylist != null)
                    return mylist;
                return null;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        //[HttpGet]
        //[Route("api/User/Login/{EMail}/{UserPassword}")]
        //public int Login([FromUri]string EMail, [FromUri]string UserPassword)
        //{
        //    try
        //    {
        //        int idUser = Bl.ShoppingCartBl.GetUser(EMail, UserPassword);
        //        return idUser;

        //    }
        //    catch (Exception ex)
        //    {
        //        return 0;
        //    }
        //}


        // POST api/
        public void Post([FromBody]string value)
        {
        }

        // PUT api/
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/
        public void Delete(int id)
        {
        }
    }
}
