const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'empuser2',
    password: 'empPwd!',
    database: 'world'
})

db.connect(function(err){
    if(err) throw err
    console.log("Connected to MySQL")
})

exports.getCitiesInCountry = function(countrycode, callback){
    db.query("SELECT id, name, countrycode, district, population FROM city WHERE countrycode = ?",
    [countrycode], function(err, rows){
        if(err) throw err
        callback(rows)
    })
}

exports.addCity = function(data, readyFn){
    db.query('INSERT INTO city SET ?', data,
            function(error, results, fields){
              if(error) throw error;
              readyFn(results.insertId)  
            })
}