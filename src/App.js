import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CheckBox from './component/CheckBox'

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="columns">
          <CheckBox />
          <CheckBox />
          <CheckBox />
        </div>
      </div>
      
    );
  }
}

export default App;
