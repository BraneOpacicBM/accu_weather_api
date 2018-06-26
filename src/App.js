import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import MainArea from './components/MainArea/MainArea';
import './App.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <MainArea />
      </div>
    );
  }
}

export default App;
