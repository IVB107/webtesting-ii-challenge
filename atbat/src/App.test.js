import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, cleanup, getByText } from 'react-testing-library';
import 'jest-dom/extend-expect'; 

import Display from './components/display/Display';
import Dashboard from './components/dashboard/Dashboard';
import App from './App';

afterEach(cleanup);

describe('Display', () => {
  it('Should display the correct count', () => {

    const { getByTestId, rerender } = render(<Display atbat={{balls: 0, strikes: 0}} />);

    expect(getByTestId('ball-count').textContent).toBe('Balls: 0');
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 0');

    rerender(<Display atbat={{balls: 2, strikes: 3}} />);

    expect(getByTestId('ball-count').textContent).toBe('Balls: 2');
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 3');

    rerender(<Display atbat={{balls: 1, strikes: 1}} />);

    expect(getByTestId('ball-count').textContent).toBe('Balls: 1');
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 1');

  });
})

describe('Dashboard', () => {
  const appTree = (
    <App >
      <Display />
      <Dashboard />
    </App>
  )
  
  it('Should reset balls to 0 after reaching 3', () => {
      
    const { getByTestId } = render(appTree);
    const ballBtn = getByTestId('ball-btn');
    
    expect(getByTestId('ball-count').textContent).toBe('Balls: 0');
    fireEvent.click(ballBtn);
    expect(getByTestId('ball-count').textContent).toBe('Balls: 1');
    fireEvent.click(ballBtn);
    expect(getByTestId('ball-count').textContent).toBe('Balls: 2');
    fireEvent.click(ballBtn);
    expect(getByTestId('ball-count').textContent).toBe('Balls: 3');
    fireEvent.click(ballBtn);
    expect(getByTestId('ball-count').textContent).toBe('Balls: 0');
  });
    
  it('Should reset strikes to 0 after reaching 2', () => {

    const { getByTestId } = render(appTree);
    const strikeBtn = getByTestId('strike-btn');
  
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 0');
    fireEvent.click(strikeBtn);
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 1');
    fireEvent.click(strikeBtn);
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 2');
    fireEvent.click(strikeBtn);
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 0');
  });

  it('Should increment strikes (but stop at 2) for each foul ball', () => {
    
    const { getByTestId } = render(appTree);
    const foulBtn = getByTestId('foul-btn');

    expect(getByTestId('strike-count').textContent).toBe('Strikes: 0');
    fireEvent.click(foulBtn);
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 1');
    fireEvent.click(foulBtn);
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 2');
    fireEvent.click(foulBtn);
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 2');

  })

  it('Should clear the count after a hit', () => {
    const { getByTestId } = render(appTree);
    const hitBtn = getByTestId('hit-btn');
    const lastEvent = getByTestId('last-event');

    fireEvent.click(hitBtn);
    expect(getByTestId('strike-count').textContent).toBe('Strikes: 0');
    expect(getByTestId('ball-count').textContent).toBe('Balls: 0');
    expect(lastEvent.textContent).toBe('Last Event: Hit!');

  })

})