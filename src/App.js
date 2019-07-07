import React from 'react';
import Die from './Die.js';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className='die'>
        <Die face='five' />
        <Die face='two' />
      </div>
      <h1 className='header'>what did you uh</h1>
    </div>
  );
}

export default App;
