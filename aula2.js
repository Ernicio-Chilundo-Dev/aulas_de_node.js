const http = require('http')
http.createServer((requist,response)=>{
    response.writeHead(200,{
        'content-Type':'text/plain'
    })
    response.write("Cfbcursos\n curso de node.js")
    response.end()
}).listen(1337)