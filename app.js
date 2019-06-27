const http = require('http');
const url = require('url');

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    var parsed = url.parse(req.url, true);
    var query = parsed.query;
    if(query.name){
        res.end('<h1>Node app query '+query.name+'</h1>');
    } else {
        res.end('<h1>Node app </h1>');
    }
    console.log('Request processed');
});

server.listen(7999, 'localhost', () => {
    console.log('Server started');
});