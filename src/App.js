import React, { Component } from 'react';
import './App.css';

import AppButton from './components/AppButton';
import AppUl from './components/AppUl';
import DBpost from './data.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      textButton: 'Добавити 10 записів',
      allCount: DBpost.length,
      count: 10, 
      db: DBpost.slice(0, 10)
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { allCount, count } = this.state
    if (count <= allCount) {
      console.log("before = " + count);
      this.setState({count: count + 10});
      console.log("after = " + count);
      this.setState({db: DBpost.slice(0, count)});
      console.log(this.state.db);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <AppUl items={this.state.db} />
        <AppButton onClick={this.onClick} />
      </div>
    );
  }
}

export default App;