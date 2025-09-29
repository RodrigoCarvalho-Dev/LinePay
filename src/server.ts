import http, { Server } from "http";

const server : Server = http.createServer( ( req, res ) => {

    res.writeHead(200, {"content-type" : "text/plain"});
    res.end("hello, world!");

});

server.listen( 3000, () => {
    console.log("running opn the port http://localhost:3000");
})
