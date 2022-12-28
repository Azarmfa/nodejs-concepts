var express = require('express');
var router = express.Router();
var path = require('path');
router.get('/',(request,response)=>{
    console.log(request.params);
    response.send(request.url);
})


router.get('/type/:id([0-9a-zA-Z]+)',(req,res)=>{
    // console.log('req',req.query.id);

    res.send(req.params.id);
})

router.get("*",(req,res)=>{
    console.log('no routes matching');
    res.sendFile(path.join(__dirname,"error.html"));
})

module.exports = router;
