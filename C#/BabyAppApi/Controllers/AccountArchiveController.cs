﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BabyAppApi.Controllers
{
    public class AccountArchiveController : ApiController
    {
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/
        public string Get(int id)
        {
            return "value";
        }

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
