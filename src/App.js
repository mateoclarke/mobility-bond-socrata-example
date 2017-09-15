import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

class App extends Component {

  getSocrataData() {
    axios.get('https://data.austintexas.gov/resource/c4e7-xwf6.json')
      .then((res) => console.log(res));
  }

  componentWillMount() {
    this.getSocrataData();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Construction Projects funded by 2016 Mobility Bond</h2>
        </div>
        <p className="App-intro">
          hi data.
        </p>
      </div>
    );
  }
}

export default App;
