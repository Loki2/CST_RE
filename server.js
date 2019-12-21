const http = require('http');
const app = require('./server/App')
//const PORT = process.env.PORT || 5000;


const server = http.createServer(app);
server.listen(process.env.APP_PORT)