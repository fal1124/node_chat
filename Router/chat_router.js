const express = require('express')
const app = express()
const router = express.Router()

router.get('/chat',(req,res)=>{
    res.render('chat/chat')
})

module.exports = router