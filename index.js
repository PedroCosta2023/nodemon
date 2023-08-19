const http = require("http");

const myServer = http.createServer((req, res) =>{
    console.log(req.url)

    if (req.url === '/save'){
        res.end('<html><img src="https://img.freepik.com/vetores-gratis/elefante-bonito-sentado-e-acenando-a-mao-dos-desenhos-animados-icone-ilustracao-vetorial_138676-2220.jpg?size=626&ext=jpg&ga=GA1.2.968274654.1686006512&semt=sph" alt=""></html>')
    } 
    else if (req.url === '/delete') {
        res.end(`
        <html>
        <button>Click!</button>
        </html>
        `)
    } else if (req.url === '/prducts') {
        res.end("<h1>Mostrando Produtos</h1>")
        console.log("produtos")
    }else{
        console.log("Url desconhecida")
    }

})
myServer.listen(3001, ()=>{
    console.log('server is running');
})
