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
          handleBall={this.handleBall}
          handleStrike={this.handleStrike}
          handleFoul={this.handleFoul}
          handleHit={this.handleHit}
          />
      </div>
    );
  }
  
  handleBall = () => {
    const updated = { ...this.state };
    
    if (updated.balls === 3){
      this.setState({
        ...reset,
        last: 'Ball 4 (Walk)'
      })
    } else {
      this.setState({
        ...this.state,
        balls: updated.balls + 1,
        last: `Ball ${updated.balls + 1}`
      })
    }
  }
  
  handleStrike = () => {
    const updated = { ...this.state };
    
    if (updated.strikes === 2){
      this.setState({
        ...reset,
        last: 'Strike 3 (Strikeout)'
      })
    } else {
      this.setState({
        ...this.state,
        strikes: updated.strikes + 1,
        last: `Strike ${updated.strikes + 1}`
      })
    }
  }
  
  handleFoul = () => {
    
  }
  
  handleHit = () => {
    
  }
    
}

const reset = {
  balls: 0,
  strikes: 0
}

export default App;
  