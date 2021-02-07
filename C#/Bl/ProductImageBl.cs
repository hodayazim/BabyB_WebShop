using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bl
{
    public static class ProductImageBl
    {

        public static bool AddProductImages(string[] Images)
        {
         return ProductImageDal.AddProductImages(Images);
        }
    }
}
