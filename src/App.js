import React from 'react';
import Game from './Game';
// import RollDice from './RollDice';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className='die'>
        {/* <RollDice /> */}
        <Game name='faux' />
      </div>
      {/* <h1 className='header'>what did you uh</h1> */}
    </div>
  );
}

export default App;
