import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CheckBox from './component/CheckBox'
import TabBar from './container/TabBar'

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <TabBar />
      </div>
      
    );
  }
}

export default App;
