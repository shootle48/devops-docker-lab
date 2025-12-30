const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({
        message: 'Hello from Node.js Backend!',
        timestamp: new Date(),
        databaseStatus: 'Connecting to MongoDB'
    }))
})

server.listen(3002, ()=>{
    console.log('Backend runing on port 3002!')
})