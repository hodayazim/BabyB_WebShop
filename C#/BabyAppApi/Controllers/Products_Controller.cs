using Dal;
using Dto;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace BabyAppApi.Controllers
{
    [EnableCors("*", "*", "*")]

    public class Products_Controller : ApiController
    {
        [HttpGet]
        [Route("api/Product/GetAllProducts/{IdCategory}")]
        public List<Product> GetAllProducts([FromUri]int IdCategory)
        {
            return Bl.ProductsBl.GetAllProducts(IdCategory);
        }


        [HttpPost]
        [Route("api/Product/AddProducts")]
        public int AddProducts([FromBody] Products product)
        {
            using (Baby_BEntities1 db = new Baby_BEntities1())
            {
                try
                {
                    db.Products.Add(product);
                    db.SaveChanges();
                    return product.IdProduct;
                }
                catch (Exception e)
                {
                    return 0;
                }

            }
        }

        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        public string Get(int id)
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
