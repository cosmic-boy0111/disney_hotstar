const dotenv = require('dotenv')
const mongoose = require('mongoose')
var cors = require('cors')


const express = require('express')
const cookieParser = require('cookie-parser')
const app = express();

app.use(cors())


const server = require('http').createServer(app);

const io = require('socket.io')(server,{
    cors: {
        origin:'*'
        // origin: "https://example.com",
        // methods: ["GET", "POST"],
        // allowedHeaders: ["my-custom-header"],
        // credentials: true
    }
})

io.on('connection',(socket)=>{
    // console.log('socket', socket);
    console.log('socket is active');

    socket.on('message',(payload)=>{
        // console.log('payload', payload);
        io.emit('message',payload);
        // io.sockets.in(email).emit('message',{message})
    })
})







dotenv.config({path:'./config.env'});
const myParser = require('body-parser')

require('./db/conn');

// app.use(express.json());
app.use(myParser.json({limit: '200mb'}));
app.use(myParser.urlencoded({limit: '200mb', extended: true}));
app.use(myParser.text({ limit: '200mb' }));

app.use(cookieParser());

app.use(require('./router/auth'));

const User = require('./model/userSchema')
const PORT = process.env.PORT;



// app.listen(PORT, ()=>{
//     console.log(`server is running at port no ${PORT}`);
// })
server.listen(PORT, ()=>{
    console.log(`server is running at port no ${PORT}`);
})