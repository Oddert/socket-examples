
function addElem (target, textInput) {
  const node = document.createElement('DIV')
  const textNode = document.createTextNode(textInput)
  node.appendChild(textNode)
  document.getElementById(target).appendChild(node)
}

const chat = io('/chat')
const news = io('/news')

const other = io('/')

chat.on('newItem', payload => {
  console.log(`chat inbound (ln 15) ${payload}`)
  addElem('left', payload)
})
news.on('newItem', payload => {
  console.log(`news inbound (ln 19) ${payload}`)
  addElem('right', payload)
})

other.on('newItem', payload => {
  console.log(`other inbound (ln 24) ${payload}`) 
  addElem('other', payload)
})
