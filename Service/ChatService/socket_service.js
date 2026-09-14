const express = require('express')
const {createServer} = require('node:http')
const {Server} = require('socket.io')

module.exports = function(app){
    const server = createServer(app)
    const io = new Server(server)
    io.on('connection',(socket)=>{
      console.log('a user connected')
      socket.on('chat message',(msg)=>{
        console.log(msg)
        io.emit('chat message',msg)
      })
      socket.on('disconnect',()=>{
        console.log('user disconnected')
      })
   })
    return server
}