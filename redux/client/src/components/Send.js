import React from 'react'
import socket from '../sockets'

class Send extends React.Component {
  handleSubmit (e) {
    e.preventDefault()
    socket.emit('userAdd', this.input.value)
    this.input.value = ''
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type='text' ref={e => this.input = e} />
        <button>Add an item</button>
      </form>
    )
  }
}

export default Send
