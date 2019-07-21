import React from 'react';
// import Game from './Game';
import Lotto from './Lotto';
// import RollDice from './RollDice';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className='die'>
        <Lotto title='game one' balls={6} maxNum={30} />
      </div>
    </div>
  );
}

export default App;
