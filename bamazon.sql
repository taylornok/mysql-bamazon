DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;


CREATE TABLE stock (
    Id INT AUTO_INCREMENT NOT NULL,
    Item_Name VARCHAR(75) NOT NULL,
    Department VARCHAR(50),
    Price DECIMAL(10, 2),
    Amount_In_Stock INT (11),  
    PRIMARY KEY (Id)
)

INSERT INTO stock (Item_Name, Department, Price, Amount_In_Stock)
VALUES ('Basil plant', 'Home and Garden', 5.00, 20)




INSERT INTO stock (Item_Name, Department, Price, Amount_In_Stock)
VALUES ('Samsung Tv 55 inch', 'Electronics', 450, 30)

INSERT INTO stock (Item_Name, Department, Price, Amount_In_Stock)
VALUES ('Aquafina Sparkling Water - Black Cherry 20 Pack', 'Groceries', 7, 20)

INSERT INTO stock (Item_Name, Department, Price, Amount_In_Stock)
VALUES ('Aquafina Sparkling Water - Lime 20 Pack', 'Groceries', 7, 20)

INSERT INTO stock (Item_Name, Department, Price, Amount_In_Stock)
VALUES ('Iams Hairball Control Cat Food 5lbs', 'Pet Care', 10, 30)

INSERT INTO stock (Item_Name, Department, Price, Amount_In_Stock)
VALUES ('Lenovo IdeaPad 320 - 15 inch screen', 'Electronics', 699, 30)

INSERT INTO stock (Item_Name, Department, Price, Amount_In_Stock)
VALUES ('Gnarly Head Pinot Grigio - Case of 9', 'Alcohol', 59, 12)


USE bamazon_DB;
SELECT * FROM stock

