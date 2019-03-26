const express = require('express')
const prettyjson = require('prettyjson')
const WebSocket = require('ws')
const app = express()
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });

const port = 3003

let socket = null;


app.use(require('body-parser').json())


app.post('/webhook*', (req, res) => {
    const event = req.body

    console.log("Received event", new Date())
    console.log(prettyjson.render(event))

    if (socket != null) {
        socket.send(JSON.stringify(event));
    }
    res.sendStatus(200)
})



wss.on('connection', (ws) => {
    console.log("webhook connection established")
    socket = ws
});

server.listen(port, () => console.log(`Listening on port ${port}!`))

