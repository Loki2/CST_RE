'use strict'

const express = require('express')
const bodyParser = require('body-parser')

// Create a new instance of express
const app = express()

// Tell express to use the body-parser middleware and to not parse extended bodies
app.use(bodyParser.urlencoded({ extended: false }))

// Route that receives a POST request to /sms
function post(req, res, next) {
    const body = req.body.body;
    if (req.method === "POST") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
        res.send('Your are sending post request...!');
    } else if (req.method === "POST") {
    
        const body = "";
        req.on("data", function (chunk) {
            body += chunk.toString();
        });

        req.on("end", function(){
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(body);
        });
    }
		next();
}


function put(req, res, next) {
if (req.method === "PUT") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
    } else if (req.method === "PUT") {
    
        const body = "";
        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function(){
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(body);
        });
    }
}

function get(req, res, next) {
    if (req.method === "GET") {
        // res.writeHead(200, { "Content-Type": "text/html" });
        // fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
        res.send('Your are sending get request...!');
    } else if (req.method === "GET") {
    
        const body = "";
        req.on("data", function (chunk) {
            body += chunk.toSTring();
        });

        req.on("end", function(){
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(body);
        });
    }
}

function patch(req, res, next) {
    if (req.method === "PATCH") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
    } else if (req.method === "PATCH") {
    
        const body = "";
        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function(){
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(body);
        });
    }
}


function del(req, res, next){
    if (req.method === "DELETE") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
    } else if (req.method === "DELETE") {
    
        const body = "";
        req.on("data", function (chunk) {
            body += chunk;
        });

        req.on("end", function(){
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(body);
        });
    }
}

async function getRoleAccess(req, res, next) {
		try {
			let role_id = req.body.role_id
		} catch (error) {
			
		}
}

module.exports = {
    post,
    get,
    put,
    del,
		patch,
		
		getRoleAccess
};