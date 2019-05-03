const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const WebSocket = require('ws');
const wss = new WebSocket.Server({
    server,
    path: '/chat'
});

app.use(express.urlencoded({extended:true}));
app.use(function(req, res, next) {
    next();
});

wss.on('connection', (socket) => {
    console.log('oh, hello.');
    socket.send(JSON.stringify(db));

    socket.on('message', (data)=> {
        // console.log(data);
        db.push(data);
        // socket.send(data);
        wss.clients.forEach((client) => {
            if(client.readyState === WebSocket.OPEN){
                client.send(JSON.stringify(data));
            }
        });
    });
});


// when get request comes in, sent back all the messages
const db = [
    'Welcome to the ChatApp',
    '🐈'
];
app.get('/api', (req, res) => {
    res.json(db);
});

// when post request comes in, add message to arry of messages
app.post('/api', (req, res) =>{
    console.log(req.body);
    db.push(req.body.message);
    res.json(db);
});

server.listen(3000, ()=> {console.log("Running on port 3000");});