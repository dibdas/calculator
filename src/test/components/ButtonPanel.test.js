import React from 'react';
import renderer from 'react-test-renderer';
import ButtonPanel from '../../components/ButtonPanel';

describe('ButtonPanel', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ButtonPanel name="2" clickHandler={test} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
