const {createServer} = require('node:http');

const hostname = 'localhost';
const port = 8084;

const server = createServer((req, res) => {
    res.statusCode =200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
})

server.listen(port, hostname, ()=>{
    console.log('Server is listening at port', port);
})

