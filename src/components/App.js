import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props)
  super(props)
  this.state = {
    total:" ",
    next: " ",
    operation: " "
  };
    <>
      <ButtonPanel />
      <Display />
      <Calculate />

    </>
  );
}

export default App;
