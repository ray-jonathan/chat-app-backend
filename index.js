const express = require('express');
const app = express();

// when get request comes in, sent back all the messages
const db = [
    'Welcome to the ChatApp',
    '🐈',
    'Okay.'
];
app.get('/', (req, res) => {
    res.json(db);
});

// when post request comes in, add message to arry of messages

app.listen(3000, ()=> {console.log("Running on port 3000");});
