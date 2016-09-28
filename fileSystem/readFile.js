var path = require('path')
var fs = require('fs')
var dirpath =  path.join( path.dirname(__filename) , 'testFiles')


function checkIfDerectory(pathIn){
  return fs.lstatSync(pathIn).isDirectory()
}

function bufferToString(data){
  return data.toString().trim()
}

fs.readdir( dirpath , 'utf8', function (err,files) {
  if (err) {
    return console.log(err)
  }

  for (var i in files) {

    var pathIn = path.join( dirpath , path.basename(files[i]) )
    if ( !checkIfDerectory(pathIn) ){

      fs.readFile(pathIn, (err, data) => {
        if (err) throw err;
        console.log('\n')
        console.log( bufferToString(data) );
      })

    }

  }
});
