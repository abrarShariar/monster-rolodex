import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      monsters: []
    }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters } = this.state;
    return (
      <div className="App">
        {
          monsters.map(el => <h1 key={el.id}>{el.name}</h1>)
        }
      </div>
    );
  }
}

export default App;
