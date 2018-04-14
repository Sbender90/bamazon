var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table2');
var showTable = require('./table.js');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your mySQL password
    password: "50miler",
    database: "bamazon"
  });
    
  connection.connect(function(err) {
    if (err) throw err;
    userTable();
  });

  var userTable = function() {
	var display = new showTable();
	    connection.query('SELECT * FROM products', function(err, results){
		display.displayTable(results);
        runSearch();
	});
}

  function runSearch() {
    inquirer
      .prompt([{
        name: "id",
        type: "input",
        message: "What is the ID of the product that you wish to purchase?",
      },
      {
        name: "quantity",
        type: "input",
        message: "How many would you like to buy?"

      
      }]).then(function(answer) {
		
		connection.query('SELECT product_name, department_name, price, stock_quantity FROM products WHERE ?', {id: answer.id}, function(err,res) {
			
		console.log('\n  You would like to buy ' + answer.quantity + ' ' + res[0].product_name + ' from the ' + res[0].department_name + ' department' + ' for $' + res[0].price + ' each'
			);
			if (res[0].stock_quantity >= answer.quantity) {
				
				var itemQuantity = res[0].stock_quantity - answer.quantity;
				connection.query("UPDATE products SET ? WHERE ?", [
				{
					stock_quantity: itemQuantity
				}, {
					id: answer.id
				}], function(err,res) {
					});	
				var customerCost = res[0].price * answer.quantity;
				console.log('\n  Order successful! Your total is $' + customerCost.toFixed(2) + '\n');
			
				userTable();
					
			} else {
			
				console.log('\n  This item on backorder please check back soon!\n');
				
				userTable();
			}
		})
    });
}
