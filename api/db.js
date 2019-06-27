const mysql = require('mysql');

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'native',
    password: 'password',
    database: 'Company'
});

db.connect(function(err) {
    if(err) throw err;
    console.log("Connected to MySQL");
});

exports.getEmployeesPerDepartment = function(callback) {
    db.query(
        "SELECT ",
        function(err, rows) {
            if (err) throw err;
            callback(rows);
        }
    )
}

exports.addEmployee = function(data, readyFn){
    db.query('INSERT INTO employee SET ?', data,
                function(error, results, fields) {
                    if (error) throw error;
                    readyFn(results.insertId);
                });
}