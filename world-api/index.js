const express = require('express')
const app = express()
const db = require('./db.js')
const file = require('./upload.js')
app.use(express.json())

cities = []

function updateCities(citiesReadyFn){
    db.getCitiesInCountry('GBR', function(rows){
        cities = rows;
        citiesReadyFn();
    })
}

app.get('/cities', function (req,res){
    updateCities(function(){
        res.send(cities)
        console.log('Request processed')
    })
})

app.post('/upload', function(req,res){

    console.log('upload called');
})

app.post('/addcity', function(req,res){
    console.log('add city called')
    db.addCity(req.body, function(insertedKey){
        updateCities(function(){
            res.send(cities)
            console.log('ADDED CITY')
        })
    })
    //cities.push(req.body);
})

app.listen(8002, function(){
    console.log('World ap listening 8002')
})