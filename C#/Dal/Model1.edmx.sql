
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 12/30/2020 10:06:56
-- Generated from EDMX file: C:\Users\hoday\Desktop\final project\C#\Dal\Model1.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [Baby_B];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[FK_ChildrenArchive_ChildrenFamily]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[ChildrenArchives] DROP CONSTRAINT [FK_ChildrenArchive_ChildrenFamily];
GO
IF OBJECT_ID(N'[dbo].[FK_OldOrdersArchive_OldOrders1]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[OldOrdersArchives] DROP CONSTRAINT [FK_OldOrdersArchive_OldOrders1];
GO
IF OBJECT_ID(N'[dbo].[FK_ChildrenFamily_Account]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[ChildrenFamilies] DROP CONSTRAINT [FK_ChildrenFamily_Account];
GO
IF OBJECT_ID(N'[dbo].[FK_Users_Account]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Users] DROP CONSTRAINT [FK_Users_Account];
GO
IF OBJECT_ID(N'[dbo].[FK_Products_SubCategory]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[Products] DROP CONSTRAINT [FK_Products_SubCategory];
GO
IF OBJECT_ID(N'[dbo].[FK_SubCategory_Category]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[SubCategories] DROP CONSTRAINT [FK_SubCategory_Category];
GO
IF OBJECT_ID(N'[dbo].[FK_OldOrders_ShoppingCart]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[OldOrders] DROP CONSTRAINT [FK_OldOrders_ShoppingCart];
GO
IF OBJECT_ID(N'[dbo].[FK_OrdersProducts_ShoppingCart]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[OrdersProducts] DROP CONSTRAINT [FK_OrdersProducts_ShoppingCart];
GO
IF OBJECT_ID(N'[dbo].[FK_ShoppingCart_Products1]', 'F') IS NOT NULL
    ALTER TABLE [dbo].[ShoppingCarts] DROP CONSTRAINT [FK_ShoppingCart_Products1];
GO

-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[ChildrenArchives]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ChildrenArchives];
GO
IF OBJECT_ID(N'[dbo].[ChildrenFamilies]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ChildrenFamilies];
GO
IF OBJECT_ID(N'[dbo].[DefaultTemplates]', 'U') IS NOT NULL
    DROP TABLE [dbo].[DefaultTemplates];
GO
IF OBJECT_ID(N'[dbo].[Keywords]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Keywords];
GO
IF OBJECT_ID(N'[dbo].[OldOrders]', 'U') IS NOT NULL
    DROP TABLE [dbo].[OldOrders];
GO
IF OBJECT_ID(N'[dbo].[OldOrdersArchives]', 'U') IS NOT NULL
    DROP TABLE [dbo].[OldOrdersArchives];
GO
IF OBJECT_ID(N'[dbo].[OrdersProducts]', 'U') IS NOT NULL
    DROP TABLE [dbo].[OrdersProducts];
GO
IF OBJECT_ID(N'[dbo].[SubscriptionArchives]', 'U') IS NOT NULL
    DROP TABLE [dbo].[SubscriptionArchives];
GO
IF OBJECT_ID(N'[dbo].[sysdiagrams]', 'U') IS NOT NULL
    DROP TABLE [dbo].[sysdiagrams];
GO
IF OBJECT_ID(N'[dbo].[AccountArchives]', 'U') IS NOT NULL
    DROP TABLE [dbo].[AccountArchives];
GO
IF OBJECT_ID(N'[dbo].[Accounts]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Accounts];
GO
IF OBJECT_ID(N'[dbo].[Users]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Users];
GO
IF OBJECT_ID(N'[dbo].[UsersArchives]', 'U') IS NOT NULL
    DROP TABLE [dbo].[UsersArchives];
GO
IF OBJECT_ID(N'[dbo].[Products]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Products];
GO
IF OBJECT_ID(N'[dbo].[SubCategories]', 'U') IS NOT NULL
    DROP TABLE [dbo].[SubCategories];
GO
IF OBJECT_ID(N'[dbo].[Categories]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Categories];
GO
IF OBJECT_ID(N'[dbo].[ShoppingCarts]', 'U') IS NOT NULL
    DROP TABLE [dbo].[ShoppingCarts];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'ChildrenArchives'
CREATE TABLE [dbo].[ChildrenArchives] (
    [ChildCode] int  NOT NULL,
    [IdMothre] int IDENTITY(1,1) NOT NULL,
    [IdFather] int  NULL,
    [FirstName] nvarchar(20)  NULL,
    [LastName] nvarchar(20)  NULL,
    [DateBorn] datetime  NULL
);
GO

-- Creating table 'ChildrenFamilies'
CREATE TABLE [dbo].[ChildrenFamilies] (
    [ChildCode] int IDENTITY(1,1) NOT NULL,
    [IdAccount] int  NOT NULL,
    [FirstName] varchar(50)  NOT NULL,
    [LastName] varchar(50)  NULL,
    [BirthdayDate] datetime  NULL
);
GO

-- Creating table 'DefaultTemplates'
CREATE TABLE [dbo].[DefaultTemplates] (
    [IdTemplates] int IDENTITY(1,1) NOT NULL,
    [NameTemplates] varchar(1)  NULL,
    [StringSolution] varchar(max)  NULL
);
GO

-- Creating table 'Keywords'
CREATE TABLE [dbo].[Keywords] (
    [IdKeywords] int IDENTITY(1,1) NOT NULL,
    [NameKeywords] nvarchar(1)  NULL,
    [PossibleContent] varchar(max)  NULL
);
GO

-- Creating table 'OldOrders'
CREATE TABLE [dbo].[OldOrders] (
    [PurchaseNumber] int IDENTITY(1,1) NOT NULL,
    [IdShoppingCart] int  NULL,
    [TotalPeace] decimal(19,4)  NULL,
    [DateOfAcquisition] datetime  NULL,
    [DateOfReceipt] datetime  NULL
);
GO

-- Creating table 'OldOrdersArchives'
CREATE TABLE [dbo].[OldOrdersArchives] (
    [PurchaseNumber] int IDENTITY(1,1) NOT NULL,
    [IdShoppingCart] int  NULL,
    [TotalPeace] decimal(19,4)  NULL,
    [DateOfAcquisition] datetime  NULL,
    [DateOfReceipt] datetime  NULL
);
GO

-- Creating table 'OrdersProducts'
CREATE TABLE [dbo].[OrdersProducts] (
    [IdShoppingCart] int  NOT NULL,
    [IdProduct] int  NULL,
    [NameProduct] nvarchar(30)  NULL,
    [Category] varchar(20)  NULL,
    [Subcategory] varchar(30)  NULL,
    [DescriptionProduct] varchar(300)  NULL,
    [UnitsInStock] smallint  NULL,
    [Price] decimal(19,4)  NULL,
    [Color] nvarchar(1)  NULL,
    [DiscountPercentage] tinyint  NULL,
    [ImageOfProduct] varbinary(max)  NULL,
    [Company] varchar(20)  NULL,
    [size] tinyint  NULL
);
GO

-- Creating table 'SubscriptionArchives'
CREATE TABLE [dbo].[SubscriptionArchives] (
    [IdFamily] int IDENTITY(1,1) NOT NULL,
    [IdUser] int  NULL,
    [ParetntsfirstName] nvarchar(20)  NULL,
    [LastName] nvarchar(20)  NULL,
    [EMail] varchar(35)  NULL,
    [GetPostMail] bit  NULL
);
GO

-- Creating table 'sysdiagrams'
CREATE TABLE [dbo].[sysdiagrams] (
    [name] nvarchar(128)  NOT NULL,
    [principal_id] int  NOT NULL,
    [diagram_id] int IDENTITY(1,1) NOT NULL,
    [version] int  NULL,
    [definition] varbinary(max)  NULL
);
GO

-- Creating table 'AccountArchives'
CREATE TABLE [dbo].[AccountArchives] (
    [IdAccount] int IDENTITY(1,1) NOT NULL,
    [IdUser] int  NULL,
    [City] varchar(50)  NOT NULL,
    [Street] varchar(50)  NOT NULL,
    [ApartmentNumber] int  NOT NULL,
    [HomeNumber] int  NULL,
    [FamilyName] nvarchar(50)  NULL,
    [IdParent] int  NULL
);
GO

-- Creating table 'Accounts'
CREATE TABLE [dbo].[Accounts] (
    [IdAccount] int IDENTITY(1,1) NOT NULL,
    [FamilyName] nvarchar(50)  NULL,
    [IdParent] int  NULL,
    [City] varchar(50)  NOT NULL,
    [Street] varchar(50)  NOT NULL,
    [ApartmentNumber] int  NOT NULL,
    [HomeNumber] int  NULL
);
GO

-- Creating table 'Users'
CREATE TABLE [dbo].[Users] (
    [IdUser] int IDENTITY(1,1) NOT NULL,
    [IdAccount] int  NULL,
    [FirstNameUser] nvarchar(50)  NOT NULL,
    [LastNameUser] nvarchar(50)  NULL,
    [UserPassword] varchar(15)  NULL,
    [UserStatus] int  NULL,
    [EMail] nvarchar(100)  NULL,
    [GetPostMail] bit  NULL,
    [TotalPayments] smallint  NULL
);
GO

-- Creating table 'UsersArchives'
CREATE TABLE [dbo].[UsersArchives] (
    [IdUser] int IDENTITY(1,1) NOT NULL,
    [IdAccount] int  NULL,
    [FirstNameUser] nvarchar(50)  NULL,
    [LastNameUser] nvarchar(50)  NULL,
    [UserPassword] varchar(15)  NULL,
    [UserStatus] int  NULL,
    [EMail] nvarchar(100)  NULL,
    [GetPostMail] bit  NULL,
    [TotalPayments] smallint  NULL
);
GO

-- Creating table 'Products'
CREATE TABLE [dbo].[Products] (
    [IdProduct] int IDENTITY(1,1) NOT NULL,
    [NameProduct] nvarchar(30)  NULL,
    [BarcodeProduct] nvarchar(30)  NULL,
    [IdSubcategory] int  NOT NULL,
    [DescriptionProduct] varchar(300)  NULL,
    [UnitsInStock] smallint  NULL,
    [Price] decimal(19,4)  NULL,
    [Color] nvarchar(1)  NULL,
    [DiscountPercentage] tinyint  NULL,
    [ImageOfProduct] varbinary(max)  NULL,
    [Company] varchar(20)  NULL,
    [size] tinyint  NULL
);
GO

-- Creating table 'SubCategories'
CREATE TABLE [dbo].[SubCategories] (
    [IdSubCategory] int IDENTITY(1,1) NOT NULL,
    [NameSubCategory] nvarchar(50)  NOT NULL,
    [IdCategory] int  NOT NULL
);
GO

-- Creating table 'Categories'
CREATE TABLE [dbo].[Categories] (
    [IdCategory] int IDENTITY(1,1) NOT NULL,
    [NameCategory] nvarchar(50)  NOT NULL
);
GO

-- Creating table 'ShoppingCarts'
CREATE TABLE [dbo].[ShoppingCarts] (
    [IdShoppingCart] int IDENTITY(1,1) NOT NULL,
    [IdUser] int  NULL,
    [IdProduct] int  NULL,
    [NameProduct] nvarchar(30)  NULL,
    [Category] varchar(20)  NULL,
    [Subcategory] varchar(30)  NULL,
    [AmountOfPurchases] int  NULL,
    [ImageOfProduct] varbinary(max)  NULL,
    [Company] varchar(20)  NULL,
    [DateAdded] datetime  NULL,
    [Color] nvarchar(1)  NULL,
    [Price] decimal(19,4)  NULL,
    [size] tinyint  NULL,
    [DiscountPercentage] tinyint  NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [ChildCode] in table 'ChildrenArchives'
ALTER TABLE [dbo].[ChildrenArchives]
ADD CONSTRAINT [PK_ChildrenArchives]
    PRIMARY KEY CLUSTERED ([ChildCode] ASC);
GO

-- Creating primary key on [ChildCode] in table 'ChildrenFamilies'
ALTER TABLE [dbo].[ChildrenFamilies]
ADD CONSTRAINT [PK_ChildrenFamilies]
    PRIMARY KEY CLUSTERED ([ChildCode] ASC);
GO

-- Creating primary key on [IdTemplates] in table 'DefaultTemplates'
ALTER TABLE [dbo].[DefaultTemplates]
ADD CONSTRAINT [PK_DefaultTemplates]
    PRIMARY KEY CLUSTERED ([IdTemplates] ASC);
GO

-- Creating primary key on [IdKeywords] in table 'Keywords'
ALTER TABLE [dbo].[Keywords]
ADD CONSTRAINT [PK_Keywords]
    PRIMARY KEY CLUSTERED ([IdKeywords] ASC);
GO

-- Creating primary key on [PurchaseNumber] in table 'OldOrders'
ALTER TABLE [dbo].[OldOrders]
ADD CONSTRAINT [PK_OldOrders]
    PRIMARY KEY CLUSTERED ([PurchaseNumber] ASC);
GO

-- Creating primary key on [PurchaseNumber] in table 'OldOrdersArchives'
ALTER TABLE [dbo].[OldOrdersArchives]
ADD CONSTRAINT [PK_OldOrdersArchives]
    PRIMARY KEY CLUSTERED ([PurchaseNumber] ASC);
GO

-- Creating primary key on [IdShoppingCart] in table 'OrdersProducts'
ALTER TABLE [dbo].[OrdersProducts]
ADD CONSTRAINT [PK_OrdersProducts]
    PRIMARY KEY CLUSTERED ([IdShoppingCart] ASC);
GO

-- Creating primary key on [IdFamily] in table 'SubscriptionArchives'
ALTER TABLE [dbo].[SubscriptionArchives]
ADD CONSTRAINT [PK_SubscriptionArchives]
    PRIMARY KEY CLUSTERED ([IdFamily] ASC);
GO

-- Creating primary key on [diagram_id] in table 'sysdiagrams'
ALTER TABLE [dbo].[sysdiagrams]
ADD CONSTRAINT [PK_sysdiagrams]
    PRIMARY KEY CLUSTERED ([diagram_id] ASC);
GO

-- Creating primary key on [IdAccount] in table 'AccountArchives'
ALTER TABLE [dbo].[AccountArchives]
ADD CONSTRAINT [PK_AccountArchives]
    PRIMARY KEY CLUSTERED ([IdAccount] ASC);
GO

-- Creating primary key on [IdAccount] in table 'Accounts'
ALTER TABLE [dbo].[Accounts]
ADD CONSTRAINT [PK_Accounts]
    PRIMARY KEY CLUSTERED ([IdAccount] ASC);
GO

-- Creating primary key on [IdUser] in table 'Users'
ALTER TABLE [dbo].[Users]
ADD CONSTRAINT [PK_Users]
    PRIMARY KEY CLUSTERED ([IdUser] ASC);
GO

-- Creating primary key on [IdUser] in table 'UsersArchives'
ALTER TABLE [dbo].[UsersArchives]
ADD CONSTRAINT [PK_UsersArchives]
    PRIMARY KEY CLUSTERED ([IdUser] ASC);
GO

-- Creating primary key on [IdProduct] in table 'Products'
ALTER TABLE [dbo].[Products]
ADD CONSTRAINT [PK_Products]
    PRIMARY KEY CLUSTERED ([IdProduct] ASC);
GO

-- Creating primary key on [IdSubCategory] in table 'SubCategories'
ALTER TABLE [dbo].[SubCategories]
ADD CONSTRAINT [PK_SubCategories]
    PRIMARY KEY CLUSTERED ([IdSubCategory] ASC);
GO

-- Creating primary key on [IdCategory] in table 'Categories'
ALTER TABLE [dbo].[Categories]
ADD CONSTRAINT [PK_Categories]
    PRIMARY KEY CLUSTERED ([IdCategory] ASC);
GO

-- Creating primary key on [IdShoppingCart] in table 'ShoppingCarts'
ALTER TABLE [dbo].[ShoppingCarts]
ADD CONSTRAINT [PK_ShoppingCarts]
    PRIMARY KEY CLUSTERED ([IdShoppingCart] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- Creating foreign key on [ChildCode] in table 'ChildrenArchives'
ALTER TABLE [dbo].[ChildrenArchives]
ADD CONSTRAINT [FK_ChildrenArchive_ChildrenFamily]
    FOREIGN KEY ([ChildCode])
    REFERENCES [dbo].[ChildrenFamilies]
        ([ChildCode])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [PurchaseNumber] in table 'OldOrdersArchives'
ALTER TABLE [dbo].[OldOrdersArchives]
ADD CONSTRAINT [FK_OldOrdersArchive_OldOrders1]
    FOREIGN KEY ([PurchaseNumber])
    REFERENCES [dbo].[OldOrders]
        ([PurchaseNumber])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [IdAccount] in table 'ChildrenFamilies'
ALTER TABLE [dbo].[ChildrenFamilies]
ADD CONSTRAINT [FK_ChildrenFamily_Account]
    FOREIGN KEY ([IdAccount])
    REFERENCES [dbo].[Accounts]
        ([IdAccount])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ChildrenFamily_Account'
CREATE INDEX [IX_FK_ChildrenFamily_Account]
ON [dbo].[ChildrenFamilies]
    ([IdAccount]);
GO

-- Creating foreign key on [IdAccount] in table 'Users'
ALTER TABLE [dbo].[Users]
ADD CONSTRAINT [FK_Users_Account]
    FOREIGN KEY ([IdAccount])
    REFERENCES [dbo].[Accounts]
        ([IdAccount])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Users_Account'
CREATE INDEX [IX_FK_Users_Account]
ON [dbo].[Users]
    ([IdAccount]);
GO

-- Creating foreign key on [IdSubcategory] in table 'Products'
ALTER TABLE [dbo].[Products]
ADD CONSTRAINT [FK_Products_SubCategory]
    FOREIGN KEY ([IdSubcategory])
    REFERENCES [dbo].[SubCategories]
        ([IdSubCategory])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_Products_SubCategory'
CREATE INDEX [IX_FK_Products_SubCategory]
ON [dbo].[Products]
    ([IdSubcategory]);
GO

-- Creating foreign key on [IdCategory] in table 'SubCategories'
ALTER TABLE [dbo].[SubCategories]
ADD CONSTRAINT [FK_SubCategory_Category]
    FOREIGN KEY ([IdCategory])
    REFERENCES [dbo].[Categories]
        ([IdCategory])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_SubCategory_Category'
CREATE INDEX [IX_FK_SubCategory_Category]
ON [dbo].[SubCategories]
    ([IdCategory]);
GO

-- Creating foreign key on [IdShoppingCart] in table 'OldOrders'
ALTER TABLE [dbo].[OldOrders]
ADD CONSTRAINT [FK_OldOrders_ShoppingCart]
    FOREIGN KEY ([IdShoppingCart])
    REFERENCES [dbo].[ShoppingCarts]
        ([IdShoppingCart])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_OldOrders_ShoppingCart'
CREATE INDEX [IX_FK_OldOrders_ShoppingCart]
ON [dbo].[OldOrders]
    ([IdShoppingCart]);
GO

-- Creating foreign key on [IdShoppingCart] in table 'OrdersProducts'
ALTER TABLE [dbo].[OrdersProducts]
ADD CONSTRAINT [FK_OrdersProducts_ShoppingCart]
    FOREIGN KEY ([IdShoppingCart])
    REFERENCES [dbo].[ShoppingCarts]
        ([IdShoppingCart])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating foreign key on [IdProduct] in table 'ShoppingCarts'
ALTER TABLE [dbo].[ShoppingCarts]
ADD CONSTRAINT [FK_ShoppingCart_Products1]
    FOREIGN KEY ([IdProduct])
    REFERENCES [dbo].[Products]
        ([IdProduct])
    ON DELETE NO ACTION ON UPDATE NO ACTION;
GO

-- Creating non-clustered index for FOREIGN KEY 'FK_ShoppingCart_Products1'
CREATE INDEX [IX_FK_ShoppingCart_Products1]
ON [dbo].[ShoppingCarts]
    ([IdProduct]);
GO

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------