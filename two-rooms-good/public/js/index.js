
function addElem (target, type, text) {
  const node = document.createElement(type.toUpperCase())
  const textNode = document.createTextNode(text)
  node.appendChild(textNode)
  document.getElementById(target).appendChild(node)
}

const socket = io()

socket.on('server-message', payload => addElem('server-status', 'div', payload))

// document.getElementById('')
