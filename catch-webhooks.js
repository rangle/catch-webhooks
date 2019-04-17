#!/usr/bin/env node

const express = require('express')
const prettyjson = require('prettyjson')
const WebSocket = require('ws')
const ngrok = require('ngrok')
const app = express()
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });
const STATIC_DIR = __dirname + '/frontend/build'


// Set the port
let port = 3003
if (process.argv.length > 2) {
    port = parseInt(process.argv[2])
}



let url = {
    url : null
};

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

app.use(express.static(STATIC_DIR));

app.get('/url', (_, res) => {
    res.send({url: url.url})
})


wss.on('connection', (ws) => {
    console.log("websocket connection established")
    socket = ws
});

server.listen(port, () => console.log(`Listening on port ${port}!`));



(async () => {
    try {
        url.url = await ngrok.connect({
            proto: 'http',
            addr: port
        });
        console.log(`\n`)
        console.log('\n  -=-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.=-')
        console.log(`\n      The webhook catcher is live!\n`)
        console.log(`\n     - Send webhooks here:  ${url.url}/webhook`)
        console.log(`     - View them here:      ${url.url}/`)
        console.log(`\n\t   :D `)
        console.log('\n  -=-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.-._.=-')
        console.log(`\n`)
    } catch (e) {
        console.log(e)
    }
})()
