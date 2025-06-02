var http=require('http');
var dt=require('./customModule');

http.createServer(function(req,res){
    // if the response from the HTTP server is supposed to be displayed as HTML you include a header.
    //200 means all OK , the second argument is an object containing the response
    
    res.writeHead(200,{"Content-type":'text/html'});
    res.write('<h1>This Program tells Date</h1>'+dt.myDate());
    res.end("Today's Date");
    
}).listen(8080);