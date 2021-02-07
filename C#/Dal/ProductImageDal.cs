using Dto;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public static class ProductImageDal
    {
        public static bool AddProductImages(string[] Images)
        {

            int idProduct = Convert.ToInt32(Images[(Images.Length) - 1]);
            using (Baby_BEntities1 db = new Baby_BEntities1())
            {
                for (int i = 0; i < Images.Length-1; i++)
                {
                    ProductImage im = new ProductImage();
                    im.IdProduct = idProduct;
                    im.PathImage = ConstsValues.IMAGE_PATH + Path.GetFileName(Images[i]);
                    db.ProductImage.Add(im);
                }
                try
                    {
                    db.SaveChanges();
                        return true;
                    }
                    catch (Exception e)
                    {
                        throw new Exception(e.Message);
                    }  
            }
            return false;
        }
    }
}
