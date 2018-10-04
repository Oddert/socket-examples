import React from 'react'
import { connect } from 'react-redux'
import { updateUsers } from '../actions'

import socket from '../sockets'

class UserList extends React.Component {
  componentDidMount () {
    socket.on('updateUsers', payload => this.props.updateUsers(payload))
  }

  render () {
    return (
      <div className='UserList'>
        <h3>Users</h3>
        {this.props.users.map(each => <div key={each}>{each}</div>)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  updateUsers: payload => dispatch(updateUsers(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
