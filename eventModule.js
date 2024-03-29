const event=require('events')
const eventemitter=new event.EventEmitter()

eventemitter.on('hello',(name)=>{
     console.log('print hello   '+ name);
})
eventemitter.on('hello',(name,num)=>{
     console.log('print hello   '+ name +'===>'+num);
})

eventemitter.emit('hello',123)
// eventemitter.removeAllListeners('hello')
eventemitter.emit('hello','xyz')
eventemitter.emit('hello','abcd', 100)
eventemitter.once('onceevent',()=>{
     console.log('ek baar call hogi');
})

eventemitter.emit('onceevent')
eventemitter.emit('onceevent')
eventemitter.emit('onceevent')

eventemitter.emit('hello')

function mufun(){
     console.log('this is my first function');
}
function myfun(){
     console.log('this is my second function');
}
eventemitter.on('myEvent',mufun)
eventemitter.emit('myEvent')

eventemitter.on('myEvent',myfun)
eventemitter.emit('myEvent')