//------------------------link node dependancies------------------------
var inquirer = require('inquirer');
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

connection.connect(function (err) {

    console.log('\n---------------------------~~~~~~~~~~~~~~~~Welcome!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--------------------------------');
    if (err) throw err
    //-------------------select data from bamazon_db.sale_items------------------------
    display();
    start();

});

//--------------------------create a table to  display database data--------------------------

function display() {

    connection.query('SELECT * FROM sale_items', function (err, result, fields) {

        if (err) throw err

        console.log('\n');

        var table = new Table({
            head: ['Id', 'Item', 'Department', 'Price', 'In Stock'],
            colWidths: [5, 50, 20, 10, 10]
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

function start() {

    console.log('\n');

    inquirer.prompt([{
            type: 'input',
            name: 'pickItem',
            message: 'Hello and welcome to Bamazon, your one stop shop for all the things you never knew you needed!\nWhat would you like to buy? Enter in the ID number of the item you\'d wish to buy.'
        }

        //-------------------------after the prompt, store the user's response in a variable called answer----------------------
    ]).then(answer => {

        connection.query('SELECT * FROM sale_items', {
            id: answer.input
        }, function (err, response) {
            if (err) throw err
            //-------interpret user input as an integer, parse and trim-------will be doing this later to improve functionality---------------------
            Object.keys(answer)[0];
            var key = Object.keys(answer)[0];
            var userChoice = answer[key];
            userChoice = response[userChoice - 1];
            console.log(userChoice)
            var userPick = userChoice.Item_Name

            inquirer.prompt([{
                type: 'input',
                name: 'pickQuantity',
                message: console.log('Great choice! You picked the  ' + userChoice.Item_Name + '.' + ' I\'ll add it to the cart, but first -- how many would you like?')
            }]).then(answer2 => {
                Object.keys(answer2)[0];
                var key = Object.keys(answer2);
                var userChoice2 = answer2[key];
                console.log(userChoice2);

                inquirer.prompt([{
                    type: 'confirm',
                    name: 'confirmPurchase',
                    message: 'Are you sure that\'s what you want?'

                }]).then(confirmCart => {
                    if (confirmCart) {

                        console.log('Okay got it, so you want ' + userPick + ', and ' + answer2[key] + ' of them. Let\'s load the cart up!')
                    } else {
                        console.log('Sorry, I did\'nt get that, let\'s try again')
                    }


                })

            });


        });
    });


};
