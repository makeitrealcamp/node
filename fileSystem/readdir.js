// Necesitamos estos dos modulos del core de Node para poder Completar este reto

var fs = require('fs')
var path = require('path')
var dirpath =  path.join( path.dirname(__filename) , 'testFiles')

// Version Syncronica

// var files = fs.readdirSync(dirpath)
// console.log('sync: ',files)

// Version asyncrona

fs.readdir( dirpath , 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log('Async:', data);
});

console.log('Suspenso no se donde voy a salir')
