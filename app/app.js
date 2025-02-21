const http = require('http');
const os = require('os');

const hostname = os.hostname();
const port = 8000;

const requestListener = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    
    if (req.url === '/hostname') {
        res.writeHead(200);
        res.end(JSON.stringify({ hostname }));
    } else if (req.url === '/author') {
        res.writeHead(200);
        res.end(JSON.stringify({ author: process.env.AUTHOR || 'Unknown' }));
    } else if (req.url === '/id') {
        res.writeHead(200);
        res.end(JSON.stringify({ uuid: process.env.UUID || 'No UUID' }));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
};

const server = http.createServer(requestListener);

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
