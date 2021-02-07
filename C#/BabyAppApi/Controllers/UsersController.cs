using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;
using System.Web.Mvc.Routing;
using Dal;
using Dto;
using HttpGetAttribute = System.Web.Http.HttpGetAttribute;
using HttpPostAttribute = System.Web.Http.HttpPostAttribute;
using RouteAttribute = System.Web.Http.RouteAttribute;

namespace BabyAppApi.Controllers
{
    // [Route("user")]
    [EnableCors("*", "*", "*")]

    public class UsersController : ApiController
    {
        //[System.Web.Mvc.Route("register")]    
        // GET api/
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet]
        [Route("api/User/Login/{EMail}/{UserPassword}")]
        public int Login([FromUri]string EMail, [FromUri]string UserPassword)
        {
            try
            {
                int idUser= Bl.UsersBl.GetUser(EMail, UserPassword);
                return idUser;

            }
            catch (Exception ex)
            {
                return 0;
            }
        }

        [HttpPost]
        [Route("api/Users/Register")]

        public int Register([FromBody] Users register)
        {
            return Bl.bl.Register(register);
        }

        [HttpGet]
        //[Route("user/CheckGet")]
        public string CheckGet()
        {
            return "value";
        }

        public void Post([FromBody]string value)
        {
        }

        public void Put(int id, [FromBody]string value)
        {
        }

        public void Delete(int id)
        {
        }
    }
}
