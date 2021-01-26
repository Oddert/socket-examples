import React from 'react';
import './App.css';
import openSocket from 'socket.io-client'

const socket = openSocket()

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    console.log('Going to connect to the socket...')
    socket.on('newItem', payload => {
      console.log(payload)
      let items = [...this.state.items]
      items.push(payload)
      this.setState({ items })
    })
  }

  handleClick () {
    console.log('Dispatching an item...')
    socket.emit('userAdd', Math.floor(Math.random() * 100))
    console.log('Finished')
  }

  render() {
    return (
      <div className="App">
        <header>
          <button onClick={this.handleClick}>Add item</button>
        </header>
        <div>
          <ul>
            {this.state.items.map((each, idx) =>
              <li key={idx}>{each}</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
