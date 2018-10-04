import React from 'react'

import socket from '../sockets'

import './styles/Input.css'

class Input extends React.Component {
  render () {
    return (
      <div className='Input'>
        <form onSubmit={e => {
          e.preventDefault()
          socket.emit('newMessage', this.input.value)
          this.input.value = ''
        }}>
          <input type='text' name='message' ref={e => this.input = e} />
          <button>Send</button>
        </form>
      </div>
    )
  }
}

export default Input
