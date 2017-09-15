import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      district: '',
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

  handleDistrictChange(e) {
    this.setState({
      district: e.target.value,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Construction Projects funded by 2016 Mobility Bond</h2>
        </div>
        <label htmlFor="district">Council District</label>
        <select name="district" id="" value={this.state.district}
          onChange={(e) => this.handleDistrictChange(e)}
        >
          <option value="">Select a District</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <p className="App-intro">
          {JSON.stringify(this.state.data)}
        </p>
      </div>
    );
  }
}

export default App;
