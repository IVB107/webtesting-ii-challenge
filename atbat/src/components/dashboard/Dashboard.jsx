import React from 'react';

const Dashboard = props => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Last Event: {props.last}</p>
      <div>
        <button onClick={() => props.handleEvent('Ball')}>Ball</button>
        <button onClick={() => props.handleEvent('Strike')}>Strike</button>
        <button onClick={() => props.handleEvent('Foul')}>Foul</button>
        <button onClick={() => props.handleEvent('Hit')}>Hit</button>
      </div>
    </div>
  )
}

export default Dashboard;