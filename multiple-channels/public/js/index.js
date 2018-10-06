
const socket = io()

var current_room = 'default'

function updateRoomDisplay (text) {
  current_room = text
  const node = document.getElementById('room-display')
  node.innerHTML = text
}

function changeRoom (room) {
  // console.log(room)
  socket.emit('join-room', room)
}

function addMessage (payload) {
  const node = document.createElement('DIV')
  const textNode = document.createTextNode(payload)
  node.appendChild(textNode)
  document.getElementById('display').prepend(node)
}

socket.on('joined-room', payload => updateRoomDisplay(payload))

socket.on('message', payload => addMessage (payload))

document.getElementById('send_message').onsubmit = function (e) {
  e.preventDefault()
  const node = document.getElementById('send_message_input')
  socket.emit('user-message', current_room, node.value)
  node.value = ''
}
