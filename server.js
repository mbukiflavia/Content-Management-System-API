const http = require('http')
const app = require('./api/application')
const port = 3000 || process.env.port

const server = http.createServer(app)
server.listen(port)


