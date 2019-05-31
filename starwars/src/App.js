import React, { Component } from 'react';
import StarWarsDisplay from './components/StarWarsDisplay';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMale, faFemale, faGenderless, faWeight } from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(faMale, faFemale, faGenderless, faWeight);

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextList: '',
      previousList: ''
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          starwarsChars: data.results,
          nextList: data.next,
          previousList: data.previous,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarWarsDisplay
          starWarsChars={this.state.starwarsChars}
          nextListUrl={this.state.nextList}
          previousListUrl={this.state.previousList}
          getCharacters={this.getCharacters}
        />
      </div>
    );
  }
}

export default App;
