const http = require('http');

function datacontrol(req, resp)

{
    resp.write("<h1>hello bro</h1>");
    resp.end();
}
http.createServer(datacontrol).listen();
 