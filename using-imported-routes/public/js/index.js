
const socket = io ()

const ping = document.querySelector('.ping')

ping.onclick = e => {
  console.log(e)
  const seed = Math.round(Math.random()*1000)
  console.log(`Going to send seed ${seed} to the server...`)
  socket.emit('user-message', seed)
}

socket.on('server-message', payload => {
  console.log(`Client recieving ${payload} from server`)
})
