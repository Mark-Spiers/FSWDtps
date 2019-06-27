const express = require('express');
const app = express();
const db = require('./db.js');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');

app.use(express.json());

employees = [];
employee_department = [];

function updateEmployees(employeesReadyFn) {
    db.getEmployees(function(rows) {
        employees = rows;
        employeesReadyFn();
    })
}

function updateEmployeesDepartment(employeesReadyFn) {
    db.getEmployeesPerDepartment(function(rows) {
        employee_department = rows;
        employeesReadyFn();
    })
}


app.get('/employees', function(req, res) {
    updateEmployees(function() {
        res.status(200).send(employees);
        console.log('/employees successful', 200)
    });
});

app.post('/addemployee', function(req, res) {
    db.addEmployees(req.body, function(insertedKey) {
        updateEmployees(function(){
            console.log('/add employees successful', 200);
            res.send(employees);
        });
    });
});

app.get('/employeesperdepartment', function(req, res) {
    updateEmployeesDepartment(function() {
        res.status(200).send(employee_department);
        console.log('/employeesperdepartment successful', 200)
    });
});

app.listen(8002, function () {
    console.log('Company API listening on port 8002...');
});