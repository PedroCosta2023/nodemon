const http = require('http');

const fs = require("fs")

function lerArquivo(response, file){
    fs.readFile(file, function(err, data){
        console.log(err)
        response.end(data)
    })
}

const server = http.createServer((req, response) =>{

    if(req.url === "/cat"){
        lerArquivo(response, 'petGato.json')
    } else if(req.url === "/dog"){
        lerArquivo(response,"petDog.json")
    } else if(req.url === "/passaros"){
        lerArquivo(response, "pet-passaros.json")
    } else if(req.url === "/cavalos"){
        lerArquivo(response, "pet-cavalo.json")
    } else{
        response.end(`
        <html>
        <h1>404 page not found</h1> <br>
        <h2>Click para se redirecionar para nossos conteúdos </h2>
    
        <a href="http://localhost:3001/cat"></a>
        <a href="http://localhost:3001/dog"></a>
        <a href="http://localhost:3001/passaros"></a>
        <a href="http://localhost:3001/cavalos"></a>
        </html>
        `)
    }
})

server.listen(6001, ()=>{
    console.log("Servidor rodando na porta 3001")
});