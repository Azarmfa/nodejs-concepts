var express = require('express');

var router = express.Router();


router.all('/type',(request,response)=>{
    console.log('request type',request.method);
    // response.json({
    //     type1:'4 Stroke engine',
    //     type2:'2 Stroke engine'
    // })
    if(request.method == 'GET'){
        response.send('This is GET method');
    } else if(request.method == 'POST'){
        response.send('This is POST method');
    } else {
        response.send(`This is other method --- ${request.method}`);
    }

});


router.get('/spec',(request,response)=>{
    response.send('this is bike spec section')
});

module.exports = router;