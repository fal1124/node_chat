let socket = io();

let form = document.querySelector('#form') 
let input = document.querySelector('#input')
let messages = document.querySelector('#messages')

form.addEventListener('submit',function(e){
    e.preventDefault();
    if(input.value){
        socket.emit('chat message',input.value)
        input.value = ''    
    }
})

socket.on('chat message',function(msg){
    let item = document.createElement('li')
    item.textContent  = msg
    messages.appendChild(item)
    window.scrollTo(0,document.body.scrollHeight)
})