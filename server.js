'use strict';

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
    console.log(request.method, request.url);
    if (request.url === '/dist/css/main.css') {
        const css = fs.readFileSync('dist/css/main.css', 'utf-8');
        response.end(css);
    }
    const html = fs.readFileSync('app/index.html', 'utf-8');
    response.end(html);
});

console.log('port = ', process.env.PORT);

server.listen(process.env.PORT || 3000);
console.log('Server started!');

