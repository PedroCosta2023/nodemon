const http = require('http')

const fs = require('fs')

function readFile(response, file) {
    fs.readFile(file, function(err, data){
        console.log(err)
        //responde para o usuario com os dados do arquivo
        response.end(data)
    })
}

const server = http.createServer((req, resp) =>{
    if(req.url === "/cars") {
        readFile(resp, "cars.json")
    }
    
})

server.listen(3001, ()=>{
    console.log("Servidor Rodando")
})