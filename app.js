const http = require('http')

/* Verbos HTTP
GET -> Pegando recursos/dados do servidor
POST -> Ultilizamos p/ gravar recursos
*/

const server = http.createServer(function(req, res){
    if(req.url === "/data"&& req.method == "POST"){
        console.log("Caiu em Data")
        res.end("Tudo certo");
    }else if (req.url === "/cadastro" && req.method == "POST"){
        var body = "";
        req.on('data', function(data){
            body = body + data
        })
        //verifica se ja terminou
        req.on('end', function (){
            var received = JSON.parse(body)
            console.log(received)
            if (received.email === "lucas@gmail.com"){
                res.end("Email OK!!")
            } else{
                res.end("Verifique o Email!")
            }
        })
        //res.end("OK")
        return

    } else if (req.url === "/vergatos" && req.method == "GET"){
        res.end("Todos os gatos disponiveis")
    }else{
        res.end("Verifique o método")
    }
}) 

server.listen(3001, ()=>{
    console.log("server is running")
})