require("dotenv").config();
const http = require('http');
const app = require('./server/App')
//const PORT = process.env.PORT || 5000;


const server = http.createServer(app);
server.listen(process.env.APP_PORT, () => {
    console.log('Server is starting on Port: ' + process.env.APP_PORT);
})