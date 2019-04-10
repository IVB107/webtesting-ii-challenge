import React from 'react';

const Dashboard = props => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p data-testid="last-event">{`Last Event: ${props.last}`}</p>
      <div>
        <button 
          data-testid="ball-btn" 
          onClick={props.handleBall}
          type="button"
        >Ball</button>
        &nbsp;
        <button 
          data-testid="strike-btn" 
          onClick={props.handleStrike}
          type="button"
        >Strike</button>
        &nbsp;
        <button 
          data-testid="foul-btn" 
          onClick={props.handleFoul}
          type="button"
        >Foul</button>
        &nbsp;
        <button 
          data-testid="hit-btn" 
          onClick={props.handleHit}
          type="button"
        >Hit</button>
      </div>
    </div>
  )
}

export default Dashboard;