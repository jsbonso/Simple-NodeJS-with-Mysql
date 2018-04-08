var mysql = require('mysql');

function connectToMySQL() {

    // Create Connection
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'tutorialsdojo',
        password: 'Password123',
        database: 'tutorialsdojo'
    });


    // Connect to Database
    connection.connect(
        function (err) {

            if (err) throw err;
            console.log('Connected to MySQL Database - Test 1');

        }
    );

    //
    connection.query('select count(*) from student',
        function(err, result){

            if(err) throw err;

            console.log(result);
        }
    )


}

module.exports.connectToMySQL = connectToMySQL;

