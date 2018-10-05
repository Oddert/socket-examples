console.log('########')

function addElem (newText) {
  const node = document.createElement('LI')
  const text = document.createTextNode(newText)
  node.appendChild(text)

  const elem = document.getElementById('root').appendChild(node)
}

addElem('Test Item')

const socket = io.connect()

socket.on('listItem', payload => addElem(payload))

function userAdd () {
  const newNumber = Math.floor(Math.random() * 30)
  console.log(`Going to send number: ${newNumber}`)
  socket.emit('userAdd', newNumber)
}
