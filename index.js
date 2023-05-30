import http from 'http'

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Hello World!');
    response.end();
}).listen(4000, () => {
    console.log('Kører på http://localhost:4000/');
})
