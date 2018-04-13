var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "",
    database: "bamazon"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    runSearch();
  });

  function runSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "What is the ID of the product that you wish to purchase?",
          "How many units would you like to purchase?"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "What is the ID of the product that you wish to purchase?":
          itemPurchase();
          break;
  
        case "How many units would you like to purchase?":
          itemQuantity();
          break;
        }
      });
    }