import React from 'react';

const Display = props => {
  return (
    <div>
      <h2>Display</h2>
      <div>
        <h3>Balls</h3>
        <p>{props.atbat.balls}</p>
      </div>
      <div>
        <h3>Strikes</h3>  
        <p>{props.atbat.strikes}</p>
      </div>
    </div>
  )
}

export default Display;