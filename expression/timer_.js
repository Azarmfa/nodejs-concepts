// setInterval(function(){
//   console.log('setinterval');
// },2000);

// var timer = setInterval(()=>console.log('setinterval with arrow functions'),2000);


// clearInterval(timer);


setTimeout(()=>{
    console.log('settimeout executed')
},4000)

setImmediate(()=>console.log('immediately executed'));