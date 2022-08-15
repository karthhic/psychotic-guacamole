var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {


    //-----------Start of root section-------
//---------------------------------------Root location start
    if (req.url === '/') {
//---------------------------------------Post method process for root
    if (req.method === 'POST') {
//---------------------------------------Read file and send it as response
        fs.readFile('./pages/post.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.write("/root page method = post")
        return res.end();
      });
    }
//---------------------------------------End of post method process for root

//---------------------------------------Get method process for root
    if (req.method === 'GET') {
//---------------------------------------Read file and send it as response
        fs.readFile('./pages/home.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.write("/root page method = get")
            return res.end();
          });
    }
//---------------------------------------end of get method process for root
}
//---------------------------------------End of root location process

//-----------Start of info section-------

//---------------------------------------info location start
if (req.url === '/info') {
//---------------------------------------Post method process for info
        if (req.method === 'POST') {
//---------------------------------------Read file and send it as response
            fs.readFile('./pages/post.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.write("/info page method = post")
            return res.end();
          });
        }
//---------------------------------------End of post method process for info
    
//---------------------------------------Get method process for info
        if (req.method === 'GET') {
//---------------------------------------Read file and send it as response
            fs.readFile('./pages/home.html', function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.write("/info page method = get")
                return res.end();
              });
        }
//---------------------------------------end of get method process for info
    }
//---------------------------------------End of info location process



}).listen(80);