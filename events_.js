var events = require('events');

var ev = new events.EventEmitter();

ev.on('sound',()=>{
    console.log('sound heard');
})

ev.on('bark',()=>{
    console.log('dog barking');
});

setTimeout(() => {
    ev.emit('bark');
}, 4000);


ev.emit('sound');