const express = require('express');
const app = express();
const db = require('./db.js');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var passport = require('passport');

app.use(express.json());

employees = [];

function updateEmployees(employeesReadyFn) {
    db.getEmployeesPerDepartment(function(rows) {
        employees = rows;
        employeesReadyFn();
    })
}

app.get('/employees', function(req, res) {
    updateEmployees(function() {
        res.status(200).send(employees);
        console.log('/employees successful', 200)
    });
});

app.post('/addemployees', function(req, res) {
    db.addEmployees(req.body, function(insertedKey) {
        updateEmployees(function(){
            console.log('/add employees successful', 200);
            res.send(employees);
        });
    });
});

app.listen(8002, function () {
    console.log('Company API listening on port 8002...');
});