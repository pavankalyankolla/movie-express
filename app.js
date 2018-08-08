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
});

app.get('/movies/:id',(req,res) => {
    let movie = Movie.findOne(req.params.id);
    if(movie) {
        res.send(movie);
    } else{
        res.send({
            msg : `movie with ${req.params.id} is not found`
        });
    }
});

app.post('/movies',(req,res) => {
    let movie = new Movie(req.body);
    movie.save()
   if(movie) {
        res.send ((movie, { msg : 'new movie created'}));
   } 
});

app.put('/movies/:id',(req,res) => {
    let movie = Movie.findOneAndUpdate(req.params.id,req.body);
    if(movie) {
        res.send(movie);
    } else{
        res.send({
            notice : 'movie record not found'
        })
    }
});

app.delete('/movies/:id',(req,res) => {
    let index = Movie.findOneAndRemove(req.params.id);
    if(index < 0){
        res.send({
            notice : 'movie not found'
        })
    } 
    res.send({
        notice : 'sucessfully'
    })
})



app.listen(port,() => {
    console.log('listening to port',port);
})
