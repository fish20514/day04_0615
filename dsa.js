const http = require('http');
const fs = require('fs');
const port = 3000;
const path = require('path');

const server = http.createServer();
server.on('request', async (req, res)=>{

})

server.listen(port, ()=>{
    console.log('listening port', port);
})

