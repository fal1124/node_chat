const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 8000
const chatRouter = require('./Router/chat_router')
const SocketService = require('./Service/ChatService/socket_service')
const server = SocketService(app)

app.set('views',path.join(process.cwd(),'views'))
app.use('/node_modules',express.static(path.join(process.cwd(),'node_modules')))
app.use(express.static(path.join(process.cwd(),'public')))

app.set('view engine','pug')
app.use('/',chatRouter)

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})


