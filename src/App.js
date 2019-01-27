import React, { Component } from 'react';
import './App.css';
import Sound from 'react-sound';

const src1 = '/America1775.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={src1} className="App-logo" alt="logo" />
          <Sound
            url="the-two-sisters.m4a"
            playStatus={Sound.status.PLAYING}
            />
        </header>
      </div>
    );
  }
}

export default App;
