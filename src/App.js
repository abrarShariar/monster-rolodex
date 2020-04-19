import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({ monsters: users }))
  }

  setSearchField ({ target }) {
    this.setState({
      searchField: target.value
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(el => el.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <SearchBox placeholder="search monsters" handleChange={(e) => this.setSearchField(e)}/>
        <br/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
