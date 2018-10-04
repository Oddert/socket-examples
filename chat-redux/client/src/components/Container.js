import React from 'react'

import Display from './Display'
import Input from './Input'
import UserList from './UserList'

import './styles/Container.css'

class Container extends React.Component {
  render () {
    return (
      <div>
        <div className='display-flex'>
          <UserList />
          <Display />
          <Input />
        </div>
      </div>
    )
  }
}

export default Container
