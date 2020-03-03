const http = require('http');
const server = http.createServer(() => {
    console.log("Incoming Request");
});
server.listen(3000);