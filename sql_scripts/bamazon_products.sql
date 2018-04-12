drop database if exists bamazon;
create database bamazon;
use bamazon;


drop table if exists products;
CREATE TABLE products (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `product_name` VARCHAR(100) DEFAULT NULL,
    `department_name` VARCHAR(100) DEFAULT NULL,
    `price` INTEGER(100),
    `stock_quantity` INTEGER(100),
    PRIMARY KEY (id)
);


insert into products (product_name, department_name, price, stock_quantity) 
values ("Water Hose", "Home/Garden", 10, 50);
insert into products (product_name, department_name, price, stock_quantity) 
values ("Shoes", "Apparel", 100, 10);
insert into products (product_name, department_name, price, stock_quantity) 
values ("Socks", "Apparel", 5, 100);
insert into products (product_name, department_name, price, stock_quantity) 
values ("Gas Can", "Home/Garden", 15, 10);
insert into products (product_name, department_name, price, stock_quantity) 
values ("DvD Player", "Electronics", 20, 10);
insert into products (product_name, department_name, price, stock_quantity) 
values ("DvD", "Electronics", 5, 1000);
insert into products (product_name, department_name, price, stock_quantity) 
values ("Fan", "Home/Garden", 25, 15);
insert into products (product_name, department_name, price, stock_quantity) 
values ("Universal Remote", "Electronics", 8, 35);
insert into products (product_name, department_name, price, stock_quantity) 
values ("Leather Belts", "Apparel", 20, 25);
insert into products (product_name, department_name, price, stock_quantity) 
values ("Gold Watch", "Apparel", 500, 5);
select*from products;