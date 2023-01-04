var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var sessions = require('express-session');
var mysql = require('mysql');
var port = 4000;

const secret = "sdfjlk2039482349";

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database : 'userdb'
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());

app.use(sessions({
    secret:secret,
    cookie:{maxAge:1000 * 60 * 60 }
}))

app.use(cors({credentials:true,origin: 'http://localhost:4200'}))


app.get('/userslist',(req,res)=>{
  res.json([{user:'azar'},{user:'sundar'},{user:'prabhu'}]);
})

// var users = [
//     {username:"azarmfa@gmail.com",password:"12345"},
//     {username:"prabhu@gmail.com",password:"12345"}
// ]

app.post('/login',(req,res)=>{
    // console.log(req.session);
    let uname = req.body.username;
    let pass = req.body.password;
    con.query(`SELECT * FROM userslist where user="${uname}" and pass="${pass}"`, function (err, result, fields) {
        if (err) throw err;
        console.log(fields);
        if(result.length>0){
        console.log('user found');
            req.session.username = uname;
            res.status(200).json({status:"success"})
         } else {
            console.log("no user available");
            res.status(200).json({status:"failure"})

         }
      });

    // res.send('test login');
    // let userSearch = users.filter(user=>user.username==uname && user.password==pass);
    // console.log('userSearch',userSearch);
    // if(userSearch.length>0){
    //     console.log('user found');
    //     req.session.username = uname;
    //     res.status(200).json({status:"success"})
    // } else {
    //     console.log("no user available");
    //     res.status(200).json({status:"failure"})

    // }
})


app.get('/validateUser',(req,res)=>{
    console.log('validate user sessions',req.session.username);
    if(req.session.username)
        res.status(200).json({status:"success"});
    else 
        res.status(200).json({status:"failure"});
})


app.listen(port, ()=>{
    console.log('Server started using port ',port);
})

