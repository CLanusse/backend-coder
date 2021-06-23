
const formMensajes = document.querySelector('#form-mensajes')
const msgContainer = document.querySelector('#messages')

const text = document.querySelector('#texto')
const user = document.querySelector('#username')
const btnEnviar = document.querySelector('#enviar')

text.addEventListener('input', ()=>{
    btnEnviar.disabled = !text.value.trim()
})
user.addEventListener('input', ()=>{
    text.disabled = !user.value.trim()
})


formMensajes.addEventListener('submit', (e)=> {
    e.preventDefault()

    socket.emit('new-mensaje', {
        user: user.value.trim(),
        text: text.value.trim()
    })

    text.value = ''
    text.focus()

})

socket.on('actualizar-mensajes', (mensajes) => {
    msgContainer.innerHTML = ''

    mensajes.forEach( msg => {
        msgContainer.innerHTML += `
            <div><p><span class="user">${msg.user}: </span><span class="fyh">${msg.fyh} - </span><span class="text">${msg.text}.</span></p></div>
        `
    })
})