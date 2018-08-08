const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const { Movie } = require('./movie')

const port = 3000;

app.use((req,res,next) => {
    console.log(`${req.method} : ${req.url} : ${req.ip} : ${new Date()}`);
    next();
});

app.get('/',(req,res) => {
    res.send({
        msg : 'Welcome to movie express'
    })
});

app.get('/movies',(req,res) => {
    let movies = Movie.findAll();
    res.send(movies);
})


app.listen(port,() => {
    console.log('listening to port',port);
})
