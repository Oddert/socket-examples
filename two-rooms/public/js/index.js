
function addElem (target, textInput) {
  const node = document.createElement('DIV')
  const textNode = document.createTextNode(textInput)
  node.appendChild(textNode)
  document.getElementById(target).appendChild(node)
}

const chat = io('/chat')
const news = io('/news')

const other = io('/')

chat.on('newItem', payload => addElem('left', payload))
news.on('newItem', payload => addElem('right', payload))

other.on('newItem', payload => addElem('other', payload))
