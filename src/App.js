import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  getSocrataData() {
    axios.get('https://data.austintexas.gov/resource/c4e7-xwf6.json')
      .then((res) => {
        console.log(res)
        this.setState({
          data: res.data,
        })
      })
      .catch(error => {
        console.log(error.response);
      });
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
          {JSON.stringify(this.state.data)}
        </p>
      </div>
    );
  }
}

export default App;
