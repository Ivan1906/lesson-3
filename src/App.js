import React, { Component } from 'react';
import './App.css';
import DBpost from './data.json';

class App extends Component {

  constructor() {
    super();
    this.state = {count: 10, db: DBpost};
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
