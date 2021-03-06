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
        "SELECT * FROM Employee;",
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
    console.log(data);
    db.query('INSERT INTO Employee SET ?', data,
                function(error, results, fields) {
                    if (error) throw error;
                    readyFn(results.insertId);
                });
}
