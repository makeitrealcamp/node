
var http = require("http")
var path = require("path")
var fs = require('fs')
var dirpath =  path.join( path.dirname(__filename), 'public')
var patt = /\.([0-9a-z]+)(?:[\?#]|$)/i;




var server = http.createServer(function(req, res) {

  var matchPatt = (req.url).match(patt);
  var filePath;

  if (req.url === '/'){
    // console.log('base')
    filePath = path.join(dirpath, 'index.html')
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile(filePath, (err, data) => {
      if (err) throw err;

        res.write( data )
        res.end()
    })
  }


  if (req.url !== '/' && matchPatt !== null ){

      switch (matchPatt[0]) {
        case '.jpg':
         filePath = path.join(dirpath, 'birds.jpg')

         res.writeHead(200, {'Content-Type': 'image/jpg' });
         fs.readFile(filePath, (err, data) => {
           if (err) throw err;
            res.end(data, 'binary');
         })


        break;
        case '.css':

          filePath = path.join(dirpath, 'style.css')
          res.writeHead(200, {'Content-Type': 'text/css' });
          fs.readFile(filePath, (err, data) => {
            if (err) throw err;
             res.end(data, 'binary');
          })
        break;
      }
  }


});

server.listen(3000);
console.log("Server listening on port 3000")
