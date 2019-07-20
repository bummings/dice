import React from 'react';
// import Game from './Game';
import Lotto from './Lotto';
// import RollDice from './RollDice';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className='die'>
        <Lotto title='game one' balls={4} />
        {/* <RollDice /> */}
      </div>
      {/* <h1 className='header'>what did you uh</h1> */}
    </div>
  );
}

export default App;
