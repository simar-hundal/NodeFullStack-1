

// We talking about a standalone server 
// IAC ? 

// To be able to liten on a praticular port requires a lot of efforts 
// Code we are making is containig the server with business logic 

//form java script API we can even build the infrastructure 

// JS inbuilt modules
// FS-> (  <html> html using ), Http, {Https} Events How File File 
// we will allow user to add some data to the for of the same html
// fs 
// http
//events ! we will create our events using EventEmitter 

// $.on('click', function (data){
//     alert(data)
// })
// getting there ref of events

const events = require('events')
const http = require('http')

// this events module has some classes from those we are only using event Emitter
// this allow you to create and subscibe the customs events as we saw earlier with request 
    // req.on("data", function(ch){
    //     body+=ch;
    // })

var em = new events.EventEmitter();

// subcribe the event

em.on('MyFirstEvent',function(data){
    console.log("Event Subscribed :" + data)
})

em.emit('MyFirstEvent','this is my emiiter')


http.createServer(function (req,res){

    if(req.method==="GET"){
        res.writeHead(200,{"Content-Type":"text/html"})
        console.log(req)
        req.on("data",function(data){
            console.warn(data)
        })
        // addListener

      //  fs.createReadStream("login.html","UTF-8").pipe(res);
    }
}).listen("9999");