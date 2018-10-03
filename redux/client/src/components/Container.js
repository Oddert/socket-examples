import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions'
import socket from '../sockets'
import Send from './Send'

class Container extends React.Component {
  componentDidMount () {
    socket.on('addItem', payload => {
      console.log(payload)
      this.props.addMessage(payload)
    })
  }

  render() {
    return (
      <div>
        <h2>Some Nonsence from the Server</h2>
        <Send />
        <ul>
          {this.props.messages.map((each, idx) =>
            <li key={idx}>{each}</li>
          )}
        </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Container)
