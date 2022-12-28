var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var multer = require('multer');
var formData = multer();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(formData.array());
var cars = require('./cars');
var port = process.env.port || "9000";

app.use(express.static(path.join(__dirname,"assets")));
app.use((req,res,next)=>{
    console.log('middleware');
    next();
});
app.get('/',function(req,res){
    console.log('hit');
    // res.send('hello home page');
    res.sendFile(path.join(__dirname,"/index.html"));
});

app.use('/cars',cars);

app.get('/hello',function(req,res){
    console.log('hello path');
    res.send('this is hello path');
});

app.post('/hello',function(req,res){
    console.log('hello post',req.body.username);
    res.status(300).json({username:req.body.username})
})

app.listen(port,()=>{
    console.log('application created with port 9000');
});