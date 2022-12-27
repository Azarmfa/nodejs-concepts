const express = require('express');
const path = require('path');
const app = express();
var cars = require('./carlist/cars');

var cookieParser = require('cookie-parser');


var bikes = require('./bike');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use((req,res,next)=>{
    console.log('this is universal middleware');
    next();
});

app.use("/users",(req,res,next)=>{
    console.log('this is users middleware');
    next();
});
// app.use(bodyParser.)

app.use(cookieParser());

app.use("/asset",express.static('./assets'));

app.use('/cars-section',cars);

app.use('/bikes',bikes);

app.get('/',function(req,res){
    // res.json({
    //     username:'azar',
    //     Name:'Azarudeen',
    //     country:'India',
    //     State:'Tamil Nadu'
    // })

    res.sendFile(path.join(__dirname,'statichtml','homepage.html'));

    // res.send('This is home page using send')
})

app.get('/users',(req,res)=>{
    res.send('This is users page');
})

app.post('/create-user',(req,res)=>{
    console.log(req.body);
    res.status(200).send(
        `username created ${req.body.username}`
    );
});

app.get("*",function(req,res){
    res.send("No mataching path found");
})

app.listen(4000,()=>{
    console.log(`Server starts at http://localhost:4000`);
});