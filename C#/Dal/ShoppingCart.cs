//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Dal
{
    using System;
    using System.Collections.Generic;
    
    public partial class ShoppingCart
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ShoppingCart()
        {
            this.OldOrders = new HashSet<OldOrders>();
        }
    
        public int IdShoppingCart { get; set; }
        public Nullable<int> IdUser { get; set; }
        public Nullable<int> IdProduct { get; set; }
        public string NameProduct { get; set; }
        public string Category { get; set; }
        public string Subcategory { get; set; }
        public Nullable<int> AmountOfPurchases { get; set; }
        public byte[] ImageOfProduct { get; set; }
        public string Company { get; set; }
        public Nullable<System.DateTime> DateAdded { get; set; }
        public string Color { get; set; }
        public Nullable<decimal> Price { get; set; }
        public Nullable<byte> size { get; set; }
        public Nullable<byte> DiscountPercentage { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<OldOrders> OldOrders { get; set; }
        public virtual OrdersProducts OrdersProducts { get; set; }
        public virtual Products Products { get; set; }
    }
}
