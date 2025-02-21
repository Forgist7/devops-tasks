const http = require('http');
const os = require('os');

const PORT = 8000;

const server = http.createServer((req, res) => {
    if (req.url === '/hostname' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(os.hostname());
    } else if (req.url === '/author' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(process.env.AUTHOR || 'Unknown');
    } else if (req.url === '/id' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(process.env.UUID || 'No UUID set');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
