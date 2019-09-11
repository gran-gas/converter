const express = require('express');
const extra = require('./toint');

const app = express();


app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/statics'));


app.get('/', function(req,res){

    res.render('./index.html');


})

app.get('/:number', function(req,res){

    var far = req.params.number;

    console.log(far)

    var kelvins =  far - 32;

    kelvins = kelvins * (5/9);

    kelvins = kelvins + 273.15;

    var celsius = far - 32;

    celsius = celsius * (5/9);

    kelvins = extra.toInt(kelvins);

    celsius = extra.toInt(celsius)

    res.render('./result.ejs',{kelvins: kelvins, celsius: celsius});


})