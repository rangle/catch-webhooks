#!/usr/bin/env node

const express = require('express')
const prettyjson = require('prettyjson')
const WebSocket = require('ws')
const ngrok = require('ngrok')
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

app.use(express.static('frontend/build'))

wss.on('connection', (ws) => {
    console.log("webhook connection established")
    socket = ws
});

server.listen(port, () => console.log(`Listening on port ${port}!`));



(async () => {
    try {
        const url = await ngrok.connect({
            proto: 'http',
            addr: port
        });
        console.log(`\nThe webhook catcher is live!\n`)
        console.log(`    local URL:  http://localhost:${port}`)
        console.log(`    public URL:`, url)
        console.log(`\n    Use the public URL above to configure with the 3rd party service that's generating the webhooks\n`)
    } catch (e) {
        console.log(e)
    }
})()
