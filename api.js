const http = require('http');
http.createServer((req, resp) => {
    resp.writeHead(200, { 'content-Type': 'applicattion/json' });
    resp.write(JSON.stringify({
        name: 'avinay',
        email: 'abc@gmail.com',
        phone: '999'
    }))
    resp.end();
}).listen(9000);