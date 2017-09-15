import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      district: '',
      dataSubset: '',
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
    const newSubset = this.state.data
      .filter((item) => {
        return item.district_id && item.district_id.includes(e.target.value)
      })
      .sort((a, b) => Number(b.budget) - Number(a.budget));

    this.setState({
      district: e.target.value,
      dataSubset: newSubset,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Construction Projects funded by 2016 Mobility Bond</h2>
        </div>

        <h2>
          <label htmlFor="district" style={{ marginRight: "10px" }}>
            Council District
          </label>
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
        </h2>

        <div className="App-intro">
          {this.state.dataSubset && this.state.dataSubset.map((item) => {
            return (
              <div key={item.project_id}>
                <h4>{item.project_name}</h4>
                <img src={item.project_image} alt="project" style={{ maxWidth: '200px' }}/>
                <p>{Number(item.budget).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
