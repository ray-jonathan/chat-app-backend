const express = require('express');
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



// when get request comes in, sent back all the messages
const db = [
    'Welcome to the ChatApp',
    '🐈',
    'Okay.'
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

app.listen(3000, ()=> {console.log("Running on port 3000");});
