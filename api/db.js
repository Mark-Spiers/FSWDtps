const mysql = require('mysql');

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'dev',
    password: 'dev-Pwd!',
    database: 'Company'
});

db.connect(function(err) {
    if(err) throw err;
    console.log("Connected to MySQL");
});

exports.getEmployees = function(callback) {
    db.query(
        "SELECT * FROM getEmployees;",
        function(err, rows) {
            if (err) throw err;
            callback(rows);
        }
    )
}

exports.getEmployeesPerDepartment = function(callback) {
    db.query(
        "SELECT * FROM getEmployeesPerDepartment;",
        function(err, rows) {
            if (err) throw err;
            callback(rows);
        }
    )
}

exports.addEmployee = function(data, readyFn){
    db.query('INSERT INTO Employee SET ?', data,
                function(error, results, fields) {
                    if (error) throw error;
                    readyFn(results.insertId);
                });
}
