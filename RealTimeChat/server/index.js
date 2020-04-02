const express = require('express')
const socketio = require('socket.io')
const http = require('http')
const cors = require('cors')

const {addUser, removeUser, getUser, getUserInRoom } = require('./users.js')
const PORT = process.env.PORT || 8000;


const router = require('./router')


// heroki pass ppfp/2-TDH@#5-y
const app = express();
app.use(cors())
const server = http.createServer(app);
const io = socketio(server);


io.on('connection', (socket)=> {
    console.log('New connection!!!')
    socket.on('join', ({name, room}, callback)=> {
          const {error, user} = addUser({id: socket.id, name , room})
          console.log(user)
          
          if(error){
              return callback(error)
          }
          socket.join(user.room)

          socket.emit('message', {user: 'admin', text:` ${user.name}, Bem vindo a Sala ${user.room}`})
          socket.broadcast.to(user.room).emit('message', {user: 'admin', text:`${user.name} entrou`})
          callback()
    })
    socket.on('sendMessage', (message, callback)=> {
        const user = getUser(socket.id)
        io.to(user.room).emit('message', {user: user.name , text: message})
        callback()
    })
    socket.on('disconnect', ()=>{
        const user = removeUser(socket.id);
    if(user) {
            io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
            io.to(user.room).emit('roomData', { room: user.room, users: getUserInRoom(user.room)});
          }
      
    })
} )

app.use(router)

server.listen(PORT ,() => console.log(`Server Running on ${PORT}`))