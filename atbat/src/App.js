import React, { Component } from 'react';

import './App.css';
import Display from './components/display/Display';
import Dashboard from './components/dashboard/Dashboard';

class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
    last: 'N/A'
  }

  render() {
    return (
      <div className="App">
        <Display atbat={this.state}/>
        <Dashboard 
          last={this.state.last}
          handleEvent={(event) => this.handleEvent(event)}
        />
      </div>
    );
  }

  handleEvent = event => {
    console.log('Event: ', event);

  }

}

export default App;
