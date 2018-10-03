import React from 'react';
import './App.css';
import Container from './components/Container'

import { Provider } from 'react-redux'
import store from './constants/store'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Container />
        </Provider>
      </div>
    )
  }
}

export default App;
