const http = require('http');

const server = http.createServer((req, res) =>{
    if(req.url == '/'){
        res.write("this is Home Page");
        res.end();
    }else if(req.url == '/resume'){
        res.write("this is Resume Page");
        res.end();
    }else if(req.url == '/about'){
        res.write("this is About Page");
        res.end();
    }else{
        res.write("404");
        res.end();
    }
});

server.listen(5000);
console.log("Server Running.....");