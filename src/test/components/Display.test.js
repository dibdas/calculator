import React from 'react';
import renderer from 'react-test-renderer';
import Display from '../../components/Display';

describe('ButtonPanel', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Display />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});