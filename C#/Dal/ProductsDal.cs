using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class ProductsDal
    {
        public static List<Product> GetAllProducts(int IdCategory)
        {
            List<Product> L = new List<Product>();
            List<int> IdSubCategory = new List<int>();
            List<Dto.ProductImage> Images = new List<Dto.ProductImage>();
            List<ProductImage> ProductImages = new List<ProductImage>();

            using (Baby_BEntities1 db = new Baby_BEntities1())
            {

                IdSubCategory = db.SubCategory.Where(u => u.IdCategory == IdCategory).Select(o => o.IdSubCategory).ToList();

                foreach (var item in db.Products)
                {
                    for (int i = 0; i < IdSubCategory.Count(); i++)
                    {

                        if (item.IdSubcategory == IdSubCategory[i])
                        {
                            Images.Clear();
                            ProductImages = db.ProductImage.Where(o => o.IdProduct == item.IdProduct).ToList();
                            Dto.ProductImage  im= new Dto.ProductImage();
                            im.PathImage = ProductImages[0].PathImage;
                            Images.Add(im);

                            Product p = new Product();
                            p.Price = item.Price;
                            p.NameProduct = item.NameProduct;
                            p.IdProduct = item.IdProduct;
                            p.DescriptionProduct = item.DescriptionProduct;
                            ProductImages = db.ProductImage.Where(o => o.IdProduct == item.IdProduct).ToList();
                            p.ProductImage = Images;
                            L.Add(p);
                        }
                    }
                }
            }
            return L;
        }
    }
}
