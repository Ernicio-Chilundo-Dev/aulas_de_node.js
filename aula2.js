const http = require('http');
http.createServer((requist, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    response.write("CFBcurso\n Aula de node.js")
    response.end()
}).listen(1337);