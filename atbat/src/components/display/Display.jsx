import React from 'react';

const Display = ({ atbat }) => {
  return (
    <div>
      <h2>Display</h2>
      <div>
        <h3 data-testid="ball-count">{`Balls: ${atbat.balls}`}</h3>
        {/* <p>{props.atbat.balls}</p> */}
      </div>
      <div>
        <h3 data-testid="strike-count">{`Strikes: ${atbat.strikes}`}</h3>  
        {/* <p>{props.atbat.strikes}</p> */}
      </div>
    </div>
  )
}

export default Display;