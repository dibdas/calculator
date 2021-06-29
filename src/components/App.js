import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculate from '../logic/calculate';

function App() {
  return (
    <div>
      <ButtonPanel />
      <Display />
      <Calculate />

    </div>
  );
}

export default App;
