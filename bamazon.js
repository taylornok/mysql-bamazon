//------------------------link node dependancies------------------------
var inquirer = require ('inquirer');
var mysql = require('mysql');
var Table = require('cli-table');

//-----------------create the connection information for the sql database-------------------
var connection = mysql.createConnection({
    host: 'localhost',

    //port
    port: 3306,

    //useranme
    user: 'root',

    //password
    password: 'root',
    database: 'bamazon_db'
});

//---------------------connect mymsql server-----------------

connection.connect(function(err) {

    console.log('\n---------------Welcome!---------------------');
    if (err) throw err
    //-------------------select data from bamazon_db.sale_items------------------------
    display();
    start();

});

//--------------------------create a table to  display database data--------------------------

function display () {
    
    connection.query('SELECT * FROM sale_items', function (err, result, fields) {
        
        if (err) throw err
        
        console.log('\n');
    
        var table = new Table({
            head: ['Id', 'Item', 'Department', 'Price', 'In Stock']
            , colWidths: [5,50,20,10,10]
        });
        
        for (var i = 0; i < result.length; i++) {
            table.push(
                [result[i].Id, result[i].Item_Name, result[i].Department, result[i].Price, result[i].Amount_In_Stock]
            );
        }

        console.log(table.toString());
    });
    
}

//-------------------------using inquirer to gather input from the user---------------------------

function start () {

    console.log('\n');

    inquirer.prompt([
        {
          type: "input",
          name: "userInput",
          message: "Hello and welcome to Bamazon, your one stop shop for all the things you never knew you needed! What would you like to buy? Enter in the ID number of the item you'd wish to buy"
        }
      
      //------------------after the prompt, store the user's response in a variable called choice-------------------
      ]).then(function(choice) {

        
        console.log('Great, you chose ' + choice.Item + ' for ' + choice.Price)

      });
}