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
      calculate(state, buttonName);
    });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <ButtonPanel clickHandler={this.handleClick} />
        <Display total={total} next={next} operation={operation} />

      </>
    );
  }



}

export default App;
