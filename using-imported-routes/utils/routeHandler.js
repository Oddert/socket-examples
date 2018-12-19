const routeHandler = socket => {
  console.log(`User ${socket.client.id} has connected`)

  socket.on('user-message', payload => {
    console.log(`Recieving: ${payload} from the client`)
    setTimeout(() => {
      socket.emit('server-message', payload.toString().split('').reverse().join(''))
    }, 3000)
  })
}

module.exports = routeHandler
