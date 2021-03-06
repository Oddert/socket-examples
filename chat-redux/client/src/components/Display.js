import React from 'react'
import { connect } from 'react-redux'

import { addMessage } from '../actions'
import socket from '../sockets'

import './styles/Display.css'

class Display extends React.Component {
  componentDidMount () {
    socket.on('addMessage', payload => this.props.addMessage(payload))
  }

  render () {
    return (
      <div className='Display'>
        {this.props.messages.map((each, idx) =>
          <div
            className={
              each.status
                ? 'message-container status'
                : each.self
                  ? 'message-container self'
                  : 'message-container'
              }
            key={idx}
            >
            {each.status
              ? <div className='message status'>{each.message}</div>
              : <div className='message'>
                  <strong>{each.self ? 'Me' : each.user}</strong>: {each.message}
                </div>
              }
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  messages: state.messages
})

const mapDispatchToProps = dispatch => ({
  addMessage: payload => dispatch(addMessage(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Display)
