const socket = io()

const room = 'the-good-place'

socket.on('connect', () => {
  socket.emit('join-room', room)
})

socket.on('message', payload => console.log('Incomming message: ', payload))
