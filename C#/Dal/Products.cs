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
    
    public partial class Products
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Products()
        {
            this.ProductImage = new HashSet<ProductImage>();
            this.ShoppingCart = new HashSet<ShoppingCart>();
        }
    
        public int IdProduct { get; set; }
        public string NameProduct { get; set; }
        public string BarcodeProduct { get; set; }
        public int IdSubcategory { get; set; }
        public string DescriptionProduct { get; set; }
        public Nullable<short> UnitsInStock { get; set; }
        public Nullable<decimal> Price { get; set; }
        public string Color { get; set; }
        public Nullable<byte> DiscountPercentage { get; set; }
        public string Company { get; set; }
        public string size { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ProductImage> ProductImage { get; set; }
        public virtual SubCategory SubCategory { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ShoppingCart> ShoppingCart { get; set; }
    }
}
