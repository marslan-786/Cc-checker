const http = require('http');

// Railway automatically assigns a port
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Extension Host Server is Running! (This is just a dummy server)');
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
