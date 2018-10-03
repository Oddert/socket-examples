import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux'
import store from './constants/store'

import Container from './components/Container'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Container />
        </Provider>
      </div>
    );
  }
}

export default App;
