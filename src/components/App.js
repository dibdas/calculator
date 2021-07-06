import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: ' ',
      next: ' ',
      operation: ' ',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState((state) => {
      Calculate(state, buttonName);
    });
  }

  render() {
    return(
    <>
      <ButtonPanel />
      <Display />

    </> ;
    )
  }
}

export default App;
