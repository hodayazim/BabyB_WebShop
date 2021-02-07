using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bl
{
    public class ProductsBl
    {
        public static List<Product> GetAllProducts(int IdCategory)
        {
            return Dal.ProductsDal.GetAllProducts(IdCategory);
        }
    }
}
