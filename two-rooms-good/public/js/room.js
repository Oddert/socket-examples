
function addElem (target, type, text) {
  const node = document.createElement(type.toUpperCase())
  const textNode = document.createTextNode(text)
  node.appendChild(textNode)
  document.getElementById(target).appendChild(node)
}

const socket = io()

socket.on('server-message', payload => console.log(payload))

socket.emit('join-room', document.getElementById('room').textContent)

// document.getElementById('')
