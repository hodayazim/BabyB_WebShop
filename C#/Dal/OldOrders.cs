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
    
    public partial class OldOrders
    {
        public int PurchaseNumber { get; set; }
        public Nullable<int> IdShoppingCart { get; set; }
        public Nullable<decimal> TotalPeace { get; set; }
        public Nullable<System.DateTime> DateOfAcquisition { get; set; }
        public Nullable<System.DateTime> DateOfReceipt { get; set; }
    
        public virtual ShoppingCart ShoppingCart { get; set; }
        public virtual OldOrdersArchive OldOrdersArchive { get; set; }
    }
}
