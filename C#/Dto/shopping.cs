using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
   public class shopping
    {
        public int IdShoppingCart { get; set; }
        public int IdUser { get; set; }
        public int IdProduct { get; set; }
        public string NameProduct { get; set; }
        public string Category { get; set; }
        public string Subcategory { get; set; }
        public int? AmountOfPurchases { get; set; }
        public byte[] ImageOfProduct { get; set; }
        public string Company { get; set; }
        public DateTime? DateAdded { get; set; }
        public string Color { get; set; }
        public decimal? Price { get; set; }
        public byte? size { get; set; }
        public byte? DiscountPercentage { get; set; }
    }
}
