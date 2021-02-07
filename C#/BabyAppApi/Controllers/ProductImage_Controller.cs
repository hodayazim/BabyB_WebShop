using Dal;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Http;
using Bl;

namespace BabyAppApi.Controllers
{
    public class ProductImage_Controller : ApiController
    {
        public class LinesParameter
        {
            public List<string> Lines { get; } = new List<string>();
        }


        [HttpPost]
        [Route("api/ProductImage/Addimages")]
        public bool Addimages([FromBody] string[] Images )
        {
            return ProductImageBl.AddProductImages(Images);
        }

    }
}