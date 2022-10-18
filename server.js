const http = require ('http') // include Node.js http module

const hostname = "localhost"
const port = 3000 

const server = http.createServer((req, res) => {
    res.statusCode = 200 //set the statusCode property to 200, to indicate a successful response
    res.setHeader ("content-type", "text/plain") //We set the Content-Type header:
    res.end("Hello, World") //close the response, adding the content as an argument to end():
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})


//const app = require ('./api/application')


//const express = require ("express")
//const core = require ("cors")

//const application = require ()

