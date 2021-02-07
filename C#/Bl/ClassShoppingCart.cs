using Dto;
using System;
using System.Collections.Generic;

namespace Bl
{
    public class ShoppingCartBl
    {

        //public static List<Dto.ClassShoppingCart> GetShoppingById(int id)
        //{
        //    return Dto.Convert.ShoppingCartConvert.GetShoppingById(Dal.ClassShoppingCart.GetShopping(id));
        //}

        public static List<shopping> GetShopping(int id)
        {
            return Dal.ShoppingCartDal.GetShopping(id);
        }
    }
}

