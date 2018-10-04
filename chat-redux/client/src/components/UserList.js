import React from 'react'
import { connect } from 'react-redux'

class UserList extends React.Component {
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

export default connect(mapStateToProps, null)(UserList)
