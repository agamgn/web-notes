var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  var filepath = '.' + req.url;
  if (filepath === './') {
    filepath = './history-demo1.html';
  }

  readFile(filepath, res);
}).listen(8080);

function readFile (path, res) {
  fs.readFile(path, 'utf-8', function (err, data) {
    if (err) { 
      readFile('./history-demo1.html', res); 
    } else {
      res.write(data);
      res.end();    
    }
  });
}

console.log('Server running at http://127.0.0.1:8080/');