import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const src1 = '/America1775.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={src1} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
