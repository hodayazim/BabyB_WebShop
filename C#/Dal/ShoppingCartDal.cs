using Dto;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Dal
{
    public class ShoppingCartDal
    {

        public static List<shopping> GetShopping(int id)
        {
            using (Baby_BEntities1 db = new Baby_BEntities1())
            {
                List<shopping> f = new List<shopping>();
                List<ShoppingCart> userList = db.ShoppingCart.Where(s => s.IdUser == id).ToList();
                if (userList != null)
                {
                    foreach (var item in userList)
                    {
                        f.Add(new shopping
                        {
                            NameProduct = item.NameProduct,
                            Category = item.Category,
                            Subcategory = item.Subcategory,
                            AmountOfPurchases = item.AmountOfPurchases,
                            ImageOfProduct=item.ImageOfProduct,
                            Company=item.Company,
                            DateAdded =item.DateAdded,
                            Color=item.Color,
                            Price=item.Price,
                            size=item.size,
                            DiscountPercentage=item.DiscountPercentage,
                        });
                        //shopping n = new shopping() {NameProduct=item.NameProduct,Color=item.Color };
                        //f[f.Count] = new shopping();
                        //f[f.Count] = n;
                    }
                    return f;
                }
                return null;
            }
        }
    }
}