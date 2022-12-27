var express = require('express');
var router = express.Router();


router.get('/',(req,res)=>{
   res.send("this is cars home page");
})

router.get('/list',(req,res)=>{
   res.json({
    car1:'BMW',
    car2:'Audi'
   })
});

module.exports = router;